import { APPS } from "./apps.mjs";

const SITE = "https://rgdevment.com";
const BSKY = "https://bsky.social/xrpc";
const MAX_AGE_DAYS = 3;
const DRY = process.env.DRY_RUN === "1";

async function json(url, init = {}) {
  const response = await fetch(url, { ...init, signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`${init.method ?? "GET"} ${url} → ${response.status}`);
  return response.json();
}

function post(body, headers = {}) {
  return { method: "POST", headers: { "Content-Type": "application/json", ...headers }, body: JSON.stringify(body) };
}

async function latest(app) {
  const token = process.env.GITHUB_TOKEN;
  const body = await json(`https://api.github.com/repos/rgdevment/${app.repo}/releases/latest`, {
    headers: { Accept: "application/vnd.github+json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
  });
  return { app, version: body.tag_name.replace(/^v/, ""), date: body.published_at, page: `${SITE}/${app.product}/` };
}

function fresh(release) {
  return (Date.now() - Date.parse(release.date)) / 86_400_000 <= MAX_AGE_DAYS;
}

function headline(release) {
  return `${release.app.repo} ${release.version}`;
}

function message(release) {
  return [
    `${headline(release)} is out · ya está disponible`,
    release.app.pitch,
    "Free, open source, no telemetry · Gratis, código abierto, sin telemetría",
    release.page,
  ].join("\n\n");
}

function linkFacet(text, url) {
  const start = Buffer.byteLength(text.slice(0, text.indexOf(url)));
  return {
    index: { byteStart: start, byteEnd: start + Buffer.byteLength(url) },
    features: [{ $type: "app.bsky.richtext.facet#link", uri: url }],
  };
}

async function bluesky(releases) {
  const handle = process.env.BLUESKY_HANDLE;
  const password = process.env.BLUESKY_APP_PASSWORD;
  if (!handle || !password) return console.log("bluesky: not configured, skipped");

  const feed = await json(`https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=${handle}&limit=50`);
  const said = feed.feed.map((one) => one.post.record.text).join("\n");
  const todo = releases.filter((one) => !said.includes(headline(one)));
  if (!todo.length) return console.log("bluesky: nothing new");

  const session = DRY ? null : await json(`${BSKY}/com.atproto.server.createSession`, post({ identifier: handle, password }));
  for (const release of todo) {
    const text = message(release);
    const record = {
      $type: "app.bsky.feed.post",
      text,
      createdAt: new Date().toISOString(),
      langs: ["en", "es"],
      facets: [linkFacet(text, release.page)],
      embed: {
        $type: "app.bsky.embed.external",
        external: { uri: release.page, title: headline(release), description: release.app.pitch },
      },
    };
    if (DRY) {
      console.log(`bluesky (dry run):\n${text}\n`);
      continue;
    }
    await json(
      `${BSKY}/com.atproto.repo.createRecord`,
      post({ repo: session.did, collection: "app.bsky.feed.post", record }, { Authorization: `Bearer ${session.accessJwt}` }),
    );
    console.log(`bluesky: announced ${headline(release)}`);
  }
}

async function mastodon(releases) {
  const base = process.env.MASTODON_URL?.replace(/\/$/, "");
  const token = process.env.MASTODON_TOKEN;
  if (!base || !token) return console.log("mastodon: not configured, skipped");

  const auth = { Authorization: `Bearer ${token}` };
  const me = await json(`${base}/api/v1/accounts/verify_credentials`, { headers: auth });
  const statuses = await json(`${base}/api/v1/accounts/${me.id}/statuses?limit=40&exclude_replies=true`, { headers: auth });
  const said = statuses.map((one) => one.content).join("\n");
  const todo = releases.filter((one) => !said.includes(headline(one)));
  if (!todo.length) return console.log("mastodon: nothing new");

  for (const release of todo) {
    if (DRY) {
      console.log(`mastodon (dry run):\n${message(release)}\n`);
      continue;
    }
    const key = { "Idempotency-Key": `${release.app.product}-${release.version}` };
    await json(`${base}/api/v1/statuses`, post({ status: message(release), language: "en" }, { ...auth, ...key }));
    console.log(`mastodon: announced ${headline(release)}`);
  }
}

const releases = (await Promise.all(APPS.map(latest))).filter(fresh);
console.log(releases.length ? `fresh: ${releases.map(headline).join(", ")}` : "no fresh release");

for (const network of [bluesky, mastodon]) {
  try {
    if (releases.length) await network(releases);
  } catch (error) {
    console.error(`${network.name}: ${error.message}`);
    process.exitCode = 1;
  }
}
