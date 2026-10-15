# rgdevment.com

The site for Tisty, LinkUnbound and CoPanda (formerly CopyPaste): free, open source desktop apps for Windows and macOS. Built with Astro and Tailwind, published to Cloudflare Pages. Each app gets its own site on www.tisty.app, www.linkunbound.app and www.copanda.app, built from `src/sites/app` with `npm run build:<app>`; rgdevment.com sends their old pages there.

## Run it

```sh
npm ci
npm run wikis   # pulls the three GitHub wikis into .wikis/
npm run assets  # refreshes each app's hero, mascot and icon from its repo
npm run dev
npm run check   # types, also run by the deploy
```

## Where the content lives

- `src/content/products.ts` and `src/content/guides*.ts`: product pages and guides, in English and Spanish.
- The docs under `/<app>/docs/` and `/es/<app>/ayuda/` come from each project's GitHub wiki. Edit the wiki, not this repo: `scripts/wikis.mjs` pairs the languages by their order in `_Sidebar.md`, and the deploy rebuilds every six hours, which also picks up each new app release.
- Each app's hero, mascot and `.ico` are copied from its repo on every deploy, by the paths in `scripts/apps.mjs`. A file that moved keeps the last copy and leaves a warning in the Actions run.
- Link previews use a 1200×630 crop of each hero, built under `/og/`. Each app's site has its own `llms.txt` and `llms-full.txt`, built from its data and wiki.
- Each deploy tells IndexNow (Bing and others) what changed, once it is live: a push sends every page, and the scheduled runs only the pages whose `lastmod` moved since the live sitemap (`scripts/indexnow.sh`).
- Dependabot opens one grouped pull request a month for npm and one for the workflow actions.
