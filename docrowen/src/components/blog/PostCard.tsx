import Image from "next/image";
import Link from "next/link";
import { WPPost } from "@/lib/types";
import {
  decodeHtmlEntities,
  getExcerpt,
  getFeaturedImageUrl,
  formatDate,
} from "@/lib/utils";

export default function PostCard({ post }: { post: WPPost }) {
  const imageUrl = getFeaturedImageUrl(post);
  const categories = post._embedded?.["wp:term"]?.[0] || [];

  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-52 rounded-2xl overflow-hidden bg-gray-100 mb-4">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={decodeHtmlEntities(post.title.rendered)}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
          )}
          <div className="absolute inset-0 bg-primary/10" />
        </div>
      </Link>

      {categories.length > 0 && (
        <div className="flex gap-2 mb-2">
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

      <h2 className="text-lg font-bold mb-2">
        <Link
          href={`/blog/${post.slug}`}
          className="hover:text-primary transition-colors"
        >
          {decodeHtmlEntities(post.title.rendered)}
        </Link>
      </h2>

      <p className="text-gray-600 text-sm leading-relaxed mb-3">
        {getExcerpt(post.excerpt.rendered, 120)}
      </p>

      <p className="text-xs text-gray-400">{formatDate(post.date)}</p>
    </article>
  );
}
