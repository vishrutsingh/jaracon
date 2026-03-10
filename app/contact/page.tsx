import InteriorHero from '@/components/sections/InteriorHero'
import ContactSection from '@/components/sections/ContactSection'
import StackCard from '@/components/animations/StackCard'

export default function ContactPage() {
  return (
    <>
      <InteriorHero
        eyebrow="get in touch"
        lines={["Let's talk."]}
      />
      <StackCard index={1}><ContactSection /></StackCard>
    </>
  )
}
