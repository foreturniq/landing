import Image from "next/image";
import Link from "next/link";
import {
  FOUNDER,
  MENTIONS,
  PILOT_STATS,
  TESTIMONIALS,
} from "../lib/site";

// Every block here is data-driven from lib/site.ts and renders nothing until
// real data is added, so the page never shows placeholder proof.

export function PilotStats() {
  const { stats, updated } = PILOT_STATS;
  if (stats.length === 0) return null;
  return (
    <section aria-label="Pilot results" className="bg-white border-b border-slate-100 px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-xs font-medium text-gray-500">{s.label}</dt>
              <dd className="text-3xl font-bold tracking-tight text-navy font-mono mt-1">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
        {updated && (
          <p className="text-[11px] text-gray-400 mt-5">
            From live pilot courses. Updated {updated}.
          </p>
        )}
      </div>
    </section>
  );
}

export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;
  return (
    <section id="section-testimonials" className="border-t border-slate-100 px-8 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-green bg-green/10 border border-green/20 mb-5">
          From Pilot Courses
        </span>
        <h2 className="text-4xl font-bold tracking-tighter text-navy mb-12">
          What Operators Say
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.name}
              className="rounded-[1.5rem] bg-slate-50 border border-slate-200/80 p-6 flex flex-col"
            >
              <blockquote className="text-navy text-[15px] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 mt-6">
                {t.photo && (
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                )}
                <p className="text-sm">
                  <span className="block font-semibold text-navy">{t.name}</span>
                  <span className="block text-gray-500">
                    {t.role}, {t.course}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function MentionsStrip() {
  if (MENTIONS.length === 0) return null;
  return (
    <div className="max-w-7xl mx-auto mb-10 pb-8 border-b border-white/8">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-3">
        Featured In
      </p>
      <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
        {MENTIONS.map((m) => (
          <li key={m.url}>
            <a href={m.url} className="text-white/60 hover:text-white" rel="noopener">
              {m.outlet}: {m.title}
            </a>
            <span className="text-white/30"> · {m.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Secondary paths for visitors not ready to talk yet (dark background).
export function NotReadyLinks() {
  const link = "text-white/80 underline underline-offset-4 hover:text-white";
  return (
    <p className="mt-6 text-center text-sm text-white/45">
      Not ready to talk yet?{" "}
      <Link href="/pricing" className={link} data-track="pricing_click" data-cta-location="demo_section">
        See pricing
      </Link>{" "}
      or{" "}
      <Link href="/foreturn-iq-vs-parparty" className={link} data-track="compare_click" data-cta-location="demo_section">
        compare us to ParParty
      </Link>
      .
    </p>
  );
}

// One-line founder card for the demo section (dark background).
export function FounderCard() {
  return (
    <div className="mt-8 flex items-center justify-center gap-3 text-center">
      {FOUNDER.photo && (
        <Image
          src={FOUNDER.photo}
          alt={FOUNDER.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      )}
      <p className="text-sm text-white/55">
        Requests go straight to {FOUNDER.name}, {FOUNDER.role.toLowerCase()}.{" "}
        <Link href="/about" className="text-white/80 underline underline-offset-4 hover:text-white">
          About Foreturn IQ
        </Link>
      </p>
    </div>
  );
}
