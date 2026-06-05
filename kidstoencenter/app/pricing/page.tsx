import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | KidsTown Drop-In Child Care",
  description: "Affordable drop-in child care pricing at KidsTown. No membership required.",
};

const pricingTiers = [
  {
    label: "First Hour",
    price: "$10",
    desc: "Per child. Includes supervised play and activities.",
  },
  {
    label: "Each Additional Hour",
    price: "$8",
    desc: "Per child, per additional hour.",
  },
  {
    label: "Half Day (4 hours)",
    price: "$32",
    desc: "Per child. Great for longer errand runs.",
  },
  {
    label: "Full Day (8 hours)",
    price: "$56",
    desc: "Per child. Maximum value for all-day care.",
  },
];

export default function PricingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-64 md:h-72 flex items-end overflow-hidden">
        <Image
          src="/images/pricing.jpg"
          alt="KidsTown pricing and activities"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(27, 94, 32, 0.68)" }} />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Pricing</h1>
          <p className="text-green-100 text-lg">Simple, transparent pricing. No hidden fees.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {pricingTiers.map((tier) => (
              <div key={tier.label} className="border-2 rounded-xl p-6" style={{ borderColor: "#2E7D32" }}>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{tier.label}</h3>
                <p className="text-4xl font-extrabold mb-2" style={{ color: "#2E7D32" }}>{tier.price}</p>
                <p className="text-gray-500 text-sm">{tier.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center mb-10">
            <p className="text-orange-700 font-bold text-lg">Save $10 on your first visit!</p>
            <p className="text-orange-600 text-sm mt-1">Sign up for our mailing list to receive your discount coupon.</p>
            <Link href="/#mailing" className="inline-block mt-4 px-5 py-2 rounded-full text-white text-sm font-semibold" style={{ backgroundColor: "#E65100" }}>
              Get $10 Off
            </Link>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#2E7D32" }}>What&apos;s Included</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {[
                "Supervised play and activities",
                "Age-appropriate learning experiences",
                "Safe, clean facility",
                "Trained & background-checked staff",
                "Snack time (snacks not provided)",
                "Arts & crafts supplies",
                "Active play and outdoor time",
                "Preschool enrichment activities",
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
    </main>
  );
}
