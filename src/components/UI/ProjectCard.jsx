import { useId, useState } from 'react';
import { FiArrowUpRight, FiChevronDown, FiExternalLink, FiGithub } from 'react-icons/fi';
import Reveal from '../Shared/Reveal';

/**
 * ProjectCard — a case study, not a screenshot card.
 *
 * Progressive disclosure: recruiters see title + tagline + stack; engineers
 * expand for problem, role, architecture, and decisions. Links only render
 * when real URLs exist — no "#" hrefs.
 */
export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();

  return (
    <Reveal as="article" delay={index * 60} className="group">
      <div className="h-full rounded-xl border border-ink-700 bg-ink-850 transition-colors hover:border-ink-600">
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold text-paper">
              {project.title}
              {project.featured && (
                <span className="ml-3 align-middle font-mono text-xs font-normal uppercase tracking-wider text-accent">
                  Featured
                </span>
              )}
            </h3>
            {/* Only render links that point somewhere real. */}
            {(project.demoUrl || project.githubUrl) && (
              <div className="flex shrink-0 gap-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} — live demo`}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-600 text-paper-dim transition-colors hover:border-accent hover:text-accent"
                  >
                    <FiExternalLink aria-hidden="true" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} — source code`}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-600 text-paper-dim transition-colors hover:border-accent hover:text-accent"
                  >
                    <FiGithub aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>

          <p className="mt-3 text-paper-dim">{project.tagline}</p>

          {/* Skim layer: the stack. */}
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-ink-700 px-2.5 py-1 font-mono text-xs text-paper-dim"
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* Deep layer: expandable case study. */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls={detailsId}
            onClick={() => setOpen((v) => !v)}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-dim"
          >
            {open ? 'Hide details' : 'Read the build'}
            <FiChevronDown
              aria-hidden="true"
              className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </button>

          {open && (
            <div id={detailsId} className="mt-5 space-y-5 border-t border-ink-700 pt-5">
              <CaseBlock label="Problem" text={project.problem} />
              <CaseBlock label="My role" text={project.role} />
              <CaseBlock label="What I built" text={project.solution} />

              {project.architecture?.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-paper-faint">Architecture</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-paper-dim">
                    {project.architecture.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.decisions?.length > 0 && (
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-paper-faint">
                    Decisions & tradeoffs
                  </h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-paper-dim">
                    {project.decisions.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              )}

              <CaseBlock label="Outcome" text={project.outcome} />
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}

function CaseBlock({ label, text }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-wider text-paper-faint">{label}</h4>
      <p className="mt-1 text-sm leading-relaxed text-paper-dim">{text}</p>
    </div>
  );
}
