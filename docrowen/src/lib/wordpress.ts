import { WPPost, WPPage, WPTerm, WPPaginatedResponse } from "./types";

const WP_API_URL = "https://cms.docrowen.com/wp-json/wp/v2";

async function fetchWP<T>(
  endpoint: string,
  revalidate: number = 600
): Promise<T> {
  const res = await fetch(`${WP_API_URL}${endpoint}`, {
    next: { revalidate },
  });
  if (!res.ok) {
    throw new Error(`WordPress API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getPageBySlug(
  slug: string
): Promise<WPPage | null> {
  const pages = await fetchWP<WPPage[]>(
    `/pages?slug=${slug}&_fields=id,slug,title,content,yoast_head_json`,
    3600
  );
  return pages[0] || null;
}

export async function getPosts(
  page: number = 1,
  perPage: number = 3
): Promise<WPPaginatedResponse<WPPost>> {
  const res = await fetch(
    `${WP_API_URL}/posts?page=${page}&per_page=${perPage}&_embed`,
    { next: { revalidate: 600 } }
  );
  if (!res.ok) {
    throw new Error(`WordPress API error: ${res.status} ${res.statusText}`);
  }
  const data: WPPost[] = await res.json();
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
  const totalItems = parseInt(res.headers.get("X-WP-Total") || "0", 10);
  return { data, totalPages, totalItems };
}

export async function getPostBySlug(
  slug: string
): Promise<WPPost | null> {
  const posts = await fetchWP<WPPost[]>(`/posts?slug=${slug}&_embed`);
  return posts[0] || null;
}

export async function getRecentPosts(count: number = 3): Promise<WPPost[]> {
  return fetchWP<WPPost[]>(
    `/posts?per_page=${count}&orderby=date&order=desc&_embed`
  );
}

export async function getCategories(): Promise<WPTerm[]> {
  return fetchWP<WPTerm[]>("/categories", 3600);
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await fetchWP<{ slug: string }[]>(
    "/posts?per_page=100&_fields=slug"
  );
  return posts.map((p) => p.slug);
}
