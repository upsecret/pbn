const streamers = [
  { name: 'Larry' },
  { name: 'GrumBot' },
  { name: 'xkJimye' },
  { name: 'imgfurf' },
]

export default function WhoUsing() {
  return (
    <section className="bg-gray-50 border-t border-gray-100 py-14">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Who&apos;s using DeepBot?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {streamers.map(({ name }) => (
            <div
              key={name}
              className="rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              {/* Placeholder thumbnail */}
              <div
                className="w-full aspect-video bg-gradient-to-br from-site-dark to-site-dark2 flex items-center justify-center"
                aria-hidden
              >
                <svg viewBox="0 0 24 24" className="w-10 h-10 opacity-20 fill-white">
                  <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
                </svg>
              </div>
              <span className="block px-3 py-2 text-sm font-semibold text-gray-700">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
