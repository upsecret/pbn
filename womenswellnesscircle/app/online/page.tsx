import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Online Programmes — Women's Wellness Circle",
  description: 'Explore our online programmes for women healing from chronic illness — self-paced and live options available.',
};

const programmes = [
  {
    title: 'Self-Study Courses',
    subtitle: 'Learn at your own pace',
    desc: 'Our growing library of self-study courses covers every aspect of feminine healing — from nervous system regulation to nutrition, from emotional healing to spiritual awakening. Access everything immediately and move at whatever pace feels right for your body.',
    features: ['Instant access', 'Learn at your own rhythm', 'Lifetime access to materials', 'New courses added regularly'],
    img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=400&fit=crop&auto=format',
    alt: 'Woman studying peacefully at home',
    price: 'From £47',
    color: '#9B8EC0',
    cta: 'Explore Courses',
  },
  {
    title: '6-Month PBP Programme',
    subtitle: 'Deep transformation with live support',
    desc: 'Our flagship Pacing, Breathing & Power (PBP) programme is a six-month journey combining self-study content with live group calls, personal support, and community accountability. For women who are ready for profound, lasting change.',
    features: ['Monthly live group calls', 'Personal check-ins', 'Full course library access', 'Small group for deep connection'],
    img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop&auto=format',
    alt: 'Woman in peaceful meditation during a programme',
    price: '£297 / 6 months',
    color: '#8B7B8B',
    cta: 'Find Out More',
  },
  {
    title: 'Inner Circle Membership',
    subtitle: 'Ongoing support & community',
    desc: 'The Inner Circle is our all-access membership — the heartbeat of Women\'s Wellness Circle. Get everything: all courses, all live calls, group healing sessions, community access, and the support of a growing sisterhood of women on the healing path.',
    features: ['All courses included', 'Weekly live events', 'Community forum access', 'Monthly expert sessions'],
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop&auto=format',
    alt: 'Women in community supporting each other',
    price: '£47 / month',
    color: '#6B9080',
    cta: 'Join The Circle',
  },
];

export default function OnlinePage() {
  return (
    <>
      {/* ── Hero ── */}
      <div style={{ backgroundColor: '#8B7B8B', padding: '5rem 1rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Learn & Heal From Home
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
          Online Programmes
        </h1>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.88)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
          Accessible, energy-sensitive programmes designed for real life with chronic illness.
        </p>
      </div>

      {/* ── Intro ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', marginBottom: '0.75rem' }}>
            Designed for women who live with real energy limits.
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 1.75rem' }} />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
            We know that conventional online courses are often not built for women with chronic illness. Too much content, too fast a pace, too many expectations. Our programmes are different — intentionally gentle, deeply flexible, and designed to meet you exactly where you are.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9 }}>
            Whether you have five minutes a day or five hours a week, there is a programme that fits your life and your energy levels. Healing happens at the pace of your body — and we honour that completely.
          </p>
        </div>
      </section>

      {/* ── Programme Cards ── */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}>
            Our Programmes
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 3rem' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programmes.map((p) => (
              <div key={p.title} style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '200px' }}>
                  <Image src={p.img} alt={p.alt} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: `${p.color}33` }} />
                </div>
                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: p.color, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem', fontWeight: 700 }}>
                    {p.subtitle}
                  </p>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#4A4A4A', fontSize: '1.2rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '1.25rem', flex: 1 }}>{p.desc}</p>
                  <ul className="flex flex-col gap-2 mb-5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        <span style={{ fontFamily: "'Lato', sans-serif", color: '#4A4A4A', fontSize: '0.83rem' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span style={{ fontFamily: "'Playfair Display', serif", color: p.color, fontSize: '1.1rem', fontWeight: 600 }}>{p.price}</span>
                    <Link
                      href="/contact"
                      style={{ backgroundColor: p.color, color: 'white', fontFamily: "'Lato', sans-serif", fontSize: '0.75rem', letterSpacing: '0.07em', textTransform: 'uppercase', padding: '0.55rem 1.1rem' }}
                      className="hover:opacity-85 transition-opacity"
                    >
                      {p.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Which programme is right for you ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}>
            Which programme is right for you?
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 3rem' }} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div style={{ padding: '2.5rem', backgroundColor: '#F5F0EB', borderLeft: '4px solid #9B8EC0' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.2rem', marginBottom: '1rem' }}>
                Just starting out?
              </h3>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Begin with our free 3-day mini course to experience the feminine approach, then explore our self-study courses to go deeper in your own time.
              </p>
              <Link
                href="/free-three-day-mini-course"
                style={{ color: '#9B8EC0', fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'underline' }}
                className="hover:opacity-70 transition-opacity"
              >
                Start with the Free Course →
              </Link>
            </div>
            <div style={{ padding: '2.5rem', backgroundColor: '#F5F0EB', borderLeft: '4px solid #6B9080' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.2rem', marginBottom: '1rem' }}>
                Ready for deeper support?
              </h3>
              <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                If you&apos;re ready for a fully supported healing journey with live guidance and community, the Inner Circle membership or PBP Programme will give you everything you need.
              </p>
              <Link
                href="/join"
                style={{ color: '#6B9080', fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'underline' }}
                className="hover:opacity-70 transition-opacity"
              >
                Explore The Inner Circle →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#EDE5DB', padding: '5rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.8rem', marginBottom: '1rem' }}>
          Not sure which programme suits you?
        </h2>
        <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', maxWidth: '460px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
          Get in touch — we&apos;ll be happy to help you find the right fit for where you are on your healing journey.
        </p>
        <Link
          href="/contact"
          style={{ backgroundColor: '#8B7B8B', color: 'white', fontFamily: "'Lato', sans-serif", fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.9rem 2.5rem', display: 'inline-block', fontWeight: 700 }}
          className="hover:opacity-85 transition-opacity"
        >
          Get In Touch
        </Link>
      </section>
    </>
  );
}
