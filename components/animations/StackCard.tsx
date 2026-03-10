'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from '@/lib/gsap'
import { useLenisRef } from '@/providers/LenisProvider'
import { cardSnap } from '@/lib/animations'

// Global lock — only ONE snap can run at a time across ALL StackCards
let isSnapping = false

interface StackCardProps {
  children: React.ReactNode
  index: number
  className?: string
}

export default function StackCard({ children, index, className = 'bg-bg' }: StackCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const lenisRef = useLenisRef()

  useGSAP(() => {
    if (!ref.current) return

    const el = ref.current

    const snapTo = (target: number) => {
      const lenis = lenisRef?.current
      if (!lenis || isSnapping) return
      isSnapping = true

      lenis.stop()
      lenis.start()

      lenis.scrollTo(target, {
        duration: cardSnap.snapDuration,
        force: true,
        lock: true,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        onComplete: () => {
          // Refresh WHILE isSnapping is still true — any chain-triggered
          // onEnter callbacks will be blocked by the global flag
          ScrollTrigger.refresh()
          isSnapping = false
        },
      })
    }

    // Scroll down — card enters at 80% from top, snap to stuck position
    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      end: 'top top+=68',
      onEnter: () => snapTo(el.offsetTop - 68),
    })

    // Scroll up — card top hits 20% from top, snap off-screen to reveal previous
    ScrollTrigger.create({
      trigger: el,
      start: 'top 20%',
      end: 'top top+=68',
      onLeaveBack: () => snapTo(el.offsetTop - window.innerHeight),
    })
  }, { scope: ref })

  return (
    <div
      ref={ref}
      className={`sticky top-[var(--nav-height)] ${className}`}
      style={{ zIndex: index }}
    >
      {children}
    </div>
  )
}
