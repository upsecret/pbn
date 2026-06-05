import HeroSection from "@/components/home/HeroSection";
import WellnessAreas from "@/components/home/WellnessAreas";
import WellnessProcess from "@/components/home/WellnessProcess";
import SuccessSection from "@/components/home/SuccessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import RecentPosts from "@/components/home/RecentPosts";
import { getRecentPosts } from "@/lib/wordpress";

export default async function HomePage() {
  const posts = await getRecentPosts(3);

  return (
    <>
      <HeroSection />
      <WellnessAreas />
      <WellnessProcess />
      <SuccessSection />
      <TestimonialsSection />
      <FAQSection />
      <RecentPosts posts={posts} />
    </>
  );
}
