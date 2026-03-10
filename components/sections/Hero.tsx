'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.4 })

    // 1. Video overlay lifts — cinematic curtain raise
    tl.to(overlayRef.current, {
      opacity: 0.4,
      duration: 1.4,
      ease: 'power2.inOut',
    })

    // 2. Marquee fades in + rises
    gsap.set(marqueeRef.current, { opacity: 0, y: 40 })
    tl.to(marqueeRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    }, 0.8)

    // 3. Video parallax — subtle depth on scroll
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

  const marqueeText = 'THINK BIG, CONSTRUCT BIGGER.'

  return (
    <section ref={sectionRef} className="relative h-screen flex items-end overflow-hidden">
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

      {/* Scrolling marquee */}
      <div ref={marqueeRef} className="relative z-10 w-full whitespace-nowrap">
        <h1
          className="animate-scroll-hero inline-block"
          style={{
            fontSize: 'clamp(8rem, 20vw, 16rem)',
            fontStyle: 'italic',
            fontWeight: 700,
            lineHeight: 1,
            color: 'white',
          }}
        >
          <span>{marqueeText}</span>
          <span className="ml-[0.3em]">·</span>
          <span className="ml-[0.3em]">{marqueeText}</span>
          <span className="ml-[0.3em]">·</span>
        </h1>
      </div>
    </section>
  )
}
