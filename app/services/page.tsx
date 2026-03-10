import ServicesGrid from '@/components/sections/ServicesGrid'
import ContactSection from '@/components/sections/ContactSection'

export default function ServicesPage() {
  return (
    <>
      <div className="pt-[var(--nav-height)]">
        <ServicesGrid />
      </div>
      <ContactSection />
    </>
  )
}
