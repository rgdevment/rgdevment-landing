export type Channel = { title: string; page: string; self: string; description: string; language: string };
export type Item = { title: string; link: string; guid: string; date: string; html: string };

export function escaped(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function rss(channel: Channel, items: Item[]): Response {
  const rows = items.map((one) =>
    [
      "    <item>",
      `      <title>${escaped(one.title)}</title>`,
      `      <link>${escaped(one.link)}</link>`,
      `      <guid${one.guid === one.link ? "" : ' isPermaLink="false"'}>${escaped(one.guid)}</guid>`,
      `      <pubDate>${new Date(one.date).toUTCString()}</pubDate>`,
      `      <description>${escaped(one.html)}</description>`,
      "    </item>",
    ].join("\n"),
  );
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${escaped(channel.title)}</title>`,
    `    <link>${escaped(channel.page)}</link>`,
    `    <description>${escaped(channel.description)}</description>`,
    `    <language>${channel.language}</language>`,
    `    <atom:link href="${escaped(channel.self)}" rel="self" type="application/rss+xml"/>`,
    ...(items[0] ? [`    <lastBuildDate>${new Date(items[0].date).toUTCString()}</lastBuildDate>`] : []),
    ...rows,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
