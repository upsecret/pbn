// Server component

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#2A2A2A" }} className="py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Service keywords */}
        <p className="text-white text-sm mb-2 leading-relaxed">
          Physical Therapy{" "}
          <span style={{ color: "#E8751A" }}>&#9670;</span>{" "}
          Manual Therapy{" "}
          <span style={{ color: "#E8751A" }}>&#9670;</span>{" "}
          Spine Therapy{" "}
          <span style={{ color: "#E8751A" }}>&#9670;</span>{" "}
          Sports Medicine{" "}
          <span style={{ color: "#E8751A" }}>&#9670;</span>{" "}
          Free Injury Screenings
        </p>

        {/* Service areas */}
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          Lake Oswego{" "}
          <span style={{ color: "#E8751A" }}>&#9670;</span>{" "}
          Beaverton{" "}
          <span style={{ color: "#E8751A" }}>&#9670;</span>{" "}
          Portland{" "}
          <span style={{ color: "#E8751A" }}>&#9670;</span>{" "}
          Tigard
        </p>

        {/* Divider */}
        <div className="border-t border-gray-600 mb-4" />

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          &copy; {currentYear} MotionWorks Physical Therapy &mdash; 2847 Riverside Drive, Portland, OR 97201
          &nbsp;|&nbsp;
          <a href="mailto:info@motionworkspt.com" className="hover:text-gray-300">
            info@motionworkspt.com
          </a>
        </p>
        <p className="text-gray-600 text-xs mt-1">
          All rights reserved. Website design for MotionWorks Physical Therapy.
        </p>
      </div>
    </footer>
  );
}
