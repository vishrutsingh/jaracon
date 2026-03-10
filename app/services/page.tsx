import InteriorHero from '@/components/sections/InteriorHero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ContactSection from '@/components/sections/ContactSection'
import StackCard from '@/components/animations/StackCard'

export default function ServicesPage() {
  return (
    <>
      <InteriorHero
        eyebrow="our expertise"
        lines={['Complete construction', 'solutions.']}
      />
      <StackCard index={1}><ServicesGrid /></StackCard>
      <StackCard index={2}><ContactSection /></StackCard>
    </>
  )
}
