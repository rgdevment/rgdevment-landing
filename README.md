# rgdevment.com

The site for Tisty, LinkUnbound and CopyPaste: free, open source desktop apps for Windows and macOS. Built with Astro and Tailwind, published to GitHub Pages.

## Run it

```sh
npm ci
npm run wikis   # pulls the three GitHub wikis into .wikis/
npm run dev
```

## Where the content lives

- `src/content/products.ts` and `src/content/guides*.ts`: product pages and guides, in English and Spanish.
- The docs under `/<app>/docs/` and `/es/<app>/ayuda/` come from each project's GitHub wiki. Edit the wiki, not this repo: `scripts/wikis.mjs` pairs the languages by their order in `_Sidebar.md`, and the deploy rebuilds every six hours, which also picks up each new app release.
