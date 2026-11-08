import { appendFileSync, copyFileSync, cpSync, existsSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import tailwind from '@astrojs/tailwind';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import remarkMath from 'remark-math';
import sharp from 'sharp';
import { HOMES, homeOf, relocate, renamed } from './src/hosts.ts';

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

// A screenshot with its size reserved does not push the text down when it arrives; the first may be what people see.
function rehypeImages() {
  return async (tree) => {
    const images = [];
    const walk = (node) => {
      if (node.tagName === 'img') images.push(node);
      node.children?.forEach(walk);
    };
    walk(tree);
    await Promise.all(
      images.map(async ({ properties }, at) => {
        properties.decoding = 'async';
        if (at > 0) properties.loading = 'lazy';
        if (properties.width || !String(properties.src).startsWith('/docs-assets/')) return;
        try {
          const { width, height } = await sharp(`./public${properties.src}`).metadata();
          Object.assign(properties, { width, height });
          const small = String(properties.src).replace(/\.webp$/, '-720.webp');
          if (small !== properties.src && width > 720 && existsSync(`./public${small}`)) {
            properties.srcSet = `${small} 720w, ${properties.src} ${width}w`;
            properties.sizes = '(min-width: 820px) 768px, calc(100vw - 2.5rem)';
          }
        } catch (error) {
          console.warn(`docs: ${properties.src} has no reserved size: ${error.message}`);
        }
      }),
    );
  };
}

const versionOf = (name) => JSON.parse(readFileSync(`./node_modules/${name}/package.json`, 'utf8')).version;
const MERMAID = `_astro/mermaid-${versionOf('mermaid')}`;
const KATEX = `_astro/katex-${versionOf('katex')}`;

// Mermaid ships already built: bundling it again took nine tenths of every build for the few pages that draw a diagram.
function vendored() {
  return {
    name: 'vendored',
    hooks: {
      'astro:config:setup': ({ command, updateConfig }) => {
        const dev = command === 'dev';
        updateConfig({
          vite: {
            define: {
              'import.meta.env.MERMAID_URL': JSON.stringify(dev ? '/node_modules/mermaid/dist/mermaid.esm.min.mjs' : `/${MERMAID}/mermaid.esm.min.mjs`),
              'import.meta.env.KATEX_CSS': JSON.stringify(dev ? '/node_modules/katex/dist/katex.min.css' : `/${KATEX}/katex.min.css`),
            },
          },
        });
      },
      'astro:build:done': ({ dir }) => {
        const to = (path) => new URL(path, dir);
        cpSync('./node_modules/mermaid/dist/mermaid.esm.min.mjs', to(`${MERMAID}/mermaid.esm.min.mjs`));
        cpSync('./node_modules/mermaid/dist/chunks/mermaid.esm.min', to(`${MERMAID}/chunks/mermaid.esm.min`), {
          recursive: true,
          filter: (path) => !path.endsWith('.map'),
        });
        cpSync('./node_modules/katex/dist/katex.min.css', to(`${KATEX}/katex.min.css`));
        cpSync('./node_modules/katex/dist/fonts', to(`${KATEX}/fonts`), {
          recursive: true,
          filter: (path) => !/\.(?:woff|ttf)$/.test(path),
        });
      },
    },
  };
}

export function shared({ product = null } = {}) {
  return {
    trailingSlash: 'always',
    integrations: [tailwind({ applyBaseStyles: false })],
    markdown: {
      syntaxHighlight: { type: 'shiki', excludeLangs: ['math', 'mermaid'] },
      remarkPlugins: [[remarkMath, { singleDollarTextMath: false }]],
      rehypePlugins: [
        [rehypeSanitize, wikiSafe],
        rehypeKatex,
        rehypeRelocate(product),
        rehypeImages,
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
        writeFileSync(at('_redirects'), renamed());
        appendFileSync(at('_headers'), '\n/llms-full.txt\n  Content-Type: text/plain; charset=utf-8\n  X-Robots-Tag: noindex\n');
        drop.forEach((path) => rmSync(at(path), { force: true }));
      },
    },
  };
}

export function ownSite(product) {
  const base = shared({ product });
  return {
    ...base,
    integrations: [...base.integrations, vendored(), ownFiles(product)],
    site: homeOf(product),
    srcDir: './src/sites/app',
    outDir: `./dist-${product}`,
    cacheDir: `./node_modules/.astro-${product}`,
  };
}
