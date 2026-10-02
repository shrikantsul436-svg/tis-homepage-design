import { CONTACT } from '../../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-fg">Tulas International School</p>
          <p>{CONTACT.address}</p>
        </div>
        <a href={`tel:${CONTACT.phone}`} className="font-semibold text-fg hover:text-accent">{CONTACT.phone}</a>
      </div>
      <p className="border-t border-border py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} TIS. Homepage redesign concept.
      </p>
    </footer>
  )
}