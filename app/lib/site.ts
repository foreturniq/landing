// Single source of truth for the site's page cluster. The homepage is the hub;
// each use-case page links back to it and to its siblings. Add a new use-case
// page here and it shows up in every footer, related block and breadcrumb.

export const SITE_URL = "https://foreturniq.com";

export const HUB = {
  href: "/",
  label: "Golf Course F&B Pre-Ordering",
  blurb:
    "The full platform: timed kitchen queue, three pickup windows, direct Stripe payout.",
};

export type UseCase = { href: string; label: string; blurb: string };

export const USE_CASES: UseCase[] = [
  {
    href: "/golf-cart-food-ordering",
    label: "Golf Cart Food Ordering",
    blurb:
      "GPS cart screens fire orders nobody watches. Route every ticket to the kitchen dashboard.",
  },
  {
    href: "/golf-league-pre-orders",
    label: "Golf League Pre-Orders",
    blurb:
      "Replace the paper sign-up sheet. Kitchen knows the count before anyone tees off.",
  },
  {
    href: "/call-ahead-turn-orders",
    label: "Call-Ahead Turn Orders",
    blurb:
      "Take turn orders off the phone. Golfers order from the cart, paid and timed to arrival.",
  },
  {
    href: "/shotgun-start-food-orders",
    label: "Shotgun Starts & Outings",
    blurb:
      "Orders taken before the shotgun, each group's food fired as they get close.",
  },
  {
    href: "/weather-delay-food-orders",
    label: "Weather Delays",
    blurb:
      "Prep follows where golfers are, so a lightning hold doesn't waste the food.",
  },
  {
    href: "/hot-food-at-the-turn",
    label: "Hot Food at the Turn",
    blurb:
      "Prep tightens as golfers get closer, so food is hot whatever the pace of play.",
  },
  {
    href: "/short-staffed-golf-kitchen",
    label: "Short-Staffed Kitchens",
    blurb:
      "One cook, one queue sorted by who is arriving next.",
  },
  {
    href: "/after-round-food-orders",
    label: "After-Round Orders",
    blurb:
      "Food ready as golfers walk off 18, ordered on the back nine.",
  },
];

export function breadcrumbJsonLd(href: string, label: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${href}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: label, item: `${SITE_URL}${href}` },
    ],
  };
}

// ─── Content dates ──────────────────────────────────────────────────────────
// Published / last-updated dates for article-style pages, shown on the page
// and emitted as datePublished / dateModified. Sweep these pages every six
// months: refresh numbers, prices and claims, then bump `modified`. Only bump
// `modified` for a real content edit, never for a metadata or styling change.
export type PageDates = { published: string; modified: string }; // YYYY-MM-DD

export const PAGE_DATES: Record<string, PageDates> = {
  "/phone-orders-vs-pre-orders": { published: "2026-10-10", modified: "2026-10-11" },
};

export function formatPageDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

// ─── Pricing ────────────────────────────────────────────────────────────────
// Mirrors backend/internal/service/fee.go (5% of subtotal + $0.50, uncapped).
// The course keeps 100% of menu prices (plus tax and tips) via Stripe.
export const PRICING = {
  feeLine: "5% + $0.50",
  callout:
    "Free for the course. Golfers pay a 5% + $0.50 service fee per order, and you keep 100% of your menu prices.",
};

export function serviceFeeCents(subtotalCents: number) {
  return Math.round(subtotalCents * 0.05) + 50;
}

// ─── Contact ────────────────────────────────────────────────────────────────
export const CONTACT = {
  info: "info@foreturniq.com",
  support: "support@foreturniq.com",
};

// ─── Founder ────────────────────────────────────────────────────────────────
// photo: path under /public (e.g. "/dominick.jpg"). story: paragraphs in the
// founder's own words. Empty fields are simply not rendered.
export const FOUNDER = {
  name: "Dominick Del Bosque",
  role: "Founder",
  email: "dominick@foreturniq.com",
  photo: "",
  linkedin: "",
  x: "",
  story: [] as string[],
};

// Author reference for Article markup; points at the Person on /about.
export function authorJsonLd() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/about#founder`,
    name: FOUNDER.name,
    url: `${SITE_URL}/about`,
  };
}

// ─── Proof (fill in with real data only; every block hides itself when empty)
export type PilotStat = { value: string; label: string };
export const PILOT_STATS: { updated: string; stats: PilotStat[] } = {
  updated: "", // e.g. "October 2026"
  stats: [], // e.g. { value: "312", label: "Orders taken" }
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  course: string;
  photo?: string;
};
export const TESTIMONIALS: Testimonial[] = [];

export type Mention = { outlet: string; title: string; url: string; date: string };
export const MENTIONS: Mention[] = [];

// Company-owned profiles. Each one shows in the footer and in the
// Organization sameAs on the homepage. Empty values are skipped.
export const COMPANY_SOCIAL = {
  instagram: "https://www.instagram.com/foreturniq/",
};

export type SocialLink = { label: string; url: string };
export const SOCIAL_LINKS: SocialLink[] = [
  ...(COMPANY_SOCIAL.instagram ? [{ label: "Instagram", url: COMPANY_SOCIAL.instagram }] : []),
  ...(FOUNDER.linkedin ? [{ label: "LinkedIn", url: FOUNDER.linkedin }] : []),
];

// A public sample menu prospects can open on their phone. Set
// NEXT_PUBLIC_DEMO_MENU_URL in Netlify to show the "See a live demo menu" CTA.
export const DEMO_MENU_URL = process.env.NEXT_PUBLIC_DEMO_MENU_URL ?? "";

// Extra footer groups.
export const COMPANY_LINKS = [
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];
export const COMPARE_LINKS = [
  { href: "/phone-orders-vs-pre-orders", label: "Phone Orders vs Pre-Orders" },
];

// ─── Social cards ───────────────────────────────────────────────────────────
// Generated by app/opengraph-image.tsx and app/twitter-image.tsx. Pages that
// declare their own openGraph/twitter blocks must include these, because a
// page-level block replaces the inherited one.
export const OG_IMAGES = [
  {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Foreturn IQ: golf course food and beverage pre-ordering. Free for the course.",
  },
];
export const TWITTER_IMAGES = ["/twitter-image"];
