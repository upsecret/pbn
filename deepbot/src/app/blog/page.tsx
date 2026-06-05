import type { Metadata } from 'next'
import { Suspense } from 'react'
import { getPosts } from '@/lib/wordpress'
import type { WPPost, WPPageInfo } from '@/types/wordpress'
import BlogPostCard from '@/components/blog/BlogPostCard'
import Sidebar      from '@/components/blog/Sidebar'
import Pagination   from '@/components/blog/Pagination'

export const metadata: Metadata = {
  title: 'Blog & News',
  description: 'Updates, tutorials and news from the DeepBot team.',
}

interface Props {
  searchParams: Promise<{ c?: string }>
}

export default async function BlogPage({ searchParams }: Props) {
  const { c } = await searchParams

  // Decode cursor stack: last item in the comma-separated list is the "after" cursor
  const cursors   = c ? decodeURIComponent(c).split(',') : []
  const afterCursor = cursors.at(-1)

  let posts: WPPost[]  = []
  let pageInfo: WPPageInfo = { hasNextPage: false, hasPreviousPage: false, endCursor: null, startCursor: null }
  let error: string | null = null

  try {
    const result = await getPosts(6, afterCursor)
    posts    = result.posts
    pageInfo = result.pageInfo
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to load posts'
  }

  return (
    <>
      <div className="bg-site-dark py-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Blog &amp; News</h1>
        <p className="text-white/60 text-sm">Updates, tutorials and news from the DeepBot team</p>
      </div>

      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-9 items-start">
            {/* Posts */}
            <div>
              {error ? (
                <div className="text-center py-16 text-red-500 bg-white rounded-lg border border-gray-200">
                  <p className="text-sm">Could not load articles from CMS.</p>
                  <p className="text-xs text-gray-400 mt-1">{error}</p>
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-16 text-gray-400 bg-white rounded-lg border border-gray-200">
                  No articles found.
                </div>
              ) : (
                <>
                  <div className="space-y-6">
                    {posts.map((post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                  </div>
                  <Suspense>
                    <Pagination
                      hasNextPage={pageInfo.hasNextPage}
                      endCursor={pageInfo.endCursor}
                      startCursor={pageInfo.startCursor}
                    />
                  </Suspense>
                </>
              )}
            </div>

            {/* Sidebar */}
            <Suspense fallback={<div className="animate-pulse bg-white rounded-lg h-64 border border-gray-200" />}>
              <Sidebar />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}
