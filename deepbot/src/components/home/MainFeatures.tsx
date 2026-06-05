import { Database, DollarSign, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  Icon: LucideIcon
  title: string
  desc: string
}

const features: Feature[] = [
  {
    Icon: Database,
    title: 'Loyalty Point System',
    desc: "When you're going live, viewers collect or lose points based on how long they watch your stream.",
  },
  {
    Icon: DollarSign,
    title: 'No Transaction Fees',
    desc: 'No transaction fees whatsoever. Donations are between you and your donators — 100% yours.',
  },
  {
    Icon: Zap,
    title: 'Advanced Commands',
    desc: 'No need to manage multiple bots. DeepBot brings all of the advanced commands you need into one place.',
  },
]

export default function MainFeatures() {
  return (
    <section id="features" className="bg-site-light py-16">
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ Icon, title, desc }) => (
            <div key={title} className="text-center group">
              <div className="w-20 h-20 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-5 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white group-hover:scale-105">
                <Icon size={32} />
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
