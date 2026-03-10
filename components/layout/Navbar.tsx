'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import LoopText from '@/components/ui/LoopText'

const links = [
  { href: '/about', label: 'about' },
  { href: '/services', label: 'services' },
  { href: '/projects', label: 'projects' },
  { href: '/contact', label: 'contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = pathname === '/'
  const [isHero, setIsHero] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (!isHome) {
      setIsHero(false)
      return
    }

    const hero = document.querySelector('section')
    if (!hero) return

    setIsHero(true)
    ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      onLeave: () => setIsHero(false),
      onEnterBack: () => setIsHero(true),
    })
  }, { scope: navRef, dependencies: [isHome] })

  const textColor = isHero ? 'text-white' : 'text-dark'
  const barColor = isHero ? 'bg-white' : 'bg-dark'

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-[999] h-[var(--nav-height)] transition-colors duration-300">
        <div className="container-site h-full flex items-center justify-between">
          <Link href="/" className={`${textColor} font-bold text-[1.1rem] tracking-tight transition-colors duration-300`}>
            JARACON
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.9rem] transition-all duration-300 ${
                  pathname === link.href
                    ? `${textColor} font-medium`
                    : `${textColor} hover:opacity-60`
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className={`text-[0.9rem] ${textColor} transition-colors duration-300`}>
              <LoopText label="reach out &rarr;" />
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className={`w-6 h-[1.5px] ${barColor} transition-colors duration-300`} />
            <span className={`w-6 h-[1.5px] ${barColor} transition-colors duration-300`} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[1000] bg-bg flex flex-col">
          <div className="container-site h-[var(--nav-height)] flex items-center justify-between">
            <Link href="/" className="text-dark font-bold text-[1.1rem]" onClick={() => setMenuOpen(false)}>
              JARACON
            </Link>
            <button
              className="text-dark text-2xl p-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <div className="container-site flex flex-col gap-8 pt-12">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-4"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-muted text-lg">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[2.5rem] font-semibold text-dark">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
