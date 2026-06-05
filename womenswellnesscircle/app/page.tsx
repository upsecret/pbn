import Link from 'next/link';
import TestimonialCard from '@/components/TestimonialCard';
import BlogCard from '@/components/BlogCard';

/* ─────────────── DATA ─────────────── */

const testimonials = [
  {
    quote:
      "Joining Women's Wellness Circle has been one of the best decisions I've made on my healing journey. The support, the community, and the wisdom shared here have helped me reclaim my health and my sense of self in ways I never thought possible.",
    name: 'Lovinka',
    location: 'Netherlands',
    imageSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face&auto=format',
    imageAlt: "Lovinka — Women's Wellness Circle member",
  },
  {
    quote:
      "I can't believe how much my life has changed since joining this circle. I have been struggling with chronic fatigue for years, and this community has given me the tools, the encouragement, and the love I needed to truly heal.",
    name: 'Katie Rose',
    location: 'UK',
    imageSrc: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format',
    imageAlt: "Katie Rose — Women's Wellness Circle member",
  },
  {
    quote:
      "This circle is unlike anything else I've come across. The depth of care and the quality of support from both the facilitators and fellow members is extraordinary. I feel seen, held, and inspired every single day.",
    name: 'Fiona',
    location: 'UK',
    imageSrc: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face&auto=format',
    imageAlt: "Fiona — Women's Wellness Circle member",
  },
  {
    quote:
      "After years of searching for answers, I finally found a community that understands the feminine approach to healing. The Women's Wellness Circle has transformed not just my health, but my entire relationship with my body and life.",
    name: 'Abby',
    location: 'UK',
    imageSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format',
    imageAlt: "Abby — Women's Wellness Circle member",
  },
];

const blogPosts = [
  {
    title: 'Supporting Each Other Through Illness: The Power of Community',
    excerpt:
      "Sometimes the most powerful medicine isn't found in a bottle — it's found in the warm presence of others who truly understand what you're going through.",
    imageSrc: '/images/placeholder-blog.svg',
    imageAlt: 'Women supporting each other',
    href: '/blog/supporting-each-other',
    date: 'March 2025',
  },
  {
    title: 'Again and Again We Are Met With Pain: Finding Grace in Difficult Times',
    excerpt:
      "We often can't help but judge ourselves harshly. We can't keep up, we're exhausted, and yet we still manage to show up beautifully, even in the most challenging circumstances.",
    imageSrc: '/images/placeholder-blog.svg',
    imageAlt: 'Finding grace and healing',
    href: '/blog/finding-grace',
    date: 'February 2025',
  },
  {
    title: 'The Beauty of Circles: Returning to Ancient Feminine Wisdom',
    excerpt:
      "Throughout history, women have gathered in circles to support, share, and heal together. Today, we are reclaiming this ancient wisdom in a modern context.",
    imageSrc: '/images/placeholder-blog.svg',
    imageAlt: 'Ancient feminine wisdom',
    href: '/blog/beauty-of-circles',
    date: 'January 2025',
  },
];

