import { defineConfig } from 'astro/config';
import { shared } from './astro.shared.mjs';

export default defineConfig({
  ...shared({ product: 'tisty' }),
  site: 'https://www.tisty.app',
  srcDir: './src/sites/tisty',
  outDir: './dist-tisty',
  cacheDir: './node_modules/.astro-tisty',
});
