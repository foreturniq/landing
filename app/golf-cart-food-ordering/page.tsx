import type { Metadata } from "next";
import Image from "next/image";
import DemoForm from "../components/DemoForm";
import SectionTracker from "../components/SectionTracker";

export const metadata: Metadata = {
  title: "Golf Cart Food Ordering System That Staff Actually See",
  description:
    "Most golf cart GPS ordering systems fire orders to a screen nobody's watching. Foreturn IQ sends every order directly to your kitchen dashboard. No missed tickets, no dead GPS screens.",
  alternates: { canonical: "/golf-cart-food-ordering" },
  openGraph: {
    type: "website",
    url: "https://foreturniq.com/golf-cart-food-ordering",
    siteName: "Foreturn IQ",
    title: "Golf Cart Food Ordering System That Staff Actually See",
    description:
      "Most golf cart GPS ordering systems fire orders to a screen nobody's watching. Foreturn IQ sends every order directly to your kitchen dashboard.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Foreturn IQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golf Cart Food Ordering System That Staff Actually See",
    description:
      "GPS cart screens fire orders your staff never sees. Foreturn IQ routes every ticket straight to the kitchen dashboard.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://foreturniq.com/#organization",
      name: "Foreturn IQ",
      url: "https://foreturniq.com",
      logo: "https://foreturniq.com/logo.png",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://foreturniq.com/golf-cart-food-ordering#app",
      name: "Foreturn IQ — Golf Cart Food Ordering",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Golf cart food ordering system that routes orders directly to a live kitchen dashboard, eliminating missed tickets from unmonitored GPS screens.",
      url: "https://foreturniq.com/golf-cart-food-ordering",
      publisher: { "@id": "https://foreturniq.com/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://foreturniq.com/golf-cart-food-ordering",
      url: "https://foreturniq.com/golf-cart-food-ordering",
      name: "Golf Cart Food Ordering System | Foreturn IQ",
      isPartOf: { "@id": "https://foreturniq.com/#website" },
    },
  ],
};

const benefits = [
  {
    title: "Orders go to the kitchen, not a screen",
    body: "When a golfer orders from their phone, the ticket lands instantly in a live kitchen dashboard. Your staff sees it the moment it fires — no GPS screen to watch, no orders sitting unseen.",
  },
  {
    title: "Works alongside your existing GPS system",
    body: "Nothing gets ripped out. A QR code on the cart sends golfers to the Foreturn IQ ordering page. Your GPS keeps running. The food and beverage ordering actually gets fulfilled.",
  },
  {
    title: "Timed queue, not just a ticket list",
    body: "The kitchen dashboard buckets orders by when to prep: Prepare Now, Coming Up, Later Today. Each ticket shows the golfer's predicted arrival so prep starts 15 minutes before they get there.",
  },
  {
    title: "No new hardware, no retraining",
    body: "The dashboard runs in any browser. Any tablet or computer behind the counter works. Setup takes one afternoon. Nothing for your team to learn from scratch.",
  },
];

const steps = [
  {
    number: "01",
    title: "Golfer scans the QR code on the cart",
    body: "A sticker on the golf cart links directly to your ordering page. No app download, no account. They browse your menu and pay from their phone.",
  },
  {
    number: "02",
    title: "Order lands in the kitchen dashboard",
    body: "The ticket appears instantly in your live order queue, bucketed by timing. Staff sees it immediately — not when someone happens to glance at the GPS screen.",
  },
  {
    number: "03",
    title: "Golfer picks up with a 4-character code",
    body: "Every order gets a unique code. Staff calls it out when ready. No name-spelling over background noise, no confusion at a busy counter.",
  },
];

