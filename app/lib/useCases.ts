import type { Metadata } from "next";
import { OG_IMAGES, SITE_URL, TWITTER_IMAGES } from "./site";

// Metadata + shared FAQ answers for the text-led use-case pages.

export function buildUseCaseMetadata(path: string, title: string, description: string, social: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: `${SITE_URL}${path}`,
      siteName: "Foreturn IQ",
      title,
      description: social,
      images: OG_IMAGES,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Foreturn IQ`,
      description: social,
      images: TWITTER_IMAGES,
    },
  };
}

export const FAQ_LOCATION = {
  q: "What if a golfer won't share their location?",
  a: "The order still works. Without location, the ticket runs on the estimated arrival time for the golfer's pickup window, like any scheduled order. Sharing location just makes the timing tighter as they get closer.",
};

export const FAQ_APP = {
  q: "Do golfers need to download an app?",
  a: "No. Golfers scan the QR code on the cart and order in their phone's browser. There's no app and no account to create.",
};

export const FAQ_SOLD_OUT = {
  q: "What if we run out of something?",
  a: "Turn the item off in the admin panel and golfers stop seeing it right away. If someone already paid for it, cancel the order from the queue and they get a full refund to their card, service fee included.",
};

export const FAQ_COST = {
  q: "What does it cost the course?",
  a: "Nothing. Golfers pay a service fee of 5% of their order plus $0.50 at checkout, and your course keeps 100% of its menu prices, plus tax and tips, paid to your own Stripe account.",
};
