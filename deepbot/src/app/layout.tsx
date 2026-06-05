import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: { default: 'DeepBot - Twitch Loyalty Bot', template: '%s | DeepBot' },
  description: 'The most powerful Twitch loyalty and chat bot. Loyalty points, donations, custom commands, and more.',
  icons: { icon: '/favicon.ico' },
  verification: { google: 'ncaMmvE4vlsEXNDW49Z0o84Bn6Rzn0nWRbvQh7J9PMs' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
