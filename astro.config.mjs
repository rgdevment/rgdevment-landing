import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import remarkMath from 'remark-math';

// Anyone allowed to edit a wiki writes onto this origin, so only GitHub's own safe subset survives.
const wikiSafe = {
  ...defaultSchema,
  clobberPrefix: '',
  attributes: {
    ...defaultSchema.attributes,
    pre: [...(defaultSchema.attributes.pre ?? []), 'style', 'dataLanguage'],
    span: [...(defaultSchema.attributes.span ?? []), 'style'],
  },
};

export default defineConfig({
  site: 'https://rgdevment.com',
  trailingSlash: 'always',
  redirects: {
    '/en/': '/',
  },
  integrations: [tailwind({ applyBaseStyles: false })],
  markdown: {
    syntaxHighlight: { type: 'shiki', excludeLangs: ['math', 'mermaid'] },
    remarkPlugins: [[remarkMath, { singleDollarTextMath: false }]],
    rehypePlugins: [[rehypeSanitize, wikiSafe], rehypeKatex],
  },
});
