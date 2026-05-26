import type { Metadata } from "next";
import Image from "next/image";
import {
  QrCodeIcon,
  SquaresFourIcon,
  CurrencyDollarSimpleIcon,
  ArrowsCounterClockwiseIcon,
  DeviceTabletIcon,
} from "@phosphor-icons/react/dist/ssr";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Foreturn IQ — One Pager",
  robots: { index: false, follow: false },
};

const steps = [
  {
    number: "01",
    title: "Golfer receives a link or scans a QR code",
    body: "A pre-order link is included with their tee time confirmation so they can order before they arrive. For walk-ins, a QR code on the golf cart gets them there on the spot. No app download, no account required. They browse the menu and pay by card from their phone.",
  },
  {
    number: "02",
    title: "They choose a pickup window",
    body: "Before Round, At Turn, or After Round. Each window has its own timing logic so the kitchen knows exactly when to prep.",
  },
  {
    number: "03",
    title: "Order lands in the kitchen dashboard",
    body: "Tickets appear instantly, bucketed by timing: Prepare Now, Coming Up, Later Today. Each shows predicted arrival and prep start 15 minutes before the golfer gets there.",
  },
  {
    number: "04",
    title: "Golfer picks up with a 4-character code",
    body: "Every order gets a unique code. Staff calls it out. No name-spelling over background noise, no counter confusion when multiple groups finish the same hole.",
  },
];

const features = [
  {
    Icon: SquaresFourIcon,
    text: "Live kitchen order queue with timed prep windows",
  },
  {
    Icon: DeviceTabletIcon,
    text: "Menu builder, add items, set pricing, toggle availability, no code",
  },
  {
    Icon: CurrencyDollarSimpleIcon,
    text: "Direct Stripe settlement to your course's account",
  },
  {
    Icon: ArrowsCounterClockwiseIcon,
    text: "Quick reorder for returning golfers, previous order pre-populated",
  },
  {
    Icon: QrCodeIcon,
    text: "4-character pickup codes for clean, fast fulfillment",
  },
  {
    Icon: DeviceTabletIcon,
    text: "Works on any tablet or browser, no hardware to install",
  },
];

export default function OnePager() {
  return (
    <>
      <style>{`
        @media print {
          @page { size: letter; margin: 0; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
        }
      `}</style>

      {/* Print button — hidden when printing */}
      <div className="no-print fixed top-4 right-4 z-50">
        <PrintButton />
      </div>

      <div className="min-h-screen bg-white font-[var(--font-geist-sans)] max-w-[816px] mx-auto">
        {/* Header */}
        <header className="relative h-[260px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1600&q=85"
            alt="Golf course"
            fill
            className="object-cover object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-[#1B3068]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

          <div className="relative h-full flex flex-col justify-between px-10 py-8">
            <div className="flex items-start justify-between gap-8">
              <div className="bg-white rounded-lg px-2 py-1">
                <Image
                  src="/logo.png"
                  alt="Foreturn IQ"
                  width={96}
                  height={30}
                  priority
                />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 mt-1">
                Golf Course F&amp;B Pre-Ordering
              </span>
            </div>
            <div>
              <h1 className="text-[2.6rem] font-bold tracking-tighter leading-[1] text-white mb-2">
                More F&amp;B Revenue Per Round.
                <br />
                Zero New Hardware.
              </h1>
              <p className="text-white/55 text-sm max-w-[52ch]">
                Golfers pre-order food and drinks before their round. Your
                kitchen gets a timed queue. No counter, no missed tickets, no
                paper sheets.
              </p>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="grid grid-cols-[1.15fr_1fr] gap-0 min-h-[calc(100vh-260px-60px)]">
          {/* Left — Problem + Flow */}
          <div className="px-10 py-8 border-r border-slate-100">
            {/* Problem */}
            <div className="mb-8">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[9px] font-semibold uppercase tracking-[0.18em] text-[#3AAA35] bg-[#3AAA35]/10 border border-[#3AAA35]/20 mb-3">
                The Problem
              </span>
              <p className="text-[13px] text-gray-600 leading-relaxed">
                F&amp;B revenue gets left on the table at the counter. Golfers
                skip the line before their round, rush through the turn, and GPS
                screen orders go unmonitored. League nights still run on paper
                sheets. Foreturn IQ closes the gap between demand and
                fulfillment.
              </p>
            </div>

            {/* How it works */}
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[9px] font-semibold uppercase tracking-[0.18em] text-[#3AAA35] bg-[#3AAA35]/10 border border-[#3AAA35]/20 mb-4">
              How It Works
            </span>

            <div className="space-y-3">
              {steps.map(({ number, title, body }) => (
                <div key={number} className="flex gap-3.5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1B3068] flex items-center justify-center mt-0.5">
                    <span className="text-white text-[10px] font-bold font-mono">
                      {number}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[13px] text-[#1B3068] mb-0.5">
                      {title}
                    </p>
                    <p className="text-[12px] text-gray-500 leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Features + Setup + Pilot */}
          <div className="px-8 py-8 flex flex-col gap-7">
            {/* Features */}
            <div>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[9px] font-semibold uppercase tracking-[0.18em] text-[#3AAA35] bg-[#3AAA35]/10 border border-[#3AAA35]/20 mb-4">
                Features
              </span>
              <div className="space-y-2.5">
                {features.map(({ Icon, text }) => (
                  <div key={text} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-5 h-5 rounded-md bg-slate-100 flex items-center justify-center mt-0.5">
                      <Icon
                        size={11}
                        weight="duotone"
                        className="text-[#1B3068]"
                      />
                    </div>
                    <p className="text-[12px] text-gray-600 leading-snug">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100" />

            {/* Setup */}
            <div>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[9px] font-semibold uppercase tracking-[0.18em] text-[#3AAA35] bg-[#3AAA35]/10 border border-[#3AAA35]/20 mb-3">
                Setup
              </span>
              <p className="text-[12px] text-gray-600 leading-relaxed">
                I handle the menu setup. The course doesn&apos;t have to do
                anything. A pre-order link goes out with tee time confirmations
                or a QR code goes on the carts. Live the same afternoon. No dev
                work, no hardware, no staff retraining.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100" />

            {/* Pilot */}
            <div className="rounded-2xl bg-[#1B3068] p-5 mt-auto">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[9px] font-semibold uppercase tracking-[0.18em] text-[#3AAA35] bg-white/8 border border-white/15 mb-3">
                Pilot Program
              </span>
              <p className="text-white text-[13px] font-semibold mb-1.5">
                See the impact before committing.
              </p>
              <p className="text-white/55 text-[12px] leading-relaxed">
                We run a pilot around a few tee times so you can measure the
                exact effect on your F&amp;B numbers. No commitment required
                until you see results.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-100 px-10 py-4 flex items-center justify-between bg-white">
          <Image
            src="/logo.png"
            alt="Foreturn IQ"
            width={80}
            height={26}
            className="opacity-40"
          />
          <div className="flex items-center gap-6 text-[11px] text-gray-400">
            <span>dominick@foreturniq.com</span>
            <span>foreturniq.com</span>
          </div>
        </footer>
      </div>
    </>
  );
}
