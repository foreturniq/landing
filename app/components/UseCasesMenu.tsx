"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { USE_CASES } from "../lib/site";

// "Use cases" dropdown for the floating top nav. The links are always in the
// server-rendered HTML (only visually hidden when closed), so crawlers see
// them. Items come from USE_CASES in lib/site.ts.
export default function UseCasesMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 rounded-full text-sm font-semibold text-navy whitespace-nowrap hover:bg-slate-100 transition-colors"
      >
        Use Cases
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        id={panelId}
        className={`absolute right-0 top-full mt-3 w-[min(20rem,calc(100vw-2rem))] p-1.5 rounded-[1.25rem] bg-white border border-black/8 shadow-[0_12px_40px_rgba(0,0,0,0.14)] ${open ? "" : "hidden"}`}
      >
        <ul>
          {USE_CASES.map((p) => {
            const current = pathname === p.href;
            return (
              <li key={p.href}>
                <Link
                  href={p.href}
                  aria-current={current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded-[0.9rem] px-4 py-3 transition-colors hover:bg-slate-50 ${current ? "bg-slate-50" : ""}`}
                >
                  <span className="block font-semibold text-sm text-navy">
                    {p.label}
                  </span>
                  <span className="block mt-0.5 text-xs text-gray-500 leading-relaxed">
                    {p.blurb}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
