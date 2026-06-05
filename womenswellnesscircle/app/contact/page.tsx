import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Contact — Women's Wellness Circle",
  description: "Get in touch with the Women's Wellness Circle team.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ backgroundColor: '#8B7B8B', padding: '4rem 1rem', textAlign: 'center' }}>
        <h1
          style={{ fontFamily: "'Playfair Display', serif", color: 'white', fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', marginBottom: '1rem' }}
        >
          Get In Touch
        </h1>
        <div style={{ width: '60px', height: '3px', backgroundColor: 'rgba(255,255,255,0.5)', margin: '0 auto' }} />
      </div>

      {/* Contact form */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '1rem', lineHeight: 1.9, marginBottom: '2.5rem', textAlign: 'center' }}>
            We&apos;d love to hear from you. Whether you have a question about our programmes, need support finding the right fit, or simply want to say hello — please reach out.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
