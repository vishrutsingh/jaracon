import Hero from '@/components/sections/Hero'
import AboutSnippet from '@/components/sections/AboutSnippet'
import ServicesGrid from '@/components/sections/ServicesGrid'
import StatsBar from '@/components/sections/StatsBar'
import ClientsSection from '@/components/sections/ClientsSection'
import ContactSection from '@/components/sections/ContactSection'
import StackCard from '@/components/animations/StackCard'

export default function Home() {
  return (
    <>
      <Hero />
      <StackCard index={1}><AboutSnippet /></StackCard>
      <StackCard index={2}><ServicesGrid /></StackCard>
      <StackCard index={3}>
        <div className="h-dvh flex flex-col">
          <StatsBar />
          <ClientsSection />
        </div>
      </StackCard>
      <StackCard index={4}><ContactSection /></StackCard>
    </>
  )
}
