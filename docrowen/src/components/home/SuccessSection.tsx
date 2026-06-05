import Image from "next/image";
import Button from "@/components/ui/Button";

export default function SuccessSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-primary mb-2">Success</p>
            <h3 className="text-xl md:text-2xl font-bold mb-6">
              &ldquo;Proven track of successfully helping clients reach their
              health goals for over 10 years&rdquo;
            </h3>
            <div className="flex gap-6 mb-8">
              <div className="border border-gray-200 rounded-l-[40px] rounded-r-lg px-6 py-4">
                <p className="text-2xl font-bold text-primary">8k</p>
                <p className="text-sm text-gray-500">Clients</p>
              </div>
              <div className="border border-gray-200 rounded-r-[40px] rounded-l-lg px-6 py-4">
                <p className="text-2xl font-bold text-primary">10</p>
                <p className="text-sm text-gray-500">Years of Experience</p>
              </div>
            </div>
            <Button href="/about">Our Mission</Button>
          </div>
          <div className="relative h-80 md:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1676565415277-a11304526519?w=800&q=80"
              alt="Success story"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-[400px] rounded-2xl overflow-hidden md:order-1 order-2">
            <Image
              src="https://images.unsplash.com/photo-1680458842307-03d691d45d06?w=800&q=80"
              alt="What drives us"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:order-2 order-1">
            <p className="text-sm font-semibold text-primary mb-2">
              What drives us
            </p>
            <h3 className="text-xl md:text-2xl font-bold mb-6">
              &ldquo;Health and wellness consultants ready to assist with your
              wellness journey&rdquo;
            </h3>
            <div className="space-y-3 mb-8">
              <p className="flex items-center gap-3">
                <span className="text-primary font-bold">&#10003;</span>
                Efficient, effective solutions
              </p>
              <p className="flex items-center gap-3">
                <span className="text-primary font-bold">&#10003;</span>
                Empowering, life-changing workshops
              </p>
            </div>
            <Button href="/about">Meet Our Consultants</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
