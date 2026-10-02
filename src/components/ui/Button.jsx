const VARIANTS = {
  primary: 'bg-accent text-accent-fg hover:brightness-110',
  secondary: 'bg-brand text-brand-fg hover:brightness-110',
  light: 'border border-white/40 text-white hover:bg-white/10',
}

export default function Button({ href, variant = 'primary', className = '', children, ...props }) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${VARIANTS[variant]} ${className}`

  return href ? (
    <a href={href} className={classes} {...props}>{children}</a>
  ) : (
    <button className={classes} {...props}>{children}</button>
  )
}