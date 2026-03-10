'use client'

import type { Service } from '@/content/services'
import {
  ShieldCheck, Droplets, Columns3, Box, Layers,
  Grid2x2, PanelTop, Route, Home, Building2, Zap, Cable,
} from 'lucide-react'

export const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'shield-check': ShieldCheck,
  'droplets': Droplets,
  'columns-3': Columns3,
  'box': Box,
  'layers': Layers,
  'grid-2x2': Grid2x2,
  'panel-top': PanelTop,
  'route': Route,
  'home': Home,
  'building-2': Building2,
  'zap': Zap,
  'cable': Cable,
}

interface ServiceTileProps {
  service: Service
  index: number
}

export default function ServiceTile({ service, index }: ServiceTileProps) {
  const num = String(index + 1).padStart(2, '0')
  const Icon = iconMap[service.icon]

  return (
    <div className="group shrink-0 w-[300px] min-w-[300px] border border-border p-6 flex flex-col justify-between gap-6 min-h-[280px] transition-colors duration-200 hover:bg-surface">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted">{num}</span>
          {Icon && (
            <div className="w-9 h-9 rounded-lg bg-orange/8 flex items-center justify-center">
              <Icon size={18} className="text-orange" />
            </div>
          )}
        </div>
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
