import post01 from './posts/01-verified-vs-general.json';
import post02 from './posts/02-access-troubleshooting.json';
import post03 from './posts/03-safe-checkpoints.json';
import post04 from './posts/04-trends-2026.json';
import post05 from './posts/05-category-guide.json';
import post06 from './posts/06-security-precautions.json';
import post07 from './posts/07-top-20-ranking-2026.json';
import post08 from './posts/08-brand-comparison-big3.json';
import post09 from './posts/09-mobile-fast-access.json';
import post10 from './posts/10-bookmark-vs-collection.json';

const RAW = [post01, post02, post03, post04, post05, post06, post07, post08, post09, post10];

// publishedAt 내림차순 (최신 글이 앞)
export const BLOG_POSTS = [...RAW].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);

export function getAllPosts() {
    return BLOG_POSTS;
}

export function getRecentPosts(n = 6) {
    return BLOG_POSTS.slice(0, n);
}

export function getPostBySlug(slug) {
    return BLOG_POSTS.find((p) => p.slug === slug) || null;
}

export function getRelatedPosts(currentSlug, n = 3) {
    return BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, n);
}
