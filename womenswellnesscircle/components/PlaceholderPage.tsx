import Link from 'next/link';

interface PlaceholderPageProps {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  accentColor?: string;
}

export default function PlaceholderPage({
  title,
  description,
  ctaLabel = 'Contact Us',
  ctaHref = '/contact',
  accentColor = '#9B8EC0',
}: PlaceholderPageProps) {
  return (
    <>
      {/* Hero banner */}
      <div style={{ backgroundColor: accentColor, padding: '4rem 1rem', textAlign: 'center' }}>
        <h1
          style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', marginBottom: '1rem', lineHeight: 1.3 }}
        >
          {title}
        </h1>
        <div style={{ width: '60px', height: '3px', backgroundColor: 'rgba(255,255,255,0.5)', margin: '0 auto' }} />
      </div>

      {/* Content */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '2rem' }}
          >
            {description}
          </p>
          <Link
            href={ctaHref}
            style={{ backgroundColor: accentColor, color: 'white', fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.75rem 2rem', display: 'inline-block' }}
            className="hover:opacity-85 transition-opacity"
          >
            {ctaLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
