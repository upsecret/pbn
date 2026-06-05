import Image from 'next/image';
import Link from 'next/link';
import TestimonialCard from '@/components/TestimonialCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Retreats — Women's Wellness Circle",
  description: 'Join one of our restorative healing retreats — an immersive experience for women ready to deeply nourish their health and soul.',
};

const experiences = [
  { title: 'Guided Meditation', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> },
  { title: 'Somatic Practices', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
  { title: 'Nourishing Food', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M12 6v6l4 2"/></svg> },
  { title: 'Time in Nature', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8C8 10 5.9 16.17 3.82 22"/><path d="M9.5 8.5C9.5 8.5 12 10 12 14c0 3-3 6-3 6"/><path d="M14.5 9.5C14.5 9.5 12 12 12 14c0 2 2 3 2 3"/></svg> },
  { title: 'Expert Talks', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> },
  { title: 'Circle Sharing', icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
];

const schedule = [
  { day: 'Day 1', title: 'Arriving & Settling In', items: ['Welcome circle & introductions', 'Orientation to the space and rhythm', 'Opening ceremony & intention setting', 'Nourishing evening meal together'] },
  { day: 'Day 2', title: 'Deepening', items: ['Morning meditation & gentle movement', 'Expert workshop on nervous system healing', 'Afternoon somatic practice session', 'Group sharing circle & rest time'] },
  { day: 'Day 3', title: 'Integration & Closing', items: ['Morning yoga nidra & deep rest', 'Closing workshop: carrying healing home', 'Personal integration time in nature', 'Sacred closing ceremony & celebration'] },
];

export default function RetreatsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div style={{ position: 'relative', minHeight: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '5rem 1rem' }}>
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&h=840&fit=crop&auto=format"
          alt="Beautiful retreat location in nature"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(60,80,60,0.55)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.8)', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Immersive Healing Experiences
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
            Retreats
          </h1>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.88)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
            Step away from the everyday and into a space of deep nourishment, healing, and sisterhood.
          </p>
        </div>
      </div>

      {/* ── Intro ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }} className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', marginBottom: '0.75rem' }}>
              An experience that changes everything.
            </h2>
            <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', marginBottom: '1.75rem' }} />
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              There is something profoundly different about stepping out of your daily environment and into a held space of healing. Our retreats are not holidays — they are transformative containers where deep shifts can happen in just a few days.
            </p>
            <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9 }}>
              Held in carefully chosen locations that are beautiful, accessible, and deeply restorative, our retreats weave together expert guidance, nourishing food, time in nature, and the irreplaceable magic of a circle of women on the healing path together.
            </p>
          </div>
          <div style={{ position: 'relative', height: '380px', minWidth: '280px', borderRadius: '4px', overflow: 'hidden' }} className="w-full md:w-96 flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=780&h=760&fit=crop&auto=format"
              alt="Sunlit forest path representing the healing journey"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* ── What you'll experience ── */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}>
            What you&apos;ll experience
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 3rem' }} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {experiences.map((e) => (
              <div key={e.title} style={{ backgroundColor: 'white', padding: '2rem', textAlign: 'center' }}>
                <div style={{ color: '#6B9080', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>
                  {e.icon}
                </div>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#4A4A4A', fontSize: '0.9rem', fontWeight: 700 }}>{e.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Schedule timeline ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}>
            A Sample 3-Day Schedule
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 3rem' }} />
          <div className="flex flex-col gap-0">
            {schedule.map((s, i) => (
              <div key={s.day} className="flex gap-6" style={{ paddingBottom: i < schedule.length - 1 ? '2.5rem' : 0 }}>
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: '60px' }}>
                  <div style={{ backgroundColor: '#6B9080', color: 'white', fontFamily: "'Lato', sans-serif", fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.4rem 0.5rem', textAlign: 'center', width: '100%' }}>
                    {s.day}
                  </div>
                  {i < schedule.length - 1 && <div style={{ width: '2px', flex: 1, backgroundColor: '#E0D8E0', marginTop: '4px' }} />}
                </div>
                <div style={{ paddingBottom: '1rem' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#4A4A4A', fontSize: '1.1rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <ul className="flex flex-col gap-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span style={{ color: '#6B9080', flexShrink: 0, marginTop: '3px' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </span>
                        <span style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.875rem', lineHeight: 1.7 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '4rem 1rem' }}>
        <TestimonialCard
          quote="This circle is unlike anything else I've come across. The depth of care and the quality of support from both the facilitators and fellow members is extraordinary. I feel seen, held, and inspired every single day."
          name="Fiona"
          location="UK"
          imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format"
          imageAlt="Fiona — Retreat participant"
        />
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#6B9080', padding: '5rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: '1.8rem', marginBottom: '1rem' }}>
          Ready to join us on retreat?
        </h2>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.88)', fontSize: '1rem', maxWidth: '460px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
          Spaces are limited to ensure the retreat remains intimate and held. Get in touch to enquire about upcoming dates.
        </p>
        <Link
          href="/contact"
          style={{ backgroundColor: 'white', color: '#6B9080', fontFamily: "'Lato', sans-serif", fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.9rem 2.5rem', display: 'inline-block', fontWeight: 700 }}
          className="hover:opacity-85 transition-opacity"
        >
          Enquire About Retreats
        </Link>
      </section>
    </>
  );
}
