import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free Online Events — Women's Wellness Circle",
  description: 'Join our free online events — healing circles, expert talks, and community gatherings for women.',
};

const eventTypes = [
  {
    title: 'Healing Circles',
    desc: 'Live online circles where women gather to share, be witnessed, and receive gentle healing practices together. These intimate sessions are held in a sacred, confidential container.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=380&fit=crop&auto=format',
    alt: 'Women gathered in a healing circle',
  },
  {
    title: 'Expert Q&A Sessions',
    desc: 'Bring your questions directly to our team of practitioners and guest experts — from functional medicine doctors to somatic therapists, nutritionists, and energy healers.',
    img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&h=380&fit=crop&auto=format',
    alt: 'Woman writing notes during an expert session',
  },
  {
    title: 'Growing Together Series',
    desc: 'Our flagship free video series — a multi-part journey exploring the feminine approach to healing, designed to be accessible to every woman regardless of her circumstances.',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=380&fit=crop&auto=format',
    alt: 'Woman outdoors, growing and healing in nature',
  },
];

const upcomingEvents = [
  {
    title: 'Growing Together: Spring Edition',
    type: 'Video Series',
    date: 'April 2025',
    desc: 'Our beloved Growing Together series returns with a focus on renewal, energy recovery, and the medicine of spring.',
    color: '#9B8EC0',
  },
  {
    title: 'Healing Circle: Navigating Flare-Ups',
    type: 'Live Circle',
    date: 'March 2025',
    desc: 'A guided healing circle for women going through difficult symptom periods — a space to feel held and find your ground.',
    color: '#7BA68D',
  },
  {
    title: 'Expert Q&A: Hormones & Chronic Illness',
    type: 'Expert Session',
    date: 'March 2025',
    desc: 'Dr Emma Hartley answers your questions about the relationship between hormonal health and chronic illness recovery.',
    color: '#8B7B8B',
  },
];

export default function FreeOnlineEventsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div style={{ backgroundColor: '#9B8EC0', padding: '5rem 1rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Open to All Women · Always Free
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
          Free Online Events
        </h1>
        <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.88)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
          Live healing experiences, expert guidance, and community connection — at no cost to you.
        </p>
      </div>

      {/* ── Intro ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', marginBottom: '0.75rem' }}>
            Healing should be accessible to every woman.
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 1.75rem' }} />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
            We believe that no woman should be without support on her healing journey because of financial constraints. That is why we regularly offer free online events — live, real, and deeply meaningful experiences that are open to all.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9 }}>
            These events are our gift to the community — and a way of introducing you to the deeper work we do together inside the Circle. You are welcome here, exactly as you are.
          </p>
        </div>
      </section>

      {/* ── Event Types ── */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}>
            Types of Free Events
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 3rem' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventTypes.map((e) => (
              <div key={e.title} style={{ backgroundColor: 'white', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '200px' }}>
                  <Image src={e.img} alt={e.alt} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.1rem', marginBottom: '0.75rem' }}>{e.title}</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.875rem', lineHeight: 1.8 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section style={{ backgroundColor: 'white', padding: '5rem 1rem' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}>
            Upcoming Events
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: '#C4B8C4', margin: '0 auto 3rem' }} />
          <div className="flex flex-col gap-4">
            {upcomingEvents.map((ev) => (
              <div key={ev.title} style={{ border: '1px solid #E8E0E8', padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: ev.color, color: 'white', fontFamily: "'Lato', sans-serif", fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.3rem 0.6rem', whiteSpace: 'nowrap', marginTop: '3px', flexShrink: 0 }}>
                  {ev.type}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#4A4A4A', fontSize: '1.05rem', marginBottom: '0.3rem' }}>{ev.title}</h3>
                    <span style={{ fontFamily: "'Lato', sans-serif", color: '#8B7B8B', fontSize: '0.78rem', backgroundColor: '#F5F0EB', padding: '0.2rem 0.6rem', whiteSpace: 'nowrap' }}>
                      {ev.date}
                    </span>
                  </div>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.875rem', lineHeight: 1.7 }}>{ev.desc}</p>
                  <Link
                    href="/contact"
                    style={{ fontFamily: "'Lato', sans-serif", color: ev.color, fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'underline', display: 'inline-block', marginTop: '0.75rem' }}
                    className="hover:opacity-70 transition-opacity"
                  >
                    Register Free
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: '#EDE5DB', padding: '5rem 1rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.8rem', marginBottom: '1rem' }}>
          Never miss a free event.
        </h2>
        <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', maxWidth: '460px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
          Get in touch to be added to our events list and receive notifications about all upcoming free events.
        </p>
        <Link
          href="/contact"
          style={{ backgroundColor: '#9B8EC0', color: 'white', fontFamily: "'Lato', sans-serif", fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.9rem 2.5rem', display: 'inline-block', fontWeight: 700 }}
          className="hover:opacity-85 transition-opacity"
        >
          Join The Events List
        </Link>
      </section>
    </>
  );
}
