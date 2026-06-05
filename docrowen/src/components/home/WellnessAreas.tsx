import Image from "next/image";

const areas = [
  {
    title: "Holistic Wellness",
    description:
      "Our approach combines techniques from a variety of modalities to create a comprehensive and personalized wellness plan.",
    image:
      "https://images.unsplash.com/photo-1588064578354-c1e28d429246?w=600&q=80",
  },
  {
    title: "Nutrition Consulting",
    description:
      "Our process applies techniques from a variety of disciplines distinction in detail and gives careful attention.",
    image:
      "https://images.unsplash.com/photo-1575613424219-e8d31bce9e33?w=600&q=80",
  },
  {
    title: "Fitness Consulting",
    description:
      "Our approach combines techniques from a variety of modalities to create a comprehensive and personalized fitness plan.",
    image:
      "https://images.unsplash.com/photo-1676565415274-15550cb4b75e?w=600&q=80",
  },
];

export default function WellnessAreas() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-end md:justify-between mb-12">
          <div>
            <p className="text-sm font-semibold text-primary mb-2">
              Health Disciplines
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Wellness Areas
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-gray-600 max-w-md">
            Being an industry leader in promoting personal wellness. Our
            approach combines multiple health-related disciplines to optimize
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div key={area.title} className="group">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
