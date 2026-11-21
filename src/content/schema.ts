import { type Product, type Screen, releasesUrl, storeUrl, words } from "./products";
import type { Release } from "./releases";
import { variantsOf } from "../screens";
import { DOMAIN, PERSON_ID, appId, canonical, type Locale } from "../site";

type Question = { q: string; a: string };

export function screenshotsOf(screens: Screen[], locale: Locale) {
  return screens.map((one) => ({
    "@type": "ImageObject",
    contentUrl: new URL(variantsOf(one.image, "webp").at(-1)!.path, DOMAIN).toString(),
    name: one.title,
    caption: one.alt,
    inLanguage: locale,
  }));
}

export function appSchema(product: Product, locale: Locale, release: Release | null, help: string, screenshot?: unknown) {
  const t = words(product, locale);
  const store = storeUrl(product);
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": appId(product.slug),
    name: product.name,
    ...(product.formerName ? { alternateName: product.formerName } : {}),
    description: t.meta,
    ...(t.keywords ? { keywords: t.keywords.join(", ") } : {}),
    ...(t.groups ? { featureList: t.groups.flatMap((group) => group.points) } : {}),
    applicationCategory: "UtilitiesApplication",
    operatingSystem: product.platforms.join(", "),
    url: canonical("en", product.slug),
    inLanguage: ["en", "es"],
    image: new URL(product.icon, DOMAIN).toString(),
    ...(screenshot ? { screenshot } : {}),
    downloadUrl: releasesUrl(product),
    ...(release ? { softwareVersion: release.version, dateModified: release.date } : {}),
    ...(store ? { installUrl: store } : {}),
    sameAs: [
      product.repo,
      ...(store ? [store] : []),
      ...(product.signals?.producthunt ? [product.signals.producthunt.url] : []),
      ...(product.signals?.alternativeto ? [product.signals.alternativeto] : []),
      ...(product.listings ?? []).map(([, url]) => url),
    ],
    license: `${product.repo}/blob/main/LICENSE`,
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@id": PERSON_ID },
    softwareHelp: { "@type": "CreativeWork", url: help },
  };
}

export function faqSchema(questions: Question[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((one) => ({
      "@type": "Question",
      name: one.q,
      acceptedAnswer: { "@type": "Answer", text: one.a },
    })),
  };
}
