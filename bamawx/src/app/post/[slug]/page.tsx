import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PostContent } from "@/components/blog/PostContent";
import { getAdjacentPosts, getPostBySlug } from "@/lib/posts";

const siteUrl = "https://www.bamawx.com";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = true;
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Not found" };
  }
  const url = `${siteUrl}/post/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url,
      images: post.featuredImage ? [{ url: post.featuredImage }] : [{ url: "/og-image.svg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: { canonical: `/post/${post.slug}` },
  };
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

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(slug);
  const articleBody = await PostContent({ content: post.content });

  return (
    <article className="pb-8">
      {/* Breadcrumb */}
      <p className="mb-4 text-[11px] text-muted-foreground">
        <Link href="/" className="font-bold text-bama-sky hover:underline">
          Home
        </Link>
        {" > "}
        <span>Post</span>
      </p>

      {/* Date header */}
      <h2 className="date-header mb-2">{formatDate(post.date)}</h2>

      {/* Title */}
      <h1 className="post-title mb-4">
        <span className="text-foreground">{post.title}</span>
      </h1>

      {/* Tags / Category */}
      {post.category ? (
        <p className="mb-4 text-[11px] text-[#8facc8]">
          Category: {post.category}
          {post.tags && post.tags.length > 0 ? (
            <> &middot; Tags: {post.tags.join(", ")}</>
          ) : null}
        </p>
      ) : null}

      {/* Post body */}
      {articleBody}

      {/* Post footer */}
      <div className="post-footer mt-6">
        Posted by Mike Wilhelm
      </div>

      {/* Navigation */}
      <nav
        className="mt-8 flex flex-col gap-3 border-t border-bama-light pt-6 sm:flex-row sm:justify-between dark:border-bama-blue"
        aria-label="Adjacent posts"
      >
        <div className="min-w-0 flex-1">
          {prev ? (
            <Link
              href={`/post/${prev.slug}`}
              className="text-[12px] font-bold text-bama-sky hover:text-bama-link-dark hover:underline"
            >
              &laquo; {prev.title}
            </Link>
          ) : (
            <span className="text-[11px] text-muted-foreground">No older post</span>
          )}
        </div>
        <div className="min-w-0 flex-1 sm:text-right">
          {next ? (
            <Link
              href={`/post/${next.slug}`}
              className="text-[12px] font-bold text-bama-sky hover:text-bama-link-dark hover:underline"
            >
              {next.title} &raquo;
            </Link>
          ) : (
            <span className="text-[11px] text-muted-foreground">No newer post</span>
          )}
        </div>
      </nav>
    </article>
  );
}
