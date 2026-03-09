'use client'

import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ClientMarquee from '@/components/ui/ClientMarquee'
import FadeUp from '@/components/animations/FadeUp'

export default function ClientsSection() {
  return (
    <section className="section-padding bg-bg overflow-hidden">
      <div className="container-site mb-12">
        <FadeUp>
          <EyebrowLabel text="trusted by" className="mb-6" />
        </FadeUp>
      </div>
      <ClientMarquee />
    </section>
  )
}
