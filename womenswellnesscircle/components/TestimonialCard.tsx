import Image from 'next/image';

interface TestimonialCardProps {
  quote: string;
  name: string;
  location?: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

export default function TestimonialCard({
  quote,
  name,
  location,
  imageSrc,
  imageAlt,
  reversed = false,
}: TestimonialCardProps) {
  return (
    <div
      style={{ backgroundColor: '#FFFFFF', maxWidth: '780px' }}
      className={`mx-auto px-6 py-10 flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}
    >
      {/* Circular image */}
      <div className="flex-shrink-0">
        <div
          style={{ width: '140px', height: '140px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #C4B8C4' }}
          className="relative"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Quote */}
      <div className="text-center md:text-left">
        <p
          style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#4A4A4A', fontSize: '1rem', lineHeight: 1.8, marginBottom: '0.75rem' }}
        >
          &ldquo;{quote}&rdquo;
        </p>
        <p style={{ fontFamily: "'Lato', sans-serif", color: '#8B7B8B', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.04em' }}>
          — {name}{location ? `, ${location}` : ''}
        </p>
      </div>
    </div>
  );
}
