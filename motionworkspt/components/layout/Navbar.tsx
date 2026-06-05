'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/patient-info", label: "Patient Info" },
  { href: "/referrals", label: "Referrals" },
  { href: "/news", label: "News/Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav style={{ backgroundColor: "#4A4A4A" }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-5 py-3 text-sm font-semibold tracking-wide uppercase text-white hover:opacity-90"
              style={
                isActive(link.href)
                  ? { backgroundColor: "#E8751A", color: "#ffffff" }
                  : {}
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex items-center justify-between py-3">
          <span className="text-white font-semibold text-sm uppercase tracking-wide">
            Menu
          </span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              /* X icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col pb-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white border-t border-gray-600"
                style={
                  isActive(link.href)
                    ? { backgroundColor: "#E8751A", color: "#ffffff" }
                    : {}
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
