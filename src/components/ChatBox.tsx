export default function ChatBox() {
  return (
    <section className="flex-1 flex flex-col p-6">
      <div className="flex-1 rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-6">
        <p className="text-white/60">VoidAI conversation area ready.</p>
      </div>
      <input className="mt-4 rounded-xl bg-white/10 border border-purple-500/20 px-4 py-3 text-white outline-none" placeholder="Message VoidAI..." />
    </section>
  )
}
