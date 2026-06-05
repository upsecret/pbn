export default function AboutSection() {
  const cards = [
    {
      title: "Why Kids Town?",
      bg: "#2E7D32",
      content:
        "KidsTown Drop-In Child Care Centers offer a safe, fun, and nurturing environment for children ages 1–13. We believe every parent deserves a break, and every child deserves a great experience. Our trained staff provide attentive care, engaging activities, and structured play that helps children grow and thrive.",
    },
    {
      title: "You Need a Break!",
      bg: "#E65100",
      content:
        "Whether you have errands to run, appointments to keep, or simply need a moment to recharge, KidsTown is here for you. No reservation required — just walk in! Drop off your little ones and enjoy your time knowing they're in great hands with our caring, experienced team.",
    },
    {
      title: "Preschool Openings",
      bg: "#2E7D32",
      content:
        "We currently have preschool openings available at select locations! Our preschool program provides early learning experiences in a warm and supportive setting. Contact your nearest KidsTown location for more details on enrollment, schedules, and pricing.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-10" style={{ color: "#2E7D32" }}>
          KidsTown Drop-In Child Care
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl p-6 text-white shadow-md"
              style={{ backgroundColor: card.bg }}
            >
              <h3 className="text-xl font-bold mb-3 border-b border-white border-opacity-30 pb-3">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-white text-opacity-90">{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
