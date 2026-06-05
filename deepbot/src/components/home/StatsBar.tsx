const stats = [
  { value: '32,771', label: 'DEEPBOTS RUNNING' },
  { value: '478',    label: 'CURRENTLY ONLINE' },
  { value: '100%',   label: 'TRANSACTION FREE' },
]

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-gray-200 shadow-sm py-5">
      <div className="max-w-5xl mx-auto px-5">
        <div className="flex justify-center gap-14 md:gap-20">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <span className="block text-3xl font-bold text-primary leading-none">
                {value}
              </span>
              <span className="block text-[11px] text-gray-400 uppercase tracking-widest mt-1">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
