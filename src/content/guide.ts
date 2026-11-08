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
  faq: { q: string; a: string }[];
};

export type Guide = {
  id: string;
  product: string;
  published: string;
  updated?: string;
  en: Written;
  es: Written;
};

export function lastChanged(guide: Guide): string {
  return guide.updated ?? guide.published;
}

export function written(guide: Guide, locale: Locale): Written {
  return locale === "es" ? guide.es : guide.en;
}
