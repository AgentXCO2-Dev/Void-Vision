export default function Sidebar() {
  const items = ['Chat', 'Models', 'Vision', 'Memory', 'History', 'Settings', 'Logs']

  return (
    <aside className="w-64 min-h-screen border-r border-purple-500/20 bg-black/20 backdrop-blur-xl p-5">
      <h2 className="text-2xl font-bold text-purple-400 mb-8">VoidAI</h2>
      <nav className="space-y-2">
        {items.map((item) => (
          <button key={item} className="w-full rounded-xl px-4 py-3 text-left text-white/70 hover:bg-purple-500/20 hover:text-white transition">
            {item}
          </button>
        ))}
      </nav>
    </aside>
  )
}
