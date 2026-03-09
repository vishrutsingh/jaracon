'use client'

interface LoopTextProps {
  label: string
  className?: string
}

export default function LoopText({ label, className = '' }: LoopTextProps) {
  return (
    <span className={`text-loop ${className}`}>
      <span className="text-loop__inner">
        <span className="text-loop__text">{label}</span>
        <span className="text-loop__text">{label}</span>
      </span>
    </span>
  )
}
