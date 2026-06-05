import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | MotionWorks Physical Therapy",
  description:
    "Learn about MotionWorks Physical Therapy's philosophy, mission, and our team of dedicated Doctors of Physical Therapy in Portland, OR.",
};

const therapists = [
  {
    name: "Dr. [First Last], DPT",
    credentials: "Doctor of Physical Therapy",
    specialties: ["Manual Therapy", "Spine Rehabilitation", "Sports Medicine"],
    bio: "Dr. [Name] is a licensed Doctor of Physical Therapy with extensive training in manual therapy techniques and orthopedic rehabilitation. With a passion for patient-centered care, they are dedicated to helping every patient achieve their individual goals.",
    gradientStyle: {
      background: "linear-gradient(135deg, #5B8533 0%, #8aaa60 100%)",
    },
  },
  {
    name: "Dr. [First Last], DPT",
    credentials: "Doctor of Physical Therapy",
    specialties: ["Sports Medicine", "Post-Surgical Rehab", "Functional Movement"],
    bio: "With advanced training in sports medicine and functional movement assessment, Dr. [Name] works with athletes and active individuals to return to peak performance safely and efficiently.",
    gradientStyle: {
      background: "linear-gradient(135deg, #3a6ea5 0%, #6a9ec5 100%)",
    },
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header with hero banner */}
      <div className="relative border-b border-gray-200 py-10 overflow-hidden">
        <img
          src="/images/hero-banner.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative max-w-7xl mx-auto px-4">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E8751A" }}>
            Who We Are
          </p>
          <h1 className="text-4xl font-extrabold text-white mb-3">About Us</h1>
          <div className="h-1 w-16" style={{ backgroundColor: "#E8751A" }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Mission */}
        <div className="bg-white rounded border border-gray-200 shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#E8751A" }}>
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            At MotionWorks Physical Therapy, our mission is to provide the highest quality, evidence-based physical therapy care in a one-on-one setting that empowers our patients to recover, perform, and thrive.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe every patient deserves individualized attention from a Doctor of Physical Therapy — not aides, not techs, not rotating staff. When you come to MotionWorks, you see the same skilled clinician every visit, building a therapeutic relationship that drives faster, more meaningful results.
          </p>
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            {
              heading: "Patient-Centered",
              body: "Every treatment plan is crafted around your unique needs, goals, and lifestyle — not a generic protocol.",
            },
            {
              heading: "Evidence-Based",
              body: "We stay current with the latest research in manual therapy, rehabilitation science, and sports medicine to deliver proven outcomes.",
            },
            {
              heading: "Results Driven",
              body: "We measure your progress objectively and adjust your plan continuously to ensure you're always moving forward.",
            },
          ].map(({ heading, body }) => (
            <div
              key={heading}
              className="bg-white rounded border border-gray-200 shadow-sm p-6"
            >
              <div
                className="w-10 h-10 rounded mb-4 flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: "#E8751A" }}
              >
                ✓
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{heading}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="bg-white rounded border border-gray-200 shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#E8751A" }}>
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            MotionWorks Physical Therapy was founded with a simple but powerful idea: physical therapy should be personal. Too often, patients are seen briefly by a therapist only to spend the bulk of their session with support staff running them through exercises. We set out to change that.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Based in Portland, Oregon, we serve the surrounding communities of Lake Oswego, Beaverton, Portland, and Tigard. Our clinic was built around the principle that direct, hands-on care from a licensed Doctor of Physical Therapy — every single visit — produces better outcomes and a better patient experience.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From spine therapy to sports medicine to free injury screenings, MotionWorks is committed to the health and wellbeing of every patient who walks through our doors.
          </p>
        </div>

        {/* Therapist profiles */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Meet Our Team</h2>

        {/* Team group illustration */}
        <div className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden mb-6">
          <img
            src="/images/about-team.svg"
            alt="MotionWorks Physical Therapy team"
            className="w-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {therapists.map((t, i) => (
            <div key={i} className="bg-white rounded border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              {/* Photo placeholder */}
              <div
                className="w-full h-48 flex items-center justify-center"
                style={t.gradientStyle}
              >
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto mb-2 opacity-70"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <p className="text-white text-xs opacity-70">Photo Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 mb-1">{t.name}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: "#E8751A" }}>
                  {t.credentials}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{t.bio}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    Specialties
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t.specialties.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-3 py-1 rounded-full text-white font-medium"
                        style={{ backgroundColor: "#4A4A4A" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="rounded p-8 text-center"
          style={{ backgroundColor: "#3A3A3A" }}
        >
          <h2 className="text-xl font-bold text-white mb-3">
            Have Questions? We&apos;d Love to Help.
          </h2>
          <p className="text-gray-300 mb-5">
            Contact us today to learn more about our team and how we can help you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 rounded text-white font-bold hover:opacity-90"
              style={{ backgroundColor: "#E8751A" }}
            >
              Contact Us
            </a>
            <a
              href="mailto:info@motionworkspt.com"
              className="px-6 py-3 rounded text-white font-bold border border-gray-500 hover:border-gray-400"
            >
              info@motionworkspt.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
