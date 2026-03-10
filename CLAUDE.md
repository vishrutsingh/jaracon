# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

JARACON EPC — corporate website for a Qatar-based construction and engineering company. Light editorial design inspired by an-vas.webflow.io — cream backgrounds, DM Sans typography, minimal color, editorial softness.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Package manager**: Bun
- **Smooth scroll**: Lenis (synced with GSAP ScrollTrigger, exposed via React context)
- **Animation**: GSAP (ScrollTrigger, scroll entrances, grid swap) + Framer Motion (page transitions)
- **Icons**: lucide-react
- **Font**: Arial (system font, uppercase globally)

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
  layout.tsx              # Root layout — Arial font, providers, navbar, transition, footer
  page.tsx                # Home — hero, about, services, stats+clients, contact (all in StackCards)
  globals.css             # Tailwind v4 + design tokens CSS + typography/layout utilities
  about/page.tsx
  services/page.tsx
  projects/page.tsx
  contact/page.tsx
content/
  projects.ts             # Project data + types
  services.ts             # Service data + types (15 services with icon field)
  clients.ts              # Client list
  about.ts                # Company info, values, principles
  contact.ts              # Contact details
hooks/
  useFadeUp.ts            # GSAP scroll entrance hook
  useProjectHover.ts      # Project image follow hook
  useServicesGrid.ts      # Interactive 4×4 grid — GSAP swap, neighbor calc, activeTiles state, pointer detection
providers/
  LenisProvider.tsx       # Smooth scroll — syncs Lenis with GSAP, exposes via React context
  GSAPProvider.tsx        # GSAP context — scoped to app root
  TransitionProvider.tsx  # Simple opacity fade page transition
lib/
  gsap.ts                 # Plugin registration — single import point
  tokens.ts               # Design constants (colors, typography, layout)
  animations.ts           # Animation specs (durations, easings, scroll reveal, hero entrance, gridSwap, cardSnap)
components/
  ui/
    LoopText.tsx          # Vertical text loop CTA
    EyebrowLabel.tsx      # Small section label with orange dot
    SectionHeading.tsx    # H2 with optional eyebrow + subtitle
    ProjectRow.tsx        # Single editorial project row with ArrowRight icon
    ServiceTile.tsx       # Service tile card (exports iconMap)
    TagPill.tsx           # Filter pill button
    CountUp.tsx           # Animated number counter (GSAP ScrollTrigger)
    ClientMarquee.tsx     # Infinite horizontal scroll
    SectionDivider.tsx    # Animated horizontal line divider
  layout/
    Container.tsx         # Max-width + padding wrapper
    Navbar.tsx            # Fixed transparent nav, dark text, lowercase
    Footer.tsx            # Cream bg, minimal 2-row footer, MapPin + Mail icons
  sections/
    Hero.tsx              # Fullscreen video bg, cinematic GSAP entrance, parallax
    InteriorHero.tsx      # Reusable interior page hero (EyebrowLabel + SplitLines + scroll line)
    ProjectsPreview.tsx   # Editorial project rows with hover image
    AboutSnippet.tsx      # Short intro with floating founder photo (min-h-dvh)
    ServicesGrid.tsx      # Interactive 4×4 GSAP grid (desktop) / CSS grid (mobile)
    StatsBar.tsx          # Dark bg, orange icons, cream numbers, countUp
    ClientsSection.tsx    # Marquee with eyebrow + Handshake icon
    ContactSection.tsx    # Underline fields, floating labels, contact icons (min-h-dvh)
  animations/
    FadeUp.tsx            # Scroll entrance wrapper (GSAP ScrollTrigger)
    SplitLines.tsx        # Clip-mask text reveal animation
    StackCard.tsx         # Sticky stacking card with GSAP scroll snap (Lenis scrollTo)
public/
  images/                 # Project photos, founder photo
  video/                  # Hero background video
```

### Import Conventions
- Always import `gsap` and `ScrollTrigger` from `@/lib/gsap` — never from `'gsap'` directly
- Use constants from `@/lib/tokens` and `@/lib/animations` instead of hardcoding values
- Content comes from `@/content/*` — never hardcode company text in components
- Provider stack in layout: `LenisProvider` → `GSAPProvider` → content
- Access Lenis instance via `useLenisRef()` from `@/providers/LenisProvider` — returns a ref, read `.current` inside callbacks

## Design Language

**Single source of truth: [`.claude/DESIGN.md`](.claude/DESIGN.md)**

- **Aesthetic**: Light editorial — cream bg, near-black text, minimal color
- **Palette**: bg `#F5F3EE`, dark `#1A1A1A`, mid `#6B6B6B`, orange `#E8521A` (max 2 elements), navy `#2D3161` (max 1 section)
- **Font**: Arial only — all text uppercase with `letter-spacing: 0.02em`
- **Layout**: Full-width container (padded edges), 60ch body max, generous section padding
- **Motion**: GSAP scroll entrances (translateY 30 + opacity), simple opacity page transitions
- **Zero**: gradients, box shadows

## Stacking Cards + Scroll Snap (Home Page Only)

StackCards are **only used on the home page**. Interior pages (about, services, projects, contact) use plain scrolling with `pt-[var(--nav-height)]`.

On the home page, all sections except Hero are wrapped in `<StackCard index={N}>`. Cards use `position: sticky; top: var(--nav-height)` with increasing z-index so each card covers the previous one.

**Scroll snapping** (GSAP ScrollTrigger + Lenis `scrollTo`):
- Down: triggers at 80% viewport → snaps card to top
- Up: triggers at 20% from top → snaps card off-screen
- Global `isSnapping` module variable prevents simultaneous/chain snaps
- `ScrollTrigger.refresh()` runs while locked to avoid chain reactions
- Every section in a StackCard must be `min-h-dvh` for proper trigger spacing
- Short sections (StatsBar + ClientsSection) combined into one `h-dvh` card

## Interior Pages

- No InteriorHero — content starts directly below navbar
- No StackCards — plain scrolling layout
- Navbar always dark (black text); only home page has white text over hero
- Pages scroll to top on navigation (`window.scrollTo(0, 0)` in TransitionProvider)

## Rules

1. **Always reference `.claude/DESIGN.md` before creating or modifying any component or page.**
2. Import `gsap` and `ScrollTrigger` from `@/lib/gsap` — never from `'gsap'` directly.
3. Use constants from `@/lib/tokens` and `@/lib/animations` — never hardcode design values.
4. Content comes from `@/content/*` — never hardcode company text.
5. All text is uppercase globally (set on body). Do not override `text-transform`.
6. Orange appears on maximum 2 elements per page. Navy bg on maximum 1 section.
7. Every section inside a StackCard must have `min-h-dvh`.
8. Access Lenis via `useLenisRef()` — read `.current` inside callbacks, never at render time.
9. StackCards are **home page only** — never use on interior pages (causes dead scroll zones).
10. For GSAP scroll entrances, use `gsap.set()` + `gsap.to()` — never `gsap.from()` (broken `immediateRender` in GSAP 3.14+ with ScrollTrigger).
