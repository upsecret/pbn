import Link from 'next/link'
import { getCategories, getTags, getRecentPosts } from '@/lib/wordpress'
import { formatDate } from '@/types/wordpress'

export default async function Sidebar({ excludeId }: { excludeId?: number }) {
  const [categories, tags, recent] = await Promise.allSettled([
    getCategories(),
    getTags(),
    getRecentPosts(excludeId),
  ])

  const cats   = categories.status === 'fulfilled' ? categories.value : []
  const tagArr = tags.status      === 'fulfilled' ? tags.value       : []
  const posts  = recent.status    === 'fulfilled' ? recent.value     : []

  return (
    <aside className="space-y-5 sticky top-20">
      {cats.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-3 pb-2.5 border-b-2 border-primary">
            Categories
          </h4>
          <ul className="space-y-0.5">
            {cats.map((cat) => (
              <li key={cat.id} className="border-b border-gray-100 last:border-b-0">
                <Link
                  href={`/blog?cat=${cat.slug}`}
                  className="flex justify-between items-center py-2 text-sm text-gray-700 hover:text-primary transition-colors"
                >
                  {cat.name}
                  <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">
                    {cat.count}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {posts.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-3 pb-2.5 border-b-2 border-primary">
            Recent Posts
          </h4>
          <ul className="space-y-0.5">
            {posts.map((post) => (
              <li key={post.id} className="border-b border-gray-100 last:border-b-0 py-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block text-sm text-gray-700 hover:text-primary transition-colors leading-snug mb-0.5"
                >
                  {post.title}
                </Link>
                <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {tagArr.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-3 pb-2.5 border-b-2 border-primary">
            Tags
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {tagArr.map((tag) => (
              <Link
                key={tag.id}
                href={`/blog?tag=${tag.slug}`}
                className="text-xs bg-gray-100 text-gray-500 hover:bg-primary hover:text-white px-2.5 py-1 rounded-full transition-colors"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}
