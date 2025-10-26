import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import ContactForm from './components/ContactForm'

function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Reglass — All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a href="#" className="hover:text-gray-900">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.06),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.06),transparent_60%)]">
      <Header />
      <main>
        <Hero />
        <Features />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
