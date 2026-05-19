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
    const viewFired = new Set<string>();
    const enteredAt = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = SECTIONS.find((s) => s.id === entry.target.id);
          if (!section) return;

          if (entry.isIntersecting) {
            // Fire section_view once
            if (!viewFired.has(section.id)) {
              viewFired.add(section.id);
              window.gtag?.("event", "section_view", {
                section_name: section.name,
              });
            }
            // Record entry time for dwell tracking
            enteredAt.set(section.id, Date.now());
          } else {
            // Section left viewport — fire section_time if we have an entry timestamp
            const entered = enteredAt.get(section.id);
            if (entered) {
              const seconds = Math.round((Date.now() - entered) / 1000);
              enteredAt.delete(section.id);
              // Only fire if they spent at least 1 second — filters out instant scrolls
              if (seconds >= 1) {
                window.gtag?.("event", "section_time", {
                  section_name: section.name,
                  seconds_spent: seconds,
                });
              }
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

    // Fire any remaining dwell times on page unload
    const handleUnload = () => {
      enteredAt.forEach((entered, id) => {
        const section = SECTIONS.find((s) => s.id === id);
        const seconds = Math.round((Date.now() - entered) / 1000);
        if (section && seconds >= 1) {
          window.gtag?.("event", "section_time", {
            section_name: section.name,
            seconds_spent: seconds,
          });
        }
      });
    };

    window.addEventListener("visibilitychange", handleUnload);
    return () => {
      observer.disconnect();
      window.removeEventListener("visibilitychange", handleUnload);
    };
  }, []);

  return null;
}
