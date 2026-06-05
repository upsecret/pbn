// ── GraphQL Node Types ────────────────────────

export interface WPTerm {
  id: string
  name: string
  slug: string
  count: number
}

export interface WPPost {
  id: string
  databaseId: number
  title: string       // plain string (GraphQL, not REST .rendered)
  slug: string
  date: string
  excerpt: string     // HTML string
  content: string     // HTML string
  featuredImage: {
    node: { sourceUrl: string; altText: string }
  } | null
  categories: { nodes: WPTerm[] }
  author: { node: { name: string } }
}

export interface WPPageInfo {
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string | null
  endCursor: string | null
}

export interface PostsResult {
  posts: WPPost[]
  pageInfo: WPPageInfo
}

export type WPCategory = WPTerm
export type WPTag      = WPTerm

// ── Helpers ────────────────────────────────────

export function getFeaturedImage(post: WPPost): string | null {
  return post.featuredImage?.node.sourceUrl ?? null
}

export function getCategoryName(post: WPPost): string {
  return post.categories.nodes[0]?.name ?? 'News'
}

export function getAuthorName(post: WPPost): string {
  return post.author.node.name
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '')
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  })
}
