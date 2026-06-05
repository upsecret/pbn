import Link from "next/link";

const locations = [
  {
    name: "Highlands Ranch",
    href: "/highlands-ranch",
    hours: "Mon–Fri: 7am–7pm | Sat: 8am–5pm",
    emoji: "🏔️",
    color: "#2E7D32",
  },
  {
    name: "Parker",
    href: "/parker",
    hours: "Mon–Fri: 7am–7pm | Sat: 8am–5pm",
    emoji: "🌳",
    color: "#43A047",
  },
  {
    name: "Smoky Hill",
    href: "/smoky-hill",
    hours: "Mon–Fri: 7am–7pm | Sat: 8am–5pm",
    emoji: "⛰️",
    color: "#2E7D32",
  },
];

export default function ReservationSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold mb-3" style={{ color: "#333333" }}>
            Make a Reservation at our<br />Drop-In Child Care Centers!
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Walk-ins are always welcome, but reservations help us prepare for your child. Select your nearest location to schedule today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {locations.map((loc) => (
            <div key={loc.name} className="rounded-xl overflow-hidden shadow-md border border-gray-100">
              {/* Photo placeholder with colored gradient */}
              <div
                className="h-40 flex items-center justify-center text-6xl"
                style={{
                  background: `linear-gradient(135deg, ${loc.color}22, ${loc.color}44)`,
                  borderBottom: `3px solid ${loc.color}`,
                }}
              >
                {loc.emoji}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2" style={{ color: "#333333" }}>
                  {loc.name}
                </h3>
                <p className="text-xs text-gray-500 mb-4">{loc.hours}</p>
                <Link
                  href={loc.href}
                  className="block text-center py-2 px-4 rounded-full text-white text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: loc.color }}
                >
                  Schedule at {loc.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Service info */}
        <div className="bg-gray-50 rounded-xl p-6 text-center">
          <p className="text-gray-600 text-sm max-w-3xl mx-auto leading-relaxed">
            KidsTown Drop-In Child Care serves children ages <strong>1 to 13 years old</strong> at all 3 Colorado locations. We are open{" "}
            <strong>Monday through Friday</strong> with extended hours and <strong>Saturday</strong> care available.
            After-hours and evening care is offered to accommodate working parents.
          </p>
        </div>
      </div>
    </section>
  );
}
