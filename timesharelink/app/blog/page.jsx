import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import BlogPostCard from '@/components/BlogPostCard';
import BreadcrumbSchema from '@/components/Schema/BreadcrumbSchema';
import { getAllPosts } from '@/lib/blog-posts';
import { BASE_URL } from '@/lib/constants';

export const revalidate = 3600;

export const metadata = {
    title: '블로그 - 주소모음·링크모음 심층 가이드',
    description:
        '타임쉐어링크 블로그 — 검증된 주소모음·링크모음 활용을 위한 가이드, 비교, 트렌드 분석, 보안 주의사항 등 심층 콘텐츠를 한자리에서 확인하세요.',
    alternates: { canonical: '/블로그' },
    openGraph: {
        title: '블로그 - 주소모음·링크모음 심층 가이드 | 타임쉐어링크',
        description: '검증된 주소모음·링크모음 활용을 위한 가이드·비교·트렌드 분석을 한자리에서.',
        url: '/블로그',
        type: 'website',
    },
};

export default function BlogIndexPage() {
    const posts = getAllPosts();

    const blogJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': `${BASE_URL}/블로그#blog`,
        name: '타임쉐어링크 블로그',
        description: '주소모음·링크모음 심층 가이드',
        url: `${BASE_URL}/블로그`,
        inLanguage: 'ko-KR',
        publisher: { '@id': `${BASE_URL}/#organization` },
        blogPost: posts.map((p) => ({
            '@type': 'BlogPosting',
            '@id': `${BASE_URL}/블로그/${p.slug}#article`,
            headline: p.title,
            description: p.excerpt,
            url: `${BASE_URL}${encodeURI(`/블로그/${p.slug}`)}`,
            datePublished: p.publishedAt,
            dateModified: p.updatedAt,
            inLanguage: 'ko',
            author: { '@id': `${BASE_URL}/#organization` },
            publisher: { '@id': `${BASE_URL}/#organization` },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
            />
            <BreadcrumbSchema items={[
                { name: '홈', path: '/' },
                { name: '블로그', path: '/블로그' },
            ]} />

            <main className="flex-grow bg-gradient-to-b from-white to-blue-50/30">
                <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-blue-100 text-sm font-semibold mb-4">
                            <BookOpen className="w-4 h-4" />
                            타임쉐어링크 블로그
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            주소모음·링크모음 심층 가이드
                        </h1>
                        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                            검증된 주소모음 활용을 위한 가이드·비교·트렌드 분석을 한자리에서.
                        </p>
                    </div>
                </section>

                <section className="py-16 sm:py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-baseline justify-between mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                                전체 글 {posts.length}편
                            </h2>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800"
                            >
                                홈으로
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {posts.map((post) => (
                                <BlogPostCard key={post.slug} post={post} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
