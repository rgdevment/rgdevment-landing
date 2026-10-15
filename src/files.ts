import sharp from "sharp";
import { DOMAIN, HOME_PRODUCT, LOCALES, type Locale } from "./site";
import { PRODUCTS, type Product, shotSrc } from "./content/products";

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

export function cardRoutes() {
  return PRODUCTS.filter((one) => one.shot && (!HOME_PRODUCT || one.slug === HOME_PRODUCT)).flatMap((product) =>
    LOCALES.map((locale) => ({ params: { card: `${product.slug}-${locale}` }, props: { product, locale } })),
  );
}

export async function card({ props }: { props: { product: Product; locale: Locale } }): Promise<Response> {
  const png = await sharp(`./public${shotSrc(props.product, props.locale)}`)
    .resize(1200, 630, { fit: "cover" })
    .png({ compressionLevel: 9 })
    .toBuffer();
  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
}
