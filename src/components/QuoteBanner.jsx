import diya from '../assets/gallery/gallery-diya.jpg'

function QuoteBanner() {
  return (
    <section className="relative overflow-hidden bg-maroon-dark py-12 text-cream md:py-14">
      <div className="bg-diya-pattern pointer-events-none absolute inset-0 opacity-20" />

      {/* Faint Baba sketch on left */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 hidden h-48 w-48 -translate-y-1/2 opacity-10 md:block lg:h-56 lg:w-56"
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 100" className="h-full w-full fill-cream">
          <ellipse cx="50" cy="35" rx="22" ry="26" />
          <path d="M28 55 Q50 48 72 55 L68 95 Q50 88 32 95 Z" />
        </svg>
      </div>

      <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-8 px-4 lg:px-6">
        <div className="max-w-2xl text-center">
          <p className="font-display text-3xl font-semibold text-gold-light md:text-4xl">
            &ldquo;Sabka Malik Ek&rdquo;
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-cream/80 md:text-base">
            One God governs all. Sai Baba welcomed devotees of every faith to Shirdi,
            teaching that love, faith and patience are the true path to the divine.
          </p>
        </div>

        <div className="hidden shrink-0 overflow-hidden rounded-2xl border-2 border-gold/30 shadow-xl lg:block">
          <img src={diya} alt="" className="h-28 w-36 object-cover" />
        </div>
      </div>
    </section>
  )
}

export default QuoteBanner
