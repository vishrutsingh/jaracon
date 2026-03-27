# DESIGN.md — JARACON EPC Design System

This is the **single source of truth** for all visual, typographic, motion, and interaction design decisions. Every component and future UI change must conform to these specifications. When this file conflicts with component code, this file wins.

---

## Core Aesthetic

Light editorial design matching an-vas.webflow.io almost 1:1. Cream backgrounds, near-black text, minimal accent color, generous whitespace, editorial softness. Not cold/corporate — warm and considered.

**Reference:** an-vas.webflow.io

---

## Color Palette

| Token    | Value                   | Usage                                    |
|----------|-------------------------|------------------------------------------|
| bg       | `#f3f3f4`               | Primary background — platinum            |
| surface  | `#d9c5b2`               | Hover states, alt backgrounds — pale-oak |
| dark     | `#14110f`               | Primary text, headings — pitch-black     |
| mid      | `#34312d`               | Secondary text, descriptions — graphite  |
| muted    | `#7e7f83`               | Tertiary text, metadata — grey           |
| border   | `rgba(26,26,26,0.12)`   | All borders and separators               |
| orange   | `#E8521A`               | Defined but unused — accent is graphite (mid) |
| navy     | `#2D3161`               | Max 1 section (stats bar only)           |
| white    | `#FFFFFF`               | Text on dark backgrounds                 |

**Absolute rules:**
- Zero gradients anywhere
- Zero box shadows anywhere
- Accent color is graphite (`--mid`) — no orange, teal, amber, slate in UI
- Selection: graphite bg + white text

---

## Typography

### Font
**Arial** (Helvetica, sans-serif fallback) — single system font stack.
All text is **uppercase** with `letter-spacing: 0.02em` applied globally via body.

### Scale

| Class         | Size                           | Weight | Line-height | Notes                    |
|---------------|--------------------------------|--------|-------------|--------------------------|
| `.text-hero`  | `clamp(3rem, 8vw, 6.5rem)`    | 700    | 1.0         | Page headings            |
| `.text-heading` | `clamp(2rem, 4vw, 3.5rem)`  | 700    | 1.1         | Section headings         |
| `.text-title` | `clamp(1.25rem, 2.5vw, 1.75rem)` | 600 | 1.2         | Item titles              |
| `.text-eyebrow` | `0.75rem`                   | 400    | —           | Color: `var(--dark)`     |
| `.text-body`  | `1rem`                         | 400    | 1.75        | Max-width: 60ch          |
| `.text-sm`    | `0.875rem`                     | 400    | 1.6         | Descriptions             |
| `.text-xs`    | `0.75rem`                      | 400    | —           | Metadata, labels         |

### Hard Typography Rules
- All text is **uppercase** globally (`text-transform: uppercase` on body)
- `letter-spacing: 0.02em` on body for readability
- Body copy always max 60ch

---

## Layout

| Constant          | Value                         |
|-------------------|-------------------------------|
| Container         | Full-width, padded edges only |
| Text max          | `60ch`                        |
| Section padding   | `clamp(5rem, 10vw, 8rem)`    |
| Container padding | `clamp(1.5rem, 6vw, 5rem)`   |
| Nav height        | `68px`                        |

---

## Navigation — `components/layout/Navbar.tsx`

| Property     | Value                                          |
|--------------|-------------------------------------------------|
| Height       | `68px`, always transparent, no scroll effects   |
| Logo         | "JARACON" — Arial 700, 1.1rem                   |
| Links        | about, services, projects — Arial 400, 0.9rem   |
| Hover        | opacity 0.6                                      |
| Active       | font-weight 500                                  |
| CTA          | "reach out →" with LoopText                     |
| Mobile       | 2-line hamburger → cream overlay                 |
| Auto-color   | `elementsFromPoint()` + luminance — white text on dark bg, dark text on light bg |

---

## Hero — `components/sections/Hero.tsx`

- Fullscreen video background with dark overlay
- Giant scrolling marquee: "THINK BIG, CONSTRUCT BIGGER." in italic ~20vw bold white
- Text is so large only ~half fits on screen — rest scrolls in from offscreen right
- Marquee pinned to bottom of viewport (`flex items-end`)
- CSS `animate-scroll-hero` (30s linear infinite, reuses `scroll-x` keyframe)
- Load: cinematic GSAP timeline (overlay lift → marquee fades in + rises)
- Video parallax: y -15% on scroll (ScrollTrigger scrub)
- No description, no CTA, no Qatar tag, no scroll indicator — just the marquee

---

## Stacking Card Sections — `components/animations/StackCard.tsx`

All sections (except Hero) are wrapped in `<StackCard>`. Each card sticks below the navbar (`position: sticky; top: 68px`) with increasing z-index. The next card slides cleanly over the previous one — no dimming, no scaling.

