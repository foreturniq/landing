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
