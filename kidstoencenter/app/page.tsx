import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ReservationSection from "@/components/sections/ReservationSection";
import VirtualTourSection from "@/components/sections/VirtualTourSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import MailingListSection from "@/components/sections/MailingListSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ReservationSection />
      <VirtualTourSection />
      <TestimonialSection />
      <MailingListSection />
    </main>
  );
}
