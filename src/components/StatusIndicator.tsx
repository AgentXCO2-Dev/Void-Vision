interface StatusIndicatorProps {
  label: string
  active?: boolean
}

export default function StatusIndicator({ label, active = true }: StatusIndicatorProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-white/70">
      <span className={`h-2 w-2 rounded-full ${active ? 'bg-purple-400' : 'bg-white/30'}`} />
      {label}
    </div>
  )
}
