import Link from "next/link";
// Visible breadcrumb trail (Home / Page). Pair with breadcrumbJsonLd() from
// lib/site.ts in the page's JSON-LD graph.
export default function Breadcrumbs({ label }: { label: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 animate-fade-up">
      <ol className="flex items-center gap-2 text-xs font-medium text-white/45">
        <li>
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-white/70">
          {label}
        </li>
      </ol>
    </nav>
  );
}
