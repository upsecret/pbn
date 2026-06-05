import PlaceholderPage from '@/components/PlaceholderPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service & Privacy — Women's Wellness Circle",
};

export default function TermsPage() {
  return (
    <PlaceholderPage
      title="Terms of Service & Privacy Policy"
      description="This page contains our Terms of Service and Privacy Policy. We are committed to protecting your personal information and your right to privacy. If you have any questions about our terms or privacy practices, please do not hesitate to get in touch with us directly."
      ctaLabel="Contact Us"
      ctaHref="/contact"
      accentColor="#6B9080"
    />
  );
}
