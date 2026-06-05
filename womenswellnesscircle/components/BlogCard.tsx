import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  date?: string;
}

export default function BlogCard({ title, excerpt, imageSrc, imageAlt, href, date }: BlogCardProps) {
  return (
    <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E0E8' }} className="flex flex-col h-full">
      {/* Image */}
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {date && (
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#8B7B8B', fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            {date}
          </p>
        )}
        <h3
          style={{ fontFamily: "'Playfair Display', serif", color: '#4A4A4A', fontSize: '1.1rem', lineHeight: 1.4, marginBottom: '0.75rem' }}
        >
          <Link href={href} className="hover:opacity-70 transition-opacity">
            {title}
          </Link>
        </h3>
        <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.875rem', lineHeight: 1.7, flex: 1 }}>
          {excerpt}
        </p>
        <div className="mt-4">
          <Link
            href={href}
            style={{ fontFamily: "'Lato', sans-serif", color: '#8B7B8B', fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'underline' }}
            className="hover:opacity-70 transition-opacity"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
