import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import parse, { HTMLReactParserOptions, Element, domToReact, DOMNode } from "html-react-parser";
import { getPostBySlug, getAllPostSlugs } from "@/lib/wordpress";
import {
  decodeHtmlEntities,
  formatDate,
  getFeaturedImageUrl,
  stripHtml,
} from "@/lib/utils";

export const revalidate = 600;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  const yoast = post.yoast_head_json;
  return {
    title: yoast?.title || decodeHtmlEntities(post.title.rendered),
    description:
      yoast?.description || stripHtml(post.excerpt.rendered).slice(0, 160),
    openGraph: {
      title: yoast?.og_title || decodeHtmlEntities(post.title.rendered),
      description: yoast?.og_description || stripHtml(post.excerpt.rendered).slice(0, 160),
      images: yoast?.og_image?.map((img) => img.url) || [],
    },
  };
}

const parseOptions: HTMLReactParserOptions = {
  replace(domNode) {
    if (domNode instanceof Element && domNode.name === "img") {
      const { src, alt, width, height } = domNode.attribs;
      if (!src) return;
      return (
        <Image
          src={src}
          alt={alt || ""}
          width={parseInt(width) || 800}
          height={parseInt(height) || 450}
          className="rounded-lg my-6 w-full h-auto"
        />
      );
    }
    // Remove empty spacer divs
    if (
      domNode instanceof Element &&
      domNode.name === "div" &&
      domNode.attribs?.class?.includes("wp-block-spacer")
    ) {
      return <div className="h-8" />;
    }
    // Handle WordPress figure/figcaption
    if (domNode instanceof Element && domNode.name === "figure") {
      return (
        <figure className="my-6">
          {domToReact(domNode.children as DOMNode[], parseOptions)}
        </figure>
      );
    }
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const imageUrl = getFeaturedImageUrl(post);
  const categories = post._embedded?.["wp:term"]?.[0] || [];
  const readingTime =
    post.yoast_head_json?.twitter_misc?.["Est. reading time"] || "";

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <Link
        href="/blog"
        className="text-sm text-primary hover:underline mb-8 inline-block"
      >
        &larr; Back to Blog
      </Link>

      {categories.length > 0 && (
        <div className="flex gap-2 mb-4">
          {categories.map((cat) => (
            <span
              key={cat.id}
              className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full"
            >
              {cat.name}
            </span>
          ))}
        </div>
      )}

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        {decodeHtmlEntities(post.title.rendered)}
      </h1>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
        <time>{formatDate(post.date)}</time>
        {readingTime && <span>{readingTime}</span>}
      </div>

      {imageUrl && (
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={imageUrl}
            alt={decodeHtmlEntities(post.title.rendered)}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary prose-img:rounded-lg">
        {parse(post.content.rendered, parseOptions)}
      </div>
    </article>
  );
}
