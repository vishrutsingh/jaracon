'use client'

import { useState } from 'react'
import { services } from '@/content/services'
import { projects } from '@/content/projects'
import EyebrowLabel from '@/components/ui/EyebrowLabel'
import TagPill from '@/components/ui/TagPill'
import LoopText from '@/components/ui/LoopText'
import SectionHeading from '@/components/ui/SectionHeading'
import Container from '@/components/layout/Container'
import ProjectRow from '@/components/ui/ProjectRow'
import ServiceTile from '@/components/ui/ServiceTile'
import ClientMarquee from '@/components/ui/ClientMarquee'
import CountUp from '@/components/ui/CountUp'
import SectionDivider from '@/components/ui/SectionDivider'
import FadeUp from '@/components/animations/FadeUp'
import SplitLines from '@/components/animations/SplitLines'

const colors = [
  { name: 'bg', value: '#F5F3EE', usage: 'primary background' },
  { name: 'surface', value: '#EDEAE3', usage: 'hover states, alt bg' },
  { name: 'dark', value: '#1A1A1A', usage: 'text, headings' },
  { name: 'mid', value: '#6B6B6B', usage: 'secondary text' },
  { name: 'muted', value: '#9A9A9A', usage: 'metadata, labels' },
  { name: 'border', value: 'rgba(26,26,26,0.12)', usage: 'borders' },
  { name: 'orange', value: '#E8521A', usage: 'accent (max 2/page)' },
  { name: 'navy', value: '#2D3161', usage: 'max 1 section' },
]

const spacing = [
  { name: 'section-padding', value: 'clamp(5rem, 10vw, 8rem)' },
  { name: 'container-padding', value: 'clamp(1.5rem, 6vw, 5rem)' },
  { name: 'nav-height', value: '68px' },
  { name: 'text-max', value: '60ch' },
]

type Section = 'tokens' | 'typography' | 'components'

export default function DesignSystemPage() {
  const [active, setActive] = useState<Section>('tokens')

  return (
    <div className="pt-[var(--nav-height)]">
      {/* Header */}
      <div className="container-site py-12 border-b border-border">
        <p className="text-eyebrow mb-3">internal</p>
        <h1 className="text-heading">design system</h1>
        <p className="text-body text-mid mt-4">
          All tokens, typography, and components used across the JARACON website.
        </p>
        <div className="flex gap-3 mt-8">
          {(['tokens', 'typography', 'components'] as Section[]).map(s => (
            <TagPill key={s} label={s} active={active === s} onClick={() => setActive(s)} />
          ))}
        </div>
      </div>

      {active === 'tokens' && <TokensSection />}
      {active === 'typography' && <TypographySection />}
      {active === 'components' && <ComponentsSection />}
    </div>
  )
}

