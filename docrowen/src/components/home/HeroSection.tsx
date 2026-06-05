import Image from "next/image";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1680458842419-473b514adbd6?w=1920&q=80"
        alt="Wellness background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gray-800/70" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Achieve Optimal Wellness with Experienced Health Professionals
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-xl">
            &ldquo;Our consulting services start with a customized wellness plan
            that prioritizes your health.&rdquo;
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Schedule a Consultation</Button>
            <Button href="/about" variant="outline">
              List of Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
