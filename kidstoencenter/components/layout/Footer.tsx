import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white py-10 px-4" style={{ backgroundColor: "#212121" }}>
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-5 text-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
            style={{ backgroundColor: "#2E7D32" }}
          >
            KT
          </div>
          <div className="text-left">
            <div className="font-bold text-lg">KidsTown</div>
            <div className="text-xs text-gray-400">Drop-In Child Care</div>
          </div>
        </div>

        <p className="text-gray-300 text-sm max-w-md">
          Kidstown Drop-In Child Care Centers in Colorado
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-green-700 flex items-center justify-center transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-green-700 flex items-center justify-center transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth={2} />
              <circle cx="12" cy="12" r="4" strokeWidth={2} />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
          {/* Twitter/X */}
          <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-green-700 flex items-center justify-center transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          {/* YouTube */}
          <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-gray-700 hover:bg-green-700 flex items-center justify-center transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12z" />
            </svg>
          </a>
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/highlands-ranch" className="hover:text-white transition-colors">Highlands Ranch</Link>
          <Link href="/parker" className="hover:text-white transition-colors">Parker</Link>
          <Link href="/smoky-hill" className="hover:text-white transition-colors">Smoky Hill</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link>
        </div>

        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} KidsTown Drop-In Child Care Centers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
