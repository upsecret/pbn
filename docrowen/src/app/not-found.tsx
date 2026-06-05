import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <Link
        href="/"
        className="inline-block px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
