# Design Guidelines Page — 10 Brand Combos with Tab Navigation

## Context

Client needs to pick a typography + color direction for the JARACON rebrand. The `/design-system` page will show 6 combos via a tab bar — each tab renders the full design system (tokens, typography, components) in that combo's fonts and colors. Same editorial design language throughout, only the ingredients change.

**No existing project tokens, styles, or components are modified.** Everything is self-contained in the design-system page with inline styles.

---

## The 6 Combos

All share: uppercase, 0.02em tracking, cream-tone bg, near-black text, editorial whitespace, no gradients, no shadows.

| # | Display Font | Body Font | bg | surface | dark | mid | muted | accent |
|---|---|---|---|---|---|---|---|---|
| 1 | Playfair Display | DM Sans | `#F2F0EC` | `#D4C4B0` | `#1A1714` | `#3D3730` | `#8A857D` | `#A8875A` bronze |
| 2 | Cormorant Garamond | Outfit | `#F0EBE3` | `#C9B99A` | `#2C2418` | `#4A4537` | `#9C957E` | `#B86B4A` terracotta |
| 3 | EB Garamond | Inter | `#F4F2EE` | `#CFC7BA` | `#1C1917` | `#44403C` | `#8C8680` | `#7C6E58` dark khaki |
| 4 | Syne | IBM Plex Sans | `#F1F1EF` | `#D0CCC5` | `#121212` | `#3B3B3B` | `#888888` | `#5C5C5C` monochrome |
| 5 | Fraunces | Manrope | `#EDE9E3` | `#C5B694` | `#141820` | `#2E3340` | `#7D8491` | `#1E2D4D` deep navy |
| 6 | Space Grotesk | DM Sans | `#F3F2F0` | `#D1CCC4` | `#151413` | `#3A3835` | `#87847F` | `#8B6D4B` warm umber |
| 7 | Bodoni Moda | Libre Franklin | `#F5F0E8` | `#D8C9B5` | `#1B1510` | `#3E352B` | `#918578` | `#9B5E3C` burnt sienna |
| 8 | Instrument Serif | Satoshi (Geist) | `#EEECEA` | `#C8C3BB` | `#18171A` | `#36353A` | `#807E84` | `#6B5B8D` muted plum |
| 9 | Libre Caslon Display | Karla | `#F3EDE5` | `#CEC1AD` | `#201A12` | `#4D4538` | `#948A7A` | `#6A7D5E` sage green |
| 10 | Bricolage Grotesque | Plus Jakarta Sans | `#F0F0EE` | `#D3CFC7` | `#131315` | `#38373C` | `#85848A` | `#C4694A` burnt coral |

---

## Files Modified

| File | Changes |
|------|---------|
| `app/layout.tsx` | Load all Google Fonts via `next/font/google`, expose as CSS vars on `<html>` |
| `app/design-system/page.tsx` | Full rewrite — tab bar + 3 sections per combo (tokens, typography, components) |

---

## Step 1: Font Loading — `app/layout.tsx`

Import all fonts used across the 10 combos:

**Display:** Playfair_Display, Cormorant_Garamond, EB_Garamond, Syne, Fraunces, Space_Grotesk, Bodoni_Moda, Instrument_Serif, Libre_Caslon_Display, Bricolage_Grotesque
**Body:** DM_Sans, Outfit, Inter, IBM_Plex_Sans, Manrope, Libre_Franklin, Geist, Karla, Plus_Jakarta_Sans

Each gets `variable: '--font-<name>'`, `display: 'swap'`, appropriate weights/styles.
All CSS variable classes applied to `<html>` tag.

Existing pages unaffected — they reference `Arial` from globals.css.

---

## Step 2: Rewrite Design System Page — `app/design-system/page.tsx`

### Page Structure

