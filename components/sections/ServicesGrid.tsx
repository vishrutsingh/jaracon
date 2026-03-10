'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { services } from '@/content/services'
import { useServicesGrid } from '@/hooks/useServicesGrid'
import { iconMap } from '@/components/ui/ServiceTile'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import LoopText from '@/components/ui/LoopText'
import FadeUp from '@/components/animations/FadeUp'
import { ArrowRight } from 'lucide-react'

export default function ServicesGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const { isFinePointer, setTileRef, handleTileHover, handleGridLeave, activeTiles } = useServicesGrid(gridRef)

  // ─── Mobile / touch: simple CSS grid ───
  if (!isFinePointer) {
    return (
      <section className="section-padding bg-bg">
        <div className="container-site">
          <FadeUp>
            <EyebrowLabel text="what we do" className="mb-6" />
          </FadeUp>
          <FadeUp stagger={0.06}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {services.map((service, i) => {
                const Icon = iconMap[service.icon]
                const num = String(i + 1).padStart(2, '0')
                return (
                  <div
                    key={service.id}
                    className="border border-border p-6 flex flex-col justify-between gap-6 min-h-[220px] hover:bg-surface transition-colors duration-200"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted">{num}</span>
                        {Icon && (
                          <div className="w-9 h-9 rounded-lg bg-orange/8 flex items-center justify-center">
                            <Icon size={18} className="text-orange" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-title">{service.name}</h3>
                      <p className="text-sm text-mid line-clamp-3">{service.description}</p>
                    </div>
                    <span className="text-xs text-muted">{service.category}</span>
                  </div>
                )
              })}
              <Link
                href="/contact"
                className="border border-border bg-bg p-6 flex flex-col justify-between gap-6 min-h-[220px] group hover:bg-surface transition-colors duration-200"
              >
                <span className="text-xs text-muted">get in touch</span>
                <div>
                  <h3 className="text-title mb-2">let&apos;s talk</h3>
                  <span className="text-sm text-orange">
                    <LoopText label="reach out &rarr;" />
                  </span>
                </div>
                <ArrowRight size={18} className="text-orange" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    )
  }

  // ─── Desktop: interactive GSAP grid ───
  return (
    <section className="h-dvh flex flex-col bg-bg overflow-hidden">
      <div className="container-site pt-12 pb-6">
        <FadeUp>
          <EyebrowLabel text="what we do" className="mb-4" />
          <h2 className="text-heading">our services</h2>
        </FadeUp>
      </div>

      <div
        ref={gridRef}
        className="flex-1 relative"
        onMouseLeave={handleGridLeave}
      >
        {/* 12 service tiles */}
        {services.map((service, i) => {
          const Icon = iconMap[service.icon]
          const num = String(i + 1).padStart(2, '0')
          const isActive = activeTiles.includes(i)
          return (
            <div
              key={service.id}
              ref={setTileRef(i)}
              className="absolute top-0 left-0 will-change-transform"
              style={{ zIndex: 1 }}
              onMouseEnter={() => handleTileHover(i)}
            >
              <div className="w-full h-full border border-border p-4 flex flex-col justify-between bg-bg hover:bg-surface transition-colors duration-200 overflow-hidden cursor-default select-none">
                <div className="flex flex-col gap-2 min-h-0 flex-1">
                  <div className="flex items-center justify-between shrink-0">
                    <span className="text-xs text-muted">{num}</span>
                    {Icon && (
                      <div className={`w-8 h-8 rounded-lg bg-dark/5 flex items-center justify-center transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                        <Icon size={16} className="text-mid" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-[1.15rem] font-semibold text-dark leading-tight shrink-0">
                    {service.name}
                  </h3>
                  <div
                    className={`flex-1 min-h-0 overflow-hidden transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                    style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}
                  >
                    <div className={isActive ? 'animate-scroll-desc' : ''}>
                      <p className="text-xs text-mid leading-relaxed py-1">{service.description}</p>
                      <p className="text-xs text-mid leading-relaxed py-1">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* CTA tile */}
        <div
          ref={setTileRef(15)}
          className="absolute top-0 left-0 will-change-transform"
          style={{ zIndex: 2 }}
          onMouseEnter={() => handleTileHover(15)}
        >
          <Link
            href="/contact"
            className="w-full h-full border border-border bg-bg p-5 flex flex-col justify-between group block hover:bg-surface transition-colors duration-200"
          >
            <span className="text-xs text-muted">explore</span>
            <div>
              <h3 className="text-title mb-2">view details</h3>
              <span className="text-[0.8rem] text-orange">
                <LoopText label="learn more &rarr;" />
              </span>
            </div>
            <ArrowRight
              size={18}
              className="text-orange group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
