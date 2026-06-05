import Image from "next/image";
import Link from "next/link";

const outlooks = [
  {
    label: "Today's Outlook from SPC",
    src: "https://www.spc.noaa.gov/products/outlook/day1otlk.gif",
    href: "https://www.spc.noaa.gov/products/outlook/day1otlk.html",
  },
  {
    label: "Tomorrow's Outlook from SPC",
    src: "https://www.spc.noaa.gov/products/outlook/day2otlk.gif",
    href: "https://www.spc.noaa.gov/products/outlook/day2otlk.html",
  },
  {
    label: "Day 3 Outlook",
    src: "https://www.spc.noaa.gov/products/outlook/day3otlk.gif",
    href: "https://www.spc.noaa.gov/products/outlook/day3otlk.html",
  },
  {
    label: "Day 4-8 Outlook",
    src: "https://www.spc.noaa.gov/products/exper/day4-8/day48prob.gif",
    href: "https://www.spc.noaa.gov/products/exper/day4-8/",
  },
];

export function SPCOutlooks() {
  return (
    <div className="space-y-3">
      <h3 className="sidebar-section-title">SPC Outlooks</h3>
      {outlooks.map((o) => (
        <div key={o.label}>
          <p className="mb-1 text-[11px] font-bold text-foreground">{o.label}</p>
          <Link href={o.href} target="_blank" rel="noopener noreferrer">
            <Image
              src={o.src}
              alt={o.label}
              width={260}
              height={195}
              className="h-auto w-full border border-bama-light dark:border-bama-blue"
              unoptimized
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