### Scroll Snapping (GSAP + Lenis)
- **Scroll down**: When a card's top crosses 80% of the viewport, Lenis snaps it to `top: 68px`
- **Scroll up**: When a card's top hits 20% from the top, Lenis snaps it off-screen to reveal the previous card
- **Global lock**: Module-level `isSnapping` flag prevents simultaneous/chain snaps
- **Lenis `scrollTo`** with `force: true`, `lock: true`, `power3.out` easing, 0.8s duration
- After snap, `ScrollTrigger.refresh()` runs while `isSnapping` is still true to prevent chain triggers

### Rules
- Every section inside a StackCard must have `min-h-dvh` — ensures snap triggers are properly spaced
- Hero is NOT wrapped in StackCard — it scrolls normally
- Footer is NOT wrapped in StackCard — scrolls normally after all cards
- Short sections (StatsBar + ClientsSection) are combined into one `h-dvh` StackCard

---

## Interior Pages

- **No InteriorHero** — interior pages (about, projects, contact) have no hero section
- Content starts immediately below the navbar with `pt-[var(--nav-height)]`
- **Services page** uses StackCards with `h-dvh` sections (editorial spreads per category)
- Other interior pages use plain scrolling — no StackCards
- **Navbar auto-detects** background color via `elementsFromPoint()` + luminance calculation — switches white/dark text automatically
- Pages scroll to top on navigation and reload (`history.scrollRestoration = 'manual'` + `useEffect` in TransitionProvider)

## Services Page — `app/services/page.tsx`

Editorial magazine layout with StackCards. Each category has a unique spread:

1. **OpeningHero** (StackCard 1, bg-surface): "S E R V I C E S" centered, "15" watermark
2. **Structural** (StackCard 2, bg-bg): Blueprint layout — dashed border, 3 services with connecting lines
3. **Finishing** (StackCard 3, bg-dark): Dark header band, 3×2 specimen grid, white text
4. **Infrastructure** (StackCard 4, bg-bg): 50/50 glass blocks with letter-spaced names
5. **Buildings** (StackCard 5, bg-bg): Asymmetric 12-col grid with double-rule "fold" separator
6. **Energy** (StackCard 6, bg-dark): Glass-dark cards, broken-word typography
7. **ClosingCTA** (StackCard 7, bg-bg): "READY TO BUILD?" with SplitLines
8. **ContactSection**: Unwrapped at bottom

All section headings use SplitLines. Content uses staggered FadeUp animations.

---

## Component Patterns

### Interactive Services Grid — `components/sections/ServicesGrid.tsx`

Desktop (pointer: fine):
- Full-viewport 4×4 grid (GSAP positioned)
- 15 service tiles + 1 "view details" CTA tile = 16 tiles filling the grid
- On hover: CTA tile swaps position with hovered tile (GSAP `power2.inOut`, 0.7s)
- On grid leave: all tiles reset to default positions (`power2.inOut`, 0.8s)
- 64px bottom margin in grid calculation for whitespace
- All tiles: `cursor-default select-none` — no text cursor on hover

**Contextual detail reveal:**
- Tiles adjacent to the CTA (up/down/left/right neighbors) are **active** — show number + name + gray icon (`bg-dark/5`, `text-mid`) + auto-scrolling description
- All other tiles are **inactive** — show number + name only (icon, description hidden via `opacity-0`)
- As CTA swaps on hover, new neighbors activate, old ones deactivate (CSS `transition-opacity duration-300`)
- No category labels on desktop tiles
- Description auto-scrolls vertically (CSS `@keyframes scroll-desc-up`, 20s `ease-in-out`, looping) with top/bottom fade mask (`mask-image linear-gradient`)
- Corner CTA = 2 active neighbors, edge = 3, interior = 4
- Hook returns `activeTiles: number[]` — recalculated on every swap and reset

Mobile (touch):
- Static CSS grid (`grid-cols-1 sm:grid-cols-2 md:grid-cols-3`)
- All tiles always show full details (no contextual reveal)

Hook: `hooks/useServicesGrid.ts` — position math, swap logic, neighbor calculation, `activeTiles` state, ResizeObserver, pointer detection

### Project Rows — editorial rows, NEVER grid cards
- Border bottom: `rgba(26,26,26,0.12)`
- Number + title + location + status badge + client + year + ArrowRight icon
- Hover: bg → surface, arrow slides in, title → graphite (mid)
- Hover image follows cursor (GSAP ticker, lerp 0.1)

### Stats Bar — dark section
- `#1A1A1A` background, cream/white text
- lucide icons (Sun, Factory, FolderKanban, Users) in graphite above each stat
- 4 columns with CountUp animation (GSAP ScrollTrigger, power2.out, 2s)
- Combined with ClientsSection in one `h-dvh` StackCard on home page

### Client Marquee
- CSS keyframes, 30s linear infinite
- Text at heading size, dark/10 opacity (or white/10 on dark bg)
- Hover: dark/25

