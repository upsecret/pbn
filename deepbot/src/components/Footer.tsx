import Link from 'next/link'

const cols = [
  {
    title: 'Product',
    links: [
      { href: '/#features', label: 'Features' },
      { href: '#', label: 'Download' },
      { href: '#', label: 'Changelog' },
    ],
  },
  {
    title: 'Support',
    links: [
      { href: '#', label: 'Documentation' },
      { href: '#', label: 'Community' },
      { href: '#', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '#', label: 'Privacy Policy' },
      { href: '#', label: 'Terms of Service' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-site-dark text-white/60">
      <div className="max-w-5xl mx-auto px-5 pt-12 pb-0">
        <div className="flex flex-col md:flex-row gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="md:w-48 shrink-0">
            <span className="block text-white text-xl font-bold mb-2">DeepBot</span>
            <p className="text-sm text-white/45 leading-relaxed">
              The most powerful Twitch loyalty bot
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-10 flex-wrap flex-1">
            {cols.map((col) => (
              <div key={col.title}>
                <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-3">
                  {col.title}
                </h5>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-4 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} DeepBot. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
