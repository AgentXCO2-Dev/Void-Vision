import Sidebar from './components/Sidebar'
import ChatBox from './components/ChatBox'

export default function App() {
  return (
    <main className="min-h-screen bg-void-900 text-white flex">
      <Sidebar />
      <ChatBox />
    </main>
  )
}
