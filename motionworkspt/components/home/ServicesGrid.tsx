// Server component

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link?: { href: string; label: string };
}

function ServiceCard({
  imageSrc,
  imageAlt,
  title,
  description,
  link,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Service image */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-48 object-cover"
      />

      {/* Card content */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="text-lg font-bold mb-3 leading-tight"
          style={{ color: "#E8751A" }}
        >
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1">
          {description}
        </p>
        {link && (
          <a
            href={link.href}
            className="mt-4 text-sm font-semibold hover:underline inline-flex items-center gap-1"
            style={{ color: "#E8751A" }}
          >
            {link.label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  const services: ServiceCardProps[] = [
    {
      imageSrc: "/images/one-on-one-care.svg",
      imageAlt: "One-on-one physical therapy care",
      title: "One-on-One, Patient Centered Care",
      description:
        "Every visit at MotionWorks, you will work exclusively with the same Doctor of Physical Therapy — not aides or techs. Our patient-centered model means you receive undivided expert attention, enabling faster recovery with consistently high-quality care tailored specifically to your needs and goals.",
    },
    {
      imageSrc: "/images/manual-therapy.svg",
      imageAlt: "Hands-on manual therapy techniques",
      title: "Hands-On, Manual Therapy",
      description:
        "Our therapists are highly trained in evidence-based manual therapy techniques including joint mobilization, soft tissue mobilization, and myofascial release. These hands-on approaches directly address the source of your pain and movement restrictions — accelerating healing beyond what exercise alone can achieve.",
      link: {
        href: "/services",
        label: "Learn more about our manual therapy approach",
      },
    },
    {
      imageSrc: "/images/exercise-prescription.svg",
      imageAlt: "Functional exercise prescription and therapy",
      title: "Functional Exercise Prescription",
      description:
        "Once soft tissue and joint capsule normalization is achieved through hands-on treatment, we prescribe targeted functional exercises to restore strength, mobility, and movement patterns. Our exercise programs are individualized and progress with you, ensuring long-term results and preventing future injury.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
