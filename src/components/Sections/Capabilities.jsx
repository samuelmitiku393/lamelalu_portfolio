import Reveal from '../Shared/Reveal';
import Section from '../Shared/Section';
import { capabilityGroups } from '../../data/capabilities';

/**
 * Capabilities — what I work with, grouped by layer. No percentage bars;
 * the evidence is in the projects above.
 */
export default function Capabilities() {
  return (
    <Section
      id="capabilities"
      index={3}
      title="Capabilities"
      lead="The tools I reach for, grouped by layer. Depth over lists — each group is backed by the projects above."
    >
      <div className="grid gap-px overflow-hidden rounded-xl border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-4">
        {capabilityGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 60} className="bg-ink-900 p-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">{group.title}</h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-paper-dim">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mt-8 max-w-2xl text-sm text-paper-faint">
          Also comfortable with: Git-based workflows, code review, and deploying static builds to
          Netlify. Currently deepening: testing (Vitest, React Testing Library) and Docker.
        </p>
      </Reveal>
    </Section>
  );
}
