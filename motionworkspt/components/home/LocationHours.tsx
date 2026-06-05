// Server component

const hours = [
  { day: "Monday", time: "8:00am – 5:00pm" },
  { day: "Tuesday", time: "8:00am – 5:30pm" },
  { day: "Wednesday", time: "8:00am – 5:00pm" },
  { day: "Thursday", time: "8:00am – 5:00pm" },
  { day: "Friday", time: "8:00am – 4:30pm" },
  { day: "Saturday", time: "By Appointment" },
];

export default function LocationHours() {
  return (
    <section style={{ backgroundColor: "#3A3A3A" }} className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left: Location info */}
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-3">
              Located in Portland, OR
            </h2>
            <div className="h-1 w-16 mb-5" style={{ backgroundColor: "#E8751A" }} />
            <p className="text-gray-300 text-base mb-1">
              2847 Riverside Drive
            </p>
            <p className="text-gray-300 text-base mb-6">
              Portland, OR 97201
            </p>
            <p className="mt-3">
              <a
                href="mailto:info@motionworkspt.com"
                className="text-gray-300 text-sm hover:text-white underline"
              >
                info@motionworkspt.com
              </a>
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded text-white font-bold text-sm hover:opacity-90"
              style={{ backgroundColor: "#E8751A" }}
            >
              Contact Us
            </a>
          </div>

          {/* Right: Hours table + exterior photo placeholder */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Hours table */}
            <div className="flex-1">
              <h3 className="text-white font-bold text-base mb-3 uppercase tracking-wide">
                Appointments Available
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  {hours.map(({ day, time }) => (
                    <tr key={day} className="border-b border-gray-600 last:border-0">
                      <td className="py-2 pr-4 text-gray-300 font-medium w-32">
                        {day}
                      </td>
                      <td className="py-2 text-gray-400">
                        {time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Clinic exterior image */}
            <div className="flex-1 min-h-48 rounded overflow-hidden">
              <img
                src="/images/clinic-exterior.svg"
                alt="MotionWorks clinic exterior"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
