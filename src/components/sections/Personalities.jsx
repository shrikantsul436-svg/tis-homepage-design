import { PERSONALITIES } from '../../data/siteData'
import Reveal from '../animation/Reveal'
import SectionHeading from '../ui/SectionHeading'

const initials = (name) => name.split(' ').map((p) => p[0]).slice(0, 2).join('')

export default function Personalities() {
  return (
    <section id="personalities" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="On Campus" title="Influential personalities who visit TIS" />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PERSONALITIES.map((p, i) => (
            <li key={p.name}>
              <Reveal delay={(i % 4) * 0.08}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-bg p-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand font-semibold text-brand-fg" aria-hidden="true">
                    {initials(p.name)}
                  </span>
                  <div>
                    <p className="font-semibold text-fg">{p.name}</p>
                    <p className="text-sm text-muted">{p.note}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}