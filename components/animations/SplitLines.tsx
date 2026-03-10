'use client'

import { useRef, Children, isValidElement } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { scrollReveal } from '@/lib/animations'

interface SplitLinesProps {
  children: React.ReactNode
  className?: string
  delay?: number
  stagger?: number
  scroll?: boolean
}

export default function SplitLines({
  children,
  className,
  delay = 0,
  stagger = 0.12,
  scroll = true,
}: SplitLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    const inners = containerRef.current.querySelectorAll('[data-split-inner]')
    if (!inners.length) return

    gsap.set(inners, { y: '100%' })

    gsap.to(inners, {
      y: '0%',
      duration: 0.8,
      stagger,
      delay,
      ease: 'power3.out',
      ...(scroll
        ? {
            scrollTrigger: {
              trigger: containerRef.current,
              start: scrollReveal.triggerStart,
              once: true,
            },
          }
        : {}),
    })
  }, { scope: containerRef })

  const lines = Children.toArray(children).filter(isValidElement)

  return (
    <div ref={containerRef} className={className}>
      {lines.map((child, i) => (
        <span key={i} className="block overflow-hidden">
          <span data-split-inner="" className="block">
            {child}
          </span>
        </span>
      ))}
    </div>
  )
}
