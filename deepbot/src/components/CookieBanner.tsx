'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookieAccepted')) setVisible(true)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-5 left-5 z-50 max-w-xs bg-site-dark2 text-white/85 rounded-lg shadow-2xl p-4 flex flex-col gap-3">
      <p className="text-sm leading-relaxed">
        This website uses cookies to ensure you get the best experience on our website.{' '}
        <a href="#" className="text-primary-light underline">Learn more</a>
      </p>
      <button
        onClick={() => {
          localStorage.setItem('cookieAccepted', '1')
          setVisible(false)
        }}
        className="self-start bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-1.5 rounded-full transition-colors"
      >
        Got it!
      </button>
    </div>
  )
}
