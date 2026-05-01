import Image from "next/image";
import DemoForm from "./components/DemoForm";

const NAVY = "#1B3068";
const GREEN = "#3AAA35";

const benefits = [
  {
    icon: "💸",
    title: "Capture Lost Revenue",
    body: "Golfers skip the line and keep walking. Pre-orders lock in revenue that would otherwise disappear.",
  },
  {
    icon: "📈",
    title: "Higher Average Ticket",
    body: "When golfers aren't rushed, they order more. Pre-ordering consistently drives up average order value.",
  },
  {
    icon: "🍳",
    title: "Smooth Kitchen Demand",
    body: "Staggered pre-orders replace sudden turn-rush spikes, letting your staff work efficiently.",
  },
  {
    icon: "🎯",
    title: "Zero Heavy Lifting",
    body: "We take your existing menu and handle setup. Your team just fulfills orders as they come in.",
  },
];

const steps = [
  { number: "01", title: "Share your menu", body: "Send us your current turn menu — we handle the rest." },
  { number: "02", title: "Golfers pre-order", body: "A link goes out before tee time. Orders come in automatically." },
  { number: "03", title: "Ready on arrival", body: "Your team preps to a ticket. Golfers grab and go." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <Image src="/logo.png" alt="Foreturn IQ" width={180} height={60} priority />
        <a
          href="#demo"
          className="hidden sm:inline-block px-5 py-2.5 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: GREEN }}
        >
          Request Demo
        </a>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 text-center" style={{ backgroundColor: NAVY }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: GREEN }}>
            Turn Pre-Ordering for Golf Courses
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            Stop Losing Revenue at the Turn
          </h1>
          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
            Foreturn IQ lets golfers order food and drinks before they reach the
            clubhouse — so when they walk in, it&apos;s already waiting. No lines.
            No lost orders. More revenue per round.
          </p>
          <a
            href="#demo"
            className="inline-block px-8 py-4 rounded-lg text-white font-bold text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: GREEN }}
          >
            See How It Works →
          </a>
        </div>
      </section>

      {/* Social proof bar */}
      <div className="py-4 px-6 text-center text-sm font-medium text-white/80" style={{ backgroundColor: "#152654" }}>
        Currently piloting with courses across the country — spots are limited.
      </div>

      {/* Benefits */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2" style={{ color: NAVY }}>
          What Foreturn IQ Does for Your F&amp;B
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          A simple system with a direct impact on the numbers that matter.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: NAVY }}>
                {b.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20" style={{ backgroundColor: "#f7f9fc" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2" style={{ color: NAVY }}>
            Simple by Design
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-lg mx-auto">
            No new hardware. No staff retraining. Just more fulfilled orders.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.number} className="text-center">
                <div className="text-5xl font-extrabold mb-4" style={{ color: GREEN }}>
                  {s.number}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: NAVY }}>
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section id="demo" className="px-6 py-20" style={{ backgroundColor: NAVY }}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-2">
            Run a Pilot at Your Course
          </h2>
          <p className="text-white/60 text-center mb-10">
            We&apos;ll set everything up around a few tee times and show you exactly
            what kind of impact Foreturn IQ can have.
          </p>
          <DemoForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-100 text-center text-sm text-gray-400">
        <Image
          src="/logo.png"
          alt="Foreturn IQ"
          width={120}
          height={40}
          className="mx-auto mb-4 opacity-60"
        />
        © {new Date().getFullYear()} Foreturn IQ. All rights reserved.
      </footer>
    </div>
  );
}
