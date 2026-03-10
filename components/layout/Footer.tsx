import Link from 'next/link'
import { contactInfo } from '@/content/contact'
import { Mail, MapPin } from 'lucide-react'

const footerLinks = [
  { href: '/about', label: 'about' },
  { href: '/services', label: 'services' },
  { href: '/projects', label: 'projects' },
  { href: '/contact', label: 'contact' },
]

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border">
      <div className="container-site py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div>
            <span className="text-dark font-bold text-[1.1rem]">JARACON</span>
            <p className="text-sm text-mid mt-2 max-w-[40ch]">
              End-to-end construction solutions from Qatar.
            </p>
          </div>
          <div className="flex gap-8">
            {footerLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-mid hover:text-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6 border-t border-border">
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-muted" />
            <span className="text-xs text-muted">
              &copy; {new Date().getFullYear()} JARACON EPC PROJECTS. Doha, Qatar.
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <a href={`mailto:${contactInfo.email}`} className="text-xs text-mid hover:text-dark transition-colors flex items-center gap-1.5">
              <Mail size={12} />
              {contactInfo.email}
            </a>
            <span className="text-xs text-muted">Privacy Policy</span>
            <span className="text-xs text-muted">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
