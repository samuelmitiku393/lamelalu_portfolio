import Reveal from './Reveal';

/**
 * Section — consistent section shell: anchor target with header offset,
 * numbered kicker (e.g. "01 — Selected Work") and a clear h2.
 */
export default function Section({ id, index, title, lead, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-ink-700/60 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-content px-5 md:px-8">
        <Reveal>
          <header className="mb-12 md:mb-16">
            <p aria-hidden="true" className="font-mono text-sm text-accent">
              {String(index).padStart(2, '0')}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
            {lead && <p className="mt-4 max-w-2xl text-lg text-paper-dim">{lead}</p>}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