export default function GolfCartFoodOrderingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SectionTracker />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav */}
      <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between gap-6 px-4 py-2.5 rounded-full bg-white border border-black/8 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] w-full max-w-xl">
          <a href="/">
            <Image src="/logo.png" alt="Foreturn IQ" width={96} height={32} priority />
          </a>
          <a
            href="#demo"
            className="group hidden sm:inline-flex items-center gap-1.5 pl-5 pr-1.5 py-1.5 rounded-full bg-green text-white font-semibold text-sm [transition:opacity_200ms_cubic-bezier(0.23,1,0.32,1),transform_160ms_cubic-bezier(0.23,1,0.32,1)] hover:opacity-90 active:scale-[0.97]"
          >
            Request Demo
            <span className="w-7 h-7 rounded-full bg-black/25 flex items-center justify-center btn-arrow-sm">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6h8M6.5 2.5L10 6l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section id="section-hero" className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1920&q=85"
            alt="Golf cart on a golf course fairway"
            fill
            className="object-cover object-center scale-105 blur-[3px]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />

        <div className="relative max-w-7xl mx-auto px-8 pt-28 pb-20 w-full">
          <div className="max-w-[680px]">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green/15 border border-green/30 text-[10px] font-semibold uppercase tracking-[0.2em] text-green mb-7 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-green flex-shrink-0" />
              Golf Cart Food Ordering
            </span>
            <h1
              className="text-[3.5rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem] font-bold tracking-tighter leading-[0.92] text-white mb-7 animate-fade-up"
              style={{ animationDelay: "60ms" }}
            >
              Your GPS Screens<br />Take Orders.<br />Nobody&apos;s Watching Them.
            </h1>
            <p
              className="text-lg text-white/55 leading-relaxed max-w-[46ch] mb-10 animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              GPS cart screens can fire food and beverage orders. But when the
              counter is busy, those tickets sit unseen and unfulfilled. Foreturn
              IQ routes every order directly to a kitchen dashboard your staff
              actually monitors.
            </p>
            <div
              className="flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "180ms" }}
            >
              <a
                href="#demo"
                className="group inline-flex items-center gap-3 pl-7 pr-2 py-2 rounded-full bg-green text-white font-bold text-base [transition:opacity_200ms_cubic-bezier(0.23,1,0.32,1),transform_160ms_cubic-bezier(0.23,1,0.32,1)] hover:opacity-90 active:scale-[0.97]"
              >
                See How It Works
                <span className="w-9 h-9 rounded-full bg-black/20 flex items-center justify-center btn-arrow-lg">
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <p className="text-sm text-white/35">Limited pilot spots available</p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-3.5 px-6 text-center text-[11px] font-medium text-white/65 tracking-wide bg-[#152654]">
        Currently piloting with golf courses across the country. Spots are limited.
      </div>

      {/* Benefits */}
      <section id="section-benefits" className="px-8 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.2fr] gap-12 lg:gap-20">
          <div className="lg:pt-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-green bg-green/10 border border-green/20 mb-5">
              The Fix
            </span>
            <h2 className="text-4xl font-bold tracking-tighter text-navy leading-tight">
              Orders That Actually Get Fulfilled
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed text-sm max-w-[34ch]">
              The problem isn&apos;t golfer demand. It&apos;s that the order never
              reaches the right hands.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map(({ title, body }, i) => (
              <div
                key={title}
                className="p-1.5 rounded-[1.5rem] bg-slate-100/70 border border-slate-200/80 scroll-reveal group"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] p-6 h-full flex flex-col">
                  <h3 className="font-semibold text-[15px] text-navy mb-2.5">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="section-process" className="bg-[#f7f9fc] px-8 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start">
          <div className="lg:pt-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-green bg-green/10 border border-green/20 mb-5">
              How It Works
            </span>
            <h2 className="text-4xl font-bold tracking-tighter text-navy leading-tight mb-4">
              QR Code on the Cart.<br />Dashboard Behind the Counter.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[34ch]">
              No GPS hardware swap. No screen nobody watches. Just a direct line
              from the golfer to your kitchen.
            </p>
          </div>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div
                key={s.number}
                className="p-1.5 rounded-[1.5rem] bg-white/90 border border-slate-200/70 scroll-reveal"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] px-6 py-5 flex gap-5 items-start">
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

      {/* Demo CTA */}
      <section id="demo" className="px-8 py-32 bg-navy">
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-green bg-white/8 border border-white/15">
              Request a Pilot
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tighter text-white text-center mb-3">
            Stop Losing Orders at the Counter
          </h2>
          <p className="text-white/45 text-center mb-10 text-sm leading-relaxed">
            We set up a pilot around a few tee times so you can see exactly how
            many orders get fulfilled versus what you&apos;re currently losing.
          </p>
          <div className="p-1.5 rounded-[2rem] bg-white/5 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="rounded-[calc(2rem-0.375rem)] px-6 py-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]">
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 border-t border-white/8 bg-navy flex flex-wrap items-center justify-between gap-4">
        <Image
          src="/logo.png"
          alt="Foreturn IQ"
          width={100}
          height={34}
          className="opacity-35"
        />
        <p className="text-xs text-white/25">
          &copy; {new Date().getFullYear()} Foreturn IQ. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
