import Reveal from '../Shared/Reveal';
import Section from '../Shared/Section';
import { experience, training, education, certifications } from '../../data/experience';

export default function Experience() {
  return (
    <Section
      id="experience"
      index={2}
      title="Experience"
      lead="Where I've worked and what I shipped."
    >
      <div className="grid gap-12 md:grid-cols-[1fr_20rem] lg:gap-16">
        {/* Work history */}
        <div>
          <h3 className="sr-only">Work history</h3>
          <ol className="space-y-10 border-l border-ink-700 pl-6 md:pl-8">
            {experience.map((job) => (
              <li key={job.org} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.9rem] top-2 h-2.5 w-2.5 rounded-full border-2 border-accent bg-ink-900 md:-left-[2.4rem]"
                />
                <p className="font-mono text-sm text-accent">{job.period}</p>
                <h4 className="mt-1 text-lg font-semibold text-paper">
                  {job.role} · {job.org}
                </h4>
                <p className="mt-2 max-w-xl text-paper-dim">{job.summary}</p>
                {job.highlights?.length > 0 && (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-paper-faint">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>

          {/* Training */}
          {training.length > 0 && (
            <>
              <h3 className="mt-14 font-mono text-xs uppercase tracking-wider text-paper-faint">Training</h3>
              <ul className="mt-4 space-y-4">
                {training.map((prog) => (
                  <li
                    key={prog.program}
                    className="border-b border-ink-700/60 pb-4"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-medium text-paper">{prog.program}</p>
                      <p className="font-mono text-sm text-paper-faint">{prog.period}</p>
                    </div>
                    <p className="text-sm text-paper-dim">{prog.org}</p>
                    <p className="mt-2 max-w-xl text-sm text-paper-dim">{prog.summary}</p>
                    {prog.competencies?.length > 0 && (
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {prog.competencies.map((c) => (
                          <li
                            key={c}
                            className="rounded-md border border-ink-700 px-2 py-0.5 font-mono text-[0.7rem] text-paper-faint"
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Education */}
          <h3 className="mt-14 font-mono text-xs uppercase tracking-wider text-paper-faint">Education</h3>
          <ul className="mt-4 space-y-4">
            {education.map((edu) => (
              <li key={edu.degree} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink-700/60 pb-4">
                <div>
                  <p className="font-medium text-paper">{edu.degree}</p>
                  <p className="text-sm text-paper-dim">{edu.org}</p>
                </div>
                <p className="font-mono text-sm text-paper-faint">{edu.period}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications sidebar */}
        <Reveal as="aside" aria-label="Certifications">
          <h3 className="font-mono text-xs uppercase tracking-wider text-paper-faint">Certifications</h3>
          <ul className="mt-4 space-y-5">
            {certifications.map((cert) => (
              <li key={cert.title} className="rounded-xl border border-ink-700 bg-ink-850 p-5">
                <p className="font-medium leading-snug text-paper">{cert.title}</p>
                <p className="mt-1 text-sm text-paper-dim">{cert.issuer}</p>
                <p className="mt-2 font-mono text-xs text-paper-faint">{cert.date}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
