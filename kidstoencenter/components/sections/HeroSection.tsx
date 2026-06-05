import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "560px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/home-hero.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
      />

      {/* Dark green overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(27, 94, 32, 0.78)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{ position: "relative", zIndex: 2, width: "100%" }}
        className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Left: Text */}
        <div style={{ color: "#ffffff" }}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            KidsTown Drop-In<br />Child Care Centers
          </h1>

          <ul className="space-y-2 mb-8 text-lg">
            {[
              "Walk-in · No appointment needed",
              "Ages 1–13 years old",
              "Open Mon–Sat",
              "After-hours care available",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#43A047" }}
                >
                  <svg className="w-3 h-3" style={{ color: "#fff" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div
            className="inline-block px-4 py-3 rounded-lg font-bold text-base mb-8"
            style={{ backgroundColor: "#E65100", color: "#ffffff" }}
          >
            Get $10 OFF your first visit — Join our mailing list below!
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/highlands-ranch"
              className="px-6 py-3 rounded-full font-bold text-sm shadow-lg"
              style={{ backgroundColor: "#43A047", color: "#ffffff" }}
            >
              Find Your Location
            </Link>
            <Link
              href="/schedule"
              className="px-6 py-3 rounded-full font-bold text-sm shadow-lg"
              style={{ backgroundColor: "#ffffff", color: "#1B5E20" }}
            >
              Schedule Now
            </Link>
          </div>
        </div>

        {/* Right: Stats card */}
        <div className="hidden md:flex justify-center items-center">
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              backgroundColor: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#ffffff",
            }}
          >
            <p className="text-xl font-semibold">Safe. Fun. Flexible.</p>
            <p className="text-sm mt-2" style={{ color: "#c8e6c9" }}>Trusted by Colorado families</p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { num: "3", label: "Locations" },
                { num: "1–13", label: "Ages" },
                { num: "6", label: "Days/Week" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="rounded-lg p-3"
                  style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                >
                  <div className="text-2xl font-extrabold">{num}</div>
                  <div className="text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
