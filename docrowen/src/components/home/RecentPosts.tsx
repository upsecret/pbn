import Image from "next/image";
import Link from "next/link";
import { WPPost } from "@/lib/types";
import { decodeHtmlEntities, getExcerpt, getFeaturedImageUrl } from "@/lib/utils";

export default function RecentPosts({ posts }: { posts: WPPost[] }) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2">Blog</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Recent Posts
          </h2>
        </div>

        <div className="space-y-8">
          {posts.map((post) => {
            const imageUrl = getFeaturedImageUrl(post);
            return (
              <div
                key={post.id}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
              >
                <div className="md:col-span-2 relative h-56 md:h-72 rounded-2xl overflow-hidden bg-gray-100">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={decodeHtmlEntities(post.title.rendered)}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {decodeHtmlEntities(post.title.rendered)}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {getExcerpt(post.excerpt.rendered, 150)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
