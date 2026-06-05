import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bama-light bg-bama-navy px-4 py-6 text-center dark:border-bama-blue">
      <p className="text-[11px] text-[#fef6ee]">
        &copy; 2006&ndash;{year}{" "}
        <Link href="/" className="font-bold text-bama-sky hover:text-white hover:underline">
          Mike Wilhelm &mdash; Alabama Weather Blog (BamaWX)
        </Link>
      </p>
      <p className="mt-2 text-[10px] text-[#8facc8]">
        Forecasts and statements on this site are not a substitute for official products from the{" "}
        <a
          href="https://www.weather.gov/"
          className="text-bama-sky hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          National Weather Service
        </a>
        .
      </p>
    </footer>
  );
}
