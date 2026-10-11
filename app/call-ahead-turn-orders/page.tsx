import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import DemoForm from "../components/DemoForm";
import RelatedLinks from "../components/RelatedLinks";
import SectionTracker from "../components/SectionTracker";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import { FounderCard, NotReadyLinks } from "../components/Proof";
import { OG_IMAGES, SITE_URL, TWITTER_IMAGES, breadcrumbJsonLd } from "../lib/site";

const PATH = "/call-ahead-turn-orders";
const LABEL = "Call-Ahead Turn Orders";

export const metadata: Metadata = {
  title: "Take Turn Orders Off the Phone",
  description:
    "Golfers call the grill from the course to order at the turn. Pre-orders move that call to their phone: paid up front, timed to arrival, no one on the line.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    url: `${SITE_URL}${PATH}`,
    siteName: "Foreturn IQ",
    title: "Take Turn Orders Off the Phone",
    description:
      "Replace the call-ahead number on the tee sign with a pre-order golfers place from the cart. Paid up front, timed to their arrival.",
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Take Turn Orders Off the Phone | Foreturn IQ",
    description:
      "Replace the call-ahead number on the tee sign with a pre-order golfers place from the cart. Paid up front, timed to their arrival.",
    images: TWITTER_IMAGES,
  },
};

const rows: [string, string, string][] = [
  ["How the order starts", "The golfer finds the number on the tee sign and calls the grill.", "The golfer scans the QR code on the cart and orders on their own phone."],
  ["Who handles it", "Whoever is nearest the phone, usually in the middle of ringing someone up.", "Nobody. It lands in the kitchen queue on its own."],
  ["When prep starts", "When the written ticket reaches the kitchen.", "15 minutes before the group's predicted arrival, shown on the ticket."],
  ["When it's paid", "At pickup, if the group stops.", "Up front, by card, before prep starts."],
  ["Three groups at once", "Calls stack up or ring out.", "Three tickets in the queue, ordered by arrival."],
  ["At pickup", "A name called across the patio.", "A 4-character pickup code."],
];

const benefits = [
  {
    title: "No phone ringing during the rush",
    body: "Turn calls arrive at the same moment groups are standing at the counter. With pre-orders, golfers order from the cart and the ticket goes straight to the kitchen queue. Nobody has to pick up.",
  },
  {
    title: "The kitchen knows when, not just what",
    body: "Each ticket shows the group's predicted arrival and a prep start 15 minutes before it, bucketed Prepare Now, Coming Up and Later Today. Food is ready at the turn, not ten minutes after it.",
  },
  {
    title: "Paid before the grill starts",
    body: "A call-ahead order is a promise. A pre-order is paid by card before prep begins, so a group that skips the stop doesn't leave you with food nobody pays for.",
  },
  {
    title: "Nothing misheard over cart noise",
    body: "Golfers tap items from your own menu, so the ticket says exactly what they picked. Pickup uses a 4-character code instead of a name shouted across the patio.",
  },
];

const steps = [
  {
    number: "01",
    title: "QR codes go on the carts",
    body: "Golfers scan the code on the front nine. It opens your menu in their phone's browser, with no app and no account.",
  },
  {
    number: "02",
    title: "Golfer picks At the Turn and pays",
    body: "They choose their food and drinks, select the At the Turn pickup window and pay by card. The order lands in your kitchen queue right away.",
  },
  {
    number: "03",
    title: "Kitchen preps on time, golfer picks up with a code",
    body: "The ticket shows when to start. When the group pulls up, staff match the 4-character code and hand the order over.",
  },
];

