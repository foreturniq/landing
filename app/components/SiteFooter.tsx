import Image from "next/image";
import Link from "next/link";
import {
  COMPANY_LINKS,
  CONTACT,
  COMPARE_LINKS,
  HUB,
  SOCIAL_LINKS,
  USE_CASES,
} from "../lib/site";
import { MentionsStrip } from "./Proof";

const groups = [
  { title: "Use Cases", links: [HUB, ...USE_CASES] },
  { title: "Compare", links: COMPARE_LINKS },
  { title: "Company", links: COMPANY_LINKS },
];

// Shared footer with site navigation, so every public page links to the hub,
// every use-case page, the comparison pages and About.
export default function SiteFooter() {
  return (
    <footer className="px-8 py-10 border-t border-white/8 bg-navy">
      <MentionsStrip />
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
        <div className="flex flex-wrap gap-x-14 gap-y-8">
          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-3">
                {g.title}
              </p>
              <ul className="space-y-2 text-sm">
                {g.links.map((p) => (
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
          ))}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30 mb-3">
              Contact
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${CONTACT.info}`} className="text-white/55 hover:text-white transition-colors">
                  {CONTACT.info}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.support}`} className="text-white/55 hover:text-white transition-colors">
                  {CONTACT.support}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-white/25">
          &copy; {new Date().getFullYear()} Foreturn IQ. All rights reserved.
        </p>
        {SOCIAL_LINKS.length > 0 && (
          <ul className="flex gap-5 text-xs">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.url}>
                <a href={s.url} rel="me noopener" className="text-white/40 hover:text-white">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
