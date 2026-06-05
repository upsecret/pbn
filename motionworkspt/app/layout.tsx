import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MotionWorks Physical Therapy | Portland, OR",
  description:
    "MotionWorks Physical Therapy in Portland, OR offers expert physical therapy, manual therapy, spine therapy, and sports medicine services. Contact us to schedule.",
  keywords:
    "physical therapy, manual therapy, spine therapy, sports medicine, Neenah WI, Appleton, Oshkosh, Menasha",
  verification: {
    google: "RO-ziA-68-b-1M1X8oobvsqXQKYBLjZaG-1ElHkuq7I",
  },
  other: {
    "naver-site-verification": "2e5f52a29ff5d24236bf3ad0236bdbc3f29fc043",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