const faqs = [
  {
    q: "Do we have to get rid of our call-ahead number?",
    a: "No. Keep it for the regular who always calls or anyone who would rather talk to a person. Pre-orders take the routine turn calls off the counter so the calls you still take get full attention.",
  },
  {
    q: "Do golfers need to download an app?",
    a: "No. Golfers scan the QR code on the cart and order in their phone's browser. There's no app and no account to create.",
  },
  {
    q: "What if we run out of something mid-round?",
    a: "Turn the item off in the admin panel and golfers stop seeing it right away. If someone already paid for it, cancel the order from the queue and they get a full refund to their card, service fee included.",
  },
  {
    q: "What does it cost the course?",
    a: "Nothing. Golfers pay a service fee of 5% of their order plus $0.50 at checkout, and your course keeps 100% of its menu prices, plus tax and tips, paid to your own Stripe account.",
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

const badge =
  "inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-green bg-green/10 border border-green/20 mb-5";

export default function CallAheadTurnOrdersPage() {
  return (
    <div className="min-h-screen bg-white">
      <SectionTracker />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />

      {/* Hero */}
      <section id="section-hero" className="bg-navy px-8 pt-40 pb-24">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs label={LABEL} />
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green/15 border border-green/30 text-[10px] font-semibold uppercase tracking-[0.2em] text-green mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-green flex-shrink-0" />
            Call-Ahead Turn Orders
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white leading-[0.95] mb-7">
            Take Turn Orders<br />Off the Phone.
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-[58ch] mb-10">
            Plenty of courses run the turn on a phone number: a sign on the tee
            before the turn that says call ahead to the grill. Someone at the
            counter answers mid-rush, writes the order down over cart noise and
            hopes the group shows up. Foreturn IQ moves that call to the
            golfer&apos;s own phone. They order from the cart, pay up front, and
            your kitchen sees exactly when to start.
          </p>
          <a
            href="#demo"
            className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-green text-white font-bold text-base [transition:opacity_200ms_cubic-bezier(0.23,1,0.32,1),transform_160ms_cubic-bezier(0.23,1,0.32,1)] hover:opacity-90 active:scale-[0.97]"
          >
            Run a Pilot at Your Turn
          </a>
        </div>
      </section>

      {/* Side by side */}
      <section id="section-compare" className="px-8 py-28">
        <div className="max-w-4xl mx-auto">
          <span className={badge}>Side by Side</span>
          <h2 className="text-4xl font-bold tracking-tighter text-navy leading-tight mb-8">
            The Same Turn Order, Taken Two Ways
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[640px] text-sm text-left">
              <thead className="bg-slate-50 text-navy">
                <tr>
                  <th scope="col" className="px-5 py-4 w-[22%] font-semibold" />
                  <th scope="col" className="px-5 py-4 font-semibold">Call-ahead by phone</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-green">Pre-order with Foreturn IQ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map(([label, phone, pre]) => (
                  <tr key={label} className="align-top">
                    <th scope="row" className="px-5 py-4 font-semibold text-navy">{label}</th>
                    <td className="px-5 py-4 text-gray-500 leading-relaxed">{phone}</td>
                    <td className="px-5 py-4 text-gray-700 leading-relaxed bg-green/5">{pre}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed mt-8">
            For the full breakdown of phone orders across the whole round, including
            what the calls cost in staff time, see{" "}
            <Link href="/phone-orders-vs-pre-orders" className="text-navy font-semibold underline underline-offset-4">
              Phone Orders vs Pre-Orders
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section id="section-benefits" className="bg-[#f7f9fc] px-8 py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2.2fr] gap-12 lg:gap-20">
          <div className="lg:pt-2">
            <span className={badge}>The Upgrade</span>
            <h2 className="text-4xl font-bold tracking-tighter text-navy leading-tight">
              A Turn That Runs Without the Phone
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed text-sm max-w-[34ch]">
              Orders come in from the cart, paid and timed. The counter serves the
              people standing at it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map(({ title, body }) => (
              <div key={title} className="p-1.5 rounded-[1.5rem] bg-slate-100/70 border border-slate-200/80">
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-white p-6 h-full">
                  <h3 className="font-semibold text-[15px] text-navy mb-2.5">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="section-process" className="px-8 py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start">
          <div className="lg:pt-2">
            <span className={badge}>How It Works</span>
            <h2 className="text-4xl font-bold tracking-tighter text-navy leading-tight mb-4">
              Scan on the Front Nine.<br />Pick Up at the Turn.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[34ch]">
              No hardware to install and nothing to change at the counter.
            </p>
          </div>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.number} className="p-1.5 rounded-[1.5rem] bg-white/90 border border-slate-200/70">
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-white px-6 py-5 flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green flex items-center justify-center shadow-sm mt-0.5">
                    <span className="text-white text-[11px] font-bold font-mono">{s.number}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[15px] text-navy mb-1.5">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="section-faq" className="bg-[#f7f9fc] px-8 py-28">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter text-navy mb-8">Common Questions</h2>
          <div className="space-y-8">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-t border-slate-200 pt-6">
                <h3 className="font-semibold text-[15px] text-navy mb-2">{q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section id="demo" className="px-8 py-32 bg-navy">
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-green bg-white/8 border border-white/15">
              Request a Pilot
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tighter text-white text-center mb-3">
            Run It at Your Turn
          </h2>
          <p className="text-white/60 text-center mb-10 text-sm leading-relaxed">
            We set up a pilot around a few tee times so you can compare it with
            your call-ahead line before committing to anything.
          </p>
          <div className="p-1.5 rounded-[2rem] bg-white/5 border border-white/10">
            <div className="rounded-[calc(2rem-0.375rem)] px-6 py-7">
              <DemoForm />
            </div>
          </div>
          <NotReadyLinks />
          <FounderCard />
        </div>
      </section>

      <RelatedLinks current={PATH} />
      <SiteFooter />
    </div>
  );
}
