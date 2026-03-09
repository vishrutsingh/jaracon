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
        <EyebrowLabel text={eyebrow} className={`mb-4 ${dark ? 'text-white/50' : ''}`} />
      )}
      <h2
        className="text-heading"
        style={dark ? { color: 'var(--white)' } : undefined}
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      {sub && (
        <p className={`text-body mt-4 ${dark ? 'text-white/60' : 'text-mid'}`}>{sub}</p>
      )}
    </div>
  )
}
