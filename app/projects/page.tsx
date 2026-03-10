import InteriorHero from '@/components/sections/InteriorHero'
import ProjectsPreview from '@/components/sections/ProjectsPreview'
import ContactSection from '@/components/sections/ContactSection'
import StackCard from '@/components/animations/StackCard'

export default function ProjectsPage() {
  return (
    <>
      <InteriorHero
        eyebrow="our work"
        lines={['Landmark', 'projects.']}
      />
      <StackCard index={1}><ProjectsPreview /></StackCard>
      <StackCard index={2}><ContactSection /></StackCard>
    </>
  )
}
