import { getCollection } from "astro:content";
import { homeOf } from "../hosts";
import type { Locale } from "../site";

export const PRIVACY_SECTION: Record<Locale, string> = { en: "privacy", es: "privacidad" };

export function privacyPath(locale: Locale, product: string): string {
  return `${product}/${PRIVACY_SECTION[locale]}`;
}

export async function privacyRoutes() {
  const all = await getCollection("privacy", (one) => !homeOf(one.data.product));
  return all.map((policy) => ({ params: { product: policy.data.product }, props: { policy } }));
}
