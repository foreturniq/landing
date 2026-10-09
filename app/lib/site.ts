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

export type SocialLink = { label: string; url: string };
export const SOCIAL_LINKS: SocialLink[] = [
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
  { href: "/foreturn-iq-vs-parparty", label: "Foreturn IQ vs ParParty" },
];
