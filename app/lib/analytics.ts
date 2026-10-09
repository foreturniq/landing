// Shared GA4 helpers for the landing site: event tracking, attribution
// capture (UTMs + ad click IDs), content grouping, and enhanced-conversion
// user data.

// Path -> GA4 content_group. Lets you compare conversion by pitch/page.
export const CONTENT_GROUPS: Record<string, string> = {
  "/": "home",
  "/v2": "home_v2",
  "/golf-cart-food-ordering": "lp_cart_ordering",
  "/golf-league-pre-orders": "lp_league_preorders",
  "/foreturn-iq-vs-parparty": "vs_parparty",
  "/about": "about",
  "/pricing": "pricing",
  "/one-pager": "one_pager",
  "/card": "contact_card",
  "/cheyenne": "internal_cheyenne",
};

export function contentGroupFor(pathname: string): string {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return CONTENT_GROUPS[clean] ?? "other";
}

// Estimated value of one demo lead in USD. Default assumes ~$10k first-year
// gross fee per signed course x ~10% lead-to-close. Override via env.
export const LEAD_VALUE_USD =
  Number(process.env.NEXT_PUBLIC_LEAD_VALUE_USD) || 1000;

export function track(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}

// ─── Attribution ────────────────────────────────────────────────────────────

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

// Google Ads (gclid/gbraid/wbraid), Meta, Microsoft, LinkedIn click IDs.
const CLICK_ID_KEYS = [
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
  "li_fat_id",
] as const;

const FIRST_TOUCH_KEY = "fiq_attr_ft";
const LAST_TOUCH_KEY = "fiq_attr_lt";
const TTL_MS = 90 * 24 * 60 * 60 * 1000; // gclid is valid for 90 days

export type Touch = {
  params: Record<string, string>;
  landing_page: string;
  referrer: string;
  ts: number;
};

export type Attribution = {
  first_touch: Touch | null;
  last_touch: Touch | null;
};

function readTouch(key: string): Touch | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const t = JSON.parse(raw) as Touch;
    if (!t?.ts || Date.now() - t.ts > TTL_MS) {
      localStorage.removeItem(key);
      return null;
    }
    return t;
  } catch {
    return null;
  }
}

function writeTouch(key: string, t: Touch) {
  try {
    localStorage.setItem(key, JSON.stringify(t));
  } catch {
    // Storage blocked (private mode etc). Attribution is best-effort.
  }
}

// Call once per full page load. Records first touch (if none) and overwrites
// last touch whenever the visit arrives with campaign params or an external
// referrer.
export function captureAttribution() {
  if (typeof window === "undefined") return;

  const search = new URLSearchParams(window.location.search);
  const params: Record<string, string> = {};
  for (const k of [...UTM_KEYS, ...CLICK_ID_KEYS]) {
    const v = search.get(k);
    if (v) params[k] = v.slice(0, 200);
  }

  const ref = document.referrer;
  const referrer =
    ref && !ref.startsWith(window.location.origin) ? ref.slice(0, 300) : "";

  const touch: Touch = {
    params,
    landing_page: window.location.pathname,
    referrer,
    ts: Date.now(),
  };

  if (!readTouch(FIRST_TOUCH_KEY)) writeTouch(FIRST_TOUCH_KEY, touch);

  const isNewTouch = Object.keys(params).length > 0 || referrer !== "";
  if (isNewTouch || !readTouch(LAST_TOUCH_KEY)) {
    writeTouch(LAST_TOUCH_KEY, touch);
  }
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") {
    return { first_touch: null, last_touch: null };
  }
  return {
    first_touch: readTouch(FIRST_TOUCH_KEY),
    last_touch: readTouch(LAST_TOUCH_KEY),
  };
}

// Short channel label for event params, e.g. "google / cpc" or "direct".
export function sourceLabel(t: Touch | null): string {
  if (!t) return "unknown";
  const { utm_source, utm_medium, gclid, gbraid, wbraid } = t.params;
  if (utm_source) return `${utm_source} / ${utm_medium ?? "none"}`;
  if (gclid || gbraid || wbraid) return "google / cpc";
  if (t.referrer) {
    try {
      return `${new URL(t.referrer).hostname} / referral`;
    } catch {
      return "referral";
    }
  }
  return "direct";
}

// ─── Enhanced conversions (user-provided data) ──────────────────────────────

// gtag hashes these client-side before sending. Requires "User-provided data
// collection" enabled in GA admin and Enhanced Conversions in Google Ads.
export function setUserData(email: string, phone?: string) {
  if (typeof window === "undefined") return;
  const userData: Record<string, string> = {
    email: email.trim().toLowerCase(),
  };
  const digits = (phone ?? "").replace(/\D/g, "");
  if (digits.length === 10) userData.phone_number = `+1${digits}`;
  else if (digits.length === 11 && digits.startsWith("1")) {
    userData.phone_number = `+${digits}`;
  }
  window.gtag?.("set", "user_data", userData);
}
