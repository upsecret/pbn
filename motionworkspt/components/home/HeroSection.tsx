// Server component

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 50%, #5B8533 0%, transparent 60%), radial-gradient(ellipse at 30% 50%, #E8751A 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#E8751A" }}
          >
            Portland, Oregon
          </p>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight mb-5">
            Expert Physical{" "}
            <span style={{ color: "#5B8533" }}>Therapy Care</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
            At MotionWorks Physical Therapy, we deliver personalized, hands-on
            care to help you move better, feel stronger, and get back to doing
            what you love — faster.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded text-white font-bold text-base shadow hover:opacity-90"
              style={{ backgroundColor: "#E8751A" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Contact Us to Schedule
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded font-bold text-base border-2 hero-services-btn"
              style={{
                borderColor: "#5B8533",
                color: "#5B8533",
              }}
            >
              Our Services
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-lg" style={{ color: "#E8751A" }}>✓</span>
              <span>Doctor of Physical Therapy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg" style={{ color: "#E8751A" }}>✓</span>
              <span>One-on-One Care</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg" style={{ color: "#E8751A" }}>✓</span>
              <span>Free Injury Screenings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="h-1 w-full" style={{ backgroundColor: "#E8751A" }} />
    </section>
  );
}
