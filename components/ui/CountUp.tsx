'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

interface CountUpProps {
  target: number
  suffix?: string
  prefix?: string
  label: string
  className?: string
  light?: boolean
}

export default function CountUp({ target, suffix = '', prefix = '', label, className = '', light = false }: CountUpProps) {
  const numRef = useRef<HTMLSpanElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!numRef.current || !containerRef.current) return

    const obj = { val: 0 }
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true,
      },
      onUpdate: () => {
        if (numRef.current) {
          numRef.current.innerHTML = `${prefix}${Math.round(obj.val)}${suffix ? `<span class="text-sm font-normal ml-1">${suffix}</span>` : ''}`
        }
      },
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className={className}>
      <span
        ref={numRef}
        className={`text-hero ${light ? 'text-bg' : 'text-dark'}`}
      >
        {prefix}0{suffix && <span className="text-sm font-normal ml-1">{suffix}</span>}
      </span>
      <p className={`text-sm mt-2 ${light ? 'text-white/50' : 'text-mid'}`}>{label}</p>
    </div>
  )
}
