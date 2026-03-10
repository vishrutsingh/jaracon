'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/content/projects'

interface ProjectRowProps {
  project: Project
  index: number
  onMouseMove?: (e: React.MouseEvent) => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function ProjectRow({ project, index, onMouseMove, onMouseEnter, onMouseLeave }: ProjectRowProps) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <div
      className="group border-b border-border py-8 transition-colors duration-200 hover:bg-surface cursor-pointer"
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link href="/projects" className="block">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-6 flex-1 min-w-0">
            <span className="text-xs text-muted group-hover:text-dark transition-colors shrink-0 pt-1">
              {num}
            </span>
            <div className="min-w-0">
              <h3 className="text-title group-hover:text-mid transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-sm text-mid">{project.location}</span>
                <span
                  className={`text-xs px-2 py-0.5 border rounded-full ${
                    project.status === 'ongoing'
                      ? 'border-mid/40 text-mid'
                      : 'border-border text-muted'
                  }`}
                >
                  {project.status}
                </span>
                <span className="text-xs text-muted">{project.client}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-xs text-muted">{project.year}</span>
            <ArrowRight
              size={16}
              className="text-dark opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200"
            />
          </div>
        </div>
      </Link>
    </div>
  )
}
