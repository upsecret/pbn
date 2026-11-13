import { cache } from "react";
import sanitizeHtml from "sanitize-html";
import { articlePath, topics } from "./site";

type Topic = (typeof topics)[number];

type Post = {
  id: number;
  slug: string;
  date_gmt: string;
  modified_gmt: string;
  status: string;
  title: { rendered: string };
  excerpt: { rendered: string; protected?: boolean };
  content: { rendered: string; protected?: boolean };
  featured_media: number;
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string; alt_text?: string }>;
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string; taxonomy: string }>>;
  };
};

export type Article = {
  id: number;
  slug: string;
  path: string;
  title: string;
  summary: string;
  html: string;
  published: string;
  updated: string;
  topic?: Topic;
  image?: { url: string; alt: string };
};

const cmsUrl = (process.env.WORDPRESS_URL ?? "https://cms.himsswire.com").replace(/\/$/, "");
export const pageSize = 10;

function isImageUrl(value?: string): value is string {
  return Boolean(value?.startsWith("https://") || (
    /^http:\/\/(127\.0\.0\.1|localhost):\d+$/.test(cmsUrl)
    && /^http:\/\/(127\.0\.0\.1|localhost):\d+\//.test(value ?? "")
  ));
}

export class CmsError extends Error {
  constructor() {
    super("The publishing service is temporarily unavailable.");
  }
}

async function request(path: string, init: RequestInit = {}) {
  try {
    return await fetch(cmsUrl + "/wp-json/" + path, {
      ...init,
      cache: "no-store",
      signal: AbortSignal.timeout(6000),
      headers: { Accept: "application/json", ...init.headers },
    });
  } catch {
    throw new CmsError();
  }
}

export function publicPost(post: Post) {
  return post.status === "publish" && !post.content.protected && !post.excerpt.protected;
}

function plain(value: string) {
  const text = sanitizeHtml(value, { allowedTags: [], allowedAttributes: {} });
  return text.replace(/&(?:amp|quot|apos|lt|gt|nbsp|#\d+|#x[0-9a-f]+);/gi, (entity) => {
    const key = entity.slice(1, -1).toLowerCase();
    const named: Record<string, string> = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
    if (key in named) return named[key];
    const value = key.startsWith("#x") ? parseInt(key.slice(2), 16) : parseInt(key.slice(1), 10);
    return value <= 0x10ffff ? String.fromCodePoint(value) : entity;
  }).trim();
}

function convert(post: Post): Article {
  const terms = (post._embedded?.["wp:term"] ?? []).flat();
  const topic = topics.find((entry) => terms.some((term) => term.taxonomy === "category" && term.slug === entry.slug));
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  return {
    id: post.id,
    slug: post.slug,
    path: articlePath(post.slug),
    title: plain(post.title.rendered),
    summary: plain(post.excerpt.rendered).slice(0, 280),
    published: post.date_gmt + "Z",
    updated: post.modified_gmt + "Z",
    topic,
    image: isImageUrl(media?.source_url)
      ? { url: media.source_url, alt: media.alt_text ?? "" }
      : undefined,
    html: sanitizeHtml(post.content.rendered, {
      allowedTags: [...sanitizeHtml.defaults.allowedTags, "img", "figure", "figcaption", "details", "summary"],
      allowedAttributes: { a: ["href", "title"], img: ["src", "alt", "width", "height", "loading"], td: ["colspan", "rowspan"], th: ["colspan", "rowspan", "scope"] },
      allowedSchemes: ["https", "http", "mailto"],
      allowProtocolRelative: false,
      transformTags: { img: (tagName, attribs) => ({ tagName, attribs: { ...attribs, loading: "lazy" } }) },
    }),
  };
}

const findCategory = cache(async (slug: string) => {
  const res = await request("wp/v2/categories?" + new URLSearchParams({ slug, _fields: "id" }));
  if (!res.ok) throw new CmsError();
  const categories = await res.json() as Array<{ id: number }>;
  return categories[0]?.id;
});

async function listPosts(params: URLSearchParams) {
  params.set("status", "publish");
  params.set("_embed", "wp:featuredmedia,wp:term");
  const res = await request("wp/v2/posts?" + params);
  if (res.status === 400) {
    const data = await res.json().catch(() => null);
    if (data?.code === "rest_post_invalid_page_number") return { articles: [], pages: 0 };
    throw new CmsError();
  }
  if (!res.ok) throw new CmsError();
  const posts = await res.json() as Post[];
  return { articles: posts.filter(publicPost).map(convert), pages: Number(res.headers.get("X-WP-TotalPages") ?? 1) };
}

export const listArticles = cache(async ({ page = 1, search, topic, limit = pageSize }: { page?: number; search?: string; topic?: string; limit?: number } = {}) => {
  const params = new URLSearchParams({ page: String(page), per_page: String(limit), orderby: "date", order: "desc" });
  if (search) params.set("search", search);
  if (topic) {
    const category = await findCategory(topic);
    if (!category) return { articles: [], pages: 0 };
    params.set("categories", String(category));
  }
  return listPosts(params);
});

export const getArticle = cache(async (slug: string) => {
  const { articles } = await listPosts(new URLSearchParams({ slug, per_page: "1" }));
  return articles[0] ?? null;
});

export async function getPreview(token: string) {
  if (!/^[a-f\d]{64}$/.test(token)) return null;
  const res = await request("himsswire/v1/preview", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  if ([400, 401, 403, 404].includes(res.status)) return null;
  if (!res.ok) throw new CmsError();
  return convert(await res.json() as Post);
}
