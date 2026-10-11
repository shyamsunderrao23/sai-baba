import { Link } from 'react-router-dom'

function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-maroon-dark via-maroon to-maroon-dark py-14 text-center text-cream">
      <div className="bg-diya-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-3xl px-4">
        <nav className="flex items-center justify-center gap-2 text-xs text-cream/60">
          <Link to="/" className="hover:text-gold-light">
            Home
          </Link>
          <span>/</span>
          <span className="text-gold-light">{title}</span>
        </nav>
        {eyebrow && <p className="mt-4 font-display text-gold-light">{eyebrow}</p>}
        <h1 className="mt-2 font-display text-3xl md:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-xl text-sm text-cream/75 md:text-base">{subtitle}</p>}
        <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-saffron via-gold to-saffron" />
      </div>
    </section>
  )
}

export default PageHeader
