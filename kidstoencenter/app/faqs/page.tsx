"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    q: "Do I need an appointment to drop off my child?",
    a: "No! KidsTown is a true drop-in childcare center. Walk-ins are always welcome. While reservations are appreciated, they are never required.",
  },
  {
    q: "What ages do you accept?",
    a: "We accept children ages 1 through 13 years old at all of our Colorado locations.",
  },
  {
    q: "What are your hours?",
    a: "We are open Monday through Friday from 7:00 AM to 7:00 PM and Saturday from 8:00 AM to 5:00 PM. We are closed on Sundays.",
  },
  {
    q: "How much does drop-in care cost?",
    a: "Our first hour is $10 per child. Each additional hour is $8. We also offer half-day ($32) and full-day ($56) rates. Visit our Pricing page for full details.",
  },
  {
    q: "How do I get the $10 discount?",
    a: "Sign up for our mailing list on the homepage and we will send you a $10 off coupon for your first visit!",
  },
  {
    q: "What should I bring for my child?",
    a: "Please bring any items your child may need such as diapers, formula, snacks, a change of clothes, and any comfort items. We provide activities and a safe space to play.",
  },
  {
    q: "Are your staff background checked?",
    a: "Yes. All KidsTown staff undergo thorough background checks and receive training in child development, first aid, and CPR.",
  },
  {
    q: "Do you offer preschool programs?",
    a: "Yes! We currently have preschool openings at select locations. Contact your nearest KidsTown center for enrollment details and scheduling.",
  },
  {
    q: "Is after-hours care available?",
    a: "Yes! We offer after-hours and evening care at all locations. Please call your nearest center for current availability.",
  },
  {
    q: "How many locations do you have?",
    a: "We have three locations in Colorado: Highlands Ranch, Parker, and Smoky Hill. Visit each location page for specific addresses and hours.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 flex justify-between items-center gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-gray-800 text-sm">{q}</span>
        <svg
          className="w-5 h-5 flex-shrink-0 transition-transform"
          style={{ color: "#2E7D32", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <p className="pb-4 text-sm text-gray-600 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FaqsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-64 md:h-72 flex items-end overflow-hidden">
        <Image
          src="/images/faqs.jpg"
          alt="Parent and child at KidsTown"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(27, 94, 32, 0.68)" }} />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">FAQs</h1>
          <p className="text-green-100 text-lg">Everything you need to know about KidsTown Drop-In Child Care.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>
    </main>
  );
}
