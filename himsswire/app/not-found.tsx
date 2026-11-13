import Link from "next/link";

export default function NotFound() {
  return <section className="page-heading"><h1>Page not found</h1><p>This address does not have a published page.</p><Link href="/news">Browse the latest news →</Link></section>;
}
