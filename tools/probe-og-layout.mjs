/**
 * Layout probe: opens tools/og-card.html at exactly 1200x630 via the
 * headless Chrome DevTools Protocol and prints geometry of key elements,
 * plus a scroll-overflow check on the body. Used to verify the OG card
 * fits without clipping before rendering the final PNG.
 *
 *   node tools/probe-og-layout.mjs
 */
import { execFileSync, spawn } from 'node:child_process';
import { existsSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
].filter(Boolean);

const chrome = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!chrome) {
  console.error('Chrome not found. Set CHROME_PATH and retry.');
  process.exit(1);
}

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pageUrl = pathToFileURL(join(root, 'tools', 'og-card.html')).href;
const profileDir = join(tmpdir(), 'og-probe-profile');

// Fresh profile so an already-running Chrome can't hijack the invocation.
rmSync(profileDir, { recursive: true, force: true });

const proc = spawn(
  chrome,
  [
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--hide-scrollbars',
    '--remote-debugging-port=0',
    `--user-data-dir=${profileDir}`,
    'about:blank',
  ],
  { stdio: ['ignore', 'ignore', 'pipe'], windowsHide: true },
);

const kill = () => {
  try { proc.kill(); } catch { /* already gone */ }
};
process.on('exit', kill);

let stderr = '';
proc.stderr.on('data', (d) => { stderr += d; });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Chrome announces the ephemeral debug port on stderr.
async function devtoolsPort() {
  for (let i = 0; i < 100; i++) {
    const m = stderr.match(/DevTools listening on ws:\/\/([\d.]+):(\d+)\//);
    if (m) return Number(m[2]);
    await sleep(100);
  }
  throw new Error('DevTools endpoint never appeared on stderr');
}

let ws;
try {
  const port = await devtoolsPort();
  const versionBase = `http://127.0.0.1:${port}`;

  let version = null;
  for (let i = 0; i < 50; i++) {
    try {
      version = await (await fetch(`${versionBase}/json/version`)).json();
      break;
    } catch { await sleep(150); }
  }
  if (!version) throw new Error('/json/version never responded');

  // PUT: newer Chrome rejects GET on /json/new.
  const target = await (
    await fetch(`${versionBase}/json/new?${encodeURIComponent(pageUrl)}`, { method: 'PUT' })
  ).json();

  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = () => reject(new Error('DevTools WebSocket failed'));
  });

  let nextId = 1;
  const pending = new Map();
  const events = [];
  ws.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
    } else if (msg.method) {
      events.push(msg);
    }
  };
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const id = nextId++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });
  const waitEvent = (method) =>
    new Promise((resolve) => {
      const seen = events.find((m) => m.method === method);
      if (seen) return resolve(seen);
      const timer = setInterval(() => {
        const idx = events.findIndex((m) => m.method === method);
        if (idx !== -1) { clearInterval(timer); resolve(events.splice(idx, 1)[0]); }
      }, 50);
    });

  await send('Page.enable');
  const loaded = waitEvent('Page.loadEventFired');
  await send('Page.navigate', { url: pageUrl });
  await loaded;

  // Fonts arrive over the network on a file:// page; await full settle, then check.
  let fontsLoaded = false;
  for (let i = 0; i < 40; i++) {
    const r = await send('Runtime.evaluate', {
      expression: `document.fonts.ready.then(() =>
        document.fonts.check('700 70px Inter') &&
        document.fonts.check("400 16px 'JetBrains Mono'")
      )`,
      awaitPromise: true,
      returnByValue: true,
    });
    if (r.result.value === true) { fontsLoaded = true; break; }
    await sleep(250);
  }
  if (!fontsLoaded) {
    const diag = await send('Runtime.evaluate', {
      expression: `JSON.stringify({
        onLine: navigator.onLine,
        fontsStatus: document.fonts.status,
        inter: document.fonts.check('700 70px Inter'),
        jet: document.fonts.check("400 16px 'JetBrains Mono'"),
        sheets: [...document.styleSheets].map((s) => (s.href || 'inline').slice(0, 90)),
      })`,
      returnByValue: true,
    });
    console.error('Font diagnostics:', diag.result.value);
  }

  const evalRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const q = (s) => document.querySelector(s);
      const rect = (el) => {
        const r = el.getBoundingClientRect();
        return { left: +r.left.toFixed(1), top: +r.top.toFixed(1), right: +r.right.toFixed(1), bottom: +r.bottom.toFixed(1), width: +r.width.toFixed(1), height: +r.height.toFixed(1) };
      };
      const m = {
        scrollWidth: document.documentElement.scrollWidth,
        scrollHeight: document.documentElement.scrollHeight,
        h1FontSize: getComputedStyle(q('h1')).fontSize,
        h1FontFamily: getComputedStyle(q('h1')).fontFamily.split(',')[0],
        window: rect(q('.window')),
        h1: rect(q('h1')),
        kicker: rect(q('.kicker')),
        role: rect(q('.role')),
        chips: rect(q('.chips')),
        chipFirst: rect(q('.chip')),
        foot: rect(q('.foot')),
        avail: rect(q('.avail')),
        handle: rect(q('.handle')),
        tab: rect(q('.tab')),
        status: rect(q('.status')),
        left: rect(q('.left')),
        right: rect(q('.right')),
        eyebrow: rect(q('.eyebrow')),
        workItems: [...document.querySelectorAll('.work-item .title')].map((el) => rect(el)),
      };
      const win = m.window;
      const checks = [
        ['viewport 1200x630 fits (no page scroll)', m.scrollWidth <= 1200 && m.scrollHeight <= 630],
        ['window is 1088x518', Math.abs(win.width - 1088) < 1 && Math.abs(win.height - 518) < 1],
        ['window horizontally centered', Math.abs((win.left + win.right) / 2 - 600) < 1],
        ['window vertically centered', Math.abs((win.top + win.bottom) / 2 - 315) < 1],
        ['h1 stays inside left column', m.h1.left >= m.left.left - 0.5 && m.h1.right <= m.left.right + 0.5],
        ['h1 is a single line', m.h1.height < 80],
        ['role line inside column', m.role.right <= m.left.right + 0.5],
        ['chips above footer (no collision)', m.chips.bottom <= m.foot.top - 6],
        ['footer inside window', m.foot.bottom <= win.bottom - 20],
        ['work rail inside window', m.workItems.length === 4 && m.workItems[3].bottom <= win.bottom - 20],
        ['titlebar chip inside window', m.status.right <= win.right - 12],
        ['tab and status do not overlap', m.status.left >= m.tab.right + 8],
      ];
      return { m, checks };
    })()`,
    returnByValue: true,
  });
  if (evalRes.exceptionDetails) {
    console.error('Page expression threw:', JSON.stringify(evalRes.exceptionDetails, null, 2));
    throw new Error('page evaluation failed');
  }
  const result = evalRes.result;

  const { m, checks } = result.value;
  console.log('OG card geometry @1200x630');
  console.log(`  fonts: ${fontsLoaded ? 'loaded (Inter + JetBrains Mono)' : 'NOT loaded — measurements unreliable'}`);
  console.log(`  h1: ${m.h1FontSize} ${m.h1FontFamily}, box ${m.h1.width}x${m.h1.height}`);
  console.log(`  window: ${m.window.width}x${m.window.height} at (${m.window.left}, ${m.window.top})`);
  console.log(`  page scroll: ${m.scrollWidth}x${m.scrollHeight}`);
  let failed = 0;
  for (const [name, ok] of checks) {
    console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${name}`);
    if (!ok) failed++;
  }
  if (!fontsLoaded) failed++;
  console.log(failed === 0 ? '\nAll checks passed.' : `\n${failed} check(s) failed.`);
  process.exitCode = failed === 0 ? 0 : 1;
} catch (err) {
  console.error('Probe failed:', err.message);
  process.exitCode = 1;
} finally {
  if (ws) try { ws.close(); } catch { /* noop */ }
  kill();
  // Chrome can linger on the profile dir a moment; cleanup is best-effort.
  try { rmSync(profileDir, { recursive: true, force: true }); } catch { /* noop */ }
}
