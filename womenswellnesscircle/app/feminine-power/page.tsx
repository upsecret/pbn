import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Feminine Power — Women's Wellness Circle",
  description: 'Explore the feminine power approach to healing chronic illness and reclaiming your vitality.',
};

const principles = [
  {
    title: 'Body Wisdom',
    desc: 'Your body is not your enemy — it is your greatest teacher. Learning to listen to its signals, honour its needs, and trust its innate intelligence is the foundation of feminine healing.',
    img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=400&fit=crop&auto=format',
    alt: 'Woman in gentle yoga, connecting with her body',
  },
  {
    title: 'Cyclical Living',
    desc: "Women's bodies move in cycles — monthly, seasonally, and through life's great transitions. When we align our energy and activities with these natural rhythms, healing becomes effortless.",
    img: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=400&fit=crop&auto=format',
    alt: 'The moon and nature cycles representing feminine rhythms',
  },
  {
    title: 'Sacred Rest',
    desc: 'Rest is not laziness — it is medicine. In a culture that glorifies busyness, choosing to rest is a radical and deeply feminine act that creates the conditions for true healing.',
    img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=400&fit=crop&auto=format',
    alt: 'Woman resting peacefully, journaling',
  },
];

const practices = [
  'Morning body-check-in practice (5 minutes)',
  'Tracking your energy across your monthly cycle',
  'Gentle movement aligned with how you actually feel',
  'Nourishing yourself before you help others',
  'Creating boundaries that protect your healing energy',
];

export default function FemininePowerPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div style={{ backgroundColor: '#9B8EC0', padding: '5rem 1rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Our Philosophy
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
          Feminine Power
        </h1>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
          The innate wisdom, resilience, and creative life force that lives within every woman.
        </p>
      </div>

      {/* ── Intro ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }} className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', marginBottom: '0.75rem' }}>
              What is Feminine Power?
            </h2>
            <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', marginBottom: '1.75rem' }} />
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              Feminine power is not about gender — it is about a way of being in the world that is receptive, cyclical, relational, and deeply connected to nature and the body. It is the counterpoint to the dominant culture of striving, pushing, and achieving at all costs.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9 }}>
              For women with chronic illness, reconnecting with feminine power is often the key that unlocks healing. When we stop fighting our bodies and start listening to them, when we prioritise rest and nourishment over productivity, when we allow ourselves to receive support — that is when transformation becomes possible.
            </p>
          </div>
          <div style={{ position: 'relative', height: '380px', minWidth: '280px', borderRadius: '4px', overflow: 'hidden' }} className="w-full md:w-96 flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=780&h=760&fit=crop&auto=format"
              alt="Woman in peaceful meditation, connecting with feminine power"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* ── 3 Principles ── */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}>
            Three Core Principles
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 3rem' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.title} style={{ backgroundColor: 'white', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '200px' }}>
                  <Image src={p.img} alt={p.alt} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.15rem', marginBottom: '0.75rem' }}>{p.title}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.9rem', lineHeight: 1.8 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section style={{ backgroundColor: '#8B7B8B', padding: '5rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <svg width="36" height="28" viewBox="0 0 24 24" fill="rgba(255,255,255,0.3)" style={{ margin: '0 auto 1.5rem', display: 'block' }}>
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
          </svg>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: 'white', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            The feminine is not weak — it is the most powerful force for healing the world has ever known. And it begins with you.
          </p>
        </div>
      </section>

      {/* ── Daily Practices ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}>
            Feminine Power in Daily Life
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 1rem' }} />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9, textAlign: 'center', marginBottom: '2.5rem' }}>
            Small, consistent acts of self-honouring create the conditions for deep healing. Here are five practices we recommend:
          </p>
          <ul className="flex flex-col gap-4">
            {practices.map((item, i) => (
              <li key={item} className="flex items-start gap-4">
                <span style={{ backgroundColor: '#F5F0EB', color: '#9B8EC0', fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 600, width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {i + 1}
                </span>
                <span style={{ fontFamily: "'Lato', sans-serif", color: '#4A4A4A', fontSize: '0.95rem', lineHeight: 1.7, paddingTop: '4px' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#EDE5DB', padding: '5rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.8rem', marginBottom: '1rem' }}>
          Ready to explore feminine healing?
        </h2>
        <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', maxWidth: '460px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
          Begin with our free 3-day mini course and experience the feminine approach to healing for yourself.
        </p>
        <Link
          href="/free-three-day-mini-course"
          style={{ backgroundColor: '#9B8EC0', color: 'white', fontFamily: "'Lato', sans-serif", fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.9rem 2.5rem', display: 'inline-block', fontWeight: 700 }}
          className="hover:opacity-85 transition-opacity"
        >
          Try the Free Mini Course
        </Link>
      </section>
    </>
  );
}
