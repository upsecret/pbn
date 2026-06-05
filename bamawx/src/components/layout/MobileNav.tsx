"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/archive", label: "Archive" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        className="rounded p-1.5 text-white hover:bg-white/10 md:hidden"
        aria-label="Open menu"
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(100%,20rem)] overflow-y-auto bg-[var(--bama-content-bg)]">
        <SheetHeader>
          <SheetTitle className="text-[14px] font-bold">BamaWX Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-0.5 px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-bama-light px-2 py-2.5 text-[13px] font-bold text-foreground hover:text-bama-sky dark:border-bama-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-bama-light px-4 pt-4 dark:border-bama-blue">
          <p className="text-[11px] text-muted-foreground">
            Sidebar content is below the main content area on mobile devices.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
