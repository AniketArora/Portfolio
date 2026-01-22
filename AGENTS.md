# Repository Guidelines

## Project Structure & Module Organization
- `app/` contains the Next.js App Router entry points: `layout.tsx` (metadata and global styles) and `page.tsx` (main markup).
- `app/components/` holds client-only behavior (navbar scroll hide/show, cookie banner, AOS init).
- `css/` holds styles: `normalize.css` (vendor reset) and `screen.css` (site styles and variables) imported in `app/layout.tsx`.
- `public/assets/images/` stores site imagery used in the portfolio cards and social previews.
- `public/` contains static assets like favicons, `site.webmanifest`, `sitemap.xml`, `robots.txt`, and `Resume.pdf`.

## Build, Test, and Development Commands
This repo is a Next.js app.
- Install dependencies: `bun install`
- Local dev server: `bun run dev`
  - Open `http://localhost:3000` in your browser.
- Production build: `bun run build`
- Serve production build: `bun run start`

## Coding Style & Naming Conventions
- Indentation: TS/TSX/JS use 2 spaces; CSS uses 2 spaces (match existing files).
- Class naming follows a BEM-like pattern with a `c-` prefix (e.g., `c-header__nav`, `c-nav__item--button`).
- Keep CSS variables centralized in `:root` in `css/screen.css`.
- Use double quotes in TS/TSX/JS and keep semicolons in JS/TS.

## Testing Guidelines
No automated tests are present. Manually verify:
- Navbar hide/show behavior on scroll.
- Cookie banner visibility and localStorage persistence.
- AOS animations initialize (no console errors).
- Responsive layout across common breakpoints.
- Console for JS errors and 404s on assets.

## Commit & Pull Request Guidelines
- Commit messages in history are short, sentence-case, and verb-led (e.g., “Update portfolio content and layout”).
- For PRs, include a concise summary, note manual testing performed, and attach screenshots/GIFs for UI changes.
- If you change URLs, social images, or metadata, update `public/sitemap.xml` and the Open Graph/Twitter tags in `app/layout.tsx`.

## Security & Configuration Notes
- Google Analytics is loaded via CDN. If you replace it, update the `<head>` links and verify CSP or privacy requirements as needed.
