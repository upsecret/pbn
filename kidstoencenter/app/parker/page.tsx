import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parker | KidsTown Drop-In Child Care",
  description: "KidsTown Drop-In Child Care in Parker, Colorado. Walk-in care for children ages 1-13.",
};

export default function ParkerPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-72 md:h-80 flex items-end overflow-hidden">
        <Image
          src="/images/parker.jpg"
          alt="Parker KidsTown location"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(27, 94, 32, 0.65)" }} />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Parker</h1>
          <p className="text-green-100 text-lg">KidsTown Drop-In Child Care Centers</p>
        </div>
      </section>

      {/* Info */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#2E7D32" }}>Location Details</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#2E7D32" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>456 Parker Road, Parker, CO 80134</span>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 flex-shrink-0" style={{ color: "#2E7D32" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>(720) 555-0202</span>
              </div>
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#2E7D32" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <p>Monday – Friday: 7:00 AM – 7:00 PM</p>
                  <p>Saturday: 8:00 AM – 5:00 PM</p>
                  <p className="text-gray-400">Sunday: Closed</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <svg className="w-5 h-5 flex-shrink-0" style={{ color: "#2E7D32" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Children ages 1–13 years old</span>
              </div>
            </div>
            <Link
              href="/schedule"
              className="inline-block mt-6 px-6 py-3 rounded-full text-white font-bold text-sm"
              style={{ backgroundColor: "#43A047" }}
            >
              Schedule at Parker
            </Link>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#2E7D32" }}>What to Expect</h2>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "No reservation required — walk-ins always welcome",
                "Supervised play and structured activities",
                "Safe, clean, and stimulating environment",
                "Trained and background-checked staff",
                "Age-appropriate programs for all kids",
                "After-hours care available for working parents",
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#43A047" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-3" style={{ color: "#333" }}>Ready to Visit?</h2>
        <p className="text-gray-500 text-sm mb-6">Join our mailing list and get $10 off your first visit.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/schedule" className="px-6 py-3 rounded-full text-white font-bold text-sm" style={{ backgroundColor: "#43A047" }}>
            Schedule Now
          </Link>
          <Link href="/pricing" className="px-6 py-3 rounded-full font-bold text-sm border-2" style={{ borderColor: "#2E7D32", color: "#2E7D32" }}>
            View Pricing
          </Link>
        </div>
      </section>
    </main>
  );
}
