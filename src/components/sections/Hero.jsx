import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand text-brand-fg">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent"
        >
          CBSE Co-ed Boarding &amp; Day School · Dehradun
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl"
        >
          Welcome to Tulas International School
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-white/80"
        >
          A 22-acre campus where academics, sports and character grow together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button href="#admission">Apply Now</Button>
          <Button href="#about" variant="light">Explore the Campus</Button>
        </motion.div>
      </div>
    </section>
  )
}