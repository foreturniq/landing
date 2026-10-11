import { PAGE_DATES, formatPageDate } from "../lib/site";

// Visible "Published / Updated" line for article-style pages. Dates live in
// PAGE_DATES (lib/site.ts) so the page and its JSON-LD never disagree.
export default function PageDates({ path, className = "" }: { path: string; className?: string }) {
  const dates = PAGE_DATES[path];
  if (!dates) return null;
  return (
    <p className={`text-sm ${className}`}>
      Published <time dateTime={dates.published}>{formatPageDate(dates.published)}</time>
      <span aria-hidden="true"> · </span>
      Updated <time dateTime={dates.modified}>{formatPageDate(dates.modified)}</time>
    </p>
  );
}
