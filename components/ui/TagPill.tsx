interface TagPillProps {
  label: string
  active?: boolean
  onClick?: () => void
}

export default function TagPill({ label, active = false, onClick }: TagPillProps) {
  return (
    <button
      onClick={onClick}
      className={`text-xs px-4 py-2 border rounded-full transition-colors duration-200 ${
        active
          ? 'bg-dark text-white border-dark'
          : 'bg-transparent text-mid border-border hover:border-dark/30'
      }`}
    >
      {label}
    </button>
  )
}
