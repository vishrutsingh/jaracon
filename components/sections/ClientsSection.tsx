'use client'

import { Handshake } from 'lucide-react'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import ClientMarquee from '@/components/ui/ClientMarquee'
import FadeUp from '@/components/animations/FadeUp'

export default function ClientsSection() {
  return (
    <section className="section-padding flex-1 overflow-hidden bg-bg">
      <div className="container-site mb-12">
        <FadeUp>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-mid/8 flex items-center justify-center">
              <Handshake size={16} className="text-mid" />
            </div>
            <EyebrowLabel text="trusted by" />
          </div>
        </FadeUp>
      </div>
      <ClientMarquee />
    </section>
  )
}
