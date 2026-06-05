import Link from "next/link";

export default function TopBanner() {
  return (
    <div className="w-full py-2 px-4 text-center text-white text-sm font-medium" style={{ backgroundColor: "#1B5E20" }}>
      Welcome to Kids Town Drop-in Child Care Centers |{" "}
      <Link href="/schedule" className="underline hover:text-green-200 font-semibold">
        Schedule Now
      </Link>
    </div>
  );
}
