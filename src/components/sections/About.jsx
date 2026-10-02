import { RANKINGS, STATS } from '../../data/siteData'
import AnimatedCounter from '../animation/AnimatedCounter'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        eyebrow="About TIS"
        title="Where learning goes beyond the classroom"
        subtitle="A nurturing boarding and day school built around academics, sport and well-being."
      />
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <li key={s.label}>
            <Reveal delay={i * 0.08} className="h-full rounded-2xl border border-border bg-surface p-6 text-center">
              <p className="font-display text-4xl font-bold text-brand dark:text-accent">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </Reveal>
          </li>
        ))}
      </ul>
      <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
        {RANKINGS.map((r) => (
          <span key={r} className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-fg">{r}</span>
        ))}
      </Reveal>
    </section>
  )
}