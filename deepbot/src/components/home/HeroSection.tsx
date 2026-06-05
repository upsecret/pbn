import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center text-center"
      style={{ height: '340px' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-site-dark"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(26,26,46,0.92) 0%, rgba(45,20,70,0.92) 100%)',
        }}
      />
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(108,92,231,0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-white tracking-wider drop-shadow-2xl mb-3">
          DeepBot
        </h1>
        <p className="text-lg text-white/80 mb-7">
          The most powerful Twitch loyalty &amp; chat bot
        </p>
        <Link href="#" className="btn-primary text-base px-10 py-3">
          Get Started Free
        </Link>
      </div>
    </section>
  )
}
