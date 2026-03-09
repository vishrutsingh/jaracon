'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { heroEntrance } from '@/lib/animations'
import LoopText from '@/components/ui/LoopText'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: heroEntrance.ease } })

    tl.from(eyebrowRef.current, {
      y: heroEntrance.smallY,
      opacity: 0,
      duration: heroEntrance.smallDuration,
    })

    tl.from(headingRef.current, {
      y: heroEntrance.lineY,
      opacity: 0,
      duration: heroEntrance.lineDuration,
    }, 0.15)

    tl.from(subtextRef.current, {
      y: heroEntrance.smallY,
      opacity: 0,
      duration: heroEntrance.smallDuration,
    }, 0.4)

    tl.from(ctaRef.current, {
      y: heroEntrance.smallY,
      opacity: 0,
      duration: heroEntrance.smallDuration,
    }, 0.5)

    tl.from(indicatorRef.current, {
      opacity: 0,
      duration: heroEntrance.smallDuration,
    }, 0.7)
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative h-screen flex items-end pb-24 overflow-hidden">
      {/* Fullscreen video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/Construction_site_time_lapse_video_10fcb6023a.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container-site relative z-10 w-full">
        <div className="max-w-[700px]">
          <p ref={eyebrowRef} className="text-eyebrow text-white/60 mb-6">epc contracting excellence</p>

          <h1 ref={headingRef} className="text-hero text-white mb-8">
            Building the future<br />from ground up.
          </h1>

          <p ref={subtextRef} className="text-body text-white/70 max-w-[45ch] mb-8">
            End-to-end construction solutions from Qatar — residential,
            commercial, and power plant projects delivered with precision.
          </p>

          <Link
            ref={ctaRef}
            href="/projects"
            className="text-[0.9rem] text-white inline-flex items-center gap-2"
          >
            <LoopText label="view projects &rarr;" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={indicatorRef} className="absolute bottom-8 left-[var(--container-padding)] flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-white/50 [writing-mode:vertical-lr] rotate-180">scroll to explore</span>
        <span className="text-white/50 text-lg" style={{ animation: 'bounce-arrow 1.5s ease-in-out infinite' }}>&darr;</span>
      </div>
    </section>
  )
}
