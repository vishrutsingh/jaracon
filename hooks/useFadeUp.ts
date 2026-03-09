'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { scrollReveal as config } from '@/lib/animations'

interface UseFadeUpOptions {
  delay?: number
  y?: number
  stagger?: number
}

export function useFadeUp<T extends HTMLElement>(options: UseFadeUpOptions = {}) {
  const ref = useRef<T>(null)

  useGSAP(() => {
    if (!ref.current) return
    const targets = options.stagger ? ref.current.children : ref.current

    gsap.from(targets, {
      y: options.y ?? config.y,
      opacity: 0,
      duration: config.duration,
      delay: options.delay ?? 0,
      stagger: options.stagger ?? 0,
      ease: config.ease,
      scrollTrigger: {
        trigger: ref.current,
        start: config.triggerStart,
        once: true,
      },
    })
  }, { scope: ref })

  return ref
}
