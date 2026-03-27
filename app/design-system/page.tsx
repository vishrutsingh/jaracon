'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

/* ── Brand combo data ── */
type Combo = {
  id: number
  name: string
  displayFont: string
  bodyFont: string
  displayName: string
  bodyName: string
  displayWeights: { weight: number; label: string; italic?: boolean }[]
  bodyWeights: { weight: number; label: string }[]
  colors: {
    bg: string
    surface: string
    dark: string
    mid: string
    muted: string
    accent: string
    accentName: string
  }
}

const combos: Combo[] = [
  {
    id: 1,
    name: 'Warm Editorial',
    displayFont: 'var(--font-playfair), Georgia, serif',
    bodyFont: 'var(--font-dm-sans), "DM Sans", sans-serif',
    displayName: 'Playfair Display',
    bodyName: 'DM Sans',
    displayWeights: [
      { weight: 400, label: 'Regular' },
      { weight: 700, label: 'Bold' },
      { weight: 700, label: 'Bold Italic', italic: true },
    ],
    bodyWeights: [
      { weight: 400, label: 'Regular' },
      { weight: 500, label: 'Medium' },
      { weight: 600, label: 'SemiBold' },
      { weight: 700, label: 'Bold' },
    ],
    colors: {
      bg: '#F2F0EC',
      surface: '#D4C4B0',
      dark: '#1A1714',
      mid: '#3D3730',
      muted: '#8A857D',
      accent: '#A8875A',
      accentName: 'bronze',
    },
  },
  {
    id: 2,
    name: 'Desert Modern',
    displayFont: 'var(--font-cormorant), Georgia, serif',
    bodyFont: 'var(--font-outfit), "Outfit", sans-serif',
    displayName: 'Cormorant Garamond',
    bodyName: 'Outfit',
    displayWeights: [
      { weight: 400, label: 'Regular' },
      { weight: 600, label: 'SemiBold' },
      { weight: 700, label: 'Bold' },
      { weight: 700, label: 'Bold Italic', italic: true },
    ],
    bodyWeights: [
      { weight: 400, label: 'Regular' },
      { weight: 500, label: 'Medium' },
      { weight: 600, label: 'SemiBold' },
    ],
    colors: {
      bg: '#F0EBE3',
      surface: '#C9B99A',
      dark: '#2C2418',
      mid: '#4A4537',
      muted: '#9C957E',
      accent: '#B86B4A',
      accentName: 'terracotta',
    },
  },
  {
    id: 3,
    name: 'Classic Refined',
    displayFont: 'var(--font-eb-garamond), Georgia, serif',
    bodyFont: 'var(--font-inter), "Inter", sans-serif',
    displayName: 'EB Garamond',
    bodyName: 'Inter',
    displayWeights: [
      { weight: 400, label: 'Regular' },
      { weight: 700, label: 'Bold' },
      { weight: 700, label: 'Bold Italic', italic: true },
    ],
    bodyWeights: [
      { weight: 400, label: 'Regular' },
      { weight: 500, label: 'Medium' },
      { weight: 600, label: 'SemiBold' },
    ],
    colors: {
      bg: '#F4F2EE',
      surface: '#CFC7BA',
      dark: '#1C1917',
      mid: '#44403C',
      muted: '#8C8680',
      accent: '#7C6E58',
      accentName: 'dark khaki',
    },
  },
  {
    id: 4,
    name: 'Monochrome Authority',
    displayFont: 'var(--font-syne), "Syne", sans-serif',
    bodyFont: 'var(--font-ibm-plex), "IBM Plex Sans", sans-serif',
    displayName: 'Syne',
    bodyName: 'IBM Plex Sans',
    displayWeights: [
      { weight: 700, label: 'Bold' },
      { weight: 800, label: 'ExtraBold' },
    ],
    bodyWeights: [
      { weight: 400, label: 'Regular' },
      { weight: 500, label: 'Medium' },
      { weight: 600, label: 'SemiBold' },
    ],
    colors: {
      bg: '#F1F1EF',
      surface: '#D0CCC5',
      dark: '#121212',
      mid: '#3B3B3B',
      muted: '#888888',
      accent: '#5C5C5C',
      accentName: 'monochrome',
    },
  },
  {
    id: 5,
    name: 'Midnight Prestige',
    displayFont: 'var(--font-fraunces), Georgia, serif',
    bodyFont: 'var(--font-manrope), "Manrope", sans-serif',
    displayName: 'Fraunces',
    bodyName: 'Manrope',
    displayWeights: [
      { weight: 700, label: 'Bold' },
      { weight: 700, label: 'Bold Italic', italic: true },
    ],
    bodyWeights: [
      { weight: 400, label: 'Regular' },
      { weight: 500, label: 'Medium' },
      { weight: 600, label: 'SemiBold' },
      { weight: 700, label: 'Bold' },
    ],
    colors: {
      bg: '#EDE9E3',
      surface: '#C5B694',
      dark: '#141820',
      mid: '#2E3340',
      muted: '#7D8491',
      accent: '#1E2D4D',
      accentName: 'deep navy',
    },
  },
  {
    id: 6,
    name: 'Technical Warmth',
    displayFont: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
    bodyFont: 'var(--font-dm-sans), "DM Sans", sans-serif',
    displayName: 'Space Grotesk',
    bodyName: 'DM Sans',
    displayWeights: [
      { weight: 500, label: 'Medium' },
      { weight: 700, label: 'Bold' },
    ],
    bodyWeights: [
      { weight: 400, label: 'Regular' },
      { weight: 500, label: 'Medium' },
      { weight: 600, label: 'SemiBold' },
      { weight: 700, label: 'Bold' },
    ],
    colors: {
      bg: '#F3F2F0',
      surface: '#D1CCC4',
      dark: '#151413',
      mid: '#3A3835',
      muted: '#87847F',
      accent: '#8B6D4B',
      accentName: 'warm umber',
    },
  },
  {
    id: 7,
    name: 'Haute Construct',
    displayFont: 'var(--font-bodoni-moda), "Bodoni Moda", serif',
    bodyFont: 'var(--font-libre-franklin), "Libre Franklin", sans-serif',
    displayName: 'Bodoni Moda',
    bodyName: 'Libre Franklin',
    displayWeights: [
      { weight: 400, label: 'Regular' },
      { weight: 700, label: 'Bold' },
      { weight: 700, label: 'Bold Italic', italic: true },
    ],
    bodyWeights: [
      { weight: 400, label: 'Regular' },
      { weight: 500, label: 'Medium' },
      { weight: 600, label: 'SemiBold' },
      { weight: 700, label: 'Bold' },
    ],
    colors: {
      bg: '#F5F0E8',
      surface: '#D8C9B5',
      dark: '#1B1510',
      mid: '#3E352B',
      muted: '#918578',
      accent: '#9B5E3C',
      accentName: 'burnt sienna',
    },
  },
  {
    id: 8,
    name: 'Studio Contemporary',
    displayFont: 'var(--font-instrument-serif), "Instrument Serif", serif',
    bodyFont: 'var(--font-geist), "Geist", sans-serif',
    displayName: 'Instrument Serif',
    bodyName: 'Geist',
    displayWeights: [
      { weight: 400, label: 'Regular' },
      { weight: 400, label: 'Italic', italic: true },
    ],
    bodyWeights: [
      { weight: 400, label: 'Regular' },
      { weight: 500, label: 'Medium' },
      { weight: 600, label: 'SemiBold' },
      { weight: 700, label: 'Bold' },
    ],
    colors: {
      bg: '#EEECEA',
      surface: '#C8C3BB',
      dark: '#18171A',
      mid: '#36353A',
      muted: '#807E84',
      accent: '#6B5B8D',
      accentName: 'muted plum',
    },
  },
  {
    id: 9,
    name: 'Heritage Craft',
    displayFont: 'var(--font-libre-caslon), "Libre Caslon Display", serif',
    bodyFont: 'var(--font-karla), "Karla", sans-serif',
    displayName: 'Libre Caslon Display',
    bodyName: 'Karla',
    displayWeights: [
      { weight: 400, label: 'Regular' },
    ],
    bodyWeights: [
      { weight: 400, label: 'Regular' },
      { weight: 500, label: 'Medium' },
      { weight: 600, label: 'SemiBold' },
      { weight: 700, label: 'Bold' },
    ],
    colors: {
      bg: '#F3EDE5',
      surface: '#CEC1AD',
      dark: '#201A12',
      mid: '#4D4538',
      muted: '#948A7A',
      accent: '#6A7D5E',
      accentName: 'sage green',
    },
  },
  {
    id: 10,
    name: 'Bold Narrative',
    displayFont: 'var(--font-bricolage), "Bricolage Grotesque", sans-serif',
    bodyFont: 'var(--font-plus-jakarta), "Plus Jakarta Sans", sans-serif',
    displayName: 'Bricolage Grotesque',
    bodyName: 'Plus Jakarta Sans',
    displayWeights: [
      { weight: 400, label: 'Regular' },
      { weight: 700, label: 'Bold' },
      { weight: 800, label: 'ExtraBold' },
    ],
    bodyWeights: [
      { weight: 400, label: 'Regular' },
      { weight: 500, label: 'Medium' },
      { weight: 600, label: 'SemiBold' },
      { weight: 700, label: 'Bold' },
    ],
    colors: {
      bg: '#F0F0EE',
      surface: '#D3CFC7',
      dark: '#131315',
      mid: '#38373C',
      muted: '#85848A',
      accent: '#C4694A',
      accentName: 'burnt coral',
    },
  },
]

