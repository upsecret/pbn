import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Women's Wellness Circle — Healing Chronic Illness The Feminine Way",
  description:
    "We are an online women's wellness circle offering expert support and guidance for your recovery from chronic illness.",
  other: {
    'naver-site-verification': 'f165b98266b52e3f8d17f41a21d56109b3688ba7',
    'google-site-verification': 'pn3JPRG8pwk1XamTIqKzK4XFJuWhuMcEqcOjBlKS6jE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
