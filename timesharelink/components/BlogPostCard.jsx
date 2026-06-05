import Link from 'next/link';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

export default function BlogPostCard({ post }) {
    const href = encodeURI(`/블로그/${post.slug}`);
    return (
        <article className="group flex flex-col h-full bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
            <div className="flex-1 flex flex-col p-6">
                <div className="flex items-center gap-3 mb-3 text-xs text-blue-500">
                    <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.publishedAt}
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <Tag className="w-3.5 h-3.5" />
                        {post.category}
                    </span>
                </div>
                <Link href={href} className="block flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                    </h3>
                    {post.subtitle ? (
                        <p className="text-sm text-blue-700 font-medium mb-3 leading-snug">
                            {post.subtitle}
                        </p>
                    ) : null}
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                    </p>
                </Link>
                <div className="mt-auto pt-3 border-t border-blue-50 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                        {(post.tags || []).slice(0, 2).map((t) => (
                            <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                                #{t}
                            </span>
                        ))}
                    </div>
                    <Link
                        href={href}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        읽기
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </article>
    );
}
