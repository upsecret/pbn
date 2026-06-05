import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const siteUrl = "https://www.bamawx.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mike Wilhelm's Alabama Weather Blog",
    template: "%s | BamaWX",
  },
  description:
    "Alabama weather, severe storms, and tropical updates since 2006 — Mike Wilhelm's BamaWX (Alabama Weather Blog).",
  keywords: [
    "Alabama weather",
    "BamaWX",
    "Mike Wilhelm",
    "severe weather",
    "NWS",
    "tornado",
    "hurricane",
  ],
  authors: [{ name: "Mike Wilhelm", url: siteUrl }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "BamaWX — Alabama Weather Blog",
    title: "Mike Wilhelm's Alabama Weather Blog",
    description:
      "Alabama skies, severe weather context, and trusted NWS-focused discussion since 2006.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "BamaWX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike Wilhelm's Alabama Weather Blog",
    description:
      "Alabama weather, severe storms, and tropical updates — BamaWX since 2006.",
    creator: "@bamawx",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="page-wrapper">
            <Header />
            <div className="flex flex-col md:flex-row">
              <main className="min-w-0 flex-1 px-4 py-6 sm:px-5">
                {children}
              </main>
              <Sidebar />
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
