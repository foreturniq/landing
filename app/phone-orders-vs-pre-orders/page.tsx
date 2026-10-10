import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../components/Breadcrumbs";
import DemoSection from "../components/DemoSection";
import RelatedLinks from "../components/RelatedLinks";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import {
  OG_IMAGES,
  SITE_URL,
  TWITTER_IMAGES,
  breadcrumbJsonLd,
  serviceFeeCents,
} from "../lib/site";

const PATH = "/phone-orders-vs-pre-orders";
const LABEL = "Phone Orders vs Pre-Orders";

export const metadata: Metadata = {
  title: "Phone Orders vs Pre-Orders for Golf Courses",
  description:
    "Phone orders tie up a staff member, get written down over cart noise and aren't paid until pickup. See how golf course pre-orders compare, line by line.",
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    url: `${SITE_URL}${PATH}`,
    siteName: "Foreturn IQ",
    title: "Phone Orders vs Pre-Orders for Golf Courses",
    description:
      "Who takes the order, when it's paid, when the kitchen starts and what it costs the course, compared line by line.",
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: "Phone Orders vs Pre-Orders for Golf Courses",
    description:
      "Who takes the order, when it's paid, when the kitchen starts and what it costs the course, compared line by line.",
    images: TWITTER_IMAGES,
  },
};

const rows: [string, string, string][] = [
  ["Who takes the order", "A staff member answers the phone and writes it down.", "The golfer, on their own phone. No app, no account."],
  ["When it's paid", "At pickup, if the golfer shows up.", "Up front, by card, before the kitchen starts."],
  ["Getting it right", "Written down over cart noise, then read back if there's time.", "Picked item by item from your menu, so there's nothing to mishear."],
  ["When the kitchen starts", "When the ticket reaches the kitchen, whenever that is.", "15 minutes before the golfer's predicted arrival, shown on every ticket."],
  ["On a busy turn", "Calls stack up or ring out while staff are at the counter.", "Orders keep landing in the queue. Nobody has to pick up a phone."],
  ["At pickup", "A name called across the counter.", "A 4-character pickup code."],
  ["Cost to the course", "Staff time on every call.", "$0. Golfers pay a 5% + $0.50 service fee per order."],
  ["Setup", "Nothing to set up beyond a phone number.", "Build your menu (about 20 minutes), QR codes on the carts, connect Stripe."],
];

// Worked examples
const CALLS_PER_DAY = 40;
const MINUTES_PER_CALL = 2;
const callMinutes = CALLS_PER_DAY * MINUTES_PER_CALL;

const EX_PER_WEEK = 100;
const EX_AVG_CENTS = 1800;
const exOrders = Math.round((EX_PER_WEEK * 52) / 12);
const exSales = exOrders * EX_AVG_CENTS;
const exFee = serviceFeeCents(EX_AVG_CENTS);
const dollars = (c: number) =>
  (c / 100).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const cents = (c: number) => `$${(c / 100).toFixed(2)}`;

const switchSteps = [
  {
    title: "Build your menu",
    body: "Add items in the admin panel with a name, price, category and which pickup windows they're available in. It takes about 20 minutes.",
  },
  {
    title: "Put QR codes on the carts",
    body: "Golfers scan from the cart and land on your ordering page. They pay with a card on their own phone.",
  },
  {
    title: "Point callers to the QR code",
    body: "When the phone rings for a food order, staff can tell the golfer about the code on the cart for next time. Keep taking the call in the meantime.",
  },
  {
    title: "Run a pilot around a few tee times",
    body: "We set it up with you so you can see your own numbers before committing to anything. The goal is to be live in one afternoon.",
  },
];

