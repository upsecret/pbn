// Server component — no 'use client' needed

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3">

          {/* Logo */}
          <div className="flex flex-col leading-tight flex-shrink-0">
            <div className="flex items-baseline gap-0">
              <span
                className="text-3xl font-extrabold tracking-tight"
                style={{ color: "#5B8533" }}
              >
                Motion
              </span>
              <span
                className="text-3xl font-extrabold tracking-tight"
                style={{ color: "#E8751A" }}
              >
                Works
              </span>
            </div>
            <span className="text-xs font-medium tracking-widest uppercase text-gray-500 -mt-1">
              physical therapy
            </span>
          </div>

          {/* Clinic Contact Info */}
          <div className="text-right flex-shrink-0">
            <p
              className="font-bold text-base leading-tight"
              style={{ color: "#E8751A" }}
            >
              MotionWorks Physical Therapy
            </p>
            <p
              className="text-sm leading-snug"
              style={{ color: "#E8751A" }}
            >
              2847 Riverside Drive, Portland, OR 97201
            </p>
            <p className="text-sm text-gray-700 leading-snug">
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:info@motionworkspt.com"
                className="hover:underline"
                style={{ color: "#333333" }}
              >
                info@motionworkspt.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