const spacing = [
  { name: 'section-padding', value: 'clamp(5rem, 10vw, 8rem)' },
  { name: 'container-padding', value: 'clamp(1.5rem, 6vw, 5rem)' },
  { name: 'nav-height', value: '68px' },
  { name: 'text-max', value: '60ch' },
]

const rules = [
  'all text uppercase',
  'letter-spacing 0.02em on body',
  'no gradients anywhere',
  'no box shadows',
  'body copy max 60ch',
  'accent used sparingly — dots, hovers, CTAs only',
]

/* ── Page ── */
export default function DesignSystemPage() {
  const [activeId, setActiveId] = useState(1)
  const combo = combos.find(c => c.id === activeId)!

  return (
    <div style={{ backgroundColor: combo.colors.bg, color: combo.colors.dark, minHeight: '100vh', transition: 'background-color 0.4s, color 0.4s' }}>
      {/* Header */}
      <div className="pt-[var(--nav-height)]">
        <div className="container-site" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
          <p style={{ fontFamily: combo.bodyFont, fontSize: '0.75rem', letterSpacing: '0.02em', textTransform: 'uppercase', color: combo.colors.muted, marginBottom: '0.75rem' }}>
            internal — brand exploration
          </p>
          <h1 style={{ fontFamily: combo.displayFont, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            proposed brand identity
          </h1>
          <p style={{ fontFamily: combo.bodyFont, fontSize: '1rem', lineHeight: 1.75, color: combo.colors.mid, marginTop: '1rem', maxWidth: '60ch', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            Select a direction to preview. Each option shows the full design system — tokens, typography, and component examples — in its proposed fonts and colors.
          </p>
        </div>
      </div>

      {/* Tab bar */}
      <div className="container-site" style={{ paddingBottom: '3rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {combos.map(c => {
            const isActive = c.id === activeId
            return (
              <button
                key={c.id}
                onClick={() => setActiveId(c.id)}
                style={{
                  fontFamily: combo.bodyFont,
                  fontSize: '0.8rem',
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  padding: '0.6rem 1.2rem',
                  border: `1px solid ${isActive ? c.colors.dark : combo.colors.muted}40`,
                  borderRadius: 0,
                  backgroundColor: isActive ? c.colors.dark : 'transparent',
                  color: isActive ? c.colors.bg : combo.colors.mid,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              >
                {c.id}. {c.displayName}
              </button>
            )
          })}
        </div>
        <p style={{ fontFamily: combo.bodyFont, fontSize: '0.75rem', color: combo.colors.muted, marginTop: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
          {combo.name} — {combo.displayName} + {combo.bodyName} — accent: {combo.colors.accentName}
        </p>
      </div>

      {/* Divider */}
      <div className="container-site"><div style={{ height: '1px', backgroundColor: `${combo.colors.dark}15` }} /></div>

      {/* ═══ SECTION A: TOKENS ═══ */}
      <section className="container-site" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <SectionLabel combo={combo} text="tokens" />

        {/* Color swatches */}
        <h3 style={{ fontFamily: combo.bodyFont, fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: '1.5rem', color: combo.colors.mid }}>
          color palette
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
          {[
            { name: 'bg', value: combo.colors.bg, usage: 'primary background' },
            { name: 'surface', value: combo.colors.surface, usage: 'alt bg, hover states' },
            { name: 'dark', value: combo.colors.dark, usage: 'text, headings' },
            { name: 'mid', value: combo.colors.mid, usage: 'secondary text' },
            { name: 'muted', value: combo.colors.muted, usage: 'metadata, labels' },
            { name: 'accent', value: combo.colors.accent, usage: combo.colors.accentName },
          ].map(c => (
            <div key={c.name}>
              <div style={{ width: '100%', aspectRatio: '4/3', backgroundColor: c.value, border: `1px solid ${combo.colors.dark}12` }} />
              <p style={{ fontFamily: combo.bodyFont, fontSize: '0.875rem', fontWeight: 500, marginTop: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>{c.name}</p>
              <p style={{ fontFamily: combo.bodyFont, fontSize: '0.75rem', color: combo.colors.muted, textTransform: 'uppercase', letterSpacing: '0.02em' }}>{c.value}</p>
              <p style={{ fontFamily: combo.bodyFont, fontSize: '0.75rem', color: combo.colors.mid, marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>{c.usage}</p>
            </div>
          ))}
        </div>

        {/* Spacing */}
        <h3 style={{ fontFamily: combo.bodyFont, fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: '1rem', color: combo.colors.mid }}>
          spacing
        </h3>
        <div style={{ borderTop: `1px solid ${combo.colors.dark}12`, marginBottom: '3rem' }}>
          {spacing.map(s => (
            <div key={s.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: `1px solid ${combo.colors.dark}12` }}>
              <span style={{ fontFamily: combo.bodyFont, fontSize: '0.875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.02em' }}>{s.name}</span>
              <code style={{ fontFamily: combo.bodyFont, fontSize: '0.75rem', color: combo.colors.mid, backgroundColor: combo.colors.surface, padding: '0.25rem 0.75rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>{s.value}</code>
            </div>
          ))}
        </div>

        {/* Rules */}
        <h3 style={{ fontFamily: combo.bodyFont, fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: '1rem', color: combo.colors.mid }}>
          design rules
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.5rem' }}>
          {rules.map(rule => (
            <div key={rule} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 0', borderBottom: `1px solid ${combo.colors.dark}12` }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: combo.colors.accent, flexShrink: 0 }} />
              <span style={{ fontFamily: combo.bodyFont, fontSize: '0.875rem', color: combo.colors.mid, textTransform: 'uppercase', letterSpacing: '0.02em' }}>{rule}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="container-site"><div style={{ height: '1px', backgroundColor: `${combo.colors.dark}15` }} /></div>

      {/* ═══ SECTION B: TYPOGRAPHY ═══ */}
      <section className="container-site" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <SectionLabel combo={combo} text="typography" />

        {/* Type scale */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '4rem' }}>
          <TypeRow combo={combo} label=".text-hero" spec={`${combo.displayName} · clamp(3rem, 8vw, 6.5rem) · 700 · 1.0`} font={combo.displayFont} size="clamp(3rem, 8vw, 6.5rem)" weight={700} lineHeight={1.0} sample="Think big, construct bigger." />
          <TypeRow combo={combo} label=".text-heading" spec={`${combo.displayName} · clamp(2rem, 4vw, 3.5rem) · 700 · 1.1`} font={combo.displayFont} size="clamp(2rem, 4vw, 3.5rem)" weight={700} lineHeight={1.1} sample="Building the future of Qatar" />
          <TypeRow combo={combo} label=".text-title" spec={`${combo.bodyName} · clamp(1.25rem, 2.5vw, 1.75rem) · 600 · 1.2`} font={combo.bodyFont} size="clamp(1.25rem, 2.5vw, 1.75rem)" weight={600} lineHeight={1.2} sample="Waterproofing Works" />
          <TypeRow combo={combo} label=".text-eyebrow" spec={`${combo.bodyName} · 0.75rem · 500`} font={combo.bodyFont} size="0.75rem" weight={500} lineHeight={1.4} sample="Selected projects" />
          <TypeRow combo={combo} label=".text-body" spec={`${combo.bodyName} · 1rem · 400 · 1.75 · max-width: 60ch`} font={combo.bodyFont} size="1rem" weight={400} lineHeight={1.75} sample="JARACON EPC Projects is a leading construction company based in Doha, Qatar, specializing in end-to-end EPC contracting across residential, commercial, and power plant projects." maxWidth="60ch" />
          <TypeRow combo={combo} label=".text-sm" spec={`${combo.bodyName} · 0.875rem · 400 · 1.6`} font={combo.bodyFont} size="0.875rem" weight={400} lineHeight={1.6} sample="Descriptions and secondary text use this smaller size." color={combo.colors.mid} />
          <TypeRow combo={combo} label=".text-xs" spec={`${combo.bodyName} · 0.75rem · 400`} font={combo.bodyFont} size="0.75rem" weight={400} lineHeight={1.4} sample="Metadata, labels, and fine print." color={combo.colors.muted} />
        </div>

        {/* Hero marquee preview */}
        <h3 style={{ fontFamily: combo.bodyFont, fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: '1rem', color: combo.colors.mid }}>
          hero marquee preview
        </h3>
        <div style={{ backgroundColor: combo.colors.dark, overflow: 'hidden', marginBottom: '4rem', padding: '2rem 0' }}>
          <div className="animate-scroll-hero" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            <span style={{ fontFamily: combo.displayFont, fontSize: 'clamp(4rem, 12vw, 8rem)', fontWeight: 700, fontStyle: 'italic', lineHeight: 1, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
              Think big, construct bigger. · Think big, construct bigger. ·&nbsp;
            </span>
          </div>
        </div>

        {/* Font weights */}
        <h3 style={{ fontFamily: combo.bodyFont, fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: '1.5rem', color: combo.colors.mid }}>
          font weights — {combo.displayName}
        </h3>
        <div style={{ marginBottom: '3rem' }}>
          {combo.displayWeights.map(w => (
            <div key={`${w.weight}-${w.label}`} style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', padding: '1rem 0', borderBottom: `1px solid ${combo.colors.dark}12` }}>
              <span style={{ fontFamily: combo.displayFont, fontWeight: w.weight, fontStyle: w.italic ? 'italic' : 'normal', fontSize: '1.5rem', width: '14rem', flexShrink: 0, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                {w.weight} {w.label}
              </span>
              <span style={{ fontFamily: combo.displayFont, fontWeight: w.weight, fontStyle: w.italic ? 'italic' : 'normal', fontSize: '1rem', color: combo.colors.mid, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                The quick brown fox jumps over the lazy dog
              </span>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: combo.bodyFont, fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: '1.5rem', color: combo.colors.mid }}>
          font weights — {combo.bodyName}
        </h3>
        <div style={{ marginBottom: '3rem' }}>
          {combo.bodyWeights.map(w => (
            <div key={`${w.weight}-${w.label}`} style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', padding: '1rem 0', borderBottom: `1px solid ${combo.colors.dark}12` }}>
              <span style={{ fontFamily: combo.bodyFont, fontWeight: w.weight, fontSize: '1.5rem', width: '14rem', flexShrink: 0, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                {w.weight} {w.label}
              </span>
              <span style={{ fontFamily: combo.bodyFont, fontWeight: w.weight, fontSize: '1rem', color: combo.colors.mid, textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                The quick brown fox jumps over the lazy dog
              </span>
            </div>
          ))}
        </div>

        {/* Dark typography */}
        <h3 style={{ fontFamily: combo.bodyFont, fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: '1rem', color: combo.colors.mid }}>
          dark background specimen
        </h3>
        <div style={{ backgroundColor: combo.colors.dark, padding: 'clamp(2rem, 4vw, 4rem)', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: combo.displayFont, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: '1.5rem' }}>
            800MW and counting
          </h2>
          <p style={{ fontFamily: combo.bodyFont, fontSize: '1rem', fontWeight: 400, lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.02em', maxWidth: '60ch' }}>
            Powering the nation with renewable energy. JARACON EPC Projects delivers solar and industrial power infrastructure across Qatar.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="container-site"><div style={{ height: '1px', backgroundColor: `${combo.colors.dark}15` }} /></div>

      {/* ═══ SECTION C: COMPONENTS ═══ */}
      <section className="container-site" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <SectionLabel combo={combo} text="components" />

        {/* Navbar mock — light */}
        <ComponentLabel combo={combo} title="navbar — light" />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(1.5rem, 6vw, 5rem)', height: '68px', backgroundColor: combo.colors.bg, border: `1px solid ${combo.colors.dark}12`, marginBottom: '1rem' }}>
          <span style={{ fontFamily: combo.displayFont, fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.02em', color: combo.colors.dark }}>
            JARACON
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {['about', 'services', 'projects'].map(link => (
              <span key={link} style={{ fontFamily: combo.bodyFont, fontSize: '0.9rem', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.02em', color: combo.colors.dark }}>
                {link}
              </span>
            ))}
            <span style={{ fontFamily: combo.bodyFont, fontSize: '0.9rem', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.02em', color: combo.colors.dark }}>
              reach out &rarr;
            </span>
          </div>
        </div>

        {/* Navbar mock — dark */}
        <ComponentLabel combo={combo} title="navbar — dark" />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(1.5rem, 6vw, 5rem)', height: '68px', backgroundColor: combo.colors.dark, marginBottom: '3rem' }}>
          <span style={{ fontFamily: combo.displayFont, fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.02em', color: '#FFFFFF' }}>
            JARACON
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {['about', 'services', 'projects'].map(link => (
              <span key={link} style={{ fontFamily: combo.bodyFont, fontSize: '0.9rem', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.02em', color: 'rgba(255,255,255,0.7)' }}>
                {link}
              </span>
            ))}
            <span style={{ fontFamily: combo.bodyFont, fontSize: '0.9rem', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.02em', color: '#FFFFFF' }}>
              reach out &rarr;
            </span>
          </div>
        </div>

        {/* Eyebrow labels */}
        <ComponentLabel combo={combo} title="eyebrow label" />
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {['short intro', 'selected projects', 'our services'].map(text => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: combo.colors.accent }} />
              <span style={{ fontFamily: combo.bodyFont, fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.02em', color: combo.colors.dark }}>
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Section heading — light */}
        <ComponentLabel combo={combo} title="section heading — light" />
        <div style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: `1px solid ${combo.colors.dark}12` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: combo.colors.accent }} />
            <span style={{ fontFamily: combo.bodyFont, fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.02em', color: combo.colors.dark }}>about us</span>
          </div>
          <h2 style={{ fontFamily: combo.displayFont, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '0.02em', color: combo.colors.dark, marginBottom: '1rem' }}>
            Trust, innovation, and quality.
          </h2>
          <p style={{ fontFamily: combo.bodyFont, fontSize: '1rem', fontWeight: 400, lineHeight: 1.75, textTransform: 'uppercase', letterSpacing: '0.02em', color: combo.colors.mid, maxWidth: '60ch' }}>
            JARACON EPC Projects is a leading construction company based in Doha, Qatar, specializing in end-to-end EPC contracting.
          </p>
        </div>

        {/* Section heading — dark */}
        <ComponentLabel combo={combo} title="section heading — dark" />
        <div style={{ backgroundColor: combo.colors.dark, padding: 'clamp(2rem, 4vw, 4rem)', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: combo.colors.accent }} />
            <span style={{ fontFamily: combo.bodyFont, fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.02em', color: 'rgba(255,255,255,0.6)' }}>solar capacity</span>
          </div>
          <h2 style={{ fontFamily: combo.displayFont, fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '0.02em', color: '#FFFFFF', marginBottom: '1rem' }}>
            800MW and counting
          </h2>
          <p style={{ fontFamily: combo.bodyFont, fontSize: '1rem', fontWeight: 400, lineHeight: 1.75, textTransform: 'uppercase', letterSpacing: '0.02em', color: 'rgba(255,255,255,0.7)', maxWidth: '60ch' }}>
            Powering the nation with renewable energy.
          </p>
        </div>

        {/* Stats row */}
        <ComponentLabel combo={combo} title="stats bar" />
        <div style={{ backgroundColor: combo.colors.dark, padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 6vw, 5rem)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '3rem' }}>
          {[
            { value: '800', suffix: 'MW', label: 'solar power capacity' },
            { value: '500', suffix: 'MW', label: 'industrial power' },
            { value: '3', suffix: '', label: 'major projects' },
            { value: '8', suffix: '+', label: 'trusted clients' },
          ].map(stat => (
            <div key={stat.label}>
              <p style={{ fontFamily: combo.displayFont, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1 }}>
                {stat.value}<span style={{ fontSize: '0.6em', color: combo.colors.accent }}>{stat.suffix}</span>
              </p>
              <p style={{ fontFamily: combo.bodyFont, fontSize: '0.75rem', fontWeight: 400, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.02em', marginTop: '0.5rem' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Project rows */}
        <ComponentLabel combo={combo} title="project row" />
        <div style={{ borderTop: `1px solid ${combo.colors.dark}12`, marginBottom: '3rem' }}>
          {[
            { index: '01', title: 'Lusail Solar Power Plant' },
            { index: '02', title: 'Al Wakrah Residential Complex' },
            { index: '03', title: 'Industrial Area Warehouse Facility' },
          ].map(project => (
            <div key={project.index} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.25rem 0', borderBottom: `1px solid ${combo.colors.dark}12` }}>
              <span style={{ fontFamily: combo.displayFont, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, color: combo.colors.muted, textTransform: 'uppercase', letterSpacing: '0.02em', width: '4rem', flexShrink: 0 }}>
                {project.index}
              </span>
              <span style={{ fontFamily: combo.bodyFont, fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.02em', color: combo.colors.dark, flex: 1 }}>
                {project.title}
              </span>
              <ArrowRight size={18} color={combo.colors.mid} />
            </div>
          ))}
        </div>

        {/* Service tiles */}
        <ComponentLabel combo={combo} title="service tile" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
          {['Waterproofing Works', 'Structural Steel', 'MEP Services'].map(name => (
            <div key={name} style={{ backgroundColor: combo.colors.surface, padding: '1.5rem' }}>
              <p style={{ fontFamily: combo.bodyFont, fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.02em', color: combo.colors.dark, marginBottom: '0.75rem' }}>
                {name}
              </p>
              <p style={{ fontFamily: combo.bodyFont, fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.6, textTransform: 'uppercase', letterSpacing: '0.02em', color: combo.colors.mid }}>
                End-to-end delivery from design through construction and commissioning.
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <ComponentLabel combo={combo} title="call to action" />
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <CTALink combo={combo} text="request quotation" />
          <CTALink combo={combo} text="view all projects" />
          <CTALink combo={combo} text="reach out" />
        </div>
      </section>

      {/* Footer spacer */}
      <div style={{ height: '4rem' }} />
    </div>
  )
}

/* ── Helper components ── */

function SectionLabel({ combo, text }: { combo: Combo; text: string }) {
  return (
    <h2 style={{
      fontFamily: combo.displayFont,
      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
      color: combo.colors.dark,
      marginBottom: '2rem',
      paddingBottom: '1rem',
      borderBottom: `2px solid ${combo.colors.dark}`,
    }}>
      {text}
    </h2>
  )
}

function ComponentLabel({ combo, title }: { combo: Combo; title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
      <h3 style={{ fontFamily: combo.bodyFont, fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.02em', color: combo.colors.mid }}>
        {title}
      </h3>
      <div style={{ flex: 1, height: '1px', backgroundColor: `${combo.colors.dark}12` }} />
    </div>
  )
}

function TypeRow({ combo, label, spec, font, size, weight, lineHeight, sample, maxWidth, color }: {
  combo: Combo
  label: string
  spec: string
  font: string
  size: string
  weight: number
  lineHeight: number
  sample: string
  maxWidth?: string
  color?: string
}) {
  return (
    <div style={{ borderBottom: `1px solid ${combo.colors.dark}12`, paddingBottom: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
        <code style={{ fontFamily: combo.bodyFont, fontSize: '0.7rem', backgroundColor: combo.colors.surface, padding: '0.2rem 0.5rem', textTransform: 'uppercase', letterSpacing: '0.02em' }}>{label}</code>
        <span style={{ fontFamily: combo.bodyFont, fontSize: '0.7rem', color: combo.colors.muted, textTransform: 'uppercase', letterSpacing: '0.02em' }}>{spec}</span>
      </div>
      <p style={{ fontFamily: font, fontSize: size, fontWeight: weight, lineHeight, textTransform: 'uppercase', letterSpacing: '0.02em', color: color || combo.colors.dark, maxWidth }}>
        {sample}
      </p>
    </div>
  )
}

function CTALink({ combo, text }: { combo: Combo; text: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: combo.bodyFont,
        fontSize: '0.9rem',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
        color: combo.colors.dark,
        cursor: 'pointer',
        borderBottom: `1.5px solid ${hovered ? combo.colors.accent : combo.colors.dark}25`,
        paddingBottom: '0.25rem',
        transition: 'border-color 0.3s',
      }}
    >
      {text} &rarr;
    </span>
  )
}
