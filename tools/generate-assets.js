/**
 * Generates public/og-image.png and public/Samuel-Mitiku-CV.pdf from the
 * HTML sources in tools/ using headless Chrome. Run once after editing the
 * sources:
 *
 *   node tools/generate-assets.js
 *
 * Chrome is expected at the path below (Windows). Adjust CHROME if needed.
 */
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

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
const ogSource = `file:///${join(root, 'tools', 'og-card.html').replace(/\\/g, '/')}`;
const cvSource = `file:///${join(root, 'tools', 'cv.html').replace(/\\/g, '/')}`;
const ogOut = join(root, 'public', 'og-image.png');
const cvOut = join(root, 'public', 'Samuel-Mitiku-CV.pdf');

// virtual-time-budget lets Google Fonts finish loading before capture.
const baseArgs = [
  '--headless=new',
  '--disable-gpu',
  '--no-first-run',
  '--hide-scrollbars',
  '--virtual-time-budget=10000',
];

console.log('Rendering OG image…');
execFileSync(chrome, [...baseArgs, '--window-size=1200,630', `--screenshot=${ogOut}`, ogSource], {
  stdio: 'inherit',
});

console.log('Rendering CV PDF…');
execFileSync(
  chrome,
  [...baseArgs, '--no-pdf-header-footer', `--print-to-pdf=${cvOut}`, cvSource],
  { stdio: 'inherit' },
);

console.log('Done:', ogOut, '|', cvOut);
