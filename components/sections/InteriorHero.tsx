'use client'

import EyebrowLabel from '@/components/ui/EyebrowLabel'
import SplitLines from '@/components/animations/SplitLines'
import FadeUp from '@/components/animations/FadeUp'

interface InteriorHeroProps {
  eyebrow: string
  lines: string[]
}

export default function InteriorHero({ eyebrow, lines }: InteriorHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-end pb-20 bg-bg overflow-hidden pt-[var(--nav-height)]">
      <div className="container-site relative z-10 w-full">
        <FadeUp>
          <EyebrowLabel text={eyebrow} className="mb-6" />
        </FadeUp>
        <SplitLines className="text-hero" scroll={false}>
          {lines.map(line => (
            <span key={line}>{line}</span>
          ))}
        </SplitLines>
      </div>

      {/* Scroll indicator — animated line */}
      <div className="absolute bottom-8 left-[var(--container-padding)] flex flex-col items-center gap-3">
        <span className="text-xs text-muted [writing-mode:vertical-lr] rotate-180">scroll</span>
        <span
          className="w-px h-8 bg-dark/20 block origin-top"
          style={{ animation: 'scroll-line 2s ease-in-out infinite' }}
        />
      </div>
    </section>
  )
}
