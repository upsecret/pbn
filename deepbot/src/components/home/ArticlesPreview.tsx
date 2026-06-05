import Link from 'next/link'
import Image from 'next/image'
import { getPosts } from '@/lib/wordpress'
import { getFeaturedImage, getCategoryName, formatDate, stripHtml } from '@/types/wordpress'

export default async function ArticlesPreview() {
  let posts = []
  try {
    const result = await getPosts(3)
    posts = result.posts
  } catch {
    return null
  }

  if (!posts.length) return null

  return (
    <section className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Latest News &amp; Updates</h2>
        <p className="text-sm text-gray-400 mb-9">Stay up to date with the latest DeepBot news</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mb-10">
          {posts.map((post) => {
            const img     = getFeaturedImage(post)
            const cat     = getCategoryName(post)
            const excerpt = stripHtml(post.excerpt).slice(0, 130) + '…'

            return (
              <article
                key={post.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-[0_5px_25px_rgba(108,92,231,0.15)] hover:-translate-y-1 transition-all duration-200"
              >
                {img ? (
                  <div className="relative w-full aspect-video">
                    <Image src={img} alt={post.title} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="w-full aspect-video bg-gradient-to-br from-site-light to-gray-200 flex items-center justify-center">
                    <span className="text-primary/30 text-4xl">✦</span>
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-semibold bg-primary text-white px-2 py-0.5 rounded-full">
                      {cat}
                    </span>
                    <span className="text-[11px] text-gray-400">{formatDate(post.date)}</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 mb-2 leading-snug line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-3">{excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-xs font-semibold text-primary hover:underline">
                    Read more &rsaquo;
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/blog" className="btn-outline">View All Articles</Link>
        </div>
      </div>
    </section>
  )
}
