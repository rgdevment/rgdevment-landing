import tailwind from '@astrojs/tailwind';
import rehypeKatex from 'rehype-katex';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import remarkMath from 'remark-math';
import { homeOf, relocate } from './src/hosts.ts';

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

function rehypeRelocate(product) {
  const walk = (node) => {
    if (node.tagName === 'a' && typeof node.properties?.href === 'string') {
      node.properties.href = relocate(node.properties.href, product);
    }
    node.children?.forEach(walk);
  };
  return () => walk;
}

export function shared({ product = null } = {}) {
  return {
    trailingSlash: 'always',
    integrations: [tailwind({ applyBaseStyles: false })],
    markdown: {
      syntaxHighlight: { type: 'shiki', excludeLangs: ['math', 'mermaid'] },
      remarkPlugins: [[remarkMath, { singleDollarTextMath: false }]],
      rehypePlugins: [[rehypeSanitize, wikiSafe], rehypeKatex, rehypeRelocate(product)],
    },
  };
}

export function ownSite(product) {
  return {
    ...shared({ product }),
    site: homeOf(product),
    srcDir: './src/sites/app',
    outDir: `./dist-${product}`,
    cacheDir: `./node_modules/.astro-${product}`,
  };
}
