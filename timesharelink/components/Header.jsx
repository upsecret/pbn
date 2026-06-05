import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const navItems = [
    { name: '주소모음', href: '/' },
    { name: '링크모음', href: '/링크모음' },
    { name: '주소검증', href: '/주소검증' },
    { name: '검증로그', href: '/검증로그' },
    { name: '블로그', href: '/blog' },
    { name: '링크제보', href: '/주소링크제보' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto_1fr] md:grid-cols-[auto_1fr_auto] items-center min-h-[4.5rem] md:min-h-[5rem] lg:min-h-[5.5rem] gap-2">
          {/* Logo - left */}
          <Link href="/" className="flex items-center space-x-2 group w-fit flex-shrink-0">
            <img
              src="/logo.svg"
              alt="timesharelink 로고"
              width={44}
              height={44}
              className="w-10 h-10 lg:w-11 lg:h-11 rounded-lg transform group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-xl font-bold text-gray-900 hidden sm:block">
              timesharelink
            </span>
          </Link>

          {/* Desktop Navigation - center */}
          <nav className="hidden md:flex items-center justify-center flex-1 flex-nowrap gap-2 lg:gap-3 min-w-0">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex-shrink-0 whitespace-nowrap px-4 py-3 lg:px-5 lg:py-3.5 text-base lg:text-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-semibold"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right: mobile menu button (visible on mobile only) */}
          <div className="flex justify-end md:justify-center flex-shrink-0">
          <details className="md:hidden group/menu">
            <summary className="list-none p-2 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer [&::-webkit-details-marker]:hidden">
              <span className="group-open/menu:hidden inline-flex">
                <Menu className="w-6 h-6 text-gray-700" />
              </span>
              <span className="group-open/menu:inline-flex hidden">
                <X className="w-6 h-6 text-gray-700" />
              </span>
            </summary>
            <div className="py-4 border-t border-blue-100 md:hidden">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </details>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
