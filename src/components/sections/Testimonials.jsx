import { TESTIMONIALS } from '../../data/siteData'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading eyebrow="Testimonials" title="What parents say" />
      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <figure className="h-full rounded-2xl border border-border bg-surface p-6">
              <blockquote className="text-fg">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-muted">
                <span className="font-semibold text-fg">{t.name}</span> · {t.role}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}