import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getPostBySlug } from '@/lib/wordpress'
import Sidebar from '@/components/blog/Sidebar'
import { getFeaturedImage, getCategoryName, getAuthorName, formatDate, stripHtml } from '@/types/wordpress'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug).catch(() => null)
  if (!post) return { title: 'Article Not Found' }

  return {
    title: post.title,
    description: stripHtml(post.excerpt).slice(0, 160),
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug).catch(() => null)

  if (!post) notFound()

  const img    = getFeaturedImage(post)
  const cat    = getCategoryName(post)
  const author = getAuthorName(post)
  const date   = formatDate(post.date)

  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-9 items-start">
          {/* Article */}
          <article className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="px-8 pt-8 pb-0">
              <div className="flex items-center gap-3 mb-4 text-xs text-gray-400">
                <span className="bg-primary text-white font-semibold px-2.5 py-0.5 rounded-full">{cat}</span>
                <span>{date}</span>
                <span>{author}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
                {post.title}
              </h1>
            </div>

            {img && (
              <div className="relative w-full aspect-video mt-6">
                <Image src={img} alt={post.title} fill className="object-cover" priority />
              </div>
            )}

            <div
              className="wp-content px-8 py-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Sidebar */}
          <Suspense fallback={<div className="animate-pulse bg-white rounded-lg h-64 border border-gray-200" />}>
            <Sidebar excludeId={post.databaseId} />
          </Suspense>
        </div>

        <div className="mt-7">
          <Link href="/blog" className="btn-outline text-sm">&larr; Back to Blog</Link>
        </div>
      </div>
    </section>
  )
}
