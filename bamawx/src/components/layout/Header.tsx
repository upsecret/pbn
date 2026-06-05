"use client";

import Link from "next/link";

import { MobileNav } from "@/components/layout/MobileNav";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/archive", label: "Archive" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header>
      {/* Title block */}
      <div className="bg-bama-blue px-4 py-6 text-center sm:px-6 sm:py-8">
        <h1 className="text-[1.8em] font-bold leading-tight text-[#eef6fe] sm:text-[2.2em]">
          <Link href="/" className="text-[#eef6fe] no-underline hover:text-white">
            Mike Wilhelm&apos;s Alabama Weather Blog
          </Link>
        </h1>
        <p className="mt-1 text-[1em] font-bold text-[#8facc8]">
          Bamawx.com
        </p>
        <p className="mx-auto mt-3 max-w-xl text-[0.9em] leading-relaxed text-bama-light/90">
          Welcome to Bamawx.com! I have been posting about Alabama weather on this blog since
          April 2006. Follow me on Twitter at{" "}
          <a
            href="https://twitter.com/bamawx"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-bama-sky hover:text-white hover:underline"
          >
            @bamawx
          </a>{" "}
          and find us on{" "}
          <a
            href="https://www.facebook.com/bamawx"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-bama-sky hover:text-white hover:underline"
          >
            Facebook
          </a>
          .
        </p>
      </div>

      {/* Navigation bar */}
      <nav
        className="flex items-center justify-between border-b border-bama-light bg-bama-navy px-4 py-2 sm:px-6 dark:border-bama-blue"
        aria-label="Main"
      >
        <div className="hidden flex-1 gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-3 py-1.5 text-[12px] font-bold text-white/90 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-1 md:hidden">
          <MobileNav />
          <span className="text-[12px] font-bold text-white/70">Menu</span>
        </div>
        <span className="text-[11px] text-white/50">
          Alabama Weather Since 2006
        </span>
      </nav>
    </header>
  );
}
