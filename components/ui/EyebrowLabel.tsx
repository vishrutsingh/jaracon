interface EyebrowLabelProps {
  text: string
  className?: string
}

export default function EyebrowLabel({ text, className = '' }: EyebrowLabelProps) {
  return (
    <p className={`text-eyebrow ${className}`}>{text}</p>
  )
}
