import { Link } from 'react-router-dom'
import banner1 from '../assets/banners/banner-1.png'

const pillars = [
  { icon: '🙏', title: 'Faith', sub: 'Strengthens' },
  { icon: '⏳', title: 'Patience', sub: 'Brings Peace' },
  { icon: '❤️', title: 'Love', sub: 'Heals All' },
  { icon: '✨', title: 'Blessings', sub: 'Always' },
]

function HeroCarousel() {
  return (
    <section className="relative w-screen overflow-hidden text-cream">
      <img
        src={banner1}
        alt=""
        className="block h-auto w-screen max-w-none"
        aria-hidden="true"
      />

      <div className="absolute inset-0 z-10 mx-auto flex max-w-7xl flex-col justify-center px-8 py-12 sm:px-16 lg:px-24 lg:py-16">
        <div className="max-w-xl">
          <p className="font-serif text-lg text-gold-light sm:text-xl">|| श्री साईं बाबा ||</p>

          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Shree Sai Baba
            <span className="block text-gold-light">of Shirdi</span>
          </h1>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px w-16 bg-gold/50" />
            <span className="text-gold-light">◆</span>
            <div className="h-px w-16 bg-gold/50" />
          </div>

          <p className="text-sm leading-relaxed text-cream/85 sm:text-base">
            A tribute to the beloved saint of Shirdi — the fakir who taught the world that faith and
            patience conquer all, and that &quot;Sabka Malik Ek&quot; — one God governs us all.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/aarti-timings"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-maroon-dark transition hover:bg-gold-light"
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
        </div>

        <div className="mt-10 flex flex-wrap gap-5 sm:gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-maroon/40 text-base backdrop-blur-sm sm:h-12 sm:w-12 sm:text-lg">
                {p.icon}
              </span>
              <span className="mt-1.5 text-xs font-semibold text-gold-light">{p.title}</span>
              <span className="text-[10px] text-cream/60">({p.sub})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel
