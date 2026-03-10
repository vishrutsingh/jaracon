export const colors = {
  bg: '#f3f3f4',
  surface: '#d9c5b2',
  dark: '#14110f',
  mid: '#34312d',
  muted: '#7e7f83',
  border: 'rgba(26,26,26,0.12)',
  orange: '#E8521A',
  navy: '#2D3161',
  white: '#FFFFFF',
} as const

export const typography = {
  hero: {
    fontFamily: 'var(--font-dm-sans)',
    size: 'clamp(3rem, 8vw, 6.5rem)',
    weight: 700,
    lineHeight: 1.0,
  },
  heading: {
    fontFamily: 'var(--font-dm-sans)',
    size: 'clamp(2rem, 4vw, 3.5rem)',
    weight: 700,
    lineHeight: 1.1,
  },
  title: {
    fontFamily: 'var(--font-dm-sans)',
    size: 'clamp(1.25rem, 2.5vw, 1.75rem)',
    weight: 600,
    lineHeight: 1.2,
  },
  eyebrow: {
    fontFamily: 'var(--font-dm-sans)',
    size: '0.75rem',
    weight: 400,
    color: '#34312d',
  },
  body: {
    fontFamily: 'var(--font-dm-sans)',
    size: '1rem',
    weight: 400,
    lineHeight: 1.75,
    maxWidth: '60ch',
  },
  sm: {
    fontFamily: 'var(--font-dm-sans)',
    size: '0.875rem',
    weight: 400,
    lineHeight: 1.6,
  },
  xs: {
    fontFamily: 'var(--font-dm-sans)',
    size: '0.75rem',
    weight: 400,
  },
  navLink: {
    fontFamily: 'var(--font-dm-sans)',
    size: '0.9rem',
    weight: 400,
  },
} as const

export const glass = {
  bg: 'rgba(255, 255, 255, 0.14)',
  bgHover: 'rgba(255, 255, 255, 0.18)',
  border: 'rgba(255, 255, 255, 0.25)',
  blur: 20,
  darkBg: 'rgba(255, 255, 255, 0.06)',
  darkBgHover: 'rgba(255, 255, 255, 0.1)',
  darkBorder: 'rgba(255, 255, 255, 0.15)',
} as const

export const layout = {
  textMax: '60ch',
  sectionPadding: 'clamp(5rem, 10vw, 8rem)',
  containerPadding: 'clamp(1.5rem, 6vw, 5rem)',
  navHeight: 68,
} as const
