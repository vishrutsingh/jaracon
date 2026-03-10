import ProjectsPreview from '@/components/sections/ProjectsPreview'
import ContactSection from '@/components/sections/ContactSection'

export default function ProjectsPage() {
  return (
    <>
      <div className="pt-[var(--nav-height)]">
        <ProjectsPreview />
      </div>
      <ContactSection />
    </>
  )
}
