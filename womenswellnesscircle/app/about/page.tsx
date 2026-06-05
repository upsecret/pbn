import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Story — Women's Wellness Circle",
  description: "Learn about the Women's Wellness Circle — who we are, why we do what we do, and the feminine approach to healing.",
};

const values = [
  {
    title: 'Compassion',
    desc: 'We meet every woman exactly where she is — with kindness, patience, and a deep understanding of the complexity of chronic illness.',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    color: '#9B8EC0',
  },
  {
    title: 'Wisdom',
    desc: "We weave together ancient feminine wisdom and modern evidence-based approaches — honouring what women's bodies and souls have always known.",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
    color: '#8B7B8B',
  },
  {
    title: 'Community',
    desc: 'We believe healing happens in relationship. The circle — not the individual alone — is the container for the deepest transformation.',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    color: '#6B9080',
  },
];

const team = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder & Integrative Health Practitioner',
    bio: "Sarah founded Women's Wellness Circle after her own decade-long journey with ME/CFS. She combines integrative medicine, somatic healing, and feminine wisdom in her work.",
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format',
  },
  {
    name: 'Dr. Emma Hartley',
    role: 'Medical Advisor & Functional Medicine Doctor',
    bio: 'Emma bridges conventional medicine and holistic healing, specialising in autoimmune conditions, hormonal health, and complex chronic illness in women.',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format',
  },
  {
    name: "Jess O'Brien",
    role: 'Somatic Therapist & Mindfulness Teacher',
    bio: "Jess guides women back into relationship with their bodies through somatic practices, trauma-informed movement, and mindfulness — the cornerstone of our healing approach.",
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div style={{ backgroundColor: '#8B7B8B', padding: '5rem 1rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Who We Are
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
          Our Story
        </h1>
        <div style={{ width: '50px', height: '2px', backgroundColor: 'rgba(255,255,255,0.4)', margin: '0 auto' }} />
      </div>

      {/* ── Founding story ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }} className="flex flex-col md:flex-row gap-12 items-center">
          <div style={{ position: 'relative', height: '420px', minWidth: '280px', borderRadius: '4px', overflow: 'hidden' }} className="w-full md:w-96 flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1490750967868-88df5691cc71?w=780&h=840&fit=crop&auto=format"
              alt="Soft botanical flowers representing feminine healing"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="flex-1">
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', marginBottom: '0.75rem' }}>
              How it all began
            </h2>
            <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', marginBottom: '1.75rem' }} />
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              Women&apos;s Wellness Circle was born from a very personal place. Our founder, Sarah Mitchell, spent over a decade navigating ME/CFS with little support and even less understanding from the medical system. She tried every treatment, followed every protocol — and yet something essential was always missing.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              What was missing was community. Feminine wisdom. A space where the whole of a woman&apos;s experience could be held and honoured. When Sarah finally found that — in a small women&apos;s circle — her healing truly began.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9 }}>
              That is why she built Women&apos;s Wellness Circle — to make that transformative experience available to every woman, wherever she is in the world.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission quote ── */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '5rem 1rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <svg width="36" height="28" viewBox="0 0 24 24" fill="#C4B8C4" style={{ margin: '0 auto 1.5rem', display: 'block' }}>
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
          </svg>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#6B5B6B', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Our mission is to empower women to reclaim their health, their vitality, and their full lives — through expert support, feminine wisdom, and the healing power of community.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#8B7B8B', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>
            Women&apos;s Wellness Circle
          </p>
        </div>
      </section>

      {/* ── Core values ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}>
            Our Core Values
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 3rem' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} style={{ padding: '2.5rem 2rem', borderTop: `4px solid ${v.color}`, backgroundColor: '#FAFAFA', textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: v.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  {v.icon}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#4A4A4A', fontSize: '1.15rem', marginBottom: '0.75rem' }}>{v.title}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.9rem', lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}>
            Meet the Team
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 3rem' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} style={{ textAlign: 'center' }}>
                <div style={{ width: '140px', height: '140px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #C4B8C4', margin: '0 auto 1.25rem', position: 'relative' }}>
                  <Image src={member.img} alt={member.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#4A4A4A', fontSize: '1.1rem', marginBottom: '0.3rem' }}>{member.name}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#8B7B8B', fontSize: '0.78rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{member.role}</p>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.875rem', lineHeight: 1.8 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#EDE5DB', padding: '5rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.8rem', marginBottom: '1rem' }}>
          Come join us.
        </h2>
        <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', maxWidth: '460px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
          We would be honoured to walk this path with you. Your healing journey begins here.
        </p>
        <Link
          href="/join"
          style={{ backgroundColor: '#8B7B8B', color: 'white', fontFamily: "'Lato', sans-serif", fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.9rem 2.5rem', display: 'inline-block', fontWeight: 700 }}
          className="hover:opacity-85 transition-opacity"
        >
          Join The Circle
        </Link>
      </section>
    </>
  );
}
