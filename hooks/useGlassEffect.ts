'use client'

import { useCallback, useRef } from 'react'

export function useGlassEffect() {
  const rafId = useRef<number>(0)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget
    cancelAnimationFrame(rafId.current)

    rafId.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
      el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
    })
  }, [])

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLElement>) => {
    cancelAnimationFrame(rafId.current)
    const el = e.currentTarget
    el.style.setProperty('--mouse-x', '50%')
    el.style.setProperty('--mouse-y', '50%')
  }, [])

  return { handleMouseMove, handleMouseLeave }
}
