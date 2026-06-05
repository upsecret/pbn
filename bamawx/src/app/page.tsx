import Link from "next/link";

import { PostCard } from "@/components/blog/PostCard";
import { getPaginatedPosts } from "@/lib/posts";

const PAGE_SIZE = 10;

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);
  const { posts, totalPages } = getPaginatedPosts(page, PAGE_SIZE);

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}

      {/* Classic blog pagination */}
      <div className="mt-6 flex items-center justify-between border-t border-bama-light pt-4 dark:border-bama-blue">
        {page < totalPages ? (
          <Link
            href={`/?page=${page + 1}`}
            className="text-[12px] font-bold text-bama-sky hover:text-bama-link-dark hover:underline"
          >
            &laquo; Older Posts
          </Link>
        ) : (
          <span />
        )}
        <span className="text-[11px] text-muted-foreground">
          Page {page} of {totalPages}
        </span>
        {page > 1 ? (
          <Link
            href={page === 2 ? "/" : `/?page=${page - 1}`}
            className="text-[12px] font-bold text-bama-sky hover:text-bama-link-dark hover:underline"
          >
            Newer Posts &raquo;
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
