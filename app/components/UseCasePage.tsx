import type { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";
import DemoForm from "./DemoForm";
import RelatedLinks from "./RelatedLinks";
import SectionTracker from "./SectionTracker";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";
import { FounderCard, NotReadyLinks } from "./Proof";
import { SITE_URL, breadcrumbJsonLd } from "../lib/site";

// Shared layout for the text-led use-case pages (call-ahead, shotgun starts,
// weather delays...). Each page passes its copy as data; structure, JSON-LD
// and the pilot form stay identical across the cluster.

type Item = { title: string; body: string };
type Faq = { q: string; a: string };

export type UseCaseContent = {
  path: string;
  label: string;
  h1: ReactNode;
  intro: string;
  heroCta: string;
  compare: { heading: string; before: string; rows: [string, string, string][]; note?: ReactNode };
  benefits: { heading: string; sub: string; items: Item[] };
  steps: { heading: ReactNode; sub: string; items: Item[] };
  faqs: Faq[];
  demo: { title: string; body: string };
};

const badge =
  "inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-green bg-green/10 border border-green/20 mb-5";

export default function UseCasePage({ c }: { c: UseCaseContent }) {
  const url = `${SITE_URL}${c.path}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: c.label,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      breadcrumbJsonLd(c.path, c.label),
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: c.faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <SectionTracker />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteNav />

      <section id="section-hero" className="bg-navy px-8 pt-40 pb-24">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs label={c.label} />
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green/15 border border-green/30 text-[10px] font-semibold uppercase tracking-[0.2em] text-green mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-green flex-shrink-0" />
            {c.label}
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white leading-[0.95] mb-7">
            {c.h1}
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-[58ch] mb-10">{c.intro}</p>
          <a
            href="#demo"
            className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-green text-white font-bold text-base [transition:opacity_200ms_cubic-bezier(0.23,1,0.32,1),transform_160ms_cubic-bezier(0.23,1,0.32,1)] hover:opacity-90 active:scale-[0.97]"
          >
            {c.heroCta}
          </a>
        </div>
      </section>

      <section id="section-compare" className="px-8 py-28">
        <div className="max-w-4xl mx-auto">
          <span className={badge}>Side by Side</span>
          <h2 className="text-4xl font-bold tracking-tighter text-navy leading-tight mb-8">{c.compare.heading}</h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[640px] text-sm text-left">
              <thead className="bg-slate-50 text-navy">
                <tr>
                  <th scope="col" className="px-5 py-4 w-[22%] font-semibold" />
                  <th scope="col" className="px-5 py-4 font-semibold">{c.compare.before}</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-green">Pre-order with Foreturn IQ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {c.compare.rows.map(([label, before, after]) => (
                  <tr key={label} className="align-top">
                    <th scope="row" className="px-5 py-4 font-semibold text-navy">{label}</th>
                    <td className="px-5 py-4 text-gray-500 leading-relaxed">{before}</td>
                    <td className="px-5 py-4 text-gray-700 leading-relaxed bg-green/5">{after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {c.compare.note && <p className="text-gray-600 leading-relaxed mt-8">{c.compare.note}</p>}
        </div>
      </section>

      <section id="section-benefits" className="bg-[#f7f9fc] px-8 py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2.2fr] gap-12 lg:gap-20">
          <div className="lg:pt-2">
            <span className={badge}>The Upgrade</span>
            <h2 className="text-4xl font-bold tracking-tighter text-navy leading-tight">{c.benefits.heading}</h2>
            <p className="text-gray-500 mt-4 leading-relaxed text-sm max-w-[34ch]">{c.benefits.sub}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {c.benefits.items.map(({ title, body }) => (
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

      <section id="section-process" className="px-8 py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start">
          <div className="lg:pt-2">
            <span className={badge}>How It Works</span>
            <h2 className="text-4xl font-bold tracking-tighter text-navy leading-tight mb-4">{c.steps.heading}</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[34ch]">{c.steps.sub}</p>
          </div>
          <div className="space-y-4">
            {c.steps.items.map((s, i) => (
              <div key={s.title} className="p-1.5 rounded-[1.5rem] bg-white/90 border border-slate-200/70">
                <div className="rounded-[calc(1.5rem-0.375rem)] bg-white px-6 py-5 flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green flex items-center justify-center shadow-sm mt-0.5">
                    <span className="text-white text-[11px] font-bold font-mono">{String(i + 1).padStart(2, "0")}</span>
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

      <section id="section-faq" className="bg-[#f7f9fc] px-8 py-28">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter text-navy mb-8">Common Questions</h2>
          <div className="space-y-8">
            {c.faqs.map(({ q, a }) => (
              <div key={q} className="border-t border-slate-200 pt-6">
                <h3 className="font-semibold text-[15px] text-navy mb-2">{q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="px-8 py-32 bg-navy">
        <div className="max-w-lg mx-auto">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] text-green bg-white/8 border border-white/15">
              Request a Pilot
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tighter text-white text-center mb-3">{c.demo.title}</h2>
          <p className="text-white/60 text-center mb-10 text-sm leading-relaxed">{c.demo.body}</p>
          <div className="p-1.5 rounded-[2rem] bg-white/5 border border-white/10">
            <div className="rounded-[calc(2rem-0.375rem)] px-6 py-7">
              <DemoForm />
            </div>
          </div>
          <NotReadyLinks />
          <FounderCard />
        </div>
      </section>

      <RelatedLinks current={c.path} />
      <SiteFooter />
    </div>
  );
}
