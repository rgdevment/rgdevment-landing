import { defineConfig } from 'astro/config';
import { shared } from './astro.shared.mjs';

export default defineConfig({
  ...shared(),
  site: 'https://rgdevment.com',
  redirects: {
    '/en/': '/',
  },
});
