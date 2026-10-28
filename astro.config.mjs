import { writeFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import { shared } from './astro.shared.mjs';
import { redirects, renamed } from './src/hosts.ts';

const moved = {
  name: 'moved',
  hooks: {
    'astro:build:done': ({ dir }) =>
      writeFileSync(new URL('_redirects', dir), redirects() + renamed({ '/en/': '/' })),
  },
};

const base = shared();

export default defineConfig({
  ...base,
  integrations: [...base.integrations, moved],
  site: 'https://rgdevment.com',
});
