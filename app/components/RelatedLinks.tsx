import { HUB, USE_CASES } from "../lib/site";
import Link from "next/link";

// Related block for use-case pages: sibling use cases first, then the hub.
// Chosen from the USE_CASES cluster in lib/site.ts, never at random.
export default function RelatedLinks({ current }: { current: string }) {
  const links = [...USE_CASES.filter((p) => p.href !== current), HUB];

  return (
    <aside
      aria-label="Related"
      className="px-8 py-16 bg-[#f7f9fc] border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-green mb-5">
          Related
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="block h-full rounded-[1.25rem] bg-white border border-slate-200/80 px-5 py-4 transition-colors hover:border-green/40"
              >
                <span className="block font-semibold text-[15px] text-navy mb-1">
                  {p.label}
                </span>
                <span className="block text-gray-500 text-sm leading-relaxed">
                  {p.blurb}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
