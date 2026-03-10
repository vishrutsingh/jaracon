'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LoopText from '@/components/ui/LoopText'

const links = [
  { href: '/about', label: 'about' },
  { href: '/services', label: 'services' },
  { href: '/projects', label: 'projects' },
]

/** Parse "rgb(r, g, b)" or "rgba(r, g, b, a)" into {r, g, b} */
function parseRGB(color: string): { r: number; g: number; b: number } | null {
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (!match) return null
  return { r: Number(match[1]), g: Number(match[2]), b: Number(match[3]) }
}

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const rafRef = useRef<number>(0)

  const checkBackground = useCallback(() => {
    const nav = navRef.current
    if (!nav) return

    // Sample point at the center of the navbar
    const x = window.innerWidth / 2
    const y = nav.offsetHeight / 2

    // Get all elements stacked at this point
    const elements = document.elementsFromPoint(x, y)

    for (const el of elements) {
      // Skip the navbar and its children
      if (nav.contains(el)) continue
      // Skip the film grain overlay (body::after is not an element, but skip body too initially)
      if (el === document.documentElement) continue

      const bg = getComputedStyle(el).backgroundColor
      if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
        const rgb = parseRGB(bg)
        if (rgb) {
          // Relative luminance: dark bg → white text
          const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255
          setIsDark(luminance < 0.5)
          return
        }
      }
    }

    // Fallback: check body background
    const bodyBg = getComputedStyle(document.body).backgroundColor
    const rgb = parseRGB(bodyBg)
    if (rgb) {
      const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255
      setIsDark(luminance < 0.5)
    } else {
      setIsDark(false)
    }
  }, [])

  useEffect(() => {
    // Check on scroll
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(checkBackground)
    }

    // Initial check
    checkBackground()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [checkBackground])

  // Re-check when route changes
  useEffect(() => {
    // Small delay for page transition to complete
    const timer = setTimeout(checkBackground, 100)
    return () => clearTimeout(timer)
  }, [pathname, checkBackground])

  const textColor = isDark ? 'text-white' : 'text-dark'
  const barColor = isDark ? 'bg-white' : 'bg-dark'

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
