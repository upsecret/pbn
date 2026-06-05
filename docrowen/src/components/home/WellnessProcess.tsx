const steps = [
  {
    number: "01",
    title: "Goal Setting",
    description:
      "We will work with you to identify and prioritize your wellness goals and create a plan to achieve them.",
  },
  {
    number: "04",
    title: "Health Coaching",
    description:
      "We will work with you to create a personalized plan to help you achieve your health and wellness goals.",
  },
  {
    number: "05",
    title: "Nutrition Consulting",
    description:
      "We will work with you to create a personalized nutrition plan to help you live a healthy lifestyle.",
  },
];

export default function WellnessProcess() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-2">
            How We Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Wellness Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`bg-white p-8 ${
                i === 0
                  ? "rounded-tl-3xl rounded-2xl"
                  : i === steps.length - 1
                  ? "rounded-tr-3xl rounded-2xl"
                  : "rounded-2xl"
              } shadow-sm`}
            >
              <p className="text-3xl font-bold text-primary mb-4">
                {step.number}
              </p>
              <p className="font-bold text-lg mb-3">{step.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
