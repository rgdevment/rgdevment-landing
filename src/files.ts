import { DOMAIN, HOME_PRODUCT } from "./site";
import { PRODUCTS } from "./content/products";

export function robots(): Response {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${DOMAIN}/sitemap.xml\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

const STUDIO = {
  name: "rgdevment",
  description: "Free, open source desktop programs for Windows and macOS.",
  icons: [
    { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
  ],
};

function app() {
  const product = PRODUCTS.find((one) => one.slug === HOME_PRODUCT);
  if (!product) return STUDIO;
  return {
    name: product.name,
    description: product.en.meta,
    icons: [{ src: product.icon, sizes: "150x150", type: "image/png" }],
  };
}

export function manifest(): Response {
  const { name, description, icons } = app();
  const head = {
    name,
    short_name: name,
    description,
    start_url: "/",
    display: "browser",
    background_color: "#f6f5f2",
    theme_color: "#f6f5f2",
  };
  const rows = icons.map((one) => `    { "src": "${one.src}", "sizes": "${one.sizes}", "type": "${one.type}" }`);
  const body = `${JSON.stringify(head, null, 2).slice(0, -2)},\n  "icons": [\n${rows.join(",\n")}\n  ]\n}\n`;
  return new Response(body, {
    headers: { "Content-Type": "application/manifest+json" },
  });
}
