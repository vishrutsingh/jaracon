import ServicesPreview from '@/components/sections/ServicesPreview'
import ContactSection from '@/components/sections/ContactSection'

export default function ServicesPage() {
  return (
    <>
      {/* Interior hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 bg-bg overflow-hidden">
        <div className="container-site relative z-10 w-full">
          <p className="text-eyebrow mb-6">our expertise</p>
          <h1 className="text-hero">
            Complete construction<br />solutions.
          </h1>
        </div>
        <div className="absolute bottom-8 left-[var(--container-padding)] flex flex-col items-center gap-2">
          <span className="text-xs text-muted [writing-mode:vertical-lr] rotate-180">scroll to explore</span>
          <span className="text-muted text-lg" style={{ animation: 'bounce-arrow 1.5s ease-in-out infinite' }}>&darr;</span>
        </div>
      </section>

      <ServicesPreview />
      <ContactSection />
    </>
  )
}
