# Repository Guidelines

## Project Structure & Module Organization
- `index.html` is the single-page entry point and contains SEO/meta tags, external CDN links, and the main markup.
- `css/` holds styles: `normalize.css` (vendor reset) and `screen.css` (site styles and variables).
- `js/index.js` contains all client-side behavior (navbar scroll hide/show and cookie banner).
- `assets/images/` stores site imagery used in the portfolio cards and social previews.
- Root static assets include favicons, `site.webmanifest`, `sitemap.xml`, `robots.txt`, and `Resume.pdf`.

## Build, Test, and Development Commands
This repo is a static site with no build step or package manager.
- Local preview (simple static server): `python -m http.server 8000`
  - Open `http://localhost:8000` in your browser.
- Quick check: open `index.html` directly in a browser (best for quick content edits).

## Coding Style & Naming Conventions
- Indentation: HTML/JS use 4 spaces; CSS uses 2 spaces (match existing files).
- Class naming follows a BEM-like pattern with a `c-` prefix (e.g., `c-header__nav`, `c-nav__item--button`).
- Keep CSS variables centralized in `:root` in `css/screen.css`.
- Use double quotes in HTML/JS and keep semicolons in JS, matching `js/index.js`.

## Testing Guidelines
No automated tests are present. Manually verify:
- Navbar hide/show behavior on scroll.
- Cookie banner visibility and localStorage persistence.
- Responsive layout across common breakpoints.
- Console for JS errors and 404s on assets.

## Commit & Pull Request Guidelines
- Commit messages in history are short, sentence-case, and verb-led (e.g., “Update portfolio content and layout”).
- For PRs, include a concise summary, note manual testing performed, and attach screenshots/GIFs for UI changes.
- If you change URLs, social images, or metadata, update `sitemap.xml` and the Open Graph/Twitter tags in `index.html`.

## Security & Configuration Notes
- External dependencies are loaded via CDN (Google Fonts, AOS, Google Analytics). If you replace them, update the `<head>` links and verify CSP or privacy requirements as needed.
