import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free 3-Day Mini Course — Women's Wellness Circle",
  description: 'Start your healing journey with our free 3-day mini course designed for women with chronic illness.',
};

const days = [
  {
    day: 'Day 1',
    title: 'Rest & Come Home to Your Body',
    desc: "We begin by slowing down — learning to listen to your body's signals, release the push-through mentality, and create the safety your nervous system needs to begin healing.",
    color: '#9B8EC0',
  },
  {
    day: 'Day 2',
    title: 'Nourish From the Inside Out',
    desc: 'Explore the feminine approach to nourishment — physically, emotionally, and energetically. Discover simple, powerful practices that support deep restoration.',
    color: '#8B7B8B',
  },
  {
    day: 'Day 3',
    title: 'Reconnect With Your Feminine Power',
    desc: 'On day three we open to the deeper dimensions of healing — reconnecting with your intuition, your cyclical nature, and the wisdom that already lives within you.',
    color: '#6B9080',
  },
];

const learnings = [
  'Why the conventional "push through" approach keeps women stuck',
  'How to create a nervous system environment that supports healing',
  'Simple daily practices for deep restoration and energy recovery',
  'The role of the feminine cycle in chronic illness recovery',
  'How community and connection accelerate the healing process',
];

export default function MiniCoursePage() {
  return (
    <>
      {/* ── Hero ── */}
      <div style={{ backgroundColor: '#9B8EC0', padding: '5rem 1rem', textAlign: 'center' }}>
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          {['Free', '3 Days', 'Online'].map((badge) => (
            <span key={badge} style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', fontFamily: "'Lato', sans-serif", fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.3rem 1rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.4)' }}>
              {badge}
            </span>
          ))}
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', marginBottom: '1.25rem', lineHeight: 1.2, maxWidth: '600px', margin: '0 auto 1.25rem' }}>
          Free 3-Day Mini Course
        </h1>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.88)', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
          A gentle introduction to healing chronic illness the feminine way — at no cost, from wherever you are.
        </p>
        <Link
          href="/contact"
          style={{ backgroundColor: 'white', color: '#9B8EC0', fontFamily: "'Lato', sans-serif", fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.9rem 2.5rem', display: 'inline-block', fontWeight: 700 }}
          className="hover:opacity-85 transition-opacity"
        >
          Enrol For Free
        </Link>
      </div>

      {/* ── Who Is This For — 2 columns ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }} className="flex flex-col md:flex-row gap-12 items-center">
          <div style={{ position: 'relative', height: '380px', minWidth: '280px', borderRadius: '4px', overflow: 'hidden' }} className="w-full md:w-96 flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=780&h=760&fit=crop&auto=format"
              alt="Woman in nature beginning her healing journey"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="flex-1">
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', marginBottom: '0.75rem' }}>
              Is this mini course for you?
            </h2>
            <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', marginBottom: '1.75rem' }} />
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              This course is for you if you are a woman living with chronic illness — whether that&apos;s ME/CFS, fibromyalgia, autoimmune conditions, Lyme disease, long COVID, or any complex health challenge that conventional medicine hasn&apos;t fully addressed.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9 }}>
              It&apos;s for you if you&apos;re exhausted from fighting your body, if you sense there is a deeper dimension to your healing, and if you&apos;re ready to explore a gentler, more feminine approach — one that works with your body rather than against it.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3-Day Curriculum ── */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}>
            Your 3-Day Journey
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 3rem' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {days.map((d) => (
              <div key={d.day} style={{ backgroundColor: 'white', borderTop: `4px solid ${d.color}`, padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
                <p style={{ fontFamily: "'Lato', sans-serif", color: d.color, fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 700 }}>
                  {d.day}
                </p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#4A4A4A', fontSize: '1.1rem', marginBottom: '1rem', lineHeight: 1.4 }}>
                  {d.title}
                </h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.9rem', lineHeight: 1.8 }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You'll Learn ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}>
            What you&apos;ll discover
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 2.5rem' }} />
          <ul className="flex flex-col gap-4">
            {learnings.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span style={{ backgroundColor: '#9B8EC0', borderRadius: '50%', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <span style={{ fontFamily: "'Lato', sans-serif", color: '#4A4A4A', fontSize: '1rem', lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Facilitator intro ── */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }} className="flex flex-col sm:flex-row gap-8 items-center">
          <div style={{ width: '110px', height: '110px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '3px solid #C4B8C4', position: 'relative' }}>
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=220&h=220&fit=crop&crop=face&auto=format"
              alt="Sarah Mitchell — course facilitator"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#8B7B8B', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Your Facilitator</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#4A4A4A', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Sarah Mitchell</h3>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.9rem', lineHeight: 1.8 }}>
              Founder of Women&apos;s Wellness Circle, integrative health practitioner, and chronic illness recovery specialist. Sarah has supported hundreds of women on their healing journeys using the feminine approach to wellness.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#9B8EC0', padding: '5rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: '1.8rem', marginBottom: '1rem' }}>
          Begin your healing journey — for free.
        </h2>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.88)', fontSize: '1rem', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
          Three days. Zero cost. A lifetime of insight.
        </p>
        <Link
          href="/contact"
          style={{ backgroundColor: 'white', color: '#9B8EC0', fontFamily: "'Lato', sans-serif", fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.9rem 2.5rem', display: 'inline-block', fontWeight: 700 }}
          className="hover:opacity-85 transition-opacity"
        >
          Enrol For Free Now
        </Link>
      </section>
    </>
  );
}
