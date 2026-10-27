# Trung — Portfolio

A dark/light-mode React portfolio built with Vite. Dark theme by default,
matches the reference layout you shared (circular avatar, bold accent
headline, pill nav buttons, theme toggle).

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy (free options)

- **Vercel**: `npm i -g vercel` then `vercel` in this folder, or just import
  the GitHub repo at vercel.com — zero config needed for a Vite app.
- **Netlify**: drag-and-drop the `dist/` folder onto app.netlify.com/drop,
  or connect the repo (build command `npm run build`, publish dir `dist`).
- **GitHub Pages**: add `base: '/your-repo-name/'` to `vite.config.js`,
  then build and push `dist/` to a `gh-pages` branch (or use the
  `gh-pages` npm package).

## Things you should edit before publishing

1. **`src/components/Contact.jsx`** — replace the placeholder email,
   GitHub and LinkedIn links with your real ones.
2. **`src/components/Navbar.jsx`** — the "Resume" button links to
   `/resume.pdf`. Drop your actual resume PDF into the `public/` folder
   named `resume.pdf` (or change the href).
3. **`src/data/projects.js`** — update the `github` links for DermaAI and
   BudgetAI once those repos are public, and fill in `demo` links if you
   have live/APK links. Tweak the summaries if you want more specific
   detail (metrics, screenshots, etc.).
4. **`src/components/Hero.jsx`** — swap the `T` initial avatar for a real
   photo if you want: replace the `<div className="hero__avatar-circle">`
   content with an `<img src="/avatar.jpg" />` (put the image in `public/`).
5. **`index.html`** — update the `<title>` and meta description if you add
   a last name or change your headline.

## Structure

```
src/
  components/   Navbar, Hero, About, Projects, Contact, Footer
  data/         projects.js — edit this to add/remove project cards
  App.jsx       page layout + dark/light theme state
  App.css       component styles
  index.css     design tokens (colors, spacing) + base styles
```

Colors, spacing and radii are defined as CSS variables in `src/index.css`
under `:root` (dark) and `[data-theme="light"]` — change them there to
retheme the whole site.