### Contact — underline fields only
- No box borders anywhere
- Floating labels: muted → graphite on focus
- Contact details with MapPin, Phone, Mail icons (`bg-mid/8`)
- Submit: LoopText "send message →"
- `min-h-dvh` when inside StackCard

### Page Transitions
- Simple opacity fade (Framer Motion)
- Enter: 0.35s, Exit: 0.25s

### Scroll Entrance — `FadeUp` / `useFadeUp`
- `gsap.set()` immediately hides (opacity: 0, y: 30), then `gsap.to()` reveals on scroll
- **Never use `gsap.from()`** for scroll entrances — use `gsap.set()` + `gsap.to()` pattern to avoid `immediateRender` issues with GSAP 3.14+ and ScrollTrigger
- Trigger: element enters at 88% viewport
- Duration: 0.6s, ease: power3.out
- Plays once

### Vertical Text Loop — all CTAs
- Clip-based overflow hidden, height 1.2em
- Hover: translateY(-50%), 0.35s cubic-bezier(0.76, 0, 0.24, 1)

### EyebrowLabel
- Graphite dot (w-1.5 h-1.5 bg-mid) + text-eyebrow text
- Used on all section labels

### SectionDivider
- GSAP ScrollTrigger scaleX 0 → 1 draw-in animation
- Used between sections on interior pages (NOT on home page — StackCards replace dividers)

---

## Footer — `components/layout/Footer.tsx`

- Cream bg, border-top
- Logo + tagline left, nav links right
- MapPin + Mail icons from lucide-react
- Bottom: copyright + email + legal links
- DM Sans 400, text-sm/text-xs, mid/muted colors

---

## Changelog

| Date       | Change | Files affected |
|------------|--------|----------------|
| 2026-03-10 | Complete redesign: dark→light theme, 3 fonts→DM Sans, cream bg, no uppercase | All files |
| 2026-03-10 | Expanded palette (teal, amber, slate), lucide icons, film grain, video parallax, section dividers | Multiple |
| 2026-03-10 | Reverted to orange-only palette — removed teal, amber, slate | globals.css, tokens.ts, all components |
| 2026-03-10 | Interior page consistency — InteriorHero component, SplitLines headings, icons on about page | InteriorHero, about, services, projects, contact pages |
| 2026-03-10 | Interactive services grid — 4×4 GSAP grid with bouncy CTA swap animation | ServicesGrid, useServicesGrid, animations.ts, ServiceTile |
| 2026-03-10 | Added 3 new services (Excavation, MEP, Landscaping) — fills 4×4 grid completely | content/services.ts |
| 2026-03-10 | Stacking card sections — CSS sticky + z-index, cards overlap on scroll | StackCard, all page files |
| 2026-03-10 | GSAP scroll snap — Lenis scrollTo with global lock, 80% down / 20% up triggers | StackCard, LenisProvider, animations.ts |
| 2026-03-10 | Combined StatsBar + ClientsSection into one h-dvh StackCard | page.tsx |
| 2026-03-10 | min-h-dvh on AboutSnippet + ContactSection for consistent card heights | AboutSnippet, ContactSection |
| 2026-03-10 | Typography: switched from DM Sans to Arial, added global uppercase + letter-spacing | layout.tsx, globals.css |
| 2026-03-10 | Removed InteriorHero from all interior pages — content starts below navbar | about, services, projects, contact pages |
| 2026-03-10 | Navbar always dark on interior pages — only white on home hero | Navbar.tsx |
| 2026-03-10 | Scroll-to-top on page navigation | TransitionProvider.tsx |
| 2026-03-10 | Removed StackCards from interior pages — only home page uses them | about, services, projects, contact pages |
| 2026-03-10 | Fixed FadeUp: switched from gsap.from() to gsap.set()+gsap.to() pattern | useFadeUp.ts |
| 2026-03-10 | Contextual detail reveal on services grid — only CTA neighbors show icon + auto-scrolling description | ServicesGrid, useServicesGrid, animations.ts, globals.css |
| 2026-03-10 | Grid swap easing: back.out → power2.inOut for smoother motion | animations.ts |
| 2026-03-10 | CTA tile renamed: "let's talk" → "view details", "reach out" → "learn more" | ServicesGrid.tsx |
| 2026-03-10 | Glassmorphism: glass/glass-dark utility classes, useGlassEffect cursor-tracking hook | globals.css, tokens.ts, useGlassEffect, ServicesGrid, ServiceTile, StatsBar |
| 2026-03-10 | Palette swap: eggshell/almond-cream/almond-silk/rosy-taupe/taupe warm tones | globals.css, tokens.ts, DESIGN.md, CLAUDE.md |
| 2026-03-10 | Scroll-to-top on reload: `history.scrollRestoration = 'manual'` + `useEffect` | TransitionProvider.tsx |
| 2026-03-10 | Finishing section: equal-height cards with `grid-rows-2` + `pb-[var(--nav-height)]` | services/page.tsx |
