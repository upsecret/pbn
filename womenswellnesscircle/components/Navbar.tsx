'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Join a Community',
    children: [
      { label: 'Join The Circle', href: '/join' },
      { label: 'Online Programmes', href: '/online' },
      { label: 'Free Online Events', href: '/free-online-events' },
    ],
  },
  { label: 'Free 3-Day Mini Course', href: '/free-three-day-mini-course' },
  {
    label: 'About',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Feminine Power', href: '/feminine-power' },
      { label: 'Healing Chronic Illness', href: '/healing-chronic-illness-the-feminine-way' },
    ],
  },
  {
    label: 'Workshops',
    children: [
      { label: 'Retreats', href: '/retreats' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E8E0E8' }} className="relative z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span style={{ fontFamily: "'Playfair Display', serif", color: '#8B7B8B', fontSize: '1.1rem', fontWeight: 600 }}>
              Women&apos;s Wellness Circle
            </span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label} className="relative">
                {item.children ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    style={{ color: '#4A4A4A', fontSize: '0.82rem', letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
                    className="flex items-center gap-1 px-3 py-2 hover:opacity-70 transition-opacity whitespace-nowrap"
                  >
                    {item.label}
                    <svg className={`w-3 h-3 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    style={{ color: '#4A4A4A', fontSize: '0.82rem', letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: "'Lato', sans-serif" }}
                    className="px-3 py-2 hover:opacity-70 transition-opacity block whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <ul
                    style={{ backgroundColor: '#8B7B8B', minWidth: '200px', top: '100%', left: 0 }}
                    className="absolute shadow-lg z-50"
                  >
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          style={{ color: 'white', fontSize: '0.82rem', letterSpacing: '0.03em', fontFamily: "'Lato', sans-serif", borderBottom: '1px solid rgba(255,255,255,0.15)' }}
                          className="block px-4 py-3 hover:bg-black/10 transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
            style={{ color: '#8B7B8B' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E8E0E8' }} className="lg:hidden">
          <ul className="px-4 py-2">
            {navItems.map((item) => (
              <li key={item.label} style={{ borderBottom: '1px solid #F0EAF0' }}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      style={{ color: '#4A4A4A', fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: "'Lato', sans-serif" }}
                      className="flex items-center justify-between w-full py-3"
                    >
                      {item.label}
                      <svg className={`w-3 h-3 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileExpanded === item.label && (
                      <ul className="pl-4 pb-2">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                              style={{ color: '#8B7B8B', fontSize: '0.85rem', fontFamily: "'Lato', sans-serif" }}
                              className="block py-2 hover:opacity-70"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={() => setMobileOpen(false)}
                    style={{ color: '#4A4A4A', fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: "'Lato', sans-serif" }}
                    className="block py-3 hover:opacity-70"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
