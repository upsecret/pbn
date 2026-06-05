import { Metadata } from "next";
import ValuesCards from "@/components/about/ValuesCards";
import TestimonialSection from "@/components/about/TestimonialSection";
import FeaturePillars from "@/components/about/FeaturePillars";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about our values, mission, and commitment to health and wellness consulting.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-gray-600 text-lg">
          Fusce gravida ut nisi et facilisis. Nullam ut mi fermentum, posuere
          dolor id, ultricies ipsum. Duis urna ipsum, tincidunt ut lorem.
        </p>
      </div>

      <ValuesCards />

      <TestimonialSection />

      <FeaturePillars />
    </div>
  );
}
