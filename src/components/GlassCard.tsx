interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-xl ${className}`}>
      {children}
    </div>
  )
}
