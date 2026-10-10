// Collects Content-Security-Policy violation reports while the policy runs in
// Report-Only mode. Reports show up in the Netlify function logs as
// "[csp-report]" lines; nothing is stored.
export async function POST(req: Request) {
  try {
    const body = (await req.text()).slice(0, 4000);
    console.warn("[csp-report]", body);
  } catch {
    // Ignore malformed reports.
  }
  return new Response(null, { status: 204 });
}
