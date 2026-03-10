'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { scrollReveal } from '@/lib/animations'
import { companyInfo } from '@/content/about'
import { Shield, Lightbulb, Heart, Award } from 'lucide-react'
import SplitLines from '@/components/animations/SplitLines'
import FadeUp from '@/components/animations/FadeUp'
import EyebrowLabel from '@/components/ui/EyebrowLabel'

const valueIcons = [Shield, Heart, Award, Lightbulb]

export default function AboutSnippet() {
  const photoRef = useRef<HTMLDivElement>(null)
  const photoInnerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!photoInnerRef.current) return

    gsap.from(photoInnerRef.current, {
      scale: 1.15,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: photoRef.current,
        start: scrollReveal.triggerStart,
        once: true,
      },
    })
  }, { scope: photoRef })

  return (
    <section className="section-padding bg-bg min-h-dvh flex items-center">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <FadeUp>
              <EyebrowLabel text="short intro" className="mb-4" />
            </FadeUp>
            <SplitLines className="text-heading">
              <span>Trust, innovation,</span>
              <span>and quality.</span>
            </SplitLines>

            {/* Values with icons */}
            <FadeUp className="mt-10">
              <div className="grid grid-cols-2 gap-4">
                {companyInfo.values.map((value, i) => {
                  const Icon = valueIcons[i] ?? valueIcons[0]
                  return (
                    <div key={value} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange/8 flex items-center justify-center shrink-0">
                        <Icon size={15} className="text-orange" />
                      </div>
                      <span className="text-sm text-mid">{value}</span>
                    </div>
                  )
                })}
              </div>
            </FadeUp>
          </div>

          {/* Floating photo — cinematic zoom-settle */}
          <div ref={photoRef} className="md:col-span-3 overflow-hidden">
            <div
              ref={photoInnerRef}
              className="w-[120%] aspect-[3/4] bg-surface -mt-8 -ml-4 bg-cover bg-center"
              style={{ backgroundImage: `url('/images/founder.jpg')` }}
            />
          </div>

          <FadeUp className="md:col-span-4" delay={0.15}>
            <p className="text-body text-mid">{companyInfo.about.slice(0, 280)}...</p>
            <div className="border-t border-border pt-6 mt-6">
              <span className="text-xs text-muted block mb-4">{companyInfo.founder}, founder</span>
              <Link href="/about" className="text-[0.9rem] text-dark">
                We&apos;d love to work with you. &rarr;
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
