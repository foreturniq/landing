"use client";

import { useEffect } from "react";

const SECTIONS = [
  { id: "section-hero", name: "hero" },
  { id: "section-benefits", name: "benefits" },
  { id: "section-platform", name: "platform" },
  { id: "section-process", name: "how_it_works" },
  { id: "demo", name: "demo_cta" },
];

export default function SectionTracker() {
  useEffect(() => {
    const fired = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !fired.has(entry.target.id)) {
            fired.add(entry.target.id);
            const section = SECTIONS.find((s) => s.id === entry.target.id);
            if (section && typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "section_view", {
                section_name: section.name,
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
