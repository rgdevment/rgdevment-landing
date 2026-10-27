import { appendFileSync, copyFileSync, readdirSync, rmSync } from 'node:fs';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import tailwind from '@astrojs/tailwind';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import remarkMath from 'remark-math';
import { HOMES, homeOf, relocate } from './src/hosts.ts';

const PRODUCTS = Object.values(HOMES);

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
    redirects: { '/es/apoyar/': '/es/colaborar/' },
    integrations: [tailwind({ applyBaseStyles: false })],
    // Mermaid's diagram chunks are large, but a page only downloads them when it draws a diagram.
    vite: { build: { chunkSizeWarningLimit: 1600 } },
    markdown: {
      syntaxHighlight: { type: 'shiki', excludeLangs: ['math', 'mermaid'] },
      remarkPlugins: [[remarkMath, { singleDollarTextMath: false }]],
      rehypePlugins: [
        [rehypeSanitize, wikiSafe],
        rehypeKatex,
        rehypeRelocate(product),
        rehypeHeadingIds,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            test: ['h2', 'h3', 'h4'],
            properties: { className: ['heading-anchor'], ariaHidden: 'true', tabIndex: -1 },
            content: { type: 'text', value: '#' },
          },
        ],
      ],
    },
  };
}

const MAIN_ONLY = ['favicon.svg', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png', 'social.png', 'social-es.png'];

// public/ is shared, so each app's site drops what belongs to the others and takes its own /favicon.ico,
// which browsers and search engines ask for on their own.
function ownFiles(product) {
  return {
    name: 'own-files',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const at = (path) => new URL(path, dir);
        const others = PRODUCTS.filter((one) => one !== product);
        const foreign = (name) => others.some((one) => name.startsWith(`${one}-`) || name.startsWith(`${one}.`));
        const drop = [
          ...MAIN_ONLY,
          ...readdirSync(at('.')).filter(foreign),
          ...readdirSync(at('icons/')).filter((name) => name.endsWith('.ico')).map((name) => `icons/${name}`),
          ...readdirSync(at('docs-assets/')).filter((name) => !name.startsWith(`${product}-`)).map((name) => `docs-assets/${name}`),
        ];
        copyFileSync(`./public/icons/${product}.ico`, at('favicon.ico'));
        appendFileSync(at('_headers'), '\n/llms-full.txt\n  Content-Type: text/plain; charset=utf-8\n');
        drop.forEach((path) => rmSync(at(path), { force: true }));
      },
    },
  };
}

export function ownSite(product) {
  const base = shared({ product });
  return {
    ...base,
    integrations: [...base.integrations, ownFiles(product)],
    site: homeOf(product),
    srcDir: './src/sites/app',
    outDir: `./dist-${product}`,
    cacheDir: `./node_modules/.astro-${product}`,
  };
}
