'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // GSAP context is automatically scoped to the container
    // and cleaned up on unmount via useGSAP
  }, { scope: container })

  return <div ref={container}>{children}</div>
}