const faqs = [
  {
    q: "Do golfers need to download an app?",
    a: "No. Golfers scan the QR code on the cart and order in their phone's browser. There's no app and no account to create.",
  },
  {
    q: "What if a golfer doesn't have a smartphone, or would rather call?",
    a: "Keep taking their call. Pre-ordering doesn't have to replace every phone order. It takes the routine ones off your counter so the calls you do take get full attention.",
  },
  {
    q: "What does it cost the course?",
    a: "Nothing. Golfers pay a service fee of 5% of their order plus $0.50 at checkout, and your course keeps 100% of its menu prices, plus tax and tips, paid to your own Stripe account.",
  },
  {
    q: "Does it connect to our POS?",
    a: "No. Foreturn IQ runs alongside your POS, so nothing about your current system changes. If you need every order to post into your POS, it isn't the right fit today.",
  },
  {
    q: "Can golfers leave a tip?",
    a: "Yes. Golfers can add a tip at checkout, and tips go 100% to your course. They are not part of the service fee.",
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

const h2 = "text-3xl font-bold tracking-tighter text-navy mb-6";
const p = "text-gray-600 leading-relaxed mb-4";

export default function PhoneOrdersVsPreOrdersPage() {
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
            Phone Orders vs Pre-Orders
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-[60ch]">
            When golfers call in food from the course, someone stops what
            they&apos;re doing to answer, writes the order down over cart noise,
            and hopes the name and the order are right. Nothing is paid until the
            golfer shows up, and the kitchen has no idea when that will be. Here
            is the same order taken both ways.
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
                  <th scope="col" className="px-5 py-4 font-semibold">Phone order</th>
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

          <div className="mt-20">
            <h2 className={h2}>What a Phone Order Really Costs</h2>
            <p className={p}>
              Phone orders look free because there&apos;s no software bill. The
              cost is the person answering. Say each call takes about{" "}
              {MINUTES_PER_CALL} minutes to pick up, write down and read back. At{" "}
              {CALLS_PER_DAY} calls on a busy day, that is {callMinutes}{" "}
              minutes,
              well over an hour of someone&apos;s shift spent on the phone instead
              of at the counter or on the line.
            </p>
            <p className={p}>
              Those minutes land at the worst time: when groups are making the
              turn and the counter is already backed up. Every call answered is a
              golfer at the counter waiting, and every call missed is an order
              that may not get placed at all.
            </p>
          </div>

          <div className="mt-20">
            <h2 className={h2}>The Busy Turn</h2>
            <p className={p}>
              A phone line handles one call at a time. When three groups reach the
              turn together, the calls stack up or ring out, and whoever is on the
              phone is not making food or handing it over.
            </p>
            <p className={p}>
              With pre-orders, golfers order before the round, from the cart or
              at the turn, and every order lands in a live kitchen queue bucketed
              Prepare Now, Coming Up and Later Today. Each ticket shows the
              golfer&apos;s predicted arrival and a prep start 15 minutes before
              it, so the kitchen works ahead of the rush instead of reacting to it.
            </p>
          </div>

          <div className="mt-20">
            <h2 className={h2}>No-Shows and Paid Orders</h2>
            <p className={p}>
              A phone order is a promise. If plans change and the golfer skips the
              stop, the food is already made and nobody pays for it.
            </p>
            <p className={p}>
              A pre-order is paid up front by card before the kitchen starts. If
              something runs out, turn the item off in the admin panel and golfers
              stop seeing it right away. If a golfer already paid for something
              you can&apos;t make, cancel the order from the order queue and they
              get a full refund to their card, service fee included.
            </p>
          </div>

          <div className="mt-20">
            <h2 className={h2}>Getting the Order Right</h2>
            <p className={p}>
              Over the phone, orders get misheard: a name, an item, a count.
              Writing it down and reading it back helps, but takes even longer.
            </p>
            <p className={p}>
              With pre-orders, golfers tap items from your own menu, so the ticket
              shows exactly what they picked. At pickup, staff call out a
              4-character code instead of a name, so there&apos;s no confusion when
              two groups finish the same hole.
            </p>
          </div>

          <div className="mt-20">
            <h2 className={h2}>What It Costs, With Real Numbers</h2>
            <p className={p}>
              Take a course doing {EX_PER_WEEK} pre-orders a week at an $18 average
              order. That is about {exOrders} orders and {dollars(exSales)} in food
              and beverage sales a month. Your course keeps all{" "}
              {dollars(exSales)}, plus tax and tips, and pays $0 for the platform.
              Each golfer pays a {cents(exFee)} service fee at checkout.
            </p>
            <p className={p}>
              <Link href="/pricing" className="text-navy font-semibold underline underline-offset-4">
                Plug in your own numbers on the pricing page
              </Link>
              .
            </p>
          </div>

          <div className="mt-20">
            <h2 className={h2}>When the Phone Still Makes Sense</h2>
            <p className={p}>
              Keep the phone for the regular who always calls, the golfer whose
              phone is dead, or anyone who would simply rather talk to a person.
              Pre-ordering doesn&apos;t have to replace every call. It takes the
              routine ones off your counter, so the calls you do take get your
              staff&apos;s full attention.
            </p>
          </div>

          <div className="mt-20">
            <h2 className={h2}>Switching Over, Step by Step</h2>
            <ol className="space-y-5">
              {switchSteps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green text-white text-xs font-bold font-mono flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
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
        title="Take the Phone Off the Counter"
        body="We set up a pilot around a few tee times so you can see how many calls pre-orders replace before committing to anything."
      />
      <SiteFooter />
    </div>
  );
}
