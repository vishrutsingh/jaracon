'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { scrollReveal } from '@/lib/animations'

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!ref.current) return

    gsap.from(ref.current, {
      scaleX: 0,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: ref.current,
        start: scrollReveal.triggerStart,
        once: true,
      },
    })
  }, { scope: ref })

  return (
    <div className="container-site">
      <div ref={ref} className="section-divider origin-left" />
    </div>
  )
}
