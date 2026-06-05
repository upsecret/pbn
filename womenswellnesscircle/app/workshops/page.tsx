import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Workshops — Women's Wellness Circle",
  description: 'Explore our upcoming workshops and immersive healing experiences for women.',
};

const workshops = [
  {
    title: 'Nervous System Reset',
    tag: 'Foundations',
    date: 'Coming Spring 2025',
    desc: 'A half-day online workshop exploring practical tools for nervous system regulation — the single most impactful step you can take for chronic illness recovery.',
    img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=380&fit=crop&auto=format',
    alt: 'Calming tea and herbs representing nervous system support',
    color: '#9B8EC0',
  },
  {
    title: 'Nourishment & the Feminine Body',
    tag: 'Nutrition & Embodiment',
    date: 'Coming Summer 2025',
    desc: 'Explore the relationship between food, energy, and healing through a feminine lens — moving beyond rigid diets into deep nourishment for body and soul.',
    img: 'https://images.unsplash.com/photo-1490750967868-88df5691cc71?w=600&h=380&fit=crop&auto=format',
    alt: 'Nourishing botanical flowers and plants',
    color: '#7BA68D',
  },
  {
    title: 'The Spiritual Dimensions of Healing',
    tag: 'Mind Body Spirit',
    date: 'Coming Autumn 2025',
    desc: 'An invitation to explore the deeper meaning in your healing journey — how illness can become a doorway to profound personal transformation and spiritual awakening.',
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=380&fit=crop&auto=format',
    alt: 'Peaceful meditation representing spiritual healing',
    color: '#8B7B8B',
  },
];

export default function WorkshopsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div style={{ backgroundColor: '#8B7B8B', padding: '5rem 1rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Deep Dive Experiences
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
          Workshops
        </h1>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
          Immersive, focused healing experiences designed to create real, lasting change.
        </p>
      </div>

      {/* ── Intro ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', marginBottom: '0.75rem' }}>
            More than information — transformation.
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 1.75rem' }} />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
            Our workshops go beyond information-sharing. Each one is a carefully held container where women come together to learn, practice, and transform. We blend expert teaching with experiential practices, group sharing, and the irreplaceable power of circle energy.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9 }}>
            Whether you attend online from the comfort of your home or in person at a venue, you will leave with practical tools, deeper understanding, and a renewed sense of possibility for your healing.
          </p>
        </div>
      </section>

      {/* ── Workshop Cards ── */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}>
            Upcoming Workshops
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 3rem' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workshops.map((w) => (
              <div key={w.title} style={{ backgroundColor: 'white', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '200px' }}>
                  <Image src={w.img} alt={w.alt} fill style={{ objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: w.color, color: 'white', fontFamily: "'Lato', sans-serif", fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.25rem 0.6rem' }}>
                    {w.tag}
                  </span>
                </div>
                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#8B7B8B', fontSize: '0.78rem', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>{w.date}</p>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#4A4A4A', fontSize: '1.1rem', marginBottom: '0.75rem', lineHeight: 1.4 }}>{w.title}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.875rem', lineHeight: 1.8, flex: 1 }}>{w.desc}</p>
                  <div style={{ marginTop: '1.5rem' }}>
                    <Link
                      href="/contact"
                      style={{ color: w.color, fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'underline' }}
                      className="hover:opacity-70 transition-opacity"
                    >
                      Find Out More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Format: Online vs In-Person ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}>
            Two Ways to Join
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 3rem' }} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div style={{ padding: '2.5rem', backgroundColor: '#F5F0EB', borderTop: '4px solid #9B8EC0' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.2rem', marginBottom: '1rem' }}>
                Online Workshops
              </h3>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                Attend from anywhere in the world, from the comfort and safety of your own home. Online workshops are fully live and interactive — not pre-recorded — so you get the full benefit of community and real-time guidance.
              </p>
              <ul className="flex flex-col gap-2">
                {['Fully live and interactive', 'Accessible from anywhere', 'Recorded for members', 'Gentle on energy levels'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9B8EC0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span style={{ fontFamily: "'Lato', sans-serif", color: '#4A4A4A', fontSize: '0.875rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: '#F5F0EB', borderTop: '4px solid #7BA68D' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.2rem', marginBottom: '1rem' }}>
                In-Person Workshops
              </h3>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                Where possible we offer in-person versions of our workshops in carefully selected venues — spaces that are calm, beautiful, and deeply supportive of healing. Nothing replaces the magic of being in the same room.
              </p>
              <ul className="flex flex-col gap-2">
                {['Intimate small groups', 'Beautiful healing venues', 'Nourishing food provided', 'Deeper circle connection'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7BA68D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span style={{ fontFamily: "'Lato', sans-serif", color: '#4A4A4A', fontSize: '0.875rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#EDE5DB', padding: '5rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.8rem', marginBottom: '1rem' }}>
          Don&apos;t miss the next workshop.
        </h2>
        <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', maxWidth: '460px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
          Get in touch to register your interest and be the first to hear about upcoming dates.
        </p>
        <Link
          href="/contact"
          style={{ backgroundColor: '#8B7B8B', color: 'white', fontFamily: "'Lato', sans-serif", fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.9rem 2.5rem', display: 'inline-block', fontWeight: 700 }}
          className="hover:opacity-85 transition-opacity"
        >
          Register Your Interest
        </Link>
      </section>
    </>
  );
}
