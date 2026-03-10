import { companyInfo } from '@/content/about'
import InteriorHero from '@/components/sections/InteriorHero'
import FadeUp from '@/components/animations/FadeUp'
import SplitLines from '@/components/animations/SplitLines'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ContactSection from '@/components/sections/ContactSection'
import StackCard from '@/components/animations/StackCard'
import {
  Shield, Heart, Award, Lightbulb,
  Target, Eye,
  Scale, BrainCircuit, ShieldAlert, HeartHandshake,
} from 'lucide-react'

const valueIcons = [Shield, Heart, Award, Lightbulb]
const principleIcons = [Scale, BrainCircuit, ShieldAlert, HeartHandshake]

export default function AboutPage() {
  return (
    <>
      <InteriorHero
        eyebrow="about us"
        lines={['Who we are.']}
      />

      {/* About content */}
      <StackCard index={1}>
        <section className="section-padding bg-bg">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <FadeUp>
                  <EyebrowLabel text="our story" className="mb-6" />
                </FadeUp>
                <SplitLines className="text-heading mb-8">
                  <span>Trust, innovation,</span>
                  <span>and quality.</span>
                </SplitLines>
              </div>
              <FadeUp delay={0.15}>
                <p className="text-body text-mid">{companyInfo.about}</p>
              </FadeUp>
            </div>
          </div>
        </section>
      </StackCard>

      {/* Mission & Vision */}
      <StackCard index={2}>
        <section className="section-padding bg-bg">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <FadeUp>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-orange/8 flex items-center justify-center">
                    <Target size={18} className="text-orange" />
                  </div>
                  <EyebrowLabel text="our mission" />
                </div>
                <p className="text-body text-mid">{companyInfo.mission}</p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-orange/8 flex items-center justify-center">
                    <Eye size={18} className="text-orange" />
                  </div>
                  <EyebrowLabel text="our vision" />
                </div>
                <p className="text-body text-mid">{companyInfo.vision}</p>
              </FadeUp>
            </div>
          </div>
        </section>
      </StackCard>

      {/* Core Values & Principles */}
      <StackCard index={3}>
        <section className="section-padding bg-bg">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <FadeUp>
                  <EyebrowLabel text="core values" className="mb-6" />
                </FadeUp>
                <FadeUp stagger={0.08}>
                  <div className="flex flex-col gap-6">
                    {companyInfo.values.map((value, i) => {
                      const Icon = valueIcons[i] ?? valueIcons[0]
                      return (
                        <div key={value} className="flex items-center gap-4 border-b border-border pb-4">
                          <div className="w-8 h-8 rounded-lg bg-orange/8 flex items-center justify-center shrink-0">
                            <Icon size={15} className="text-orange" />
                          </div>
                          <span className="text-title">{value}</span>
                        </div>
                      )
                    })}
                  </div>
                </FadeUp>
              </div>
              <div>
                <FadeUp>
                  <EyebrowLabel text="our principles" className="mb-6" />
                </FadeUp>
                <FadeUp stagger={0.08} delay={0.1}>
                  <div className="flex flex-col gap-6">
                    {companyInfo.principles.map((principle, i) => {
                      const Icon = principleIcons[i] ?? principleIcons[0]
                      return (
                        <div key={principle} className="flex items-center gap-4 border-b border-border pb-4">
                          <div className="w-8 h-8 rounded-lg bg-orange/8 flex items-center justify-center shrink-0">
                            <Icon size={15} className="text-orange" />
                          </div>
                          <span className="text-title">{principle}</span>
                        </div>
                      )
                    })}
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>
      </StackCard>

      {/* Founder */}
      <StackCard index={4}>
        <section className="section-padding bg-bg">
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
                <SplitLines className="text-heading mb-6">
                  <span>Ankit Jhajhria</span>
                </SplitLines>
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
      </StackCard>

      <StackCard index={5}><ContactSection /></StackCard>
    </>
  )
}
