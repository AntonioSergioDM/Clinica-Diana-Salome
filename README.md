# Clínica Médica Dentária Diana Salomé

Static website built with Astro, TypeScript, and Sass. The Portuguese page is
generated at `/` and the English page at `/en/`.

## Development

- `npm install` installs dependencies.
- `npm run dev` starts the local development server.
- `npm run build` generates the static site in `dist/`.
- `npm run preview` previews the generated site locally.

## Project structure

- `src/content/site/pt.json` and `src/content/site/en.json` contain localized
  content.
- `src/components/ClinicSite.astro` renders the site.
- `src/styles/site.scss` contains the site styles.
- `public/images/` contains static image assets.
- `scripts/optimize-images.mjs` creates optimized image variants before
  development and production builds.

Netlify publishes `dist/`. Contact details link directly to phone and email;
the site has no custom server or database.
