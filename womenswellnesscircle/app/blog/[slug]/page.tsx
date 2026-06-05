import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPostBySlug, getAllPosts, stripHtml, formatDate } from '@/lib/wordpress';

/* ── Static params for ISR ── */
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

/* ── Dynamic metadata ── */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found — Women's Wellness Circle" };
  return {
    title: `${post.title} — Women's Wellness Circle`,
    description: stripHtml(post.excerpt).slice(0, 160),
  };
}

/* ── Page ── */
export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const date = formatDate(post.date);

  return (
    <>
      {/* ── Hero / Featured image ── */}
      {post.featuredImage ? (
        <div style={{ position: 'relative', height: 'clamp(260px, 40vw, 480px)', overflow: 'hidden' }}>
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(60,50,60,0.45)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: '2.5rem 1.5rem' }}>
            <div style={{ maxWidth: '820px', margin: '0 auto', width: '100%' }}>
              <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.75)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                {date}
              </p>
              <h1 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: 'clamp(1.5rem, 4vw, 2.6rem)', lineHeight: 1.25 }}>
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ backgroundColor: '#8B7B8B', padding: '4rem 1rem', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {date}
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', lineHeight: 1.3, maxWidth: '700px', margin: '0 auto' }}>
            {post.title}
          </h1>
        </div>
      )}

      {/* ── Article body ── */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {/* Back link */}
          <Link
            href="/blog"
            style={{ fontFamily: "'Lato', sans-serif", color: '#8B7B8B', fontSize: '0.8rem', letterSpacing: '0.07em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2.5rem' }}
            className="hover:opacity-70 transition-opacity"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Back to Blog
          </Link>

          {/* Post content */}
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Bottom back link */}
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #E8E0E8' }}>
            <Link
              href="/blog"
              style={{ backgroundColor: '#8B7B8B', color: 'white', fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.75rem 1.75rem', display: 'inline-block', fontWeight: 700 }}
              className="hover:opacity-85 transition-opacity"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
