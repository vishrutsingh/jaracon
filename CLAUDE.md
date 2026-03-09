# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

JARACON EPC — corporate website for a Qatar-based construction and engineering company. Light editorial design inspired by an-vas.webflow.io — cream backgrounds, DM Sans typography, minimal color, editorial softness.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Package manager**: Bun
- **Smooth scroll**: Lenis (synced with GSAP ScrollTrigger)
- **Animation**: GSAP (ScrollTrigger, scroll entrances) + Framer Motion (page transitions)
- **Font**: DM Sans (single font, weights 400–700)

## Commands

```bash
bun dev          # Start dev server
bun run build    # Production build
bun run lint     # ESLint
bun run start    # Start production server
```

## Architecture

```
app/
  layout.tsx              # Root layout — DM Sans font, providers, navbar, transition, footer
  page.tsx                # Home — hero, projects, about, services, stats, clients, contact
  globals.css             # Tailwind v4 + design tokens CSS + typography/layout utilities
  about/page.tsx
  services/page.tsx
  projects/page.tsx
  contact/page.tsx
content/
  projects.ts             # Project data + types
  services.ts             # Service data + types
  clients.ts              # Client list
  about.ts                # Company info, values, principles
  contact.ts              # Contact details
hooks/
  useFadeUp.ts            # GSAP scroll entrance hook
  useProjectHover.ts      # Project image follow hook
providers/
  LenisProvider.tsx       # Smooth scroll — syncs Lenis with GSAP ScrollTrigger
  GSAPProvider.tsx        # GSAP context — scoped to app root
  TransitionProvider.tsx  # Simple opacity fade page transition
lib/
  gsap.ts                 # Plugin registration — single import point
  tokens.ts               # Design constants (colors, typography, layout)
  animations.ts           # Animation specs (durations, easings, scroll reveal, hero entrance)
components/
  ui/
    LoopText.tsx          # Vertical text loop CTA
    EyebrowLabel.tsx      # Small section label
    SectionHeading.tsx    # H2 with optional eyebrow + subtitle
    ProjectRow.tsx        # Single editorial project row
    ServiceTile.tsx       # Horizontal-scroll service tile card
    TagPill.tsx           # Filter pill button
    CountUp.tsx           # Animated number counter
    ClientMarquee.tsx     # Infinite horizontal scroll
  layout/
    Container.tsx         # Max-width + padding wrapper
    Navbar.tsx            # Fixed transparent nav, dark text, lowercase
    Footer.tsx            # Cream bg, minimal 2-row footer
  sections/
    Hero.tsx              # Cream bg, floating photo, staggered entrance
    ProjectsPreview.tsx   # Editorial project rows with hover image
    AboutSnippet.tsx      # Short intro with floating founder photo
    ServicesPreview.tsx   # Horizontal-scroll service tiles with filter pills
    StatsBar.tsx          # Dark bg, cream numbers, countUp
    ClientsSection.tsx    # Marquee with eyebrow
    ContactSection.tsx    # Underline fields, floating labels
  animations/
    FadeUp.tsx            # Scroll entrance wrapper (GSAP ScrollTrigger)
public/
  images/                 # Hero bg, project photos, founder photo
```

### Import Conventions
- Always import `gsap` and `ScrollTrigger` from `@/lib/gsap` — never from `'gsap'` directly
- Use constants from `@/lib/tokens` and `@/lib/animations` instead of hardcoding values
- Content comes from `@/content/*` — never hardcode company text in components
- Provider stack in layout: `LenisProvider` → `GSAPProvider` → content

## Design Language

**Single source of truth: [`.claude/DESIGN.md`](.claude/DESIGN.md)**

- **Aesthetic**: Light editorial — cream bg, near-black text, minimal color
- **Palette**: bg `#F5F3EE`, dark `#1A1A1A`, mid `#6B6B6B`, orange `#E8521A` (max 2 elements), navy `#2D3161` (max 1 section)
- **Font**: DM Sans only — never uppercase, never letter-spacing tricks
- **Layout**: Full-width container (padded edges), 60ch body max, generous section padding
- **Motion**: GSAP scroll entrances (translateY 30 + opacity), simple opacity page transitions
- **Zero**: gradients, box shadows, uppercase text, letter-spacing tricks

## Rules

1. **Always reference `.claude/DESIGN.md` before creating or modifying any component or page.**
2. Import `gsap` and `ScrollTrigger` from `@/lib/gsap` — never from `'gsap'` directly.
3. Use constants from `@/lib/tokens` and `@/lib/animations` — never hardcode design values.
4. Content comes from `@/content/*` — never hardcode company text.
5. Never uppercase text anywhere. Never use letter-spacing tricks.
6. Orange appears on maximum 2 elements per page. Navy bg on maximum 1 section.
