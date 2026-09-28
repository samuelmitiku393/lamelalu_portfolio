# Samuel Mitiku — Portfolio

Personal portfolio for Samuel Mitiku Eshetu, full-stack developer and AI engineer
(React · Node.js · Python · machine learning), based in Addis Ababa, Ethiopia.

**Live:** https://samuelmitiku.netlify.app

## Stack

- [Vite](https://vitejs.dev/) + React 18 — build tooling and UI
- [Tailwind CSS](https://tailwindcss.com/) — design tokens and utility styling
- [react-icons](https://react-icons.github.io/react-icons/) — icon set
- No UI framework, no animation library — scroll reveals and interactions are ~60 lines of
  IntersectionObserver + CSS, and the whole bundle stays small.

## Structure

```
src/
  data/            # Single source of truth: identity, languages, projects, experience, training, capabilities
  components/
    Layout/        # Header (nav + skip link)
    Sections/      # Hero, Work, Experience, Capabilities, About, Contact, Footer
    Shared/        # Reveal (scroll animation), Section (layout shell)
    UI/            # ProjectCard (case study), SocialLinks
tools/
  cv.html          # Résumé source — rendered to public/Samuel-Mitiku-CV.pdf
  og-card.html     # OG image source — rendered to public/og-image.png
```

Content lives in `src/data/` — edit copy, links, and project details there, not in components.

## Content policy

Every claim in this portfolio must be defensible in an interview. No invented metrics, users,
testimonials, or technologies. Project links stay hidden (`null`) until real URLs exist.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Résumé and OG image

`public/Samuel-Mitiku-CV.pdf` and `public/og-image.png` are generated artifacts — never hand-edit
them. Edit the HTML sources and re-render (requires headless Chrome):

```bash
npm run build                    # so dist/ picks up the new public/ files
node tools/generate-assets.js
```

## Deployment

Netlify, configured via `netlify.toml` (security headers, hashed-asset caching, SPA fallback).

## TODO / known gaps

- [ ] Add real demo/GitHub URLs to projects in `src/data/projects.js` (ModelForge and the INSA LMS are `null`)
- [ ] Add real project screenshots to replace the text-based presentation
- [ ] Add Vitest + React Testing Library tests and CI
