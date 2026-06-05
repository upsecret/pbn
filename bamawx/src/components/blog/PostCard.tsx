import Link from "next/link";
import Image from "next/image";

import type { Post } from "@/types";

interface PostCardProps {
  post: Post;
}

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function formatTime(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="mb-6 border-b border-bama-light pb-6 dark:border-bama-blue">
      {/* Date header */}
      <h2 className="date-header mb-2">{formatDate(post.date)}</h2>

      {/* Post title */}
      <h3 className="post-title mb-3">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h3>

      {/* Featured image */}
      {post.featuredImage ? (
        <div className="mb-3">
          <Link href={`/post/${post.slug}`}>
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={460}
              height={300}
              className="h-auto max-w-full border border-bama-light dark:border-bama-blue"
              style={{ width: "auto", maxWidth: "100%", height: "auto" }}
              unoptimized={post.featuredImage.startsWith("http")}
            />
          </Link>
        </div>
      ) : null}

      {/* Excerpt */}
      {post.excerpt ? (
        <p className="mb-3 text-[13px] leading-relaxed text-foreground">
          {post.excerpt}
        </p>
      ) : null}

      {/* Read more link */}
      <p className="mb-2">
        <Link
          href={`/post/${post.slug}`}
          className="text-[12px] font-bold text-bama-sky hover:text-bama-link-dark hover:underline"
        >
          Read more &raquo;
        </Link>
      </p>

      {/* Post footer */}
      <div className="post-footer">
        Posted by Mike Wilhelm at{" "}
        <time dateTime={post.date}>{formatTime(post.date)}</time>
        {post.category ? (
          <>
            {" "}
            &middot; <span className="text-[#8facc8]">{post.category}</span>
          </>
        ) : null}
      </div>
    </article>
  );
}
