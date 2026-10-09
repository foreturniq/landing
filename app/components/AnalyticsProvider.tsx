"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureAttribution, contentGroupFor, track } from "../lib/analytics";

// Site-wide tracking: attribution capture, content grouping on client-side
// navigation, and delegated click tracking for CTAs and contact links.
//
// Any element can opt in to a custom event with data-track="event_name"
// and an optional data-cta-location="hero".
export default function AnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    captureAttribution();
  }, []);

  useEffect(() => {
    window.gtag?.("set", { content_group: contentGroupFor(pathname) });
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const el = target?.closest?.("[data-track], a, button");
      if (!el) return;

      const text = (el.textContent ?? "").trim().replace(/\s+/g, " ").slice(0, 100);
      const location =
        el.getAttribute("data-cta-location") ??
        el.closest("section[id], [id^='section-'], #demo")?.id ??
        el.closest("header, nav, footer")?.tagName.toLowerCase() ??
        "unknown";

      const explicit = el.getAttribute("data-track");
      if (explicit) {
        track(explicit, { link_text: text, cta_location: location });
        return;
      }

      if (!(el instanceof HTMLAnchorElement)) return;
      const href = el.getAttribute("href") ?? "";

      if (href === "#demo" || href.endsWith("/#demo")) {
        track("cta_click", {
          cta_text: text,
          cta_location: location,
          cta_target: "demo",
        });
      } else if (href.startsWith("mailto:")) {
        track("contact_click", { method: "email", cta_location: location });
      } else if (href.startsWith("tel:")) {
        track("contact_click", { method: "phone", cta_location: location });
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
