'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#7BA68D', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#6B5B6B', fontSize: '1.5rem', marginBottom: '0.75rem' }}>
          Your message has been received. Thank you.
        </h2>
        <p style={{ fontFamily: "'Lato', sans-serif", color: '#6B6B6B', fontSize: '0.95rem', lineHeight: 1.8 }}>
          We will be in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex flex-col gap-1">
          <label style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', color: '#4A4A4A', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            First Name
          </label>
          <input
            type="text"
            required
            style={{ border: '1px solid #D0C8D0', padding: '0.65rem 0.75rem', fontFamily: "'Lato', sans-serif", fontSize: '0.9rem', color: '#4A4A4A', borderRadius: '2px' }}
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <label style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', color: '#4A4A4A', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Last Name
          </label>
          <input
            type="text"
            style={{ border: '1px solid #D0C8D0', padding: '0.65rem 0.75rem', fontFamily: "'Lato', sans-serif", fontSize: '0.9rem', color: '#4A4A4A', borderRadius: '2px' }}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', color: '#4A4A4A', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Email Address
        </label>
        <input
          type="email"
          required
          style={{ border: '1px solid #D0C8D0', padding: '0.65rem 0.75rem', fontFamily: "'Lato', sans-serif", fontSize: '0.9rem', color: '#4A4A4A', borderRadius: '2px' }}
          className="w-full"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', color: '#4A4A4A', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Message
        </label>
        <textarea
          rows={6}
          required
          style={{ border: '1px solid #D0C8D0', padding: '0.65rem 0.75rem', fontFamily: "'Lato', sans-serif", fontSize: '0.9rem', color: '#4A4A4A', borderRadius: '2px', resize: 'vertical' }}
          className="w-full"
        />
      </div>

      <button
        type="submit"
        style={{ backgroundColor: '#9B8EC0', color: 'white', fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.85rem', borderRadius: '2px', fontWeight: 700, marginTop: '0.5rem' }}
        className="hover:opacity-85 transition-opacity"
      >
        Send Message
      </button>
    </form>
  );
}
