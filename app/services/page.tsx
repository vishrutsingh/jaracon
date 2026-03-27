'use client'

import Link from 'next/link'
import { services, type ServiceCategory } from '@/content/services'
import { iconMap } from '@/components/ui/ServiceTile'
import { useGlassEffect } from '@/hooks/useGlassEffect'
import FadeUp from '@/components/animations/FadeUp'
import SplitLines from '@/components/animations/SplitLines'
import StackCard from '@/components/animations/StackCard'
import LoopText from '@/components/ui/LoopText'
import ContactSection from '@/components/sections/ContactSection'

// ─── Group services by category ───
const categoryOrder: ServiceCategory[] = ['structural', 'finishing', 'infrastructure', 'buildings', 'energy']
const categoryLabels: Record<ServiceCategory, string> = {
  structural: 'STRUCTURAL',
  finishing: 'FINISHING',
  infrastructure: 'INFRASTRUCTURE',
  buildings: 'BUILDINGS',
  energy: 'ENERGY',
}

function getServicesByCategory(cat: ServiceCategory) {
  return services.filter(s => s.category === cat)
}

// ─── Quotation CTA ───
function QuotationLink({ serviceId }: { serviceId: string }) {
  return (
    <Link href={`/contact?service=${serviceId}`} className="text-[0.8rem] text-mid inline-block mt-2">
      <LoopText label="request quotation →" />
    </Link>
  )
}

