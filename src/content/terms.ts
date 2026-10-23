import type { Locale } from "../site";

export const TERMS_SECTION: Record<Locale, string> = { en: "terms", es: "terminos" };

export function termsPath(locale: Locale, product: string): string {
  return `${product}/${TERMS_SECTION[locale]}`;
}
