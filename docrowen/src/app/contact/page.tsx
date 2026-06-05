import { Metadata } from "next";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import FeatureCards from "@/components/contact/FeatureCards";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with our health and wellness consulting team. Call us or send a message.",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ContactInfo />
        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </div>

      <FeatureCards />
    </div>
  );
}
