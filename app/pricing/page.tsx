import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import DemoSection from "../components/DemoSection";
import { MonthlyEstimate, OrderBreakdown } from "../components/PricingCalculator";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import { SITE_URL, breadcrumbJsonLd, serviceFeeCents, OG_IMAGES, TWITTER_IMAGES } from "../lib/site";

const PATH = "/pricing";

export const metadata: Metadata = {
  title: "Pricing: Free for the Course",
  description:
    "Foreturn IQ costs your golf course nothing. Golfers pay a 5% + $0.50 service fee per order and your course keeps 100% of its menu prices, paid straight to your Stripe account.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    url: `${SITE_URL}${PATH}`,
    siteName: "Foreturn IQ",
    title: "Foreturn IQ Pricing: Free for the Course",
    description:
      "Golfers pay a 5% + $0.50 service fee per order. Your course keeps 100% of its menu prices.",
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Foreturn IQ Pricing: Free for the Course",
    description:
      "Golfers pay a 5% + $0.50 service fee per order. Your course keeps 100% of its menu prices.",
    images: TWITTER_IMAGES,
  },
};

const examples = [1000, 1950, 3000, 5000].map((c) => ({
  order: c,
  fee: serviceFeeCents(c),
}));
const usd = (c: number) => `$${(c / 100).toFixed(2)}`;

const summary = [
  {
    value: "$0",
    label: "Cost to your course",
    body: "No hardware, no setup charge, no subscription.",
  },
  {
    value: "5% + $0.50",
    label: "Service fee per order",
    body: "Paid by the golfer at checkout, shown before they pay.",
  },
  {
    value: "100%",
    label: "Of menu prices to you",
    body: "Plus tax and tips, settled to your own Stripe account.",
  },
];

const included = [
  "Real-time kitchen queue: Prepare Now, Coming Up, Later Today",
  "Three pickup windows: Before Round, At the Turn, After Round",
  "4-character pickup codes on every order",
  "Menu builder with on/off control for any item",
  "Golfer quick reorder",
  "Direct Stripe payout to your course",
  "QR codes for your carts",
  "Setup help, live in one afternoon",
];

const faqs = [
  {
    q: "Is there a monthly fee or a minimum?",
    a: "No. There is no subscription, no setup charge and no minimum number of orders. The only charge is the service fee golfers pay on each order.",
  },
  {
    q: "Do golfers see the service fee before they pay?",
    a: "Yes. The fee is a separate line at checkout, next to the subtotal and tax, so golfers see the full total before paying.",
  },
  {
    q: "What happens to the fee if an order is canceled?",
    a: "If you cancel or refund a paid order from the order queue, the golfer gets a full refund to their card, service fee included.",
  },
  {
    q: "When does my course get paid?",
    a: "Each order's menu total, tax and tips go to your course's own Stripe account. Payouts follow your Stripe payout schedule. There is no third-party wallet in between.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PATH}`,
      url: `${SITE_URL}${PATH}`,
      name: "Foreturn IQ Pricing",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#app` },
      breadcrumb: { "@id": `${SITE_URL}${PATH}#breadcrumb` },
    },
    breadcrumbJsonLd(PATH, "Pricing"),
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}${PATH}#faq`,
      mainEntity: faqs.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />

      {/* Hero */}
      <section className="bg-navy px-8 pt-40 pb-20">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs label="Pricing" />
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter text-white leading-[0.95] mb-6 max-w-[16ch]">
            Free for the Course. Golfers Pay a Small Fee.
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-[58ch]">
            Golfers pay 5% of their order plus $0.50 at checkout. Your course
            keeps 100% of its menu prices, plus tax and tips, paid straight to
            your Stripe account.
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            {summary.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/6 border border-white/10 p-5">
                <dd className="text-3xl font-bold font-mono text-green">{s.value}</dd>
                <dt className="text-sm font-semibold text-white mt-2">{s.label}</dt>
                <dd className="text-sm text-white/50 mt-1 leading-relaxed">{s.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* One order */}
      <section id="section-order" className="px-8 py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <div className="lg:pt-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-green bg-green/10 border border-green/20 mb-5">
              One Order
            </span>
            <h2 className="text-4xl font-bold tracking-tighter text-navy leading-tight mb-4">
              Where Every Dollar Goes
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[38ch]">
              Slide to any order size. The menu total is yours. The service fee
              is added on top for the golfer, never taken out of your sales.
            </p>
            <table className="mt-8 w-full max-w-sm text-sm">
              <thead>
                <tr className="text-left text-xs text-gray-400">
                  <th scope="col" className="pb-2 font-medium">Order</th>
                  <th scope="col" className="pb-2 font-medium">Golfer fee</th>
                  <th scope="col" className="pb-2 font-medium">Your course gets</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-navy">
                {examples.map((e) => (
                  <tr key={e.order}>
                    <td className="py-2">{usd(e.order)}</td>
                    <td className="py-2 text-gray-500">{usd(e.fee)}</td>
                    <td className="py-2 font-semibold">{usd(e.order)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <OrderBreakdown />
        </div>
      </section>

      {/* A month */}
      <section id="section-month" className="bg-[#f7f9fc] px-8 py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <div className="lg:pt-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-green bg-green/10 border border-green/20 mb-5">
              Your Course
            </span>
            <h2 className="text-4xl font-bold tracking-tighter text-navy leading-tight mb-4">
              A Month of Pre-Orders
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[38ch]">
              Plug in your own numbers. Every pre-order&apos;s menu total lands
              in your Stripe account, and the platform costs you nothing.
            </p>
          </div>
          <MonthlyEstimate />
        </div>
      </section>

      {/* Included */}
      <section className="px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter text-navy mb-8">
            Everything Is Included
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {included.map((item) => (
              <li key={item} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold tracking-tighter text-navy mt-20 mb-8">
            Pricing Questions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-t border-slate-100 pt-6">
                <h3 className="font-semibold text-[15px] text-navy mb-2">{q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DemoSection
        title="Run a Pilot at Your Course"
        body="We set up a pilot around a few tee times so you can see your own F&B numbers before committing to anything. It costs the course nothing."
      />
      <SiteFooter />
    </div>
  );
}
