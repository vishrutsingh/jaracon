'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import LoopText from '@/components/ui/LoopText'

const descriptionWords = 'End-to-end epc contracting across Qatar — from residential towers and commercial complexes to power plants and substations. We build the infrastructure that powers the nation.'.split(' ')

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLSpanElement>(null)
  const tagTextRef = useRef<HTMLSpanElement>(null)
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const wordsRef = useRef<HTMLParagraphElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)
  const locationRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.4 })

    // 1. Video overlay lifts — cinematic curtain raise
    tl.to(overlayRef.current, {
      opacity: 0.4,
      duration: 1.4,
      ease: 'power2.inOut',
    })

    // 2. Headline line 1 — clip-mask reveal (slides up from behind mask)
    tl.to(line1Ref.current, {
      y: '0%',
      duration: 0.9,
      ease: 'power3.out',
    }, 0.6)

    // 3. Headline line 2 — clip-mask reveal, staggered
    tl.to(line2Ref.current, {
      y: '0%',
      duration: 0.9,
      ease: 'power3.out',
    }, 0.75)

    // 4. Qatar tag — dot scales in, text slides from left
    tl.from(dotRef.current, {
      scale: 0,
      duration: 0.4,
      ease: 'back.out(3)',
    }, 1.0)

    tl.from(tagTextRef.current, {
      x: -20,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
    }, 1.05)

    // 5. Divider line draws in
    tl.from(dividerRef.current, {
      scaleX: 0,
      duration: 0.8,
      ease: 'power2.inOut',
    }, 1.1)

    // 6. Description — word-by-word stagger
    if (wordsRef.current) {
      const words = wordsRef.current.querySelectorAll('[data-word]')
      tl.from(words, {
        y: 12,
        opacity: 0,
        duration: 0.4,
        stagger: 0.025,
        ease: 'power2.out',
      }, 1.2)
    }

    // 7. CTA + location
    tl.from(ctaRef.current, {
      y: 15,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out',
    }, 1.4)

    tl.from(locationRef.current, {
      y: 15,
      opacity: 0,
      duration: 0.5,
      ease: 'power3.out',
    }, 1.45)

    // 8. Scroll indicator — gentle fade
    tl.from(indicatorRef.current, {
      opacity: 0,
      duration: 0.6,
    }, 1.6)

    // 9. Video parallax — subtle depth on scroll
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        y: '-15%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
      {/* Fullscreen video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-[115%] object-cover"
      >
        <source src="/video/Construction_site_time_lapse_video_10fcb6023a.mp4" type="video/mp4" />
      </video>

      {/* Overlay — starts fully black, animates to semi-transparent */}
      <div ref={overlayRef} className="absolute inset-0 bg-black opacity-100" />

      {/* Content */}
      <div className="container-site relative z-10 w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">

          {/* Left — headline block */}
          <div className="flex-1">
            {/* Qatar tag */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span ref={dotRef} className="w-2 h-2 rounded-full bg-orange" />
              <span ref={tagTextRef} className="text-xs text-white/50">Doha, Qatar</span>
            </div>

            {/* Headline — clip-mask reveal */}
            <h1 className="text-hero text-white leading-[0.95]">
              <span className="block overflow-hidden">
                <span ref={line1Ref} className="block" style={{ transform: 'translateY(100%)' }}>
                  Think big,
                </span>
              </span>
              <span className="block overflow-hidden">
                <span ref={line2Ref} className="block text-white/40" style={{ transform: 'translateY(100%)' }}>
                  construct bigger.
                </span>
              </span>
            </h1>
          </div>

          {/* Right — description block */}
          <div className="md:max-w-[360px] md:pb-1">
            {/* Divider */}
            <div ref={dividerRef} className="w-full h-px bg-white/20 mb-6 origin-left" />

            {/* Word-by-word stagger */}
            <p ref={wordsRef} className="text-sm text-white/50 mb-6 leading-relaxed">
              {descriptionWords.map((word, i) => (
                <span key={i} data-word="" className="inline-block mr-[0.3em]">
                  {word}
                </span>
              ))}
            </p>

            <div className="flex items-center justify-between">
              <Link
                ref={ctaRef}
                href="/projects"
                className="text-[0.9rem] text-white inline-flex items-center gap-2"
              >
                <LoopText label="view projects &rarr;" />
              </Link>

              <div ref={locationRef} className="text-xs text-white/30">
                est. Qatar
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — animated line */}
      <div ref={indicatorRef} className="absolute bottom-8 left-[var(--container-padding)] flex flex-col items-center gap-3 z-10">
        <span className="text-xs text-white/40 [writing-mode:vertical-lr] rotate-180">scroll</span>
        <span
          className="w-px h-8 bg-white/40 block origin-top"
          style={{ animation: 'scroll-line 2s ease-in-out infinite' }}
        />
      </div>
    </section>
  )
}
