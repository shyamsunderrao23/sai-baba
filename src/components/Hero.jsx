import { Link } from 'react-router-dom'
import heroBaba from '../assets/hero-baba.png'
import FlowerFall from './FlowerFall'

const pillars = [
  { icon: '🙏', title: 'Faith', sub: 'Strengthens' },
  { icon: '⏳', title: 'Patience', sub: 'Brings Peace' },
  { icon: '❤️', title: 'Love', sub: 'Heals All' },
  { icon: '✨', title: 'Blessings', sub: 'Always' },
]

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-temple text-cream">
      <div className="bg-diya-pattern pointer-events-none absolute inset-0 opacity-30" />

      {/* Decorative temple lamps */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {[
          { left: '8%', top: '15%', size: 40 },
          { left: '18%', top: '8%', size: 28 },
          { left: '75%', top: '12%', size: 36 },
          { left: '88%', top: '22%', size: 24 },
          { left: '55%', top: '6%', size: 20 },
        ].map((lamp) => (
          <div
            key={`${lamp.left}-${lamp.top}`}
            className="absolute opacity-40"
            style={{ left: lamp.left, top: lamp.top, width: lamp.size, height: lamp.size * 1.4 }}
          >
            <div className="mx-auto h-1/3 w-1/2 rounded-t-full bg-gold/60" />
            <div className="mx-auto mt-0.5 h-2/3 w-full rounded-b-lg bg-gold/30" />
          </div>
        ))}
      </div>

      {/* Carousel arrows */}
      <button
        type="button"
        className="absolute left-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-maroon/80 text-cream/80 transition hover:bg-maroon md:flex"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        className="absolute right-2 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-maroon/80 text-cream/80 transition hover:bg-maroon md:flex"
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:gap-12 md:py-16 lg:px-6 lg:py-20">
        <div className="text-center md:text-left">
          <p className="font-serif text-xl text-gold-light md:text-2xl">
            || श्री साईं बाबा ||
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl lg:text-[3.25rem]">
            Shree Sai Baba
            <span className="block text-gold-light">of Shirdi</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-cream/80 md:mx-0 md:text-base">
            A tribute to the beloved saint of Shirdi — the fakir who taught the world that
            faith and patience conquer all, and that
            <span className="text-gold-light"> "Sabka Malik Ek" </span>
            — one God governs us all.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              to="/aarti-timings"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-maroon-dark shadow-lg transition hover:bg-gold-light"
            >
              <span aria-hidden="true">🪔</span> Aarti Timings
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gold/60 px-6 py-3 text-sm font-semibold text-gold-light transition hover:bg-gold/10"
            >
              Know Baba&apos;s Story
            </Link>
          </div>

          <div className="mx-auto mt-10 flex max-w-lg flex-wrap justify-center gap-4 md:mx-0 md:justify-start">
            {pillars.map((p) => (
              <div key={p.title} className="flex flex-col items-center text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-maroon/50 text-lg">
                  {p.icon}
                </span>
                <span className="mt-1.5 text-xs font-semibold text-gold-light">{p.title}</span>
                <span className="text-[10px] text-cream/60">({p.sub})</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div
            className="absolute inset-x-4 top-1/2 h-4/5 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative min-h-[320px] sm:min-h-[400px]">
            <img
              src={heroBaba}
              alt="Golden idol of Shree Sai Baba of Shirdi seated on a throne"
              className="relative z-10 mx-auto w-full max-w-sm drop-shadow-2xl lg:max-w-md"
            />
            <FlowerFall count={16} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
