import Image from "next/image";
import DemoForm from "../components/DemoForm";
import HeroMockup from "../components/HeroMockup";
import {
  CurrencyDollarSimpleIcon,
  TrendUpIcon,
  TimerIcon,
  WrenchIcon,
} from "@phosphor-icons/react/dist/ssr";
import {
  OrderQueueMockup,
  OrderingWindowsMockup,
  PickupCodeMockup,
  PaymentsMockup,
  MenuBuilderMockup,
  QuickReorderMockup,
} from "../components/PlatformMockups";

const benefits = [
  {
    Icon: CurrencyDollarSimpleIcon,
    title: "Higher spend before they arrive",
    body: "Golfers pre-order food and drinks from home, the parking lot, or the pro shop before their round starts. Without a line or a tee time counting down, they browse more and spend more. Mobile pre-orders consistently outpace counter transactions on average ticket.",
  },
  {
    Icon: TrendUpIcon,
    title: "Higher ticket, no upselling required",
    body: "Browsing a food and beverage menu from the cart seat, without time pressure, golfers add more. Counter transactions compete with their tee time. A pre-order screen doesn't.",
  },
  {
    Icon: TimerIcon,
    title: "Your kitchen knows when, not just what",
    body: "The order queue organizes tickets by timing: Prepare Now, Coming Up, Later Today. Each shows when to start prepping, 15 minutes before the golfer arrives.",
  },
  {
    Icon: WrenchIcon,
    title: "Live in one afternoon",
    body: "Print a QR code for the golf cart. Build your food and beverage menu in the admin panel. Payments settle directly to your Stripe account. No hardware, no training, no dev work.",
  },
];

const platformFeatures = [
  {
    tag: "Kitchen",
    name: "Real-time order queue",
    body: "Orders arrive in a live dashboard bucketed by timing: Prepare Now, Coming Up, and Later Today. Each ticket shows the golfer's predicted arrival and when to start prepping, 15 minutes before they get there.",
    Mockup: OrderQueueMockup,
  },
  {
    tag: "Ordering",
    name: "Three pickup windows",
    body: "Golfers choose Before Round, At Turn, or After Round when they order. Each window has its own timing logic. Predicted arrival and prep start are calculated automatically.",
    Mockup: OrderingWindowsMockup,
  },
  {
    tag: "Fulfillment",
    name: "4-character pickup codes",
    body: "Every order gets a unique code. Staff calls it out, the golfer picks up. No name-spelling over background noise, no confusion when multiple groups finish the same hole.",
    Mockup: PickupCodeMockup,
  },
  {
    tag: "Payments",
    name: "Direct Stripe settlement",
    body: "Payments go from the golfer's card straight to your course's Stripe account. A service fee is charged to the golfer per order. No third-party wallet, no delayed payouts.",
    Mockup: PaymentsMockup,
  },
  {
    tag: "Setup",
    name: "Menu builder",
    body: "Create food and beverage items with a name, price, category, and which ordering windows they're available in. Activate and deactivate from the admin panel any time. No code, no support ticket.",
    Mockup: MenuBuilderMockup,
  },
  {
    tag: "Retention",
    name: "Golfer quick reorder",
    body: "Returning golfers see their previous order pre-populated when they scan. One tap to reorder. Reduces ordering friction and increases repeat conversion at the cart.",
    Mockup: QuickReorderMockup,
  },
];

const steps = [
  {
    number: "01",
    title: "Build your menu",
    body: "Add items to the admin panel: name, price, category, and which ordering window they're available in. Takes about 20 minutes.",
  },
  {
    number: "02",
    title: "Golfers scan and pay",
    body: "A QR code on the golf cart links to the pre-order page. They choose items, select Before Round, At Turn, or After Round, and pay with a card.",
  },
  {
    number: "03",
    title: "Kitchen preps to the ticket",
    body: "Orders land in a timed queue. Each ticket shows when to start and a 4-character pickup code. Golfer arrives, calls the code, grabs their order.",
  },
];

// Literal class strings required for Tailwind scanning
const bentoSpans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-8",
  "lg:col-span-4",
];

