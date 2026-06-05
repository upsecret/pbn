import {
  Cloud, Star, Music, Award, Bookmark,
  Gift, Users, Bot, List, Shield,
  Terminal, Megaphone, Calendar, Bell, TrendingUp,
  Users2, Headphones, Heart, CreditCard, Gamepad2,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface GridItem {
  Icon: LucideIcon
  label: string
}

const items: GridItem[] = [
  { Icon: Cloud,       label: 'Cloud Hosted' },
  { Icon: Star,        label: 'High Quality' },
  { Icon: Music,       label: 'Song Requests' },
  { Icon: Award,       label: 'Custom Rewards' },
  { Icon: Bookmark,    label: 'Custom Resources' },
  { Icon: Gift,        label: 'Giveaways' },
  { Icon: Users,       label: 'User Management' },
  { Icon: Bot,         label: 'Automod' },
  { Icon: List,        label: 'Queues' },
  { Icon: Shield,      label: 'Moderation' },
  { Icon: Terminal,    label: 'Custom Commands' },
  { Icon: Megaphone,   label: 'Community Updates' },
  { Icon: Calendar,    label: 'Schedules' },
  { Icon: Bell,        label: 'Notificator Bot' },
  { Icon: TrendingUp,  label: 'Statistics' },
  { Icon: Users2,      label: 'Group/Stage Bot' },
  { Icon: Headphones,  label: 'Spotify Integration' },
  { Icon: Heart,       label: 'Socials/Crowdfunding' },
  { Icon: CreditCard,  label: 'Website Cards' },
  { Icon: Gamepad2,    label: 'Mini Games' },
]

export default function FeatureGrid() {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-x-4 gap-y-5">
          {items.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center px-2 py-3 rounded-lg transition-colors hover:bg-site-light group"
            >
              <Icon
                size={28}
                className="text-primary mb-2 transition-transform group-hover:scale-110"
              />
              <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-tight leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
