import { defineConfig } from 'astro/config';
import { ownFiles, shared } from './astro.shared.mjs';

const base = shared();

export default defineConfig({
  ...base,
  integrations: [...base.integrations, ownFiles(null)],
  site: 'https://rgdevment.dev',
});