export default function V2Page() {
  return (
    <div className="min-h-screen bg-[#0d1f3c] text-white">

      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between gap-6 px-4 py-2.5 rounded-full bg-navy/80 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] w-full max-w-xl">
          <Image src="/logo.png" alt="Foreturn IQ" width={96} height={32} priority />
          <a
            href="#demo"
            className="group hidden sm:inline-flex items-center gap-1.5 pl-5 pr-1.5 py-1.5 rounded-full bg-green text-white font-semibold text-sm hover:opacity-90 active:scale-[0.97] transition-all"
          >
            Request Demo
            <span className="w-7 h-7 rounded-full bg-black/25 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1920&q=85"
            alt="Golf course fairway with lush green grass, trees, and open sky"
            fill
            className="object-cover object-center scale-105 blur-[3px]"
            priority
          />
          <div className="absolute inset-0 bg-navy/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(58,170,53,0.06),transparent)]" />
        </div>

        {/* Grid column lines */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white/5" />
          <div className="absolute top-0 bottom-0 right-1/3 w-px bg-white/5" />
          <div className="absolute left-0 right-0 top-1/2 h-px bg-white/3" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8 pt-28 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="max-w-[620px]">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green/15 border border-green/30 text-[10px] font-semibold uppercase tracking-[0.2em] text-green mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-green flex-shrink-0" />
                For Golf Course F&amp;B Operations
              </span>
              <h1 className="text-[3.75rem] sm:text-[4.75rem] md:text-[5.5rem] lg:text-[6rem] font-bold tracking-tighter leading-[0.92] text-white mb-4">
                More F&amp;B Revenue Per Round.<br />Zero New Hardware.
              </h1>
              <p className="text-sm text-white/50 font-medium mb-4">
                For general managers, assistant managers, and F&amp;B directors.
              </p>
              <p className="text-lg text-white/55 leading-relaxed max-w-[42ch] mb-10">
                Golfers order food and beverage before their round starts,
                from their own phone. No counter, no line, no lost revenue at
                the turn. Your kitchen gets a timed queue that shows when to
                start prep, not just what was ordered. Nothing to install.
                Nobody to retrain.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#demo"
                  className="group inline-flex items-center gap-3 pl-7 pr-2 py-2 rounded-full bg-green text-white font-bold text-base hover:opacity-90 active:scale-[0.97] transition-all"
                >
                  See How It Works
                  <span className="w-9 h-9 rounded-full bg-black/20 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105 transition-transform">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
                <p className="text-sm text-white/35">Limited pilot spots available</p>
              </div>
            </div>
            <HeroMockup />
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF STRIP ──────────────────────────────────── */}
      <div className="py-3.5 px-6 text-center text-[11px] font-medium text-white/65 tracking-wide bg-navy/80 backdrop-blur-sm border-y border-white/8">
        Currently piloting with golf courses across the country. Spots are limited.
      </div>

      {/* ── BENEFITS ─────────────────────────────────────────────── */}
      <section className="px-8 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.2fr] gap-12 lg:gap-20">
          <div className="lg:pt-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-green bg-green/10 border border-green/20 mb-5">
              The Impact
            </span>
            <h2 className="text-4xl font-bold tracking-tighter text-white leading-tight">
              What Changes for Your F&amp;B Operation
            </h2>
            <p className="text-white/45 mt-4 leading-relaxed text-sm max-w-[34ch]">
              Four direct effects on the numbers that matter to golf course GMs
              and F&amp;B managers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="p-1.5 rounded-[1.5rem] bg-white/5 border border-white/10 group"
              >
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-white/5 p-6 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center mb-5 group-hover:bg-white/12 group-hover:scale-105 transition-all duration-300">
                    <Icon size={18} weight="duotone" className="text-green" />
                  </div>
                  <h3 className="font-semibold text-[15px] text-white mb-2.5">{title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM FEATURES ────────────────────────────────────── */}
      <section className="border-t border-white/8 px-8 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-green bg-green/10 border border-green/20 mb-5">
              The Platform
            </span>
            <h2 className="text-4xl font-bold tracking-tighter text-white max-w-xl">
              What Your Team Actually Gets
            </h2>
            <p className="text-white/45 mt-4 text-sm leading-relaxed max-w-[46ch]">
              Every feature currently in the product, built for F&amp;B managers
              running a golf course operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5">
            {platformFeatures.map(({ tag, name, body, Mockup }, i) => (
              <div
                key={name}
                className={`${bentoSpans[i]} p-1.5 rounded-[1.75rem] bg-white/5 border border-white/10 group hover:scale-[1.012] transition-transform duration-700`}
              >
                <div className="rounded-[calc(1.75rem-0.375rem)] overflow-hidden bg-white/5">
                  <div className="h-72 lg:h-80 overflow-hidden">
                    <Mockup />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-green/70">
                      {tag}
                    </span>
                    <h3 className="font-semibold text-[15px] text-white mt-1.5 mb-2">{name}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="border-t border-white/8 px-8 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start">
          <div className="lg:pt-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-green bg-green/10 border border-green/20 mb-5">
              The Process
            </span>
            <h2 className="text-4xl font-bold tracking-tighter text-white leading-tight mb-4">
              Simple by Design
            </h2>
            <p className="text-white/45 text-sm leading-relaxed max-w-[34ch]">
              No new hardware. No staff retraining. Just more fulfilled orders.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((s) => (
              <div
                key={s.number}
                className="p-1.5 rounded-[1.5rem] bg-white/5 border border-white/8"
              >
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-white/5 px-6 py-5 flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green flex items-center justify-center shadow-sm mt-0.5">
                    <span className="text-white text-[11px] font-bold font-mono">{s.number}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[15px] text-white mb-1.5">{s.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO CTA ─────────────────────────────────────────────── */}
      <section id="demo" className="px-8 py-32 border-t border-white/8">
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-green bg-green/10 border border-green/20">
              Request a Pilot
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tighter text-white text-center mb-3">
            Run a Pilot at Your Course
          </h2>
          <p className="text-white/45 text-center mb-10 text-sm leading-relaxed">
            We set up a pilot around a few tee times so you can see the exact
            impact on your F&amp;B numbers before committing to anything.
          </p>
          <div className="p-1.5 rounded-[2rem] bg-white/5 border border-white/10">
            <div className="rounded-[calc(2rem-0.375rem)] px-6 py-7">
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="px-8 py-8 border-t border-white/8 flex flex-wrap items-center justify-between gap-4">
        <Image src="/logo.png" alt="Foreturn IQ" width={100} height={34} className="opacity-35" />
        <p className="text-xs text-white/25">
          &copy; {new Date().getFullYear()} Foreturn IQ. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
