import Link from "next/link";
import { FOUNDER } from "../lib/site";

// Visible author line for article-style pages. Links to the founder's Person
// entity on /about; pair with authorJsonLd() in the page's Article markup.
export default function Byline({ className = "" }: { className?: string }) {
  return (
    <p className={`text-sm font-medium ${className}`}>
      By{" "}
      <Link href="/about" rel="author" className="underline underline-offset-4 hover:text-white">
        {FOUNDER.name}
      </Link>
      , {FOUNDER.role}
    </p>
  );
}
