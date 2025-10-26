import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="hero">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient Overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-36 pb-24">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Carbon-grade innovation for modern web experiences
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-lg md:text-xl text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          A sleek foundation with 3D interactions, motion, and refined UI components to ship premium sites.
        </motion.p>
        <motion.div
          className="mt-8 flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-gray-800">Contact us</a>
          <a href="#features" className="inline-flex items-center px-5 py-3 rounded-md border border-gray-300 bg-white/80 hover:bg-white">Explore features</a>
        </motion.div>
      </div>
    </section>
  )
}
