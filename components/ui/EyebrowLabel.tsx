interface EyebrowLabelProps {
  text: string
  className?: string
}

export default function EyebrowLabel({ text, className = '' }: EyebrowLabelProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-mid" />
      <p className="text-eyebrow">{text}</p>
    </div>
  )
}
