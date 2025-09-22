# Hummingbird Mobile Sips — Preview Landing Page

This repository contains a preview build of the Hummingbird Mobile Sips marketing/landing website. It is a lightweight, fast, and modern frontend built with Vite, React, and TypeScript, styled with Tailwind CSS, and deployed to GitHub Pages.

> Note: The project appears to be scaffolded from a Vite + React + TypeScript starter and uses Tailwind for styling and Lucide for icons. Deployment is configured via the `gh-pages` package.

## Tech Stack

- Build tool: Vite 5
- Framework: React 18 (with React DOM)
- Language: TypeScript 5
- Styling: Tailwind CSS 3, PostCSS, Autoprefixer
- Icons: lucide-react
- Linting: ESLint (with `@eslint/js`, `typescript-eslint`, React hooks and refresh plugins)
- Deployment: `gh-pages` to GitHub Pages

## What this site is for

- Presenting the Hummingbird Mobile Sips brand and offering.
- Providing a fast-loading, mobile-first landing experience suitable for previews and stakeholder reviews.
- Hosting static content (no server-side components indicated from the available configuration).

## Integrations

- GitHub Pages: Deployment via the `gh-pages` package to the `gh-pages` branch.
- Lucide Icons: Iconography via `lucide-react`.
- Tailwind CSS: Utility-first styling compiled via PostCSS + Autoprefixer.

No external APIs or backend integrations are evident from the available configuration.

## Getting Started

Prerequisites:
- Node.js 18+ (recommended LTS) and npm

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```
Vite will print a local dev URL (typically http://localhost:5173).

Build for production:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

## Scripts

- `dev` — Start Vite dev server
- `build` — Build the production bundle
- `preview` — Preview the production bundle locally
- `lint` — Run ESLint
- `deploy` — Publish `dist` to GitHub Pages using `gh-pages`

## Deployment (GitHub Pages)

This project uses the `gh-pages` package to push the built site (`dist`) to the `gh-pages` branch.

Typical flow:
```bash
npm run build
npm run deploy
```

Then, in your repository settings:
- Go to Settings → Pages
- Set Source to “Deploy from a branch”
- Select branch: `gh-pages` and folder `/ (root)`

If you are serving the site from a subpath (e.g., `https://<user>.github.io/HummingbirdMobileSips/`), ensure Vite’s base path is set accordingly. Example `vite.config.ts`:
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/HummingbirdMobileSips/',
})
```

## Styling and Icons

- Tailwind CSS: Author styles via utility classes. Global PostCSS pipeline includes Autoprefixer for cross-browser compatibility.
- Lucide React: Use icons as React components. Example:
```tsx
import { Star } from 'lucide-react'

export function Example() {
  return <Star className="w-5 h-5 text-yellow-500" />
}
```

## Linting

Run ESLint to catch common issues:
```bash
npm run lint
```

## Project Structure

This is a standard Vite + React + TypeScript layout. Common files you’ll see in this setup:
- `index.html` — App entry HTML
- `src/main.tsx` — App entry point
- `src/App.tsx` — Root component
- `tailwind.config.js` / `postcss.config.js` — Styling configuration
- `tsconfig.json` — TypeScript configuration
- `vite.config.ts` — Vite configuration

Note: Exact files and structure may differ depending on your current code state.

## License

Not specified. If you intend to open source this site, add a license (e.g., MIT). Otherwise, keep it private and omit a license.

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide](https://lucide.dev/)
- [`gh-pages`](https://github.com/tschaub/gh-pages)