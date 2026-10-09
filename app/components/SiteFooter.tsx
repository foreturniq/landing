import Image from "next/image";
import Link from "next/link";
import { HUB, USE_CASES } from "../lib/site";

// Shared footer with site navigation, so every public page links to the hub
// and to every use-case page.
export default function SiteFooter() {
  return (
    <footer className="px-8 py-10 border-t border-white/8 bg-navy">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <Link href="/" aria-label="Foreturn IQ home">
          <Image
            src="/logo.png"
            alt="Foreturn IQ"
            width={100}
            height={34}
            className="opacity-35"
          />
        </Link>
        <nav aria-label="Footer">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-3">
            Use Cases
          </p>
          <ul className="space-y-2 text-sm">
            {[HUB, ...USE_CASES].map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-white/55 hover:text-white transition-colors"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="max-w-7xl mx-auto mt-8 text-xs text-white/25">
        &copy; {new Date().getFullYear()} Foreturn IQ. All rights reserved.
      </p>
    </footer>
  );
}
