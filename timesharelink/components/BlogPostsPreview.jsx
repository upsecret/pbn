import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import BlogPostCard from '@/components/BlogPostCard';
import { getRecentPosts } from '@/lib/blog-posts';

export default function BlogPostsPreview() {
    const posts = getRecentPosts(6);

    return (
        <section className="py-20 sm:py-24 bg-gradient-to-b from-white to-blue-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                        <BookOpen className="w-4 h-4" />
                        타임쉐어링크 블로그
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        주소모음·링크모음 심층 가이드
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        검증된 주소모음 활용을 위한 가이드·비교·트렌드 분석을 한자리에서 확인하세요.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                    {posts.map((post) => (
                        <BlogPostCard key={post.slug} post={post} />
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/블로그"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                        블로그 전체 글 보기
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
