'use client'

import Link from 'next/link'
import { companyInfo } from '@/content/about'
import FadeUp from '@/components/animations/FadeUp'
import EyebrowLabel from '@/components/ui/EyebrowLabel'

export default function AboutSnippet() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <FadeUp className="md:col-span-5">
            <EyebrowLabel text="short intro" className="mb-4" />
            <h2 className="text-heading">
              Trust, innovation,<br />and quality.
            </h2>
          </FadeUp>

          {/* Floating photo */}
          <FadeUp className="md:col-span-3" delay={0.1}>
            <div
              className="w-[120%] aspect-[3/4] bg-surface -mt-8 -ml-4 bg-cover bg-center"
              style={{ backgroundImage: `url('/images/founder.jpg')` }}
            />
          </FadeUp>

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
