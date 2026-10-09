import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";
import DemoSection from "../components/DemoSection";
import RelatedLinks from "../components/RelatedLinks";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import { SITE_URL, breadcrumbJsonLd } from "../lib/site";

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
