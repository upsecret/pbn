import { ShieldCheck, Truck, Headphones } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Buy safe: our 30 days money back guarantee",
    description:
      "Fusce gravida ut nisi et facilisis. Nullam ut mi fermentum, posuere dolor id, ultricies ipsum. Duis urna ipsum, tincidunt ut lorem.",
  },
  {
    icon: Truck,
    title: "Free delivery for orders over $100",
    description:
      "Fusce gravida ut nisi et facilisis. Nullam ut mi fermentum, posuere dolor id, ultricies ipsum. Duis urna ipsum, tincidunt ut lorem.",
  },
  {
    icon: Headphones,
    title: "Contact our Customer Care for any question or doubt",
    description:
      "Fusce gravida ut nisi et facilisis. Nullam ut mi fermentum, posuere dolor id, ultricies ipsum. Duis urna ipsum, tincidunt ut lorem.",
  },
];

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <div key={feature.title}>
            <div className="flex justify-center mb-4">
              <Icon size={48} className="text-primary" strokeWidth={1.5} />
            </div>
            <p className="text-primary font-semibold mb-3">{feature.title}</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
