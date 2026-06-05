import Link from "next/link";

import { getAllPosts } from "@/lib/posts";
import type { Post } from "@/types";

function groupByYear(posts: Post[]) {
  const map = new Map<number, Post[]>();
  for (const p of posts) {
    const y = new Date(p.date).getFullYear();
    if (!map.has(y)) map.set(y, []);
    map.get(y)!.push(p);
  }
  const years = [...map.keys()].sort((a, b) => b - a);
  return years.map((year) => ({
    year,
    posts: map.get(year)!.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    ),
  }));
}

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export const metadata = {
  title: "Archive",
  description: "Browse all posts on Mike Wilhelm's Alabama Weather Blog by year.",
};

export default function ArchivePage() {
  const groups = groupByYear(getAllPosts());

  return (
    <div>
      <h2 className="date-header mb-2">ARCHIVE</h2>
      <h1 className="post-title mb-4">
        <span className="text-foreground">Full Post Archive</span>
      </h1>
      <p className="mb-6 text-[12px] text-muted-foreground">
        Full index of posts grouped by year — from recent entries back through the BamaWX archive.
      </p>

      <div className="space-y-3">
        {groups.map(({ year, posts }) => (
          <details key={year} className="group border-b border-bama-light pb-2 dark:border-bama-blue">
            <summary className="cursor-pointer text-[14px] font-bold text-foreground hover:text-bama-sky">
              {year} ({posts.length} posts)
            </summary>
            <ul className="ml-3 mt-2 space-y-1 border-l-2 border-bama-light pl-3 dark:border-bama-blue">
              {posts.map((p) => (
                <li
                  key={p.slug}
                  className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <Link
                    href={`/post/${p.slug}`}
                    className="text-[12px] font-bold text-bama-sky hover:text-bama-link-dark hover:underline"
                  >
                    {p.title}
                  </Link>
                  <time
                    dateTime={p.date}
                    className="shrink-0 text-[11px] text-muted-foreground"
                  >
                    {formatDate(p.date)}
                  </time>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </div>
  );
}
