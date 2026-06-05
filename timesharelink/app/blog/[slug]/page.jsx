import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Tag, ArrowLeft, CheckCircle2 } from 'lucide-react';
import BlogPostCard from '@/components/BlogPostCard';
import BreadcrumbSchema from '@/components/Schema/BreadcrumbSchema';
import { BLOG_SLUGS, getPostBySlug, getRelatedPosts } from '@/lib/blog-posts';
import { BASE_URL } from '@/lib/constants';

export const revalidate = 3600;

export async function generateStaticParams() {
    return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug: rawSlug } = await params;
    const slug = decodeURIComponent(rawSlug || '');
    const post = getPostBySlug(slug);
    if (!post) return {};
    const canonical = `/블로그/${slug}`;
    return {
        title: `${post.title} | 타임쉐어링크 블로그`,
        description: post.excerpt,
        alternates: { canonical },
        keywords: post.tags,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url: canonical,
            type: 'article',
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt,
        },
    };
}

export default async function BlogPostPage({ params }) {
    const { slug: rawSlug } = await params;
    const slug = decodeURIComponent(rawSlug || '');
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const related = getRelatedPosts(slug, 3);
    const canonicalUrl = `${BASE_URL}${encodeURI(`/블로그/${slug}`)}`;

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${canonicalUrl}#article`,
        headline: post.title,
        alternativeHeadline: post.subtitle,
        description: post.excerpt,
        url: canonicalUrl,
        mainEntityOfPage: canonicalUrl,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        inLanguage: 'ko-KR',
        keywords: (post.tags || []).join(', '),
        articleSection: post.category,
        author: { '@id': `${BASE_URL}/#organization` },
        publisher: { '@id': `${BASE_URL}/#organization` },
        isPartOf: { '@id': `${BASE_URL}/블로그#blog` },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <BreadcrumbSchema items={[
                { name: '홈', path: '/' },
                { name: '블로그', path: '/블로그' },
                { name: post.title, path: `/블로그/${slug}` },
            ]} />

            <main className="flex-grow bg-white">
                <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16 sm:py-20 px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-4 text-sm text-blue-200">
                            <Link href="/블로그" className="inline-flex items-center gap-1 hover:text-white transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                                블로그 목록
                            </Link>
                            <span className="opacity-50">/</span>
                            <span className="inline-flex items-center gap-1">
                                <Tag className="w-3.5 h-3.5" />
                                {post.category}
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                            {post.title}
                        </h1>
                        {post.subtitle ? (
                            <p className="text-lg sm:text-xl text-blue-100 mb-6 leading-relaxed">
                                {post.subtitle}
                            </p>
                        ) : null}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-blue-200">
                            <span className="inline-flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                작성: {post.publishedAt}
                            </span>
                            {post.updatedAt && post.updatedAt !== post.publishedAt ? (
                                <span className="inline-flex items-center gap-1.5">
                                    <CheckCircle2 className="w-4 h-4" />
                                    업데이트: {post.updatedAt}
                                </span>
                            ) : null}
                        </div>
                    </div>
                </section>

                <article className="py-12 sm:py-16">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 pb-8 border-b border-blue-100">
                            {post.intro}
                        </p>

                        <div className="space-y-10">
                            {post.sections.map((s, i) => (
                                <section key={i}>
                                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                                        {s.h3}
                                    </h2>
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        {s.body}
                                    </p>
                                </section>
                            ))}
                        </div>

                        {post.highlightBox ? (
                            <aside className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-4">
                                    {post.highlightBox.title}
                                </h3>
                                <ul className="space-y-2">
                                    {post.highlightBox.items.map((it, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-800">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <span>{it}</span>
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                        ) : null}

                        {post.conclusion ? (
                            <section className="mt-12 pt-8 border-t border-blue-100">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">정리</h3>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    {post.conclusion}
                                </p>
                            </section>
                        ) : null}

                        <div className="mt-12 flex flex-wrap gap-2">
                            {(post.tags || []).map((t) => (
                                <span key={t} className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                                    #{t}
                                </span>
                            ))}
                        </div>
                    </div>
                </article>

                {related.length > 0 ? (
                    <section className="py-16 bg-gradient-to-b from-blue-50/30 to-white border-t border-blue-100">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                                관련 글 추천
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {related.map((p) => (
                                    <BlogPostCard key={p.slug} post={p} />
                                ))}
                            </div>
                        </div>
                    </section>
                ) : null}
            </main>
        </>
    );
}
