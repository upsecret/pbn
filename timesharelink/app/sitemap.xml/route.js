import { BASE_URL } from '@/lib/constants';
import { BRAND_SLUG_MAP } from '@/lib/brand-page-content';
import { BLOG_POSTS } from '@/lib/blog-posts';

export async function GET() {
    const lastModified = new Date().toISOString().split('T')[0];

    const baseUrls = [
        { loc: `${BASE_URL}/`, changefreq: 'daily', priority: '1' },
        { loc: `${BASE_URL}/링크모음`, changefreq: 'daily', priority: '0.9' },
        { loc: `${BASE_URL}/주소검증`, changefreq: 'weekly', priority: '0.85' },
        { loc: `${BASE_URL}/주소링크제보`, changefreq: 'monthly', priority: '0.7' },
        { loc: `${BASE_URL}/검증로그`, changefreq: 'weekly', priority: '0.6' },
        { loc: `${BASE_URL}/블로그`, changefreq: 'weekly', priority: '0.85' },
    ];

    const brandUrls = Object.values(BRAND_SLUG_MAP).map((koreanName) => ({
        loc: `${BASE_URL}/${koreanName}`,
        changefreq: 'weekly',
        priority: '0.7',
    }));

    const blogPostUrls = BLOG_POSTS.map((p) => ({
        loc: `${BASE_URL}/블로그/${p.slug}`,
        lastmod: p.updatedAt || p.publishedAt,
        changefreq: 'monthly',
        priority: '0.65',
    }));

    const urls = [...baseUrls, ...brandUrls, ...blogPostUrls];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
        ({ loc, lastmod, changefreq, priority }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod || lastModified}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('\n')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    });
}
