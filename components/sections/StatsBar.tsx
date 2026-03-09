'use client'

import CountUp from '@/components/ui/CountUp'
import FadeUp from '@/components/animations/FadeUp'

const stats = [
  { target: 800, suffix: 'MW', label: 'solar power capacity' },
  { target: 500, suffix: 'MW', label: 'industrial power' },
  { target: 3, suffix: '', label: 'major projects' },
  { target: 8, suffix: '+', label: 'trusted clients' },
]

export default function StatsBar() {
  return (
    <section className="section-padding bg-dark">
      <div className="container-site">
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map(stat => (
              <CountUp
                key={stat.label}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
                light
              />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
