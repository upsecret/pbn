import Link from "next/link";

import { getPostsByMonth, getPostsByYear } from "@/lib/posts";

const ARCHIVE_END = 2018;
const ARCHIVE_START = 2006;

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const years = Array.from(
  { length: ARCHIVE_END - ARCHIVE_START + 1 },
  (_, i) => ARCHIVE_END - i,
);

export function ArchiveWidget() {
  return (
    <div className="mb-4">
      <h3 className="sidebar-section-title">Blog Archive</h3>
      <div className="space-y-1">
        {years.map((year) => {
          const yearPosts = getPostsByYear(year);
          const yearCount = yearPosts.length;
          if (yearCount === 0) return null;
          return (
            <details key={year} className="group">
              <summary className="cursor-pointer text-[12px] font-bold text-foreground hover:text-bama-sky">
                {year} ({yearCount})
              </summary>
              <ul className="ml-3 mt-1 space-y-0.5 border-l border-bama-light pl-2 dark:border-bama-blue">
                {MONTH_NAMES.map((label, idx) => {
                  const month = idx + 1;
                  const posts = getPostsByMonth(year, month);
                  if (posts.length === 0) return null;
                  return (
                    <li key={month}>
                      <details className="group/month">
                        <summary className="cursor-pointer text-[11px] font-bold text-foreground hover:text-bama-sky">
                          {label} ({posts.length})
                        </summary>
                        <ul className="ml-2 mt-0.5 space-y-0.5 border-l border-bama-light pl-2 dark:border-bama-blue">
                          {posts.map((p) => (
                            <li key={p.slug}>
                              <Link
                                href={`/post/${p.slug}`}
                                className="text-[11px] font-bold text-bama-sky hover:text-bama-link-dark hover:underline"
                              >
                                {p.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  );
                })}
              </ul>
            </details>
          );
        })}
      </div>
    </div>
  );
}
