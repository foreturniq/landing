import Image from "next/image";
import DemoForm from "./components/DemoForm";
import HeroMockup from "./components/HeroMockup";
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
} from "./components/PlatformMockups";

const benefits = [
  {
    Icon: CurrencyDollarSimpleIcon,
    title: "Higher spend before they arrive",
    body: "Golfers pre-order from home, the parking lot, or the pro shop — before their round starts. Without a line or a tee time counting down, they browse more and add more. Pre-orders consistently outpace counter transactions on average ticket.",
  },
  {
    Icon: TrendUpIcon,
    title: "Higher ticket, no upselling required",
    body: "Browsing a menu from the cart seat, without time pressure, golfers add more. Counter transactions compete with their tee time. The app doesn't.",
  },
  {
    Icon: TimerIcon,
    title: "Your kitchen knows when, not just what",
    body: "The order queue organizes tickets by timing: Prepare Now, Coming Up, Later Today. Each shows when to start prepping — 15 minutes before the golfer arrives.",
  },
  {
    Icon: WrenchIcon,
    title: "Live in one afternoon",
    body: "Print a QR code for the cart. Build your menu in the admin panel. Payments settle directly to your Stripe account. No hardware, no training, no dev work.",
  },
];

const platformFeatures = [
  {
    tag: "Kitchen",
    name: "Real-time order queue",
    body: "Orders arrive in a live dashboard bucketed by timing: Prepare Now, Coming Up, and Later Today. Each ticket shows the golfer's predicted arrival and when to start prepping — 15 minutes before they get there.",
    Mockup: OrderQueueMockup,
  },
  {
    tag: "Ordering",
    name: "Three pickup windows",
    body: "Golfers choose Before Round, At Turn, or After Round when they order. Each window has its own timing logic — predicted arrival and prep start are calculated automatically.",
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
    body: "Create items with a name, price, category, and which ordering windows they're available in. Activate and deactivate from the admin panel any time — no code, no support ticket.",
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
    body: "A QR code on the cart links to the ordering page. They choose items, select Before Round, At Turn, or After Round, and pay with a card.",
  },
  {
    number: "03",
    title: "Kitchen preps to the ticket",
    body: "Orders land in a timed queue. Each ticket shows when to start and a 4-character pickup code. Golfer arrives, calls the code, grabs their order.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-5 max-w-7xl mx-auto w-full">
        <div className="bg-white rounded-lg px-3 py-1.5">
          <Image
            src="/logo.png"
            alt="Foreturn IQ"
            width={140}
            height={46}
            priority
          />
        </div>
        <a
          href="#demo"
          className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-lg bg-green text-white font-semibold text-sm transition-btn hover:opacity-90 active:scale-[0.97]"
        >
          Request Demo
        </a>
      </nav>

      {/* Hero — photo background */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        {/* Golf course photo — blurred slightly for text legibility */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1920&q=85"
            alt="Golf course fairway with lush green grass, trees, and open sky"
            fill
            className="object-cover object-center scale-105 blur-[3px]"
            priority
          />
        </div>
        {/* Navy brand overlay */}
        <div className="absolute inset-0 bg-navy/70" />
        {/* Top gradient for nav legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />

        <div className="relative max-w-7xl mx-auto px-8 pt-28 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="max-w-[580px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-green mb-6 animate-fade-up">
                Not Your Cart Screen
              </p>
              <h1
                className="text-5xl md:text-[4.25rem] font-bold tracking-tighter leading-[0.95] text-white mb-7 animate-fade-up"
                style={{ animationDelay: "60ms" }}
              >
                Ordered on<br />Their Phone.<br />Before the Turn.
              </h1>
              <p
                className="text-lg text-white/55 leading-relaxed max-w-[42ch] mb-10 animate-fade-up"
                style={{ animationDelay: "120ms" }}
              >
                Cart screens wait for golfers to stop. Foreturn IQ captures
                the food and beverage order — and payment — mid-round, on
                the golfer&apos;s own phone. By the time they reach the turn, the transaction is
                done and your kitchen has a timed prep queue — not just an
                order list.
              </p>
              <div
                className="flex flex-wrap items-center gap-4 animate-fade-up"
                style={{ animationDelay: "180ms" }}
              >
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-green text-white font-bold text-base transition-btn hover:opacity-90 active:scale-[0.97]"
                >
                  See How It Works
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <p className="text-sm text-white/35">
                  Limited pilot spots available
                </p>
              </div>
            </div>

            <HeroMockup />
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <div className="py-3.5 px-6 text-center text-[11px] font-medium text-white/65 tracking-wide bg-[#152654]">
        Currently piloting with courses across the country — spots are limited.
      </div>

      {/* Benefits */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.2fr] gap-12 lg:gap-24">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-green mb-4">
              The Impact
            </p>
            <h2 className="text-4xl font-bold tracking-tighter text-navy leading-tight">
              What Changes at Your Course
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed text-sm max-w-[34ch]">
              Four direct effects on the numbers that matter to an F&amp;B operation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t border-slate-100">
            {benefits.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="pt-8 pb-8 border-b border-slate-100 group scroll-reveal"
              >
                <div className="w-9 h-9 rounded-lg bg-navy/5 flex items-center justify-center mb-4 transition-[background-color,transform] duration-200 group-hover:bg-navy/10 group-hover:scale-105">
                  <Icon size={18} weight="duotone" className="text-navy" />
                </div>
                <h3 className="font-semibold text-base text-navy mb-2">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform features — mockup grid */}
      <section className="border-t border-slate-100 px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-green mb-4">
              The Platform
            </p>
            <h2 className="text-4xl font-bold tracking-tighter text-navy max-w-xl">
              What Your Team Actually Gets
            </h2>
            <p className="text-gray-500 mt-4 text-sm leading-relaxed max-w-[46ch]">
              Every feature currently in the product, relevant to running a course.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {platformFeatures.map(({ tag, name, body, Mockup }) => (
              <div key={name} className="scroll-reveal">
                <div className="h-72 rounded-xl overflow-hidden mb-5">
                  <Mockup />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-green/70">
                  {tag}
                </span>
                <h3 className="font-semibold text-sm text-navy mt-1.5 mb-2">
                  {name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#f7f9fc] px-8 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start">
          <div className="lg:pt-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-green mb-4">
              The Process
            </p>
            <h2 className="text-4xl font-bold tracking-tighter text-navy leading-tight mb-4">
              Simple by Design
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[34ch]">
              No new hardware. No staff retraining. Just more fulfilled orders.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-5 bottom-10 w-px bg-slate-200" />
            <div className="space-y-0">
              {steps.map((s) => (
                <div
                  key={s.number}
                  className="relative flex gap-8 pb-12 last:pb-0 scroll-reveal"
                >
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-green flex items-center justify-center shadow-sm">
                    <span className="text-white text-[11px] font-bold font-mono">
                      {s.number}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-base text-navy mb-1.5">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section id="demo" className="px-8 py-24 bg-navy">
        <div className="max-w-lg mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-green mb-4 text-center">
            Request a Pilot
          </p>
          <h2 className="text-4xl font-bold tracking-tighter text-white text-center mb-3">
            Run a Pilot at Your Course
          </h2>
          <p className="text-white/45 text-center mb-10 text-sm leading-relaxed">
            We&apos;ll set everything up around a few tee times and show you
            exactly what kind of impact Foreturn IQ can have.
          </p>
          <DemoForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-7 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
        <Image
          src="/logo.png"
          alt="Foreturn IQ"
          width={100}
          height={34}
          className="opacity-50"
        />
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Foreturn IQ. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
