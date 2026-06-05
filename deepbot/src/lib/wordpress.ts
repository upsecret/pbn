import type { WPPost, WPCategory, WPTag, PostsResult } from '@/types/wordpress'

const GRAPHQL_ENDPOINT = 'https://cms.deepbot.tv/graphql'

// ── Core fetcher ───────────────────────────────

async function gql<T>(
  query: string,
  variables?: Record<string, unknown>,
  revalidate = 60,
): Promise<T> {
  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    next: { revalidate },
  })

  if (!res.ok) throw new Error(`GraphQL request failed: ${res.status}`)

  const json = await res.json()
  if (json.errors?.length) throw new Error(json.errors[0].message)

  return json.data as T
}

// ── Fragments ─────────────────────────────────

const POST_FIELDS = /* GraphQL */ `
  id
  databaseId
  title
  slug
  date
  excerpt(format: RENDERED)
  featuredImage {
    node { sourceUrl altText }
  }
  categories { nodes { id name slug count } }
  author { node { name } }
`

// ── Posts ──────────────────────────────────────

export async function getPosts(first = 6, after?: string): Promise<PostsResult> {
  const data = await gql<{ posts: { nodes: WPPost[]; pageInfo: PostsResult['pageInfo'] } }>(
    /* GraphQL */ `
      query GetPosts($first: Int!, $after: String) {
        posts(first: $first, after: $after, where: { status: PUBLISH }) {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          nodes { ${POST_FIELDS} }
        }
      }
    `,
    { first, after: after ?? null },
  )
  return { posts: data.posts.nodes, pageInfo: data.posts.pageInfo }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const data = await gql<{ post: WPPost | null }>(
    /* GraphQL */ `
      query GetPost($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          ${POST_FIELDS}
          content(format: RENDERED)
        }
      }
    `,
    { slug },
  )
  return data.post
}

export async function getRecentPosts(excludeId?: number, count = 5): Promise<WPPost[]> {
  const data = await gql<{ posts: { nodes: WPPost[] } }>(
    /* GraphQL */ `
      query GetRecentPosts($first: Int!) {
        posts(first: $first, where: { status: PUBLISH }) {
          nodes { ${POST_FIELDS} }
        }
      }
    `,
    { first: count + (excludeId ? 1 : 0) },
  )
  const posts = data.posts.nodes
  return excludeId
    ? posts.filter((p) => p.databaseId !== excludeId).slice(0, count)
    : posts.slice(0, count)
}

// ── Taxonomy ───────────────────────────────────

export async function getCategories(): Promise<WPCategory[]> {
  const data = await gql<{ categories: { nodes: WPCategory[] } }>(
    /* GraphQL */ `
      query GetCategories {
        categories(first: 20, where: { hideEmpty: true }) {
          nodes { id name slug count }
        }
      }
    `,
    {},
    300,
  )
  return data.categories.nodes
}

export async function getTags(): Promise<WPTag[]> {
  const data = await gql<{ tags: { nodes: WPTag[] } }>(
    /* GraphQL */ `
      query GetTags {
        tags(first: 30, where: { hideEmpty: true }) {
          nodes { id name slug count }
        }
      }
    `,
    {},
    300,
  )
  return data.tags.nodes
}