/* ─── Tokens ─── */
function TokensSection() {
  return (
    <div className="container-site py-12">
      {/* Colors */}
      <h2 className="text-title mb-8">colors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {colors.map(c => (
          <div key={c.name}>
            <div
              className="w-full aspect-[4/3] border border-border"
              style={{ background: c.value }}
            />
            <p className="text-sm font-medium mt-3">{c.name}</p>
            <p className="text-xs text-muted">{c.value}</p>
            <p className="text-xs text-mid mt-1">{c.usage}</p>
          </div>
        ))}
      </div>

      {/* Spacing */}
      <h2 className="text-title mb-8">spacing</h2>
      <div className="border-t border-border">
        {spacing.map(s => (
          <div key={s.name} className="flex items-center justify-between py-4 border-b border-border">
            <span className="text-sm font-medium">{s.name}</span>
            <code className="text-xs text-mid bg-surface px-3 py-1">{s.value}</code>
          </div>
        ))}
      </div>

      {/* Rules */}
      <div className="mt-16">
        <h2 className="text-title mb-8">rules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'zero gradients anywhere',
            'zero box shadows anywhere',
            'never uppercase text',
            'never letter-spacing tricks',
            'orange max 2 elements per page',
            'navy max 1 section',
            'body copy max 60ch',
            'sentence case or lowercase only',
          ].map(rule => (
            <div key={rule} className="flex items-center gap-3 py-3 border-b border-border">
              <span className="w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
              <span className="text-sm text-mid">{rule}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Typography ─── */
function TypographySection() {
  return (
    <div className="container-site py-12">
      <div className="flex flex-col gap-16">
        <TypoRow
          label=".text-hero"
          spec="clamp(3rem, 8vw, 6.5rem) / 700 / 1.0"
          className="text-hero"
          sample="Think big, construct bigger."
        />
        <TypoRow
          label=".text-heading"
          spec="clamp(2rem, 4vw, 3.5rem) / 700 / 1.1"
          className="text-heading"
          sample="Building the future of Qatar"
        />
        <TypoRow
          label=".text-title"
          spec="clamp(1.25rem, 2.5vw, 1.75rem) / 600 / 1.2"
          className="text-title"
          sample="Waterproofing Works"
        />
        <TypoRow
          label=".text-eyebrow"
          spec="0.75rem / 400 / color: #6B6B6B"
          className="text-eyebrow"
          sample="selected projects"
        />
        <TypoRow
          label=".text-body"
          spec="1rem / 400 / 1.75 / max-width: 60ch"
          className="text-body"
          sample="JARACON EPC PROJECTS is a leading construction company based in Doha, Qatar, specializing in end-to-end EPC contracting across residential, commercial, and power plant projects."
        />
        <TypoRow
          label=".text-sm"
          spec="0.875rem / 400 / 1.6"
          className="text-sm text-mid"
          sample="Descriptions and secondary text use this smaller size."
        />
        <TypoRow
          label=".text-xs"
          spec="0.75rem / 400"
          className="text-xs text-muted"
          sample="Metadata, labels, and fine print."
        />
      </div>

      {/* Weights */}
      <div className="mt-20">
        <h2 className="text-title mb-8">font weights</h2>
        <div className="flex flex-col gap-6">
          {[
            { weight: 400, label: 'regular', usage: 'body text, descriptions' },
            { weight: 500, label: 'medium', usage: 'active nav links' },
            { weight: 600, label: 'semi-bold', usage: 'titles, marquee' },
            { weight: 700, label: 'bold', usage: 'headings, logo' },
          ].map(w => (
            <div key={w.weight} className="flex items-baseline gap-6 py-4 border-b border-border">
              <span style={{ fontWeight: w.weight, fontSize: '1.5rem' }} className="w-48 shrink-0">
                {w.weight} {w.label}
              </span>
              <span className="text-sm text-muted">{w.usage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TypoRow({ label, spec, className, sample }: { label: string; spec: string; className: string; sample: string }) {
  return (
    <div className="border-b border-border pb-8">
      <div className="flex items-center gap-4 mb-4">
        <code className="text-xs bg-surface px-2 py-1">{label}</code>
        <span className="text-xs text-muted">{spec}</span>
      </div>
      <p className={className}>{sample}</p>
    </div>
  )
}

/* ─── Components ─── */
function ComponentsSection() {
  return (
    <div className="py-12">
      {/* EyebrowLabel */}
      <ComponentBlock title="EyebrowLabel" path="components/ui/EyebrowLabel.tsx">
        <div className="flex gap-8">
          <EyebrowLabel text="short intro" />
          <EyebrowLabel text="selected projects" />
          <EyebrowLabel text="our services" />
        </div>
      </ComponentBlock>

      {/* TagPill */}
      <ComponentBlock title="TagPill" path="components/ui/TagPill.tsx">
        <div className="flex gap-3">
          <TagPill label="all" active />
          <TagPill label="structural" />
          <TagPill label="finishing" />
          <TagPill label="infrastructure" />
        </div>
      </ComponentBlock>

      {/* LoopText */}
      <ComponentBlock title="LoopText" path="components/ui/LoopText.tsx">
        <div className="flex gap-12">
          <a href="#" className="text-[0.9rem] text-dark">
            <LoopText label="view projects &rarr;" />
          </a>
          <a href="#" className="text-[0.9rem] text-dark">
            <LoopText label="send message &rarr;" />
          </a>
          <a href="#" className="text-[0.9rem] text-dark">
            <LoopText label="reach out" />
          </a>
        </div>
      </ComponentBlock>

      {/* SectionHeading */}
      <ComponentBlock title="SectionHeading" path="components/ui/SectionHeading.tsx">
        <div className="flex flex-col gap-12">
          <SectionHeading heading="Building the future of Qatar" />
          <SectionHeading eyebrow="our services" heading="What we build" />
          <SectionHeading
            eyebrow="about us"
            heading="Trust, innovation, and quality."
            sub="JARACON EPC PROJECTS is a leading construction company based in Doha, Qatar."
          />
        </div>
      </ComponentBlock>

      {/* SectionHeading dark */}
      <ComponentBlock title="SectionHeading (dark)" path="components/ui/SectionHeading.tsx" dark>
        <SectionHeading
          eyebrow="solar capacity"
          heading="800MW and counting"
          sub="Powering the nation with renewable energy."
          dark
        />
      </ComponentBlock>

      {/* Container */}
      <ComponentBlock title="Container" path="components/layout/Container.tsx">
        <Container>
          <div className="bg-surface p-6">
            <p className="text-sm text-mid">Content inside a Container. Notice the horizontal padding.</p>
          </div>
        </Container>
      </ComponentBlock>

      {/* ProjectRow */}
      <ComponentBlock title="ProjectRow" path="components/ui/ProjectRow.tsx">
        <div className="border-t border-border">
          {projects.slice(0, 3).map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
        </div>
      </ComponentBlock>

      {/* ServiceTile */}
      <ComponentBlock title="ServiceTile" path="components/ui/ServiceTile.tsx">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {services.slice(0, 4).map((service, i) => (
            <ServiceTile key={service.id} service={service} index={i} />
          ))}
        </div>
      </ComponentBlock>

      {/* ClientMarquee */}
      <ComponentBlock title="ClientMarquee" path="components/ui/ClientMarquee.tsx">
        <ClientMarquee />
      </ComponentBlock>

      {/* CountUp */}
      <ComponentBlock title="CountUp" path="components/ui/CountUp.tsx" dark>
        <div className="grid grid-cols-4 gap-8">
          <CountUp target={800} suffix="MW" label="solar power capacity" light />
          <CountUp target={500} suffix="MW" label="industrial power" light />
          <CountUp target={3} label="major projects" light />
          <CountUp target={8} suffix="+" label="trusted clients" light />
        </div>
      </ComponentBlock>

      {/* SectionDivider */}
      <ComponentBlock title="SectionDivider" path="components/ui/SectionDivider.tsx">
        <SectionDivider />
      </ComponentBlock>

      {/* FadeUp */}
      <ComponentBlock title="FadeUp" path="components/animations/FadeUp.tsx">
        <FadeUp>
          <div className="bg-surface p-8">
            <p className="text-body text-mid">This content fades up on scroll.</p>
          </div>
        </FadeUp>
      </ComponentBlock>

      {/* SplitLines */}
      <ComponentBlock title="SplitLines" path="components/animations/SplitLines.tsx">
        <SplitLines className="text-heading" scroll={false}>
          <span>Trust, innovation,</span>
          <span>and quality.</span>
        </SplitLines>
      </ComponentBlock>
    </div>
  )
}

function ComponentBlock({
  title,
  path,
  children,
  dark = false,
}: {
  title: string
  path: string
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <div className={`border-b border-border ${dark ? 'bg-dark' : ''}`}>
      <div className="container-site py-10">
        <div className="flex items-center gap-4 mb-6">
          <h3 className={`text-title ${dark ? 'text-white' : ''}`}>{title}</h3>
          <code className={`text-xs px-2 py-1 ${dark ? 'bg-white/10 text-white/50' : 'bg-surface text-muted'}`}>
            {path}
          </code>
        </div>
        {children}
      </div>
    </div>
  )
}
