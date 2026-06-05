const items = [
  {
    title: 'Deep Integrations',
    desc: 'Our integrations extend DeepBot into all areas of Twitch including donations, subscriptions and more. You can also add it to almost any third party service.',
  },
  {
    title: 'Customisable Donation Pages',
    desc: 'With our donation feature, you get a fully customizable donation page — 100% free. Set up donation alerts with the best design for you.',
  },
  {
    title: 'Custom Commands',
    desc: 'With our advanced command system, you get to run fully custom commands with variables, APIs, and more to make your stream truly interactive.',
  },
  {
    title: 'Fun Chat Games',
    desc: 'Keep your viewers entertained with interactive games like gambling, duels and slot machines to keep them coming back for more.',
  },
]

export default function WhyDeepBot() {
  return (
    <section className="bg-white py-18">
      <div className="max-w-5xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-1">Why DeepBot?</h2>
            <p className="text-sm text-gray-400 mb-4">Fully featured bot.</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              DeepBot is the most complete streaming loyalty bot available. With over 100 features
              built-in, it handles everything from points to donations to custom commands.
            </p>
            <a href="#" className="text-sm font-semibold text-primary hover:underline">
              Read more here &rsaquo;
            </a>
          </div>

          {/* Right grid */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-7">
            {items.map(({ title, desc }) => (
              <div key={title}>
                <h4 className="text-sm font-bold text-gray-800 mb-2">{title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
