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
    const inView = new Set<string>();

    const flush = (id: string) => {
      const entered = enteredAt.get(id);
      if (!entered) return;
      enteredAt.delete(id);
      const section = SECTIONS.find((s) => s.id === id);
      const seconds = Math.round((Date.now() - entered) / 1000);
      // Only fire if they spent at least 1 second; filters out instant scrolls
      if (section && seconds >= 1) {
        window.gtag?.("event", "section_time", {
          section_name: section.name,
          seconds_spent: seconds,
        });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = SECTIONS.find((s) => s.id === entry.target.id);
          if (!section) return;

          if (entry.isIntersecting) {
            inView.add(section.id);
            // Fire section_view once
            if (!viewFired.has(section.id)) {
              viewFired.add(section.id);
              window.gtag?.("event", "section_view", {
                section_name: section.name,
              });
            }
            // Record entry time for dwell tracking
            if (document.visibilityState === "visible") {
              enteredAt.set(section.id, Date.now());
            }
          } else {
            inView.delete(section.id);
            flush(section.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Tab hidden: flush and stop the clock. Tab visible again: restart the
    // clock for sections still on screen, so time away is never counted
    // and nothing is double-reported.
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        [...enteredAt.keys()].forEach(flush);
      } else {
        const now = Date.now();
        inView.forEach((id) => enteredAt.set(id, now));
      }
    };

    window.addEventListener("visibilitychange", handleVisibility);
    return () => {
      observer.disconnect();
      window.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return null;
}
