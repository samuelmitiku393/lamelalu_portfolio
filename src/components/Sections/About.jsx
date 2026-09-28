import Reveal from '../Shared/Reveal';
import Section from '../Shared/Section';
import { site, languages } from '../../data/site';

export default function About() {
  return (
    <Section id="about" index={4} title="About">
      <div className="grid gap-10 md:grid-cols-[1fr_20rem] lg:gap-16">
        <Reveal className="max-w-2xl space-y-5 text-lg leading-relaxed text-paper-dim">
          <p>
            I got into development at Haramaya University, where I studied Information Systems,
            and went straight into shipping real products — first a sports news portal, then a
            run of Telegram Mini Apps for ERP access, betting, and campaign management.
          </p>
          <p>
            Most of my work has one thing in common: taking a messy operational problem —
            "our staff need ERP access in Telegram", "we plan ads in spreadsheets", "odds need
            to be live" — and turning it into software people actually use, end to end: schema,
            API, auth, UI, deployment.
          </p>
          <p>
            Alongside full-stack product work I train in applied machine learning at Qiyas, where
            the focus is the parts that decide whether a model survives contact with production:
            preprocessing that does not leak, features that carry signal, and evaluation metrics
            that actually mean something. ModelForge is where that meets the engineering side —
            trained scikit-learn pipelines served behind an authenticated API.
          </p>
          <p>
            My goal is self-employment — building software and AI products of my own. I care
            about the unglamorous parts: verifying auth payloads server-side, modeling money as
            a ledger, and designing APIs that survive traffic spikes.
          </p>
        </Reveal>

        {/* Fact sheet — the quick-reference block recruiters look for. */}
        <Reveal delay={120} as="aside" aria-label="Quick facts">
          <dl className="space-y-4 rounded-xl border border-ink-700 bg-ink-850 p-6 text-sm">
            <Fact label="Location" value={site.location} />
            <Fact label="Email" value={site.email} href={`mailto:${site.email}`} />
            <Fact label="Phone" value={site.phone} href={`tel:${site.phone.replace(/\s/g, '')}`} />
            <Fact label="Availability" value={site.availability} />
            <Fact label="Career goal" value={site.careerGoal} />
            <Fact label="GitHub" value="samuelmitiku393" href={site.github} />
            <Fact label="LinkedIn" value="samuel-m-eshetu" href={site.linkedin} />
            {site.goodreads && <Fact label="Goodreads" value="Goodreads profile" href={site.goodreads} />}
            <Fact label="Résumé" value="View PDF" href={site.resume} />
            <div className="border-b border-ink-700/60 pb-3 last:border-0 last:pb-0">
              <dt className="font-mono text-xs uppercase tracking-wider text-paper-faint">Languages</dt>
              <dd className="mt-1 space-y-0.5">
                {languages.map((lang) => (
                  <p key={lang.name} className="text-paper">
                    {lang.name} <span className="text-paper-faint">— {lang.level}</span>
                  </p>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

function Fact({ label, value, href }) {
  const isExternal = href && (href.startsWith('http') || href.endsWith('.pdf'));
  const content = href ? (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="text-paper transition-colors hover:text-accent"
    >
      {value}
    </a>
  ) : (
    <span className="text-paper">{value}</span>
  );
  return (
    <div className="flex flex-col gap-0.5 border-b border-ink-700/60 pb-3 last:border-0 last:pb-0">
      <dt className="font-mono text-xs uppercase tracking-wider text-paper-faint">{label}</dt>
      <dd className="break-words">{content}</dd>
    </div>
  );
}
