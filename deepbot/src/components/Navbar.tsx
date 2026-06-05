'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/',      label: 'Home' },
  { href: '/#features', label: 'Features' },
  { href: '/blog',  label: 'Blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-site-dark sticky top-0 z-50 shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
      <div className="max-w-5xl mx-auto px-5 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-lg tracking-wide hover:opacity-90">
          DeepBot
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#"
              className="text-sm font-semibold text-white bg-primary hover:bg-primary-dark px-5 py-1.5 rounded-full transition-colors"
            >
              Download
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-site-dark border-t border-white/10">
          <ul className="flex flex-col px-5 py-3 gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-white/80 hover:text-white font-medium"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm text-primary-light font-semibold"
              >
                Download
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
