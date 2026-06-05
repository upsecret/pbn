import { Award, Users, RefreshCcw } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "High quality and low cost",
    description:
      "Fusce gravida ut nisi et facilisis. Nullam ut mi fermentum, posuere dolor id, ultricies ipsum. Duis urna ipsum, tincidunt ut lorem.",
  },
  {
    icon: Users,
    title: "50K Happy Customers",
    description:
      "Fusce gravida ut nisi et facilisis. Nullam ut mi fermentum, posuere dolor id, ultricies ipsum. Duis urna ipsum, tincidunt ut lorem.",
  },
  {
    icon: RefreshCcw,
    title: "A transparent Refund policy",
    description:
      "Fusce gravida ut nisi et facilisis. Nullam ut mi fermentum, posuere dolor id, ultricies ipsum. Duis urna ipsum, tincidunt ut lorem.",
  },
];

export default function FeaturePillars() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {pillars.map((pillar) => {
        const Icon = pillar.icon;
        return (
          <div key={pillar.title}>
            <div className="flex justify-center mb-4">
              <Icon size={48} className="text-primary" strokeWidth={1.5} />
            </div>
            <p className="text-primary font-semibold mb-3">{pillar.title}</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {pillar.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
