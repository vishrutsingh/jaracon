'use client'

import Link from 'next/link'
import { projects } from '@/content/projects'
import { useProjectHover } from '@/hooks/useProjectHover'
import { projectHover } from '@/lib/animations'
import ProjectRow from '@/components/ui/ProjectRow'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import LoopText from '@/components/ui/LoopText'
import FadeUp from '@/components/animations/FadeUp'

export default function ProjectsPreview() {
  const { imageRef, onMouseMove, onMouseEnter, onMouseLeave } = useProjectHover()

  return (
    <section className="section-padding bg-bg relative">
      <div className="container-site">
        <FadeUp>
          <EyebrowLabel text="selected projects" className="mb-6" />
        </FadeUp>

        <div className="relative">
          {/* Hover image */}
          <div
            ref={imageRef}
            className="hidden md:block pointer-events-none absolute right-0 z-40 opacity-0 bg-cover bg-center"
            style={{
              width: projectHover.imageSize.w,
              height: projectHover.imageSize.h,
              transform: 'translateX(100px)',
            }}
          />

          <FadeUp>
            <div className="border-t border-border">
              {projects.map((project, i) => (
                <ProjectRow
                  key={project.title}
                  project={project}
                  index={i}
                  onMouseMove={onMouseMove}
                  onMouseEnter={() => onMouseEnter(`/images/project-${i + 1}.jpg`)}
                  onMouseLeave={onMouseLeave}
                />
              ))}
            </div>
          </FadeUp>

          <FadeUp className="mt-8">
            <Link href="/projects" className="text-[0.9rem] text-dark inline-flex items-center gap-2">
              <LoopText label={`see more / projects (${projects.length}) \u2192`} />
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
