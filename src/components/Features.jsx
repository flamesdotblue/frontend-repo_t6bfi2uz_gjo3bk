import { Rocket, Shield, Sparkles, Gauge } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Rocket,
    title: 'Blazing performance',
    desc: 'Optimized assets and slick interactions for a seamless feel.',
  },
  {
    icon: Shield,
    title: 'Robust foundation',
    desc: 'Built with reliable libraries and accessible components.',
  },
  {
    icon: Sparkles,
    title: 'Polished aesthetics',
    desc: 'Subtle motion, depth, and a refined industrial palette.',
  },
  {
    icon: Gauge,
    title: 'Smooth experience',
    desc: 'Fluid scrolling and transitions for a premium touch.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Crafted for impact</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">A compact set of utilities and components to build stunning, high-performance websites with confidence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="rounded-xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-900 text-white">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
