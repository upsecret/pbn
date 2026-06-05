import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllPosts, stripHtml, formatDate } from '@/lib/wordpress';

export const metadata: Metadata = {
  title: "Blog — Women's Wellness Circle",
  description: "Insights, stories, and wisdom on women's health, feminine healing, and chronic illness recovery.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      {/* ── Hero ── */}
      <div style={{ backgroundColor: '#8B7B8B', padding: '5rem 1rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Wisdom &amp; Insights
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
          From Our Blog
        </h1>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
          Stories, guidance, and practical wisdom to support your healing journey.
        </p>
      </div>

      {/* ── Post Grid ── */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {posts.length === 0 ? (
            <p style={{ textAlign: 'center', fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem' }}>
              No posts yet — check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const excerpt = stripHtml(post.excerpt);
                const date = formatDate(post.date);
                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group block"
                    style={{ textDecoration: 'none' }}
                  >
                    <article style={{ backgroundColor: 'white', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s ease' }}
                      className="group-hover:shadow-lg"
                    >
                      {/* Featured image */}
                      <div style={{ position: 'relative', height: '220px', backgroundColor: '#EDE5DB', overflow: 'hidden' }}>
                        {post.featuredImage ? (
                          <Image
                            src={post.featuredImage.node.sourceUrl}
                            alt={post.featuredImage.node.altText || post.title}
                            fill
                            style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                            className="group-hover:scale-105"
                          />
                        ) : (
                          /* Fallback if no featured image */
                          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C4B8C4" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <p style={{ fontFamily: "'Lato', sans-serif", color: '#8B7B8B', fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                          {date}
                        </p>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#4A4A4A', fontSize: '1.15rem', lineHeight: 1.4, marginBottom: '0.85rem', flex: 1 }}
                          className="group-hover:opacity-75 transition-opacity"
                        >
                          {post.title}
                        </h2>
                        {excerpt && (
                          <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {excerpt}
                          </p>
                        )}
                        <span style={{ fontFamily: "'Lato', sans-serif", color: '#8B7B8B', fontSize: '0.78rem', letterSpacing: '0.07em', textTransform: 'uppercase', textDecoration: 'underline' }}>
                          Read More
                        </span>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