// ─── Opening Hero ───
function OpeningHero() {
  return (
    <section className="h-dvh flex flex-col justify-center items-center relative bg-surface">
      {/* Giant watermark number */}
      <FadeUp y={0} className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[clamp(10rem,30vw,20rem)] font-bold text-dark/[0.04] leading-none">15</span>
      </FadeUp>

      <div className="relative z-10 text-center">
        <SplitLines className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-[0.3em] text-dark mb-6">
          <span>S E R V I C E S</span>
        </SplitLines>
        <FadeUp delay={0.3}>
          <p className="text-sm text-mid max-w-[40ch] mx-auto">
            from excavation to handover — 15 specialized services across five disciplines
          </p>
        </FadeUp>

        {/* Scroll indicator */}
        <FadeUp delay={0.6}>
          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="w-px h-10 bg-dark/20 origin-top" style={{ animation: 'scroll-line 2s ease-in-out infinite' }} />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════
// CATEGORY 1: STRUCTURAL — "The Blueprint"
// Overlapping positioned elements with connecting lines
// ═══════════════════════════════════════════════════════
function StructuralSpread() {
  const items = getServicesByCategory('structural')
  const { handleMouseMove, handleMouseLeave } = useGlassEffect()

  return (
    <section className="h-dvh bg-bg flex flex-col justify-center overflow-hidden">
      <div className="container-site">
        <div className="flex items-baseline justify-between mb-6">
          <SplitLines className="text-heading text-dark">
            <span>STRUCTURAL</span>
          </SplitLines>
          <FadeUp delay={0.1}>
            <span className="text-xs text-muted">01 / 05</span>
          </FadeUp>
        </div>

        {/* Blueprint grid */}
        <div className="relative border border-dashed border-dark/10 p-5 md:p-6">
          {/* Service 01 — top left */}
          <FadeUp delay={0.05}>
            <div className="md:w-[55%] mb-6">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-[1.5rem] font-bold text-muted/20">01</span>
                <div className="flex-1 h-px bg-dark/10" />
                <ServiceName service={items[0]} />
              </div>
              <div className="md:pl-[calc(1.5rem+1rem)]">
                <p className="text-xs text-mid leading-relaxed mb-1">{items[0].description}</p>
                <QuotationLink serviceId={items[0].id} />
              </div>
            </div>
          </FadeUp>

          {/* Service 02 — floating glass card, offset right */}
          <FadeUp delay={0.1}>
            <div className="md:ml-auto md:w-[45%] mb-6">
              <div
                className="glass p-5"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-[1.25rem] font-bold text-muted/30">02</span>
                  <ServiceName service={items[1]} />
                </div>
                <p className="text-xs text-mid leading-relaxed">{items[1].description}</p>
                <QuotationLink serviceId={items[1].id} />
              </div>
            </div>
          </FadeUp>

          {/* Connecting line */}
          <div className="hidden md:block absolute left-[55%] top-[40%] w-px h-[20%] bg-dark/10" />

          {/* Service 03 — bottom left */}
          <FadeUp delay={0.15}>
            <div className="md:w-[60%]">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-[1.5rem] font-bold text-muted/20">03</span>
                <div className="flex-1 h-px bg-dark/10" />
                <ServiceName service={items[2]} />
              </div>
              <div className="md:pl-[calc(1.5rem+1rem)]">
                <p className="text-xs text-mid leading-relaxed">{items[2].description}</p>
                <QuotationLink serviceId={items[2].id} />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════
// CATEGORY 2: FINISHING — "The Specimen Sheet"
// 3×2 typographic grid with dark header band
// ═══════════════════════════════════════════════════════
function FinishingSpread() {
  const items = getServicesByCategory('finishing')
  const { handleMouseMove, handleMouseLeave } = useGlassEffect()

  return (
    <section className="h-dvh bg-dark flex flex-col pb-[var(--nav-height)]">
      {/* Dark header band */}
      <div className="shrink-0 py-3">
        <div className="container-site flex items-center justify-between">
          <SplitLines className="text-[clamp(1rem,2vw,1.5rem)] font-bold tracking-[0.4em] text-white">
            <span>F I N I S H I N G</span>
          </SplitLines>
          <FadeUp delay={0.2}>
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/40">02 / 05</span>
              <span className="text-xs text-white/40">·</span>
              <span className="text-xs text-white/40">{items.length} services</span>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Specimen grid */}
      <div className="container-site flex-1 min-h-0">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 h-full">
          {items.map((service, i) => {
            const Icon = iconMap[service.icon]
            const num = String(i + 1).padStart(2, '0')
            return (
              <FadeUp key={service.id} delay={0.1 + i * 0.08} className="h-full">
                <div
                  className="border-b border-r border-white/10 p-5 h-full flex flex-col justify-between"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-white/40">{num}</span>
                      {Icon && <Icon size={16} className="text-white/30" />}
                    </div>
                    <h3 className="text-title !text-white mb-2">{service.name}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">{service.description}</p>
                  </div>
                  <QuotationLink serviceId={service.id} />
                </div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════
// CATEGORY 3: INFRASTRUCTURE — "The Panorama"
// Two monolithic 50/50 glass blocks side by side
// ═══════════════════════════════════════════════════════
function InfrastructureSpread() {
  const items = getServicesByCategory('infrastructure')
  const { handleMouseMove, handleMouseLeave } = useGlassEffect()

  return (
    <section className="h-dvh bg-bg flex flex-col justify-center overflow-hidden">
      <div className="container-site">
        <div className="flex items-baseline justify-between mb-12">
          <SplitLines className="text-heading text-dark">
            <span>INFRASTRUCTURE</span>
          </SplitLines>
          <FadeUp delay={0.2}>
            <span className="text-xs text-muted">03 / 05</span>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {items.map((service, i) => {
            const Icon = iconMap[service.icon]
            const num = String(i + 1).padStart(2, '0')
            return (
              <FadeUp key={service.id} delay={0.15 + i * 0.15} className="h-full">
                <div
                  className="glass h-full p-10 md:p-12 flex flex-col justify-between"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    {Icon && <Icon size={20} className="text-dark/30 mb-8" />}
                    <h3 className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-bold tracking-[0.15em] text-dark mb-8">
                      {service.name.toUpperCase().split('').join(' ')}
                    </h3>
                    <p className="text-sm text-mid leading-relaxed max-w-[35ch]">{service.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <span className="text-[2.5rem] font-bold text-dark/10">{num}</span>
                    <QuotationLink serviceId={service.id} />
                  </div>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════
// CATEGORY 4: BUILDINGS — "The Fold"
// Top/bottom asymmetric with dramatic double-rule
// ═══════════════════════════════════════════════════════
function BuildingsSpread() {
  const items = getServicesByCategory('buildings')

  return (
    <section className="h-dvh bg-bg flex flex-col justify-center overflow-hidden">
      <div className="container-site">
        <div className="flex items-baseline justify-between mb-16">
          <SplitLines className="text-[clamp(1rem,2vw,1.5rem)] font-bold tracking-[0.3em] text-dark">
            <span>B U I L D I N G S</span>
          </SplitLines>
          <FadeUp delay={0.2}>
            <span className="text-xs text-muted">04 / 05</span>
          </FadeUp>
        </div>

        {/* Service 01 — left aligned */}
        <FadeUp delay={0.1}>
          <div className="mb-4">
            <span className="text-xs text-muted">01</span>
            <div className="w-full h-px bg-dark/10 my-4" />
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <SplitLines className="text-heading text-dark" delay={0.2}>
              <span>{items[0].name}</span>
            </SplitLines>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <FadeUp delay={0.3}>
              <p className="text-sm text-mid leading-relaxed">{items[0].description}</p>
              <QuotationLink serviceId={items[0].id} />
            </FadeUp>
          </div>
        </div>

        {/* The Fold — dramatic double rule */}
        <FadeUp delay={0.4}>
          <div className="my-16 md:my-24">
            <div className="h-px bg-dark/20" />
            <div className="h-2" />
            <div className="h-px bg-dark/20" />
          </div>
        </FadeUp>

        {/* Service 02 — right aligned */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-7 md:col-start-1 order-2 md:order-1">
            <FadeUp delay={0.5}>
              <p className="text-sm text-mid leading-relaxed">{items[1].description}</p>
              <QuotationLink serviceId={items[1].id} />
            </FadeUp>
          </div>
          <div className="md:col-span-4 md:col-start-9 order-1 md:order-2 md:text-right">
            <SplitLines className="text-heading text-dark" delay={0.45}>
              <span>{items[1].name}</span>
            </SplitLines>
            <FadeUp delay={0.55}>
              <span className="text-xs text-muted mt-2 block">02</span>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}

// ═══════════════════════════════════════════════════════
// CATEGORY 5: ENERGY — "The Blackout"
// Full dark section, broken-word typography
// ═══════════════════════════════════════════════════════
function EnergySpread() {
  const items = getServicesByCategory('energy')
  const { handleMouseMove, handleMouseLeave } = useGlassEffect()

  return (
    <section className="h-dvh bg-dark flex flex-col justify-center overflow-hidden">
      <div className="container-site">
        <div className="flex items-baseline justify-between mb-10">
          <SplitLines className="text-[clamp(1rem,2vw,1.5rem)] font-bold tracking-[0.4em] text-white">
            <span>E N E R G Y</span>
          </SplitLines>
          <FadeUp delay={0.2}>
            <span className="text-xs text-white/30">05 / 05</span>
          </FadeUp>
        </div>

        {/* Power Plants */}
        <FadeUp delay={0.15}>
          <div
            className="glass-dark p-6 md:p-10 mb-6"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <FadeUp delay={0.25}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-mid">⚡</span>
              </div>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
              <div className="md:col-span-4">
                <SplitLines className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white leading-tight" delay={0.3}>
                  <span>POWER</span>
                  <span>PLANTS</span>
                </SplitLines>
              </div>
              <div className="md:col-span-7 md:col-start-6">
                <FadeUp delay={0.4}>
                  <p className="text-xs text-white/60 leading-relaxed">{items[0].description}</p>
                  <Link href={`/contact?service=${items[0].id}`} className="text-[0.8rem] text-mid inline-block mt-4">
                    <LoopText label="request quotation →" />
                  </Link>
                </FadeUp>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Divider */}
        <FadeUp delay={0.45}>
          <div className="h-px bg-white/10 mb-6" />
        </FadeUp>

        {/* Substations */}
        <FadeUp delay={0.5}>
          <div
            className="glass-dark p-6 md:p-10"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
              <div className="md:col-span-7 md:col-start-1">
                <FadeUp delay={0.6}>
                  <p className="text-xs text-white/60 leading-relaxed">{items[1].description}</p>
                  <Link href={`/contact?service=${items[1].id}`} className="text-[0.8rem] text-mid inline-block mt-4">
                    <LoopText label="request quotation →" />
                  </Link>
                </FadeUp>
              </div>
              <div className="md:col-span-4 md:col-start-9 md:text-right">
                <FadeUp delay={0.55}>
                  <div className="flex items-center gap-3 md:justify-end mb-3">
                    <span className="text-mid">⚡</span>
                  </div>
                </FadeUp>
                <SplitLines className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white leading-tight" delay={0.6}>
                  <span>SUB-</span>
                  <span>STAT-</span>
                  <span>IONS</span>
                </SplitLines>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// ─── Closing CTA ───
function ClosingCTA() {
  return (
    <section className="h-dvh bg-bg flex flex-col justify-center overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <SplitLines className="text-heading">
              <span>ready to</span>
              <span>build?</span>
            </SplitLines>
          </div>
          <div className="md:text-right">
            <FadeUp delay={0.3}>
              <p className="text-sm text-mid mb-6 max-w-[35ch] md:ml-auto">
                let&apos;s schedule a meeting to discuss your requirements and explore how our services can bring your vision to life.
              </p>
            </FadeUp>
            <FadeUp delay={0.45}>
              <Link href="/contact" className="text-[0.9rem] text-dark">
                <LoopText label="get in touch →" />
              </Link>
            </FadeUp>
          </div>
        </div>
        <FadeUp delay={0.5}>
          <div className="h-px bg-dark/10 mt-20" />
        </FadeUp>
      </div>
    </section>
  )
}

// ─── Helper: Service name with icon ───
function ServiceName({ service }: { service: typeof services[0] }) {
  const Icon = iconMap[service.icon]
  return (
    <div className="flex items-center gap-3">
      {Icon && <Icon size={16} className="text-dark/30" />}
      <h3 className="text-title text-dark">{service.name}</h3>
    </div>
  )
}

// ═══════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════
export default function ServicesPage() {
  return (
    <>
      <StackCard index={1} className="bg-surface">
        <OpeningHero />
      </StackCard>
      <StackCard index={2}>
        <StructuralSpread />
      </StackCard>
      <StackCard index={3} className="bg-dark">
        <FinishingSpread />
      </StackCard>
      <StackCard index={4}>
        <InfrastructureSpread />
      </StackCard>
      <StackCard index={5}>
        <BuildingsSpread />
      </StackCard>
      <StackCard index={6} className="bg-dark">
        <EnergySpread />
      </StackCard>
      <StackCard index={7}>
        <ClosingCTA />
      </StackCard>
      <ContactSection />
    </>
  )
}
