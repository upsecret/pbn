import Image from 'next/image';
import Link from 'next/link';
import TestimonialCard from '@/components/TestimonialCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Healing Chronic Illness The Feminine Way — Women's Wellness Circle",
  description: 'Discover a new approach to healing chronic illness that honours the feminine body, soul, and spirit.',
};

const steps = [
  { num: '01', title: 'Rest & Regulate', desc: 'We begin by creating safety in the nervous system — the foundation upon which all healing rests. Deep, restorative rest is not a luxury here; it is the medicine.' },
  { num: '02', title: 'Nourish', desc: 'We explore what truly nourishes you — physically through food and environment, emotionally through relationships and self-compassion, spiritually through meaning and joy.' },
  { num: '03', title: 'Reconnect', desc: "We rebuild your relationship with your body, your cyclical nature, your intuition, and your sense of self — so often fractured by years of chronic illness and the fight to be 'normal'." },
  { num: '04', title: 'Rebuild', desc: 'Gradually and gently, we support you to rebuild your capacity, your energy, and your life — on your own terms, at your own pace, with the full support of the circle.' },
];

export default function HealingChronicIllnessPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div style={{ backgroundColor: '#7BA68D', padding: '5rem 1rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.75)', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Our Approach
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', marginBottom: '1rem', lineHeight: 1.2, maxWidth: '680px', margin: '0 auto 1rem' }}>
          Healing Chronic Illness The Feminine Way
        </h1>
        <div style={{ width: '50px', height: '2px', backgroundColor: 'rgba(255,255,255,0.4)', margin: '0 auto' }} />
      </div>

      {/* ── Empathy intro ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }} className="flex flex-col md:flex-row gap-12 items-center">
          <div style={{ position: 'relative', height: '400px', minWidth: '280px', borderRadius: '4px', overflow: 'hidden' }} className="w-full md:w-96 flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=780&h=800&fit=crop&auto=format"
              alt="Healing herbs and botanicals representing natural feminine medicine"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="flex-1">
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', marginBottom: '0.75rem' }}>
              We understand what you&apos;ve been through.
            </h2>
            <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', marginBottom: '1.75rem' }} />
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              If you&apos;re living with chronic illness, you already know how exhausting it is to fight your way through every day — the endless appointments, the conflicting advice, the moments of hope followed by devastating setbacks. You may have been told your illness is &ldquo;in your head,&rdquo; or simply not taken seriously by those who should be helping you.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9 }}>
              We see you. We believe you. And we know there is another way — one that doesn&apos;t require you to force, push, or fight, but instead invites you into a gentle, feminine relationship with your own healing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}>
            A Different Approach
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 3rem' }} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div style={{ backgroundColor: '#E8E0E8', padding: '2.5rem 2rem' }}>
              <h3 style={{ fontFamily: "'Lato', sans-serif", color: '#8B7B8B', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 700 }}>
                The Conventional Approach
              </h3>
              {[
                'Focus on suppressing symptoms',
                'Treating the body as a problem to fix',
                'Pushing through fatigue and pain',
                'Isolated, individual appointments',
                'One-size-fits-all protocols',
                'Ignoring emotional and spiritual dimensions',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 mb-3">
                  <span style={{ color: '#C4B8C4', flexShrink: 0, marginTop: '3px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </span>
                  <span style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.9rem', lineHeight: 1.7 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: '#7BA68D', padding: '2.5rem 2rem' }}>
              <h3 style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 700 }}>
                The Feminine Way
              </h3>
              {[
                'Root-cause healing from the inside out',
                'Honouring the body as wise and resilient',
                'Rest and restoration as primary medicine',
                'Held in a supportive community of women',
                'Personalised, cyclical, holistic care',
                'Integrating body, mind, and spirit',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 mb-3">
                  <span style={{ color: 'rgba(255,255,255,0.7)', flexShrink: 0, marginTop: '3px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 Healing Steps ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}>
            The Four Pillars of Feminine Healing
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 3rem' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} style={{ borderTop: '4px solid #7BA68D', paddingTop: '1.5rem', paddingBottom: '1rem' }}>
                <p style={{ fontFamily: "'Playfair Display', serif", color: '#C4B8C4', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1 }}>{s.num}</p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#4A4A4A', fontSize: '1.05rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.875rem', lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '4rem 1rem' }}>
        <TestimonialCard
          quote="After years of searching for answers, I finally found a community that understands the feminine approach to healing. The Women's Wellness Circle has transformed not just my health, but my entire relationship with my body and life."
          name="Abby"
          location="UK"
          imageSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format"
          imageAlt="Abby — Circle member"
        />
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#7BA68D', padding: '5rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: '1.8rem', marginBottom: '1rem' }}>
          Begin your healing journey today.
        </h2>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.88)', fontSize: '1rem', maxWidth: '460px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
          Start with our free 3-day mini course and experience the feminine approach to healing firsthand.
        </p>
        <Link
          href="/join"
          style={{ backgroundColor: 'white', color: '#7BA68D', fontFamily: "'Lato', sans-serif", fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.9rem 2.5rem', display: 'inline-block', fontWeight: 700 }}
          className="hover:opacity-85 transition-opacity"
        >
          Join The Circle
        </Link>
      </section>
    </>
  );
}
