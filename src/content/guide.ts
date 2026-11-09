import type { Locale } from "../site";

export type Step = { title: string; body: string };

export type Written = {
  slug: string;
  title: string;
  description: string;
  lede: string;
  nativeTitle: string;
  nativeSteps: Step[];
  gapTitle: string;
  gap: string[];
  toolTitle: string;
  tool: string[];
  also?: { line: string; url: string };
  faq: { q: string; a: string }[];
};

export type Guide = {
  id: string;
  product: string;
  published: string;
  en: Written;
  es: Written;
};

export function written(guide: Guide, locale: Locale): Written {
  return locale === "es" ? guide.es : guide.en;
}
