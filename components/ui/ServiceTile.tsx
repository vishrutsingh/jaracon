'use client'

import type { Service } from '@/content/services'

interface ServiceTileProps {
  service: Service
  index: number
}

export default function ServiceTile({ service, index }: ServiceTileProps) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <div className="group shrink-0 w-[300px] min-w-[300px] border border-border p-6 flex flex-col justify-between gap-6 min-h-[280px] transition-colors duration-200 hover:bg-surface">
      <div className="flex flex-col gap-4">
        <span className="text-xs text-muted">{num}</span>
        <h3 className="text-title group-hover:text-orange transition-colors">
          {service.name}
        </h3>
        <p className="text-sm text-mid line-clamp-3">
          {service.description}
        </p>
      </div>
      <span className="text-xs text-muted">{service.category}</span>
    </div>
  )
}
