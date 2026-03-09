import { companyInfo } from '@/content/about'
import FadeUp from '@/components/animations/FadeUp'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactSection from '@/components/sections/ContactSection'

export default function AboutPage() {
  return (
    <>
      {/* Interior hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 bg-bg overflow-hidden">
        <div className="container-site relative z-10 w-full">
          <p className="text-eyebrow mb-6">about us</p>
          <h1 className="text-hero">
            Who we are.
          </h1>
        </div>
        <div className="absolute bottom-8 left-[var(--container-padding)] flex flex-col items-center gap-2">
          <span className="text-xs text-muted [writing-mode:vertical-lr] rotate-180">scroll to explore</span>
          <span className="text-muted text-lg" style={{ animation: 'bounce-arrow 1.5s ease-in-out infinite' }}>&darr;</span>
        </div>
      </section>

      {/* About content */}
      <section className="section-padding bg-bg">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeUp>
              <EyebrowLabel text="our story" className="mb-6" />
              <h2 className="text-heading mb-8">
                Trust, innovation,<br />and quality.
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="text-body text-mid">{companyInfo.about}</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-surface">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeUp>
              <EyebrowLabel text="our mission" className="mb-4" />
              <h3 className="text-title mb-6">Mission</h3>
              <p className="text-body text-mid">{companyInfo.mission}</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <EyebrowLabel text="our vision" className="mb-4" />
              <h3 className="text-title mb-6">Vision</h3>
              <p className="text-body text-mid">{companyInfo.vision}</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Core Values & Principles */}
      <section className="section-padding bg-bg">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeUp>
              <EyebrowLabel text="core values" className="mb-6" />
              <div className="flex flex-col gap-6">
                {companyInfo.values.map((value, i) => (
                  <div key={value} className="flex items-center gap-4 border-b border-border pb-4">
                    <span className="text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-title">{value}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <EyebrowLabel text="our principles" className="mb-6" />
              <div className="flex flex-col gap-6">
                {companyInfo.principles.map((principle, i) => (
                  <div key={principle} className="flex items-center gap-4 border-b border-border pb-4">
                    <span className="text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-title">{principle}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-bg border-t border-border">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <FadeUp className="md:col-span-4 relative">
              <div
                className="w-[130%] aspect-[3/4] bg-surface -ml-8 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/founder.jpg')` }}
              />
            </FadeUp>
            <FadeUp className="md:col-span-6 md:col-start-6" delay={0.15}>
              <EyebrowLabel text="leadership" className="mb-4" />
              <h3 className="text-heading mb-6">Ankit Jhajhria</h3>
              <span className="text-xs text-orange block mb-6">founder</span>
              <p className="text-body text-mid">
                Under the visionary leadership of our founder, JARACON EPC PROJECTS
                has quickly positioned itself as a reliable partner in the construction sector,
                combining advanced technology, skilled expertise, and sustainable practices
                to deliver excellence from excavation to handover.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
