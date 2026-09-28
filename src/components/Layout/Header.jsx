import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { site } from '../../data/site';

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape (keyboard a11y).
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-ink-700/60 bg-ink-900/90 backdrop-blur">
        <nav aria-label="Primary" className="mx-auto flex h-16 max-w-content items-center justify-between px-5 md:px-8">
          <a href="#top" className="font-mono text-sm font-medium text-paper transition-colors hover:text-accent">
            {site.shortName}
            <span className="text-accent">.</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href.slice(1) ? 'true' : undefined}
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
                    active === link.href.slice(1) ? 'text-accent' : 'text-paper-dim hover:text-paper'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="ml-2">
              <a
                href={site.resume}
                download
                className="rounded-md border border-ink-600 px-3 py-2 text-sm font-medium text-paper transition-colors hover:border-accent hover:text-accent"
              >
                Résumé
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-ink-700 text-paper-dim md:hidden"
          >
            {open ? <FiX className="h-5 w-5" aria-hidden="true" /> : <FiMenu className="h-5 w-5" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <nav aria-label="Mobile" id="mobile-menu" className="border-t border-ink-700/60 bg-ink-900 px-5 pb-4 pt-2 md:hidden">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-3 text-base text-paper-dim hover:bg-ink-800 hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.resume}
                  download
                  className="block rounded-md px-2 py-3 text-base font-medium text-accent"
                >
                  Download résumé
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
