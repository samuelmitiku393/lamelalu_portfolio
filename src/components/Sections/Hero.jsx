import { FiArrowRight, FiFileText } from 'react-icons/fi';
import Reveal from '../Shared/Reveal';
import SocialLinks from '../UI/SocialLinks';
import { site } from '../../data/site';

const facts = [
  { k: 'Stack', v: 'React · Node.js · Python' },
  { k: 'Focus', v: 'AI & Telegram Mini Apps' },
  { k: 'Based in', v: site.location },
  { k: 'Status', v: 'Available now' },
];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative">
      <div className="mx-auto max-w-content px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <Reveal>
          <p className="mb-6 font-mono text-sm text-accent">{site.availability}</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 id="hero-heading" className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            I build full-stack web products and machine learning systems — from database schema to
            deployed UI.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg text-paper-dim">
            I'm {site.name}, a full-stack developer and AI engineer in {site.location}. I've
            shipped a news portal, an ERP integration, real-time platforms, and an ML platform
            that trains and serves scikit-learn models — including auth-verified Telegram Mini
            Apps with live data and wallets.
          </p>
        </Reveal>

        {/* Primary actions — above the fold, keyboard reachable, honest targets. */}
        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-medium text-ink-950 transition-colors hover:bg-accent-dim"
            >
              View my work
              <FiArrowRight aria-hidden="true" />
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-ink-600 px-5 py-3 font-medium text-paper transition-colors hover:border-accent hover:text-accent"
            >
              <FiFileText aria-hidden="true" />
              View résumé
            </a>
            <SocialLinks className="ml-1 hidden sm:flex" />
          </div>
        </Reveal>
      </div>

      {/* Key facts strip — a recruiter's 10-second summary. */}
      <div className="border-t border-ink-700/60">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-px bg-ink-700/60 md:grid-cols-4">
          {facts.map((f) => (
            <div key={f.k} className="bg-ink-900 px-5 py-4 md:px-8">
              <p className="font-mono text-xs uppercase tracking-wider text-paper-faint">{f.k}</p>
              <p className="mt-1 text-sm font-medium text-paper md:text-base">{f.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
