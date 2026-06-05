import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | MotionWorks Physical Therapy",
  description:
    "Explore our services: Physical Therapy, Manual Therapy, Spine Therapy, Sports Medicine, and Free Injury Screenings in Portland, OR.",
};

interface ServiceItem {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

const services: ServiceItem[] = [
  {
    title: "Physical Therapy",
    description:
      "Our physical therapy programs are individualized to address your specific condition, goals, and lifestyle. Every session is one-on-one with your Doctor of Physical Therapy — ensuring consistent, high-quality care from evaluation through discharge.",
    details: [
      "Comprehensive initial evaluation",
      "Personalized treatment plan",
      "Progress monitoring and plan adjustments",
      "Patient education for long-term wellness",
      "Direct care from a Doctor of Physical Therapy every visit",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    imageSrc: "/images/one-on-one-care.svg",
    imageAlt: "One-on-one physical therapy care",
  },
  {
    title: "Manual Therapy",
    description:
      "Manual therapy is a cornerstone of our practice. Our therapists use advanced hands-on techniques to reduce pain, restore mobility, and improve tissue health — delivering results that exercise alone cannot achieve.",
    details: [
      "Joint mobilization and manipulation",
      "Soft tissue mobilization",
      "Myofascial release techniques",
      "Instrument-assisted soft tissue mobilization (IASTM)",
      "Neural mobilization",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    imageSrc: "/images/manual-therapy.svg",
    imageAlt: "Hands-on manual therapy techniques",
  },
  {
    title: "Spine Therapy",
    description:
      "Neck and back pain can be debilitating. Our spine therapy program uses evidence-based manual therapy and therapeutic exercise specifically designed to address spinal dysfunction, disc pathology, and related nerve conditions.",
    details: [
      "Cervical and lumbar spine assessment",
      "Spinal joint mobilization and manipulation",
      "Disc herniation and radiculopathy treatment",
      "Postural correction and ergonomic guidance",
      "Core stabilization programming",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    imageSrc: "/images/spine-therapy.svg",
    imageAlt: "Spine therapy and spinal rehabilitation",
  },
  {
    title: "Sports Medicine",
    description:
      "Whether you're a weekend warrior or a competitive athlete, our sports medicine approach focuses on rapid, safe return to sport. We address the root cause of your injury and build resilience to prevent recurrence.",
    details: [
      "Sports injury evaluation and diagnosis",
      "Return-to-sport progression protocols",
      "Performance optimization",
      "Pre-season injury screening",
      "Overhead athlete and throwing injury care",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    imageSrc: "/images/sports-medicine.svg",
    imageAlt: "Sports medicine and athletic recovery",
  },
  {
    title: "Free Injury Screenings",
    description:
      "Not sure if physical therapy is right for you? We offer complimentary injury screenings so you can get expert answers about your pain or limitation — with no commitment required. Call today to schedule your free screening.",
    details: [
      "15–20 minute consultation with a Doctor of PT",
      "Movement and pain assessment",
      "Honest guidance on whether PT is appropriate",
      "Referral recommendations if needed",
      "No cost, no obligation",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    imageSrc: "/images/injury-screening.svg",
    imageAlt: "Free injury screening and assessment",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-white border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8751A" }}>
            What We Offer
          </p>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">Our Services</h1>
          <div className="h-1 w-16" style={{ backgroundColor: "#E8751A" }} />
          <p className="mt-4 text-gray-600 max-w-2xl">
            At MotionWorks Physical Therapy, we offer a full range of evidence-based services designed to get you moving and feeling your best. Every service is delivered with hands-on, personalized care.
          </p>
        </div>
      </div>

      {/* Services list */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left accent */}
                <div
                  className="w-full md:w-2 flex-shrink-0"
                  style={{ backgroundColor: "#E8751A" }}
                />

                {/* Service image */}
                <div className="w-full md:w-56 flex-shrink-0 overflow-hidden">
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>

                <div className="p-6 flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="flex-shrink-0 p-3 rounded"
                      style={{ backgroundColor: "#fff4ec", color: "#E8751A" }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h2
                        className="text-xl font-bold mb-2"
                        style={{ color: "#E8751A" }}
                      >
                        {service.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 ml-0 md:ml-16">
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                      What&apos;s Included
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-0.5 flex-shrink-0" style={{ color: "#E8751A" }}>◆</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-12 rounded p-8 text-center"
          style={{ backgroundColor: "#3A3A3A" }}
        >
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Start Feeling Better?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Call us today to schedule your initial evaluation or take advantage of our free injury screening. Our team is ready to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded text-white font-bold text-base hover:opacity-90"
            style={{ backgroundColor: "#E8751A" }}
          >
            Contact Us to Schedule
          </a>
        </div>
      </div>
    </div>
  );
}
