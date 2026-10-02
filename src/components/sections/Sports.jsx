import { Trophy } from 'lucide-react'
import { SPORTS } from '../../data/siteData'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Sports() {
  return (
    <section id="sports" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Beyond Academics" title="16+ sports, one champion mindset" />
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {SPORTS.map((s, i) => (
            <li key={s}>
              <Reveal delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-bg p-5 transition hover:-translate-y-1 hover:border-accent">
                  <Trophy size={20} className="text-accent" aria-hidden="true" />
                  <span className="font-medium text-fg">{s}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}