import type { Metadata } from "next";
import Link from "next/link";
import { description, publication, siteUrl, topics } from "../lib/site";
import "./styles.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: publication + " | Healthcare Technology News", template: "%s | " + publication },
  description,
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip">Skip to content</a>
        <header className="header">
          <div className="masthead wrap">
            <Link href="/" className="wordmark" aria-label="HIMSSwire home">
              <span className="brand-mark" aria-hidden="true"><i/><i/><i/><i/></span>
              HIMSS<span>wire</span>
            </Link>
            <span className="masthead-note">The healthcare technology briefing</span>
            <Link className="search-link" href="/search">
              <span className="search-icon" aria-hidden="true"/>
              Search
            </Link>
          </div>
          <nav className="main-nav" aria-label="Main navigation">
            <div className="wrap nav-inner">
              <Link href="/news">Latest</Link>
              {topics.map((topic) => <Link key={topic.slug} href={"/topics/" + topic.slug}>{topic.name}</Link>)}
            </div>
          </nav>
        </header>
        <main className="wrap main" id="main-content">{children}</main>
        <footer className="footer">
          <div className="wrap footer-inner">
            <Link href="/" className="footer-brand">HIMSS<span>wire</span></Link>
            <nav aria-label="Footer navigation">
              <Link href="/about">About</Link>
              <Link href="/news">All articles</Link>
              <a href="/feed.xml">RSS</a>
            </nav>
            <span>Published by Upsecret</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
