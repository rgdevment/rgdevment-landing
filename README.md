# rgdevment.com

The site for Tisty, LinkUnbound and CopyPaste: free, open source desktop apps for Windows and macOS. Built with Astro and Tailwind, published to GitHub Pages.

## Run it

```sh
npm ci
npm run wikis   # pulls the three GitHub wikis into .wikis/
npm run dev
npm run check   # types, also run by the deploy
```

## Where the content lives

- `src/content/products.ts` and `src/content/guides*.ts`: product pages and guides, in English and Spanish.
- The docs under `/<app>/docs/` and `/es/<app>/ayuda/` come from each project's GitHub wiki. Edit the wiki, not this repo: `scripts/wikis.mjs` pairs the languages by their order in `_Sidebar.md`, and the deploy rebuilds every six hours, which also picks up each new app release.
- Every push to `main` sends the sitemap to IndexNow (Bing and others) once the deploy is live.
- Each new app release is announced on Bluesky and Mastodon by `scripts/announce.mjs`, every two hours. It reads the account's own posts to skip what was already said, and skips a network whose settings are missing: repository variables `BLUESKY_HANDLE` and `MASTODON_URL`, secrets `BLUESKY_APP_PASSWORD` and `MASTODON_TOKEN`. `DRY_RUN=1 npm run announce` shows what it would post.
- Dependabot opens one grouped pull request a month for npm and one for the workflow actions.
