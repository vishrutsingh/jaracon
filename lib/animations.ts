export const easings = {
  expo: 'expo.out',
  smooth: 'power2.out',
  snappy: 'power3.out',
} as const

export const durations = {
  ctaLoop: 0.35,
  pageIn: 0.35,
  pageOut: 0.25,
  imageSlide: 0.5,
} as const

export const projectHover = {
  lerp: 0.1,
  imageSize: { w: 400, h: 280 },
} as const

export const marquee = {
  speed: 50,
  gap: '4rem',
} as const

export const scrollReveal = {
  y: 30,
  duration: 0.6,
  ease: 'power3.out',
  stagger: 0.08,
  triggerStart: 'top 88%',
} as const

export const gridSwap = {
  duration: 0.7,
  ease: 'power2.inOut',
  resetDuration: 0.8,
  resetEase: 'power2.inOut',
} as const

export const cardSnap = {
  snapDuration: 0.8,
} as const

export const heroEntrance = {
  lineDelay: 0.1,
  lineY: 30,
  lineDuration: 0.7,
  smallY: 20,
  smallDuration: 0.5,
  ease: 'power3.out',
} as const
