import Image from "next/image";
import Link from "next/link";
import UseCasesMenu from "./UseCasesMenu";

// Floating pill nav shared by the About and comparison pages.
export default function SiteNav({ ctaHref = "#demo" }: { ctaHref?: string }) {
  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-3 sm:px-4 py-2.5 rounded-full bg-white border border-black/8 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] w-full max-w-xl">
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.png" alt="Foreturn IQ" width={96} height={32} priority className="w-[72px] sm:w-[96px] h-auto" />
        </Link>
        <div className="flex items-center gap-0.5 sm:gap-1.5">
          <UseCasesMenu />
          <Link
            href="/pricing"
            className="px-1.5 sm:px-3 py-2 rounded-full text-sm font-semibold text-navy hover:bg-slate-100 transition-colors whitespace-nowrap"
          >
            Pricing
          </Link>
          <a
            href={ctaHref}
            className="group inline-flex items-center gap-1.5 px-3.5 py-2 sm:pl-5 sm:pr-1.5 sm:py-1.5 rounded-full bg-green text-white font-semibold text-sm [transition:opacity_200ms_cubic-bezier(0.23,1,0.32,1),transform_160ms_cubic-bezier(0.23,1,0.32,1)] hover:opacity-90 active:scale-[0.97]"
          >
            <span className="sm:hidden">Demo</span>
            <span className="hidden sm:inline">Request Demo</span>
            <span className="w-7 h-7 rounded-full bg-black/25 hidden sm:flex items-center justify-center">
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
