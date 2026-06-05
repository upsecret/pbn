import Image from 'next/image';
import Link from 'next/link';
import TestimonialCard from '@/components/TestimonialCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Join The Circle — Women's Wellness Circle",
  description: 'Become part of our warm, supportive community of women healing from chronic illness.',
};

const included = [
  'Monthly live group healing calls',
  'Access to all self-study courses',
  'Weekly guided meditations',
  'Private community forum',
  'Expert guest speaker sessions',
  'Seasonal healing programmes',
  'Discounts on retreats & workshops',
  'New resources added every month',
];

export default function JoinPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div style={{ backgroundColor: '#8B7B8B', padding: '5rem 1rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Women&apos;s Wellness Circle
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
          Join The Circle
        </h1>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
          A warm, expert-guided community for women healing from chronic illness — wherever you are in the world.
        </p>
        <Link
          href="/contact"
          style={{ backgroundColor: 'white', color: '#8B7B8B', fontFamily: "'Lato', sans-serif", fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.9rem 2.5rem', display: 'inline-block', fontWeight: 700 }}
          className="hover:opacity-85 transition-opacity"
        >
          Join The Circle Today
        </Link>
      </div>

      {/* ── Intro ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.7rem', marginBottom: '1.5rem', lineHeight: 1.4 }}>
            You are not alone on this journey.
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 2rem' }} />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
            Healing from chronic illness can be an isolating and confusing path. Many of us have spent years searching for answers, trying treatment after treatment, and feeling deeply misunderstood. We know how exhausting that is — and we know there is a better way.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9 }}>
            When you join the Circle, you step into a community of women who understand — deeply and personally — what you are going through. You receive expert guidance, proven tools, and the irreplaceable support of a genuine sisterhood.
          </p>
        </div>
      </section>

      {/* ── Benefits — 3 columns ── */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}>
            What&apos;s Inside The Circle
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 3rem' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Monthly Live Calls',
                desc: 'Intimate group calls led by expert practitioners — a space to share, learn, and feel truly held.',
                icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
              },
              {
                title: 'Group Healing Sessions',
                desc: 'Experience the profound power of group healing — meditations, somatic practices, and guided visualisations.',
                icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
              },
              {
                title: 'Full Resource Library',
                desc: 'Unlock our complete library of courses, meditations, expert interviews, and healing guides.',
                icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
              },
            ].map((b) => (
              <div key={b.title} style={{ backgroundColor: '#8B7B8B', padding: '2.5rem 2rem', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  {b.icon}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: '1.15rem', marginBottom: '0.75rem' }}>{b.title}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.82)', fontSize: '0.9rem', lineHeight: 1.8 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Membership Detail — 2 columns ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }} className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', marginBottom: '0.75rem' }}>
              Everything included in your membership
            </h2>
            <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', marginBottom: '2rem' }} />
            <ul className="flex flex-col gap-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span style={{ color: '#7BA68D', marginTop: '3px', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  <span style={{ fontFamily: "'Lato', sans-serif", color: '#4A4A4A', fontSize: '0.95rem', lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full" style={{ maxWidth: '440px' }}>
            <div style={{ position: 'relative', height: '400px', borderRadius: '4px', overflow: 'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=880&h=800&fit=crop&auto=format"
                alt="Women in a supportive healing circle"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '4rem 1rem' }}>
        <TestimonialCard
          quote="Joining Women's Wellness Circle has been one of the best decisions I've made on my healing journey. The support, the community, and the wisdom shared here have helped me reclaim my health and my sense of self in ways I never thought possible."
          name="Lovinka"
          location="Netherlands"
          imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face&auto=format"
          imageAlt="Lovinka — Circle member"
        />
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#EDE5DB', padding: '5rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.8rem', marginBottom: '1rem' }}>
          Ready to join us?
        </h2>
        <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
          Membership is open to all women. Come as you are — wherever you are on your healing journey.
        </p>
        <Link
          href="/contact"
          style={{ backgroundColor: '#8B7B8B', color: 'white', fontFamily: "'Lato', sans-serif", fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.9rem 2.5rem', display: 'inline-block', fontWeight: 700 }}
          className="hover:opacity-85 transition-opacity"
        >
          Join The Circle Today
        </Link>
      </section>
    </>
  );
}
