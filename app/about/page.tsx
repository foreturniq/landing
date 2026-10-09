import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "../components/Breadcrumbs";
import DemoSection from "../components/DemoSection";
import SiteFooter from "../components/SiteFooter";
import SiteNav from "../components/SiteNav";
import { FOUNDER, PRICING, SITE_URL, breadcrumbJsonLd } from "../lib/site";

export const metadata: Metadata = {
  title: "About the Founder",
  description:
    "Foreturn IQ is a golf course F&B pre-ordering platform built by founder Dominick Del Bosque. How it works, how it makes money, and how to reach the founder directly.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: `${SITE_URL}/about`,
    siteName: "Foreturn IQ",
    title: "About Foreturn IQ and Its Founder",
    description:
      "Who builds Foreturn IQ, how it makes money, and how to reach the founder directly.",
  },
};

const sameAs = [FOUNDER.linkedin, FOUNDER.x].filter(Boolean);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about`,
      url: `${SITE_URL}/about`,
      name: "About Foreturn IQ",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/about#founder` },
      breadcrumb: { "@id": `${SITE_URL}/about#breadcrumb` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/about#founder`,
      name: FOUNDER.name,
      jobTitle: FOUNDER.role,
      email: FOUNDER.email,
      worksFor: { "@id": `${SITE_URL}/#organization` },
      ...(FOUNDER.photo ? { image: `${SITE_URL}${FOUNDER.photo}` } : {}),
      ...(sameAs.length ? { sameAs } : {}),
    },
    breadcrumbJsonLd("/about", "About"),
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />

      <section className="bg-navy px-8 pt-40 pb-20">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs label="About" />
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter text-white leading-[0.95] mb-6">
            About Foreturn IQ
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-[56ch]">
            Foreturn IQ is a food and beverage pre-ordering platform for golf
            courses. Golfers order from their own phone before the round or at
            the turn, and the kitchen gets a timed queue that shows when to start
            prep, not just what was ordered.
          </p>
        </div>
      </section>

      <section className="px-8 py-20">
        <div className="max-w-3xl mx-auto space-y-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-navy mb-6">
              Who Builds It
            </h2>
            <div className="flex items-start gap-5">
              {FOUNDER.photo && (
                <Image
                  src={FOUNDER.photo}
                  alt={FOUNDER.name}
                  width={96}
                  height={96}
                  className="rounded-2xl object-cover flex-shrink-0"
                />
              )}
              <div>
                <p className="text-lg font-semibold text-navy">{FOUNDER.name}</p>
                <p className="text-gray-500 text-sm mb-4">
                  {FOUNDER.role}, Foreturn IQ
                </p>
                {FOUNDER.story.map((p) => (
                  <p key={p.slice(0, 40)} className="text-gray-600 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                <p className="text-gray-600 leading-relaxed">
                  Pilot requests come straight to {FOUNDER.name.split(" ")[0]}.
                  Email{" "}
                  <a
                    href={`mailto:${FOUNDER.email}`}
                    className="text-navy font-semibold underline underline-offset-4"
                  >
                    {FOUNDER.email}
                  </a>
                  {FOUNDER.linkedin && (
                    <>
                      {" "}or on{" "}
                      <a href={FOUNDER.linkedin} rel="me noopener" className="text-navy font-semibold underline underline-offset-4">
                        LinkedIn
                      </a>
                    </>
                  )}
                  .
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-navy mb-4">
              How Foreturn IQ Makes Money
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {PRICING.callout}{" "}
              Payments settle straight to the course&apos;s
              own Stripe account. There is no hardware to buy, no setup charge
              and no subscription.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-navy mb-4">
              Where We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Foreturn IQ is in its pilot phase, working with a limited number of
              courses. A pilot is set up around a few tee times so a course can
              see its own F&amp;B numbers before committing to anything.
            </p>
          </div>
        </div>
      </section>

      <DemoSection />
      <SiteFooter />
    </div>
  );
}
