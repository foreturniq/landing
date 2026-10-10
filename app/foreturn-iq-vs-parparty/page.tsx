import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import DemoSection from "../components/DemoSection";
import RelatedLinks from "../components/RelatedLinks";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import Link from "next/link";
import { SITE_URL, breadcrumbJsonLd, serviceFeeCents, OG_IMAGES, TWITTER_IMAGES } from "../lib/site";

const PATH = "/foreturn-iq-vs-parparty";
const LABEL = "Foreturn IQ vs ParParty";
// ParParty facts below come from parparty.com. Re-check when updating.
const CHECKED = "October 2026";

export const metadata: Metadata = {
  title: { absolute: "Foreturn IQ vs ParParty | Golf Course Mobile Ordering" },
  description:
    "Foreturn IQ vs ParParty for golf course food ordering: who pays the fee, pickup vs cart delivery, the kitchen queue, POS and setup, compared side by side.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${PATH}`,
    siteName: "Foreturn IQ",
    title: "Foreturn IQ vs ParParty",
    description:
      "Who pays the fee, pickup vs cart delivery, and what the kitchen sees, compared side by side.",
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Foreturn IQ vs ParParty",
    description:
      "Who pays the fee, pickup vs cart delivery, and what the kitchen sees, compared side by side.",
    images: TWITTER_IMAGES,
  },
};

const rows: [string, string, string][] = [
  [
    "Who pays",
    "Golfers pay a 5% + $0.50 service fee per order. The course pays nothing.",
    "The course pays 5% of online sales after its first $1,000 in lifetime sales, plus Stripe processing fees.",
  ],
  [
    "On a $19.50 order",
    "Golfer pays a $1.48 fee. The course keeps the full $19.50, plus tax and tips.",
    "The course pays about $0.98 (5%) plus Stripe processing, once past its first $1,000.",
  ],
  [
    "Subscription and setup",
    "No subscription, no setup charge.",
    "No subscription, no contract, free setup.",
  ],
  [
    "How golfers order",
    "Scan a QR code on the cart. No app, no account.",
    "Scan a QR code in the cart. No app, no download, no login.",
  ],
  [
    "Getting the food",
    "Pickup. Golfers choose Before Round, At the Turn or After Round and pick up with a 4-character code.",
    "Delivery to the cart or hole. Runners find the golfer by GPS location.",
  ],
  [
    "What the kitchen sees",
    "A timed queue (Prepare Now, Coming Up, Later Today) with each golfer's predicted arrival and a prep start 15 minutes before it.",
    "Orders on a kitchen screen with an alert, moved New, Preparing, Ready with one tap. Bar and food items route separately.",
  ],
  [
    "POS",
    "Runs alongside your POS. No integration.",
    "Optional Lightspeed Restaurant (K-Series) integration to print on existing printers.",
  ],
  [
    "Hardware",
    "None. QR codes plus any browser behind the counter.",
    "None. QR stickers plus existing phones, tablets or computers.",
  ],
  [
    "Getting started",
    "A pilot set up with you around a few tee times. Live in one afternoon.",
    "Self-serve signup, no sales call.",
  ],
];

// Worked example: 100 pre-orders a week at an $18 average order.
const EX_PER_WEEK = 100;
const EX_AVG_CENTS = 1800;
const EX_SEASON_MONTHS = 7;
const exOrders = Math.round((EX_PER_WEEK * 52) / 12);
const exSales = exOrders * EX_AVG_CENTS;
const exFee = serviceFeeCents(EX_AVG_CENTS);
const exPercentMonth = Math.round(exSales * 0.05);
const exPercentSeason = Math.round((exSales * EX_SEASON_MONTHS - 100000) * 0.05);
const dollars = (c: number) =>
  (c / 100).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const cents = (c: number) => `$${(c / 100).toFixed(2)}`;

const exampleRows: [string, string, string][] = [
  ["What the course pays the platform", "$0", `About ${dollars(exPercentMonth)} (5%), plus Stripe processing fees`],
  ["What golfers pay on top of the menu", `${cents(exFee)} service fee per order`, "No golfer fee listed on parparty.com"],
  ["Menu sales the course keeps", `${dollars(exSales)}, all of it`, `${dollars(exSales)} minus about ${dollars(exPercentMonth)} and Stripe fees`],
];

