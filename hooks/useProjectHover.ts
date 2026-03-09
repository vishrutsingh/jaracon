'use client'

import { useRef, useCallback } from 'react'
import { gsap } from '@/lib/gsap'
import { projectHover } from '@/lib/animations'

export function useProjectHover() {
  const imageRef = useRef<HTMLDivElement>(null)
  const targetY = useRef(0)
  const currentY = useRef(0)
  const tickerActive = useRef(false)

  const updatePosition = useCallback(() => {
    currentY.current += (targetY.current - currentY.current) * projectHover.lerp
    if (imageRef.current) {
      imageRef.current.style.transform = `translateY(${currentY.current}px)`
    }
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    targetY.current = e.clientY - rect.top - projectHover.imageSize.h / 2
  }, [])

  const onMouseEnter = useCallback((imageSrc: string) => {
    if (!imageRef.current) return
    imageRef.current.style.backgroundImage = `url(${imageSrc})`

    gsap.to(imageRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: 'expo.out',
    })

    if (!tickerActive.current) {
      gsap.ticker.add(updatePosition)
      tickerActive.current = true
    }
  }, [updatePosition])

  const onMouseLeave = useCallback(() => {
    if (!imageRef.current) return

    gsap.to(imageRef.current, {
      opacity: 0,
      x: 100,
      duration: 0.4,
      ease: 'power2.out',
    })

    if (tickerActive.current) {
      gsap.ticker.remove(updatePosition)
      tickerActive.current = false
    }
  }, [updatePosition])

  return { imageRef, onMouseMove, onMouseEnter, onMouseLeave }
}
