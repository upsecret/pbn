import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "KidsTown Drop-In Child Care Centers",
  description: "KidsTown Drop-In Child Care Centers in Colorado — Walk-in care for children ages 1-13. Highlands Ranch, Parker, and Smoky Hill locations.",
  verification: {
    google: "IgVvTJF_aumPnRGwI_8cxUMT244tJ5RiqkTz_XLogrs",
    other: {
      "naver-site-verification": "8414a60bdd98ae6a23b8193d0014d9074be3f87b",
      "google-adsense-account": "ca-pub-5250956266319692",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5250956266319692"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased">
        <TopBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
