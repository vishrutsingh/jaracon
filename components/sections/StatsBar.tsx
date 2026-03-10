'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { scrollReveal } from '@/lib/animations'
import { Sun, Factory, FolderKanban, Users } from 'lucide-react'
import CountUp from '@/components/ui/CountUp'
import FadeUp from '@/components/animations/FadeUp'

const stats = [
  { target: 800, suffix: 'MW', label: 'solar power capacity', icon: Sun },
  { target: 500, suffix: 'MW', label: 'industrial power', icon: Factory },
  { target: 3, suffix: '', label: 'major projects', icon: FolderKanban },
  { target: 8, suffix: '+', label: 'trusted clients', icon: Users },
]

export default function StatsBar() {
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!lineRef.current) return

    gsap.from(lineRef.current, {
      scaleX: 0,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: lineRef.current,
        start: scrollReveal.triggerStart,
        once: true,
      },
    })
  }, { scope: lineRef })

  return (
    <section className="section-padding bg-dark flex-1">
      <div className="container-site">
        <div ref={lineRef} className="w-full h-px bg-white/10 mb-12 origin-left" />
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map(stat => {
              const Icon = stat.icon
              return (
                <div key={stat.label}>
                  <Icon size={22} className="text-orange mb-4" />
                  <CountUp
                    target={stat.target}
                    suffix={stat.suffix}
                    label={stat.label}
                    light
                  />
                </div>
              )
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
