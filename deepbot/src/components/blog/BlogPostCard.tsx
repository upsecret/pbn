import Link from 'next/link'
import Image from 'next/image'
import type { WPPost } from '@/types/wordpress'
import { getFeaturedImage, getCategoryName, getAuthorName, formatDate, stripHtml } from '@/types/wordpress'

export default function BlogPostCard({ post }: { post: WPPost }) {
  const img     = getFeaturedImage(post)
  const cat     = getCategoryName(post)
  const author  = getAuthorName(post)
  const date    = formatDate(post.date)
  const excerpt = stripHtml(post.excerpt).slice(0, 200) + '…'

  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col sm:flex-row hover:shadow-[0_5px_20px_rgba(108,92,231,0.12)] transition-shadow duration-200">
      <Link href={`/blog/${post.slug}`} className="sm:w-48 shrink-0 block">
        {img ? (
          <div className="relative w-full h-44 sm:h-full min-h-[140px]">
            <Image src={img} alt={post.title} fill className="object-cover" />
          </div>
        ) : (
          <div className="w-full h-44 sm:h-full min-h-[140px] bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
            <span className="text-white/30 text-5xl">✦</span>
          </div>
        )}
      </Link>

      <div className="p-5 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-2.5 text-xs text-gray-400">
          <span className="bg-primary text-white font-semibold px-2 py-0.5 rounded-full">{cat}</span>
          <span>{date}</span>
          <span>{author}</span>
        </div>
        <h2 className="text-base font-bold text-gray-800 mb-2 leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-3">{excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-primary hover:underline">
          Read more &rsaquo;
        </Link>
      </div>
    </article>
  )
}