```
┌─────────────────────────────────────────────────────┐
│  PROPOSED BRAND IDENTITY                            │
│  Select a direction to preview                      │
│                                                     │
│  [1] [2] [3] ... [10]        ← tab bar             │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ── TOKENS ──────────────────────────────────────   │
│  Color swatches · Spacing · Design rules            │
│                                                     │
│  ── TYPOGRAPHY ──────────────────────────────────   │
│  Full type scale · Font weights · Dark specimens    │
│                                                     │
│  ── COMPONENTS ──────────────────────────────────   │
│  Navbar · Eyebrow · Section headings (light+dark)   │
│  Stats bar · CTA · Project row · Service tile       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Data Structure

```tsx
const combos = [
  {
    id: 1,
    name: 'Warm Editorial',
    displayFont: 'var(--font-playfair), Georgia, serif',
    bodyFont: 'var(--font-dm-sans), "DM Sans", sans-serif',
    displayName: 'Playfair Display',
    bodyName: 'DM Sans',
    colors: { bg, surface, dark, mid, muted, accent },
  },
  // ... 5 more
]
```

### Tab Bar

- 10 pill-shaped tabs showing combo number + display font name
- Active tab styled with the active combo's `dark` color bg + white text
- Inactive tabs: border only
- `useState` toggles the active combo — entire page below re-renders with that combo's values

### Section A: Tokens

Everything below uses the active combo's colors via inline `style={{ backgroundColor, color }}`.

1. **Color palette** — Grid of 6 swatches (bg, surface, dark, mid, muted, accent). Each is a `aspect-[4/3]` block with the hex value, token name, and a short usage label underneath.

2. **Spacing** — Same values for all combos (unchanged from current site): section-padding, container-padding, nav-height, text-max. Displayed as rows with token name + value.

3. **Design rules** — Same for all combos:
   - All text uppercase
   - Letter-spacing 0.02em
   - No gradients
   - No box shadows
   - Body copy max 60ch
   - Accent used sparingly (dots, hovers, CTAs)

### Section B: Typography

All text rendered in the active combo's fonts via inline `fontFamily`.

1. **Type scale** — Each level as a row with class label, spec, and sample text:
   - `.text-hero` → display font 700 → "THINK BIG, CONSTRUCT BIGGER."
   - `.text-heading` → display font 700 → "BUILDING THE FUTURE OF QATAR"
   - `.text-title` → body font 600 → "WATERPROOFING WORKS"
   - `.text-eyebrow` → body font 500 → "SELECTED PROJECTS"
   - `.text-body` → body font 400 → paragraph about JARACON (60ch max)
   - `.text-sm` → body font 400 → "DESCRIPTIONS AND SECONDARY TEXT USE THIS SMALLER SIZE."
   - `.text-xs` → body font 400 → "METADATA, LABELS, AND FINE PRINT."

2. **Hero marquee preview** — Full-width dark strip with the combo's `dark` bg. Large italic display font text "THINK BIG, CONSTRUCT BIGGER." at `clamp(4rem, 12vw, 8rem)` scrolling via existing `animate-scroll-hero` class.

3. **Font weights** — Both fonts shown at all loaded weights. Display font (400, 700, 700 italic) and body font (400, 500, 600, 700) each on their own row with weight label and "THE QUICK BROWN FOX" sample.

4. **Dark typography** — Heading + body text on the combo's `dark` bg with `white` text, to show contrast.

### Section C: Components

Inline-styled mockups of key UI patterns. Each uses the active combo's fonts and colors.

1. **Navbar mock** — Full-width bar with:
   - "JARACON" in display font (bold) on the left
   - "ABOUT · SERVICES · PROJECTS" links in body font on the right
   - "REACH OUT →" CTA
   - Light version (combo's `bg`) and dark version (combo's `dark` bg with white text)

2. **Eyebrow label** — Small dot (accent color) + text in body font. Shows 3 examples: "SHORT INTRO", "SELECTED PROJECTS", "OUR SERVICES"

3. **Section heading** — Display font heading + body font subtitle + eyebrow. On light bg:
   - Eyebrow: "ABOUT US"
   - Heading: "TRUST, INNOVATION, AND QUALITY."
   - Subtitle: "JARACON EPC PROJECTS IS A LEADING CONSTRUCTION COMPANY BASED IN DOHA, QATAR."

4. **Section heading (dark)** — Same pattern on combo's `dark` bg with white text:
   - Eyebrow: "SOLAR CAPACITY"
   - Heading: "800MW AND COUNTING"
   - Subtitle: "POWERING THE NATION WITH RENEWABLE ENERGY."

5. **Stats row** — 4 stat blocks on dark bg: "800MW" / "500MW" / "3" / "8+" with labels underneath. Numbers in display font, labels in body font.

6. **Project row** — Editorial row: index number (display font, large muted) + project title (body font, 600) + arrow. 3 rows with a top border.

7. **Service tile** — Small card with the combo's `surface` bg, service name in body font 600, description in body font 400. Shows 2-3 tiles in a row.

8. **CTA button** — Text link "REQUEST QUOTATION →" in body font with accent-colored underline on hover (use CSS transition via inline style + onMouseEnter/Leave or a small local component).

---

## What Is NOT Changed

- `app/globals.css` — untouched
- `lib/tokens.ts` — untouched
- `.claude/DESIGN.md` — untouched
- `CLAUDE.md` — untouched
- All existing components and pages — untouched
- No new files besides the rewrite of the existing design-system page

---

## Verification

1. `bun dev` → `/design-system`
2. Tab bar switches between all 6 combos — each renders distinct fonts and colors
3. All 11 fonts load correctly (Network tab)
4. All other pages (`/`, `/about`, `/services`, etc.) still render in Arial with existing palette
5. Tokens section: swatches show correct hex values, accent color is visually distinct
6. Typography section: hero marquee animates, dark specimens have good contrast
7. Components section: navbar mock, section headings, stats, project rows, service tiles all render correctly with each combo's values
8. Mobile: tab bar wraps or scrolls, sections stack, everything remains readable
