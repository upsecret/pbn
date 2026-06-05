const GRAPHQL_URL = 'https://cms.womenswellnesscircle.com/graphql';

async function fetchGraphQL<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    cache: 'no-store', // always fetch fresh from CMS
  });

  if (!res.ok) {
    throw new Error(`GraphQL request failed: ${res.status}`);
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error(json.errors[0]?.message ?? 'GraphQL error');
  }
  return json.data as T;
}

/* ── Types ── */

export interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText: string;
  };
}

export interface PostSummary {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  featuredImage: FeaturedImage | null;
}

export interface PostDetail extends PostSummary {
  content: string;
}

/* ── Queries ── */

export async function getAllPosts(): Promise<PostSummary[]> {
  const data = await fetchGraphQL<{ posts: { nodes: PostSummary[] } }>(`
    {
      posts(first: 100) {
        nodes {
          id
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `);
  return data.posts.nodes;
}

export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  const data = await fetchGraphQL<{ post: PostDetail | null }>(`
    query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        slug
        content
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `, { slug });
  return data.post;
}

/** Strip HTML tags from WPGraphQL excerpt */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\[&hellip;\]/g, '…').replace(/&hellip;/g, '…').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#8217;/g, "'").replace(/&#8216;/g, "'").trim();
}

/** Format WordPress date string */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