const vendorQuestions = [
  "Who pays the platform fee, the course or the golfer, and how much is it on a typical order?",
  "Does the course also pay card processing fees on top of that?",
  "Does it need runners on the course, or does it work with pickup at the counter?",
  "How does the kitchen know when to start an order, not just what was ordered?",
  "What happens to a paid order you can't fill, and who pays for the refund?",
  "Does it need to connect to your POS?",
  "Can you try it around a few tee times before you commit?",
];

const faqs = [
  {
    q: "Does Foreturn IQ take a percentage of the course's sales?",
    a: "No. The golfer pays a 5% + $0.50 service fee at checkout and the course keeps 100% of its menu prices, plus tax and tips. ParParty charges the course 5% of online sales after the first $1,000, plus Stripe processing fees.",
  },
  {
    q: "Does Foreturn IQ deliver food to the cart?",
    a: "No. Foreturn IQ is built for pickup: golfers pick a window (Before Round, At the Turn or After Round) and collect their order with a 4-character code. If you staff runners and want delivery to the cart, ParParty's GPS delivery is built for that.",
  },
  {
    q: "Do I need new hardware for either one?",
    a: "No. Both run on QR codes and golfers' own phones. Foreturn IQ's kitchen dashboard runs in any browser on a tablet or computer you already have.",
  },
  {
    q: "Can golfers leave a tip with Foreturn IQ?",
    a: "Yes. Golfers can add a tip at checkout, and tips go 100% to your course. They are not part of the service fee.",
  },
  {
    q: "Does Foreturn IQ work with our GPS cart screens?",
    a: "Yes, alongside them. Nothing gets ripped out: a QR code on the cart sends golfers to your ordering page, and your GPS keeps running.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PATH}`,
      url: `${SITE_URL}${PATH}`,
      name: LABEL,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      breadcrumb: { "@id": `${SITE_URL}${PATH}#breadcrumb` },
    },
    breadcrumbJsonLd(PATH, LABEL),
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

export default function VsParPartyPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />

      <section className="bg-navy px-8 pt-40 pb-20">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs label={LABEL} />
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter text-white leading-[0.95] mb-6">
            Foreturn IQ vs ParParty
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-[60ch]">
            Both put a QR code on the cart and let golfers order from their own
            phone with no app and no new hardware. The differences are who pays
            the fee, how the food gets to the golfer, and what your kitchen sees.
          </p>
        </div>
      </section>

      <section className="px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[640px] text-sm text-left">
              <thead className="bg-slate-50 text-navy">
                <tr>
                  <th scope="col" className="px-5 py-4 w-[22%] font-semibold" />
                  <th scope="col" className="px-5 py-4 font-semibold">Foreturn IQ</th>
                  <th scope="col" className="px-5 py-4 font-semibold">ParParty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map(([label, us, them]) => (
                  <tr key={label} className="align-top">
                    <th scope="row" className="px-5 py-4 font-semibold text-navy">
                      {label}
                    </th>
                    <td className="px-5 py-4 text-gray-700 leading-relaxed">{us}</td>
                    <td className="px-5 py-4 text-gray-500 leading-relaxed">{them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            ParParty details are from{" "}
            <a href="https://parparty.com" rel="nofollow noopener" className="underline underline-offset-2">
              parparty.com
            </a>{" "}
            as of {CHECKED}. If something has changed,{" "}
            <a href="mailto:info@foreturniq.com" className="underline underline-offset-2">
              email us
            </a>{" "}
            and we&apos;ll update this page.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6">
              <h2 className="text-xl font-bold tracking-tight text-navy mb-3">
                Foreturn IQ fits better if
              </h2>
              <ul className="space-y-2 text-sm text-gray-600 leading-relaxed list-disc pl-5">
                <li>You want the course to pay nothing per order.</li>
                <li>Golfers pick up at the turn, the snack bar or after the round, and you don&apos;t run cart delivery.</li>
                <li>Your kitchen&apos;s problem is timing: knowing when to start prep, not just what was ordered.</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6">
              <h2 className="text-xl font-bold tracking-tight text-navy mb-3">
                ParParty fits better if
              </h2>
              <ul className="space-y-2 text-sm text-gray-600 leading-relaxed list-disc pl-5">
                <li>You staff runners and want food delivered to the cart or hole.</li>
                <li>You use Lightspeed K-Series and need orders on your existing printers.</li>
                <li>You want to sign up yourself without talking to anyone.</li>
              </ul>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold tracking-tighter text-navy mb-6">
              A Month of Pre-Orders, Side by Side
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Take a course doing {EX_PER_WEEK} pre-orders a week at an $18 average
              order. That is about {exOrders} orders and {dollars(exSales)} in
              food and beverage sales a month.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-6">
              <table className="w-full min-w-[560px] text-sm text-left">
                <thead className="bg-slate-50 text-navy">
                  <tr>
                    <th scope="col" className="px-5 py-3 w-[34%] font-semibold">Per month</th>
                    <th scope="col" className="px-5 py-3 font-semibold">Foreturn IQ</th>
                    <th scope="col" className="px-5 py-3 font-semibold">ParParty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {exampleRows.map(([label, us, them]) => (
                    <tr key={label} className="align-top">
                      <th scope="row" className="px-5 py-3 font-semibold text-navy">{label}</th>
                      <td className="px-5 py-3 text-gray-700 font-mono">{us}</td>
                      <td className="px-5 py-3 text-gray-500">{them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              ParParty&apos;s first $1,000 in lifetime online sales is free, so at
              this volume the 5% starts in the first week. Over a{" "}
              {EX_SEASON_MONTHS}-month season that comes to about{" "}
              {dollars(exPercentSeason)} paid by the course on ParParty, before
              Stripe fees, and $0 on Foreturn IQ.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The trade-off is who sees the cost. On Foreturn IQ the golfer sees a{" "}
              {cents(exFee)} fee at checkout on an $18 order. On ParParty the
              course pays the platform instead.{" "}
              <Link href="/pricing" className="text-navy font-semibold underline underline-offset-4">
                Plug in your own numbers on the pricing page
              </Link>
              .
            </p>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold tracking-tighter text-navy mb-6">
              Pickup vs Cart Delivery: What Each Asks of Your Staff
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              ParParty is built around delivery. Golfers order from the cart and a
              runner brings the food out, using the golfer&apos;s GPS location to
              find them. That works if you already staff runners or beverage cart
              drivers, and golfers never have to leave the cart.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Foreturn IQ is built around pickup. Golfers choose Before Round, At
              the Turn or After Round, and the order is ready when they get there.
              Staff call out a 4-character code and hand it over at the counter,
              snack bar or turn window. Nobody leaves the building, so it still
              works on a day you are short a runner.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              On a busy turn, delivery depends on how many runners you have out.
              Pickup depends on the kitchen starting on time, which is why every
              Foreturn IQ ticket shows the golfer&apos;s predicted arrival and a
              prep start 15 minutes before it.
            </p>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold tracking-tighter text-navy mb-6">
              When an Order Goes Wrong
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              With Foreturn IQ, if an item runs out you turn it off in the admin
              panel and golfers stop seeing it right away. If a golfer already paid
              for something you can&apos;t make, cancel the order from the order
              queue and they get a full refund to their card, service fee included.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              ParParty&apos;s site doesn&apos;t describe its refund process, so ask
              how a canceled order is handled and who pays the processing fee on a
              refund.
            </p>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold tracking-tighter text-navy mb-6">
              Setup, Side by Side
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Foreturn IQ: build your menu in the admin panel (about 20 minutes),
              put QR codes on your carts and connect your course&apos;s Stripe
              account. We set up a pilot with you around a few tee times, and the
              goal is to be live in one afternoon.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              ParParty: self-serve. Its site says you can create your club in two
              minutes with no card and no sales call, and that most clubs are set
              up in under 30 minutes. It also offers a walkthrough if you want one.
            </p>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold tracking-tighter text-navy mb-6">
              Questions to Ask Any Golf Course Ordering Vendor
            </h2>
            <ul className="space-y-2 text-gray-600 leading-relaxed list-disc pl-5">
              {vendorQuestions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold tracking-tighter text-navy mb-8">
              Common Questions
            </h2>
            <div className="space-y-8">
              {faqs.map(({ q, a }) => (
                <div key={q} className="border-t border-slate-100 pt-6">
                  <h3 className="font-semibold text-[15px] text-navy mb-2">{q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks current={PATH} />
      <DemoSection
        title="See It at Your Course"
        body="We set up a pilot around a few tee times so you can compare the numbers yourself before committing to anything."
      />
      <SiteFooter />
    </div>
  );
}