/* ─────────────── PAGE ─────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── SECTION 1: Top Banner ── */}
      <div style={{ backgroundColor: '#9B8EC0' }} className="w-full text-center py-3 px-4">
        <Link
          href="/free-online-events"
          style={{ fontFamily: "'Lato', sans-serif", color: 'white', fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 700 }}
          className="hover:opacity-85 transition-opacity"
        >
          Click Here For Growing Together Free Resources
        </Link>
      </div>

      {/* ── SECTION 1: Hero — Video ── */}
      <section style={{ backgroundColor: '#F5F0EB' }} className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', marginBottom: '1rem', textAlign: 'center' }}
          >
            Growing Together
          </h2>
          {/* YouTube embed */}
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '4px', marginBottom: '1rem' }}>
            <iframe
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Growing Together — Women's Wellness Circle"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.9rem', lineHeight: 1.8, textAlign: 'center' }}>
            A free 5-part video series to support your wellbeing and help you feel calm, safe, and deeply nourished.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Intro Text ── */}
      <section style={{ backgroundColor: 'white' }} className="py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.5rem', marginBottom: '1.5rem', lineHeight: 1.5 }}
          >
            We are an online women&apos;s wellness circle offering expert support and guidance for your recovery from chronic illness.
          </h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#C4B8C4', margin: '0 auto 1.75rem' }} />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
            We understand that recovering from chronic illness isn&apos;t just a physical journey — it&apos;s a deeply emotional, spiritual, and feminine one. Our circle provides a safe, nurturing space where women come together to heal holistically, supported by compassionate experts and a loving community.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1.25rem' }}>
            We draw on ancient feminine wisdom alongside modern evidence-based approaches to empower you to reclaim your health, your energy, and your joy. Whether you are at the beginning of your healing journey or have been navigating chronic illness for years, you will find a home here.
          </p>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9 }}>
            You are not alone. Healing is possible. And together, we rise.
          </p>
        </div>
      </section>

      {/* ── SECTION 3: 3-Column CTA Cards ── */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Card 1 — Self Study Courses */}
          <div
            style={{ backgroundColor: '#8B7B8B', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: '1.3rem', fontWeight: 600 }}>
              Our Self Study Courses
            </h3>
            <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: 1.8 }}>
              Explore our library of self-paced courses designed specifically for women healing from chronic illness. Learn at your own rhythm, in your own time.
            </p>
            <Link
              href="/online"
              style={{ marginTop: '0.5rem', border: '2px solid white', color: 'white', padding: '0.6rem 1.5rem', fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', letterSpacing: '0.07em', textTransform: 'uppercase' }}
              className="hover:bg-white hover:text-[#8B7B8B] transition-all"
            >
              Explore Our Courses
            </Link>
          </div>

          {/* Card 2 — Join The Circle */}
          <div
            style={{ backgroundColor: '#7B8B7B', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: '1.3rem', fontWeight: 600 }}>
              Join The Circle
            </h3>
            <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: 1.8 }}>
              Become part of our warm, supportive community of women. Join live calls, group healing sessions, and connect with sisters who truly understand your journey.
            </p>
            <Link
              href="/join"
              style={{ marginTop: '0.5rem', border: '2px solid white', color: 'white', padding: '0.6rem 1.5rem', fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', letterSpacing: '0.07em', textTransform: 'uppercase' }}
              className="hover:bg-white hover:text-[#7B8B7B] transition-all"
            >
              Join The Circle
            </Link>
          </div>

          {/* Card 3 — One-on-One Support */}
          <div
            style={{ backgroundColor: '#6B9080', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem' }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: '1.3rem', fontWeight: 600 }}>
              One-on-One Support
            </h3>
            <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: 1.8 }}>
              Work personally with one of our expert practitioners for deeply personalised guidance and support tailored to your unique healing journey.
            </p>
            <Link
              href="/contact"
              style={{ marginTop: '0.5rem', border: '2px solid white', color: 'white', padding: '0.6rem 1.5rem', fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', letterSpacing: '0.07em', textTransform: 'uppercase' }}
              className="hover:bg-white hover:text-[#6B9080] transition-all"
            >
              Find Out More
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTIONS 4 & 5: Testimonials 1 & 2 ── */}
      <section style={{ backgroundColor: '#F5F0EB' }} className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {testimonials.slice(0, 2).map((t, i) => (
            <div key={t.name} style={{ borderBottom: i === 0 ? '1px solid #E0D8E0' : 'none', paddingBottom: i === 0 ? '2rem' : 0, marginBottom: i === 0 ? '2rem' : 0 }}>
              <TestimonialCard
                quote={t.quote}
                name={t.name}
                location={t.location}
                imageSrc={t.imageSrc}
                imageAlt={t.imageAlt}
                reversed={i % 2 === 1}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: From Our Blogs ── */}
      <section style={{ backgroundColor: 'white' }} className="py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2
            style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.6rem', textAlign: 'center', marginBottom: '0.75rem' }}
          >
            From Our Blogs
          </h2>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#C4B8C4', margin: '0 auto 2.5rem' }} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.href} {...post} />
            ))}
          </div>

          <div className="text-center" style={{ marginBottom: '1rem' }}>
            <Link
              href="/blog"
              style={{ fontFamily: "'Lato', sans-serif", color: '#8B7B8B', fontSize: '0.85rem', letterSpacing: '0.04em', textDecoration: 'underline' }}
              className="hover:opacity-70 transition-opacity"
            >
              Older Entries
            </Link>
          </div>
          <div className="text-center">
            <Link
              href="/blog"
              style={{ backgroundColor: '#9B8EC0', color: 'white', fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.7rem 2rem', display: 'inline-block' }}
              className="hover:opacity-85 transition-opacity"
            >
              Go To Blog
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Testimonials 3 & 4 ── */}
      <section style={{ backgroundColor: '#F5F0EB' }} className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {testimonials.slice(2, 4).map((t, i) => (
            <div key={t.name} style={{ borderBottom: i === 0 ? '1px solid #E0D8E0' : 'none', paddingBottom: i === 0 ? '2rem' : 0, marginBottom: i === 0 ? '2rem' : 0 }}>
              <TestimonialCard
                quote={t.quote}
                name={t.name}
                location={t.location}
                imageSrc={t.imageSrc}
                imageAlt={t.imageAlt}
                reversed={i % 2 === 1}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
