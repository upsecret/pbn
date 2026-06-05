'use client'

import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
  hasNextPage: boolean
  endCursor: string | null
  startCursor: string | null
}

/**
 * Cursor stack stored in URL param `c` as comma-separated base64 cursors.
 *   /blog          → page 1 (no param)
 *   /blog?c=ABC    → page 2 (after cursor ABC)
 *   /blog?c=ABC,XY → page 3 (after cursor XY, prev at ABC)
 */
export default function Pagination({ hasNextPage, endCursor }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const stack = searchParams.get('c') ?? ''
  const cursors = stack ? stack.split(',') : []
  const isFirstPage = cursors.length === 0

  const goNext = () => {
    if (!endCursor) return
    const next = [...cursors, endCursor].join(',')
    router.push(`/blog?c=${encodeURIComponent(next)}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goPrev = () => {
    const prev = cursors.slice(0, -1)
    const url = prev.length > 0 ? `/blog?c=${encodeURIComponent(prev.join(','))}` : '/blog'
    router.push(url)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!hasNextPage && isFirstPage) return null

  return (
    <div className="flex gap-3 justify-center mt-8">
      {!isFirstPage && (
        <button
          onClick={goPrev}
          className="px-5 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium hover:bg-primary hover:border-primary hover:text-white transition-colors"
        >
          &larr; Previous
        </button>
      )}
      {hasNextPage && (
        <button
          onClick={goNext}
          className="px-5 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium hover:bg-primary hover:border-primary hover:text-white transition-colors"
        >
          Next &rarr;
        </button>
      )}
    </div>
  )
}
