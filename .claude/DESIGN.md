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
| bg       | `#F5F3EE`               | Primary background — cream               |
| surface  | `#EDEAE3`               | Hover states, alt backgrounds            |
| dark     | `#1A1A1A`               | Primary text, headings                   |
| mid      | `#6B6B6B`               | Secondary text, descriptions             |
| muted    | `#9A9A9A`               | Tertiary text, metadata                  |
| border   | `rgba(26,26,26,0.12)`   | All borders and separators               |
| orange   | `#E8521A`               | Accent — max 2 elements per page         |
| navy     | `#2D3161`               | Max 1 section (stats bar only)           |
| white    | `#FFFFFF`               | Text on dark backgrounds                 |

**Absolute rules:**
- Zero gradients anywhere
- Zero box shadows anywhere
- Selection: orange bg + white text

---

## Typography

### Font
**DM Sans** — single font family. Weights: 400, 500, 600, 700.
No other fonts. Ever.

### Scale

| Class         | Size                           | Weight | Line-height | Notes                    |
|---------------|--------------------------------|--------|-------------|--------------------------|
| `.text-hero`  | `clamp(3rem, 8vw, 6.5rem)`    | 700    | 1.0         | Page headings            |
| `.text-heading` | `clamp(2rem, 4vw, 3.5rem)`  | 700    | 1.1         | Section headings         |
| `.text-title` | `clamp(1.25rem, 2.5vw, 1.75rem)` | 600 | 1.2         | Item titles              |
| `.text-eyebrow` | `0.75rem`                   | 400    | —           | Color: `#6B6B6B`         |
| `.text-body`  | `1rem`                         | 400    | 1.75        | Max-width: 60ch          |
| `.text-sm`    | `0.875rem`                     | 400    | 1.6         | Descriptions             |
| `.text-xs`    | `0.75rem`                      | 400    | —           | Metadata, labels         |

### Hard Typography Rules
- **NEVER** use `text-transform: uppercase` anywhere
- **NEVER** use `letter-spacing` tricks anywhere
- All text is sentence case or lowercase
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
| Logo         | "JARACON" — DM Sans 700, 1.1rem, dark           |
| Links        | lowercase, DM Sans 400, 0.9rem, dark            |
| Hover        | opacity 0.6                                      |
| Active       | font-weight 500                                  |
| CTA          | "reach out" with LoopText                        |
| Mobile       | 2-line hamburger → cream overlay                 |

---

## Hero — `components/sections/Hero.tsx`

- Cream background — no photo bg, no overlay
- Eyebrow: "epc contracting excellence"
- H1: "Building the future\nfrom ground up." — sentence case
- Subtitle: mid color, max 45ch
- Floating photo right (overlaps heading area)
- Scroll indicator: "scroll to explore" + bouncing arrow
- Load: staggered fade-up (GSAP timeline)

---

## Component Patterns

### Project Rows — editorial rows, NEVER grid cards
- Border bottom: `rgba(26,26,26,0.12)`
- Number + title + location + status badge + client + year + arrow
- Hover: bg → surface, arrow slides in, title → orange
- Hover image follows cursor (GSAP ticker, lerp 0.1)

### Service Tiles — horizontal-scrolling tile cards
- Full-width horizontal scroll, snap scrolling, hidden scrollbar
- Tile: 300px wide, border, p-6, number + name + description (3 lines) + category
- Hover: bg → surface, name → orange

### Stats Bar — ONLY dark section
- `#1A1A1A` background, cream/white text
- 4 columns with CountUp animation
- GSAP ScrollTrigger, power2.out, 2s

### Client Marquee
- CSS keyframes, 30s linear infinite
- Text at heading size, dark/10 opacity
- Hover: dark/25

### Contact — underline fields only
- No box borders anywhere
- Floating labels: muted → orange on focus
- Submit: LoopText "send message →"

### Page Transitions
- Simple opacity fade (Framer Motion)
- Enter: 0.35s, Exit: 0.25s

### Scroll Entrance — `FadeUp` / `useFadeUp`
- translateY(30px) → 0 + opacity 0 → 1
- Trigger: element enters at 88% viewport
- Duration: 0.6s, ease: power3.out
- Plays once

### Vertical Text Loop — all CTAs
- Clip-based overflow hidden, height 1.2em
- Hover: translateY(-50%), 0.35s cubic-bezier(0.76, 0, 0.24, 1)

---

## Footer — `components/layout/Footer.tsx`

- Cream bg, border-top
- Logo + tagline left, nav links right
- Bottom: copyright + email + legal links
- DM Sans 400, text-sm/text-xs, mid/muted colors

---

## Changelog

| Date       | Change                                          | Files affected |
|------------|--------------------------------------------------|----------------|
| 2026-03-10 | Complete redesign: dark→light theme, 3 fonts→DM Sans, new file structure, cream bg, no uppercase, services as rows, simple opacity transitions | All files |
| 2026-03-10 | Initial design system + an-vas alignment          | All files |
