export default function TopBar() {
  return (
    <header className="h-16 border-b border-purple-500/20 bg-black/20 backdrop-blur-xl flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">VoidAI</h1>
      <div className="flex items-center gap-3 text-sm text-white/60">
        <span className="h-2 w-2 rounded-full bg-purple-400" />
        Online
      </div>
    </header>
  )
}
