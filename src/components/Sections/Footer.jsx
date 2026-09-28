import { site } from '../../data/site';

export default function Footer() {
  return (
    <footer className="border-t border-ink-700/60 py-10">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-4 px-5 text-sm text-paper-faint md:flex-row md:items-center md:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with React, Vite, and Tailwind CSS — no
          template.
        </p>
        <nav aria-label="Footer">
          <ul className="flex items-center gap-6">
            <li>
              <a href={`${site.github}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper">
                GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-paper">
                Email
              </a>
            </li>
            <li>
              <a href="#top" className="transition-colors hover:text-paper">
                Back to top ↑
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
