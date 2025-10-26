import { useState } from 'react'
import { Menu, X, Rocket } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-gray-900">Reglass</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#showcase" className="hover:text-gray-900 transition-colors">Showcase</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          <a href="#" className="inline-flex items-center px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors">Get Started</a>
        </nav>
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 text-gray-700">
            <a href="#features" className="py-2">Features</a>
            <a href="#showcase" className="py-2">Showcase</a>
            <a href="#contact" className="py-2">Contact</a>
            <a href="#" className="py-2 inline-flex items-center justify-center rounded-md bg-gray-900 text-white">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}
