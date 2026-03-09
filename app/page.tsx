import Hero from '@/components/sections/Hero'
import ProjectsPreview from '@/components/sections/ProjectsPreview'
import AboutSnippet from '@/components/sections/AboutSnippet'
import ServicesPreview from '@/components/sections/ServicesPreview'
import StatsBar from '@/components/sections/StatsBar'
import ClientsSection from '@/components/sections/ClientsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsPreview />
      <AboutSnippet />
      <ServicesPreview />
      <StatsBar />
      <ClientsSection />
      <ContactSection />
    </>
  )
}
