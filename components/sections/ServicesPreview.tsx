'use client'

import { useState } from 'react'
import { services, type ServiceCategory } from '@/content/services'
import ServiceTile from '@/components/ui/ServiceTile'
import TagPill from '@/components/ui/TagPill'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import FadeUp from '@/components/animations/FadeUp'

const categories: { label: string; value: ServiceCategory | 'all' }[] = [
  { label: 'all', value: 'all' },
  { label: 'structural', value: 'structural' },
  { label: 'finishing', value: 'finishing' },
  { label: 'infrastructure', value: 'infrastructure' },
  { label: 'buildings', value: 'buildings' },
  { label: 'energy', value: 'energy' },
]

export default function ServicesPreview() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all')

  const isAll = activeCategory === 'all'
  const filtered = isAll
    ? services
    : services.filter(s => s.category === activeCategory)

  return (
    <section className="section-padding bg-bg">
      <div className="container-site">
        <FadeUp>
          <EyebrowLabel text="what we do" className="mb-6" />
        </FadeUp>

        <FadeUp className="mb-10">
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <TagPill
                key={cat.value}
                label={`${cat.label} (${cat.value === 'all' ? services.length : services.filter(s => s.category === cat.value).length})`}
                active={activeCategory === cat.value}
                onClick={() => setActiveCategory(cat.value)}
              />
            ))}
          </div>
        </FadeUp>
      </div>

      <FadeUp>
        <div className="overflow-hidden">
          <div
            className={`flex gap-4 w-max ${isAll ? 'animate-scroll-x hover:[animation-play-state:paused]' : ''}`}
            style={{ paddingLeft: 'var(--container-padding)', paddingRight: 'var(--container-padding)' }}
          >
            {filtered.map((service, i) => (
              <ServiceTile key={service.id} service={service} index={i} />
            ))}
            {isAll && filtered.map((service, i) => (
              <ServiceTile key={`dup-${service.id}`} service={service} index={i} />
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
