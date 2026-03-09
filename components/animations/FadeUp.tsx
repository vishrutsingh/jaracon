'use client'

import { useFadeUp } from '@/hooks/useFadeUp'

interface FadeUpProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  stagger?: number
}

export default function FadeUp({ children, className, delay, y, stagger }: FadeUpProps) {
  const ref = useFadeUp<HTMLDivElement>({ delay, y, stagger })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
