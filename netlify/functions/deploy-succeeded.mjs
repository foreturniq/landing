// Warms the Netlify cache right after every production deploy.
//
// Why: every page on this site is prerendered, but a new deploy clears
// Netlify's cache. Until a page is requested once, the first visitor (or
// search crawler) to reach it waits for the Next.js server function to cold
// start. The SEO audit measured /pricing at 3,283 ms and /about at 3,714 ms
// that way, while already-cached pages answered in under 700 ms.
//
// Netlify runs a function named `deploy-succeeded` automatically once a
// deploy is live. This one requests every URL in the sitemap so the shared
// (durable) cache holds each page before real traffic arrives.

const TIMEOUT_MS = 8000;

export const handler = async (event) => {
  let payload = {};
  try {
    payload = JSON.parse(event.body || "{}").payload || {};
  } catch {
    // Fall through with defaults.
  }

  // Deploy previews and branch deploys don't need warming.
  if (payload.context && payload.context !== "production") {
    return { statusCode: 200, body: `skipped: ${payload.context} deploy` };
  }

  const origin = (payload.ssl_url || process.env.URL || "https://foreturniq.com").replace(/\/$/, "");

  let urls = [];
  try {
    const res = await fetch(`${origin}/sitemap.xml`, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    const xml = await res.text();
    urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
      // Sitemap entries use the canonical host; request them on this origin.
      const u = new URL(m[1].trim());
      return `${origin}${u.pathname}`;
    });
  } catch (err) {
    console.error("cache warm: could not read sitemap", err);
  }

  // The two routes the audit flagged go first, in case the sitemap fetch failed.
  const targets = [...new Set([`${origin}/pricing`, `${origin}/about`, `${origin}/`, ...urls])];

  const results = await Promise.allSettled(
    targets.map(async (url) => {
      const started = Date.now();
      const res = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
      await res.arrayBuffer();
      return `${res.status} ${Date.now() - started}ms ${url}`;
    }),
  );

  const lines = results.map((r, i) =>
    r.status === "fulfilled" ? r.value : `failed ${targets[i]}: ${r.reason}`,
  );
  console.log(`cache warm: ${targets.length} URLs\n${lines.join("\n")}`);

  return { statusCode: 200, body: lines.join("\n") };
};
