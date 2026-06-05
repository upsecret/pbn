import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#4A4A4A', color: '#CCCCCC' }} className="py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.8rem', marginBottom: '0.5rem' }}>
          Copyright &copy; {year} Women&apos;s Wellness Circle · All Rights Reserved
        </p>
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '0.8rem' }}>
          <Link href="/terms" className="hover:text-white transition-colors underline">
            Terms of Service &amp; Privacy
          </Link>
          {' · '}
          Site by{' '}
          <span style={{ color: '#C4B8C4' }}>Women&apos;s Wellness Circle</span>
        </p>
      </div>
    </footer>
  );
}
