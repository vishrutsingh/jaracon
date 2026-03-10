import EyebrowLabel from './EyebrowLabel'

interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  sub?: string
  className?: string
  dark?: boolean
}

export default function SectionHeading({ eyebrow, heading, sub, className = '', dark = false }: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <EyebrowLabel text={eyebrow} className={`mb-4 ${dark ? '[&_span]:bg-white/50 [&_p]:text-white/50' : ''}`} />
      )}
      <h2 className={`text-heading ${dark ? 'text-white' : ''}`}>
        {heading}
      </h2>
      {sub && (
        <p className={`text-body mt-4 ${dark ? 'text-white/60' : 'text-mid'}`}>{sub}</p>
      )}
    </div>
  )
}
