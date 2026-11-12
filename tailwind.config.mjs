import typography from '@tailwindcss/typography';

const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './astro.shared.mjs'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        canvas: token('canvas'),
        surface: token('surface'),
        sunken: token('sunken'),
        fg: token('fg'),
        body: token('body'),
        muted: token('muted'),
        line: token('line'),
        night: { DEFAULT: '#12110f', soft: '#1d1b18', line: '#2e2b27' },
        // The brand orange is a graphic colour: it misses contrast as text, so `ink` carries the words.
        flame: { DEFAULT: '#f97c3d', ink: token('flame-ink'), tint: token('flame-tint') },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      maxWidth: { shell: '72rem' },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(var(--body))',
            '--tw-prose-headings': 'rgb(var(--fg))',
            '--tw-prose-lead': 'rgb(var(--body))',
            '--tw-prose-links': 'rgb(var(--fg))',
            '--tw-prose-bold': 'rgb(var(--fg))',
            '--tw-prose-counters': 'rgb(var(--muted))',
            '--tw-prose-bullets': 'rgb(var(--muted))',
            '--tw-prose-hr': 'rgb(var(--line))',
            '--tw-prose-quotes': 'rgb(var(--fg))',
            '--tw-prose-quote-borders': '#f97c3d',
            '--tw-prose-captions': 'rgb(var(--muted))',
            '--tw-prose-code': 'rgb(var(--fg))',
            '--tw-prose-th-borders': 'rgb(var(--line))',
            '--tw-prose-td-borders': 'rgb(var(--line))',
            maxWidth: 'none',
            a: { textDecorationColor: 'rgb(var(--muted))', textUnderlineOffset: '4px', fontWeight: '500' },
            'a:hover': { textDecorationColor: '#f97c3d' },
            'h2, h3, h4': { letterSpacing: '-0.01em', scrollMarginTop: '6rem' },
            blockquote: { fontStyle: 'normal', fontWeight: '400', background: 'rgb(var(--flame-tint))', borderRadius: '0 1rem 1rem 0', padding: '0.75rem 1.25rem' },
            'blockquote p:first-of-type::before, blockquote p:last-of-type::after': { content: 'none' },
            code: { background: 'rgb(var(--sunken))', borderRadius: '0.375rem', padding: '0.15em 0.4em', fontWeight: '500' },
            'code::before, code::after': { content: 'none' },
            pre: { borderRadius: '1rem', border: '1px solid rgb(var(--line))' },
            'pre code': { background: 'transparent', padding: '0' },
            img: { borderRadius: '1rem', border: '1px solid rgb(var(--line))' },
            figcaption: { textAlign: 'center' },
            '.callout': { background: 'rgb(var(--sunken))', borderLeft: '4px solid', borderRadius: '0 1rem 1rem 0', padding: '0.75rem 1.25rem', margin: '1.6em 0' },
            '.callout > :last-child': { marginBottom: '0' },
            '.callout-title': { fontWeight: '600', color: 'rgb(var(--fg))', marginTop: '0', marginBottom: '0.25em' },
            '.callout-note': { borderColor: '#3b82f6' },
            '.callout-tip': { borderColor: '#16a34a' },
            '.callout-important': { borderColor: '#8b5cf6' },
            '.callout-warning': { borderColor: '#d97706' },
            '.callout-caution': { borderColor: '#dc2626' },
            table: { fontSize: '0.95em' },
          },
        },
        lg: {
          css: {
            '.callout p': { marginTop: '0.5em', marginBottom: '0.5em' },
            '.callout-title': { marginTop: '0', marginBottom: '0' },
            '.callout-title + p': { marginTop: '0.25em' },
          },
        },
      },
    },
  },
  plugins: [typography],
};
