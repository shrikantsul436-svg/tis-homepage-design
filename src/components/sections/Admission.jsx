import { useState } from 'react'
import Reveal from '../animation/Reveal'
import Button from '../ui/Button'

const FIELD = 'w-full rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-2 focus:outline-accent'

export default function Admission() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="admission" className="bg-brand py-20 text-brand-fg">
      <Reveal className="mx-auto max-w-xl px-4">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Begin your child’s journey</h2>
        <p className="mt-3 text-center text-white/80">Share your details and our admissions team will get in touch.</p>

        {sent ? (
          <p role="status" className="mt-8 rounded-lg bg-white/10 p-6 text-center">
            Thank you! We’ll contact you shortly.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm">Parent’s name</label>
              <input id="name" name="name" required className={FIELD} placeholder="Full name" />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm">Phone</label>
              <input id="phone" name="phone" type="tel" required className={FIELD} placeholder="+91" />
            </div>
            <div>
              <label htmlFor="grade" className="mb-1 block text-sm">Class applying for</label>
              <input id="grade" name="grade" required className={FIELD} placeholder="e.g. Class 6" />
            </div>
            <Button type="submit" className="w-full">Enquire Now</Button>
          </form>
        )}
      </Reveal>
    </section>
  )
}