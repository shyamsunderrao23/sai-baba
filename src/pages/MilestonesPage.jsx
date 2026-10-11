import { Link } from 'react-router-dom'
import banner2 from '../assets/banners/banner-2.png'
import welcomeBaba from '../assets/generated/welcome-baba-tree.png'
import gallerySamadhi from '../assets/gallery/gallery-samadhi.jpg'
import galleryDwarkamai from '../assets/gallery/gallery-dwarkamai.jpg'
import galleryDiya from '../assets/gallery/gallery-diya.jpg'
import sevaTemple from '../assets/generated/seva-temple.png'
import homeBanner from '../assets/home-banner.png'
import heroBaba from '../assets/hero-baba.png'
import saiLogo from '../assets/sai-baba-logo-mark-cream.png'

const heroStats = [
  { label: '1950 Trust Established', icon: '🛕' },
  { label: 'Millions Global Devotees', icon: '🙏' },
  { label: '100+ Seva Activities', icon: '💛' },
  { label: '24/7 Devotional Services', icon: '🪔' },
  { label: 'Spreading Across The World', icon: '🌍' },
]

const milestones = [
  {
    year: '1858',
    title: 'Birth of Sai Baba',
    text: 'The divine journey begins — Baba’s presence brings light to countless hearts.',
    img: welcomeBaba,
    side: 'left',
  },
  {
    year: '1880',
    title: 'Arrival in Shirdi',
    text: 'Baba arrives in Shirdi and makes the sacred village his eternal abode.',
    img: saiLogo,
    side: 'right',
  },
  {
    year: '1918',
    title: 'Mahasamadhi',
    text: 'Baba takes Mahasamadhi, yet continues to guide devotees from his Samadhi.',
    img: gallerySamadhi,
    side: 'left',
  },
  {
    year: '1950',
    title: 'Establishment of Trust',
    text: 'Shri Saibaba Sansthan Trust is established to preserve and serve Shirdi.',
    img: sevaTemple,
    side: 'right',
  },
  {
    year: '1980s – 2000s',
    title: 'Growth & Expansion',
    text: 'Temple campus, seva facilities and welfare services expand for millions.',
    img: galleryDwarkamai,
    side: 'left',
  },
  {
    year: 'Present Day',
    title: 'Serving Millions',
    text: 'A global center of devotion — faith, patience and seva for all humanity.',
    img: homeBanner,
    side: 'right',
  },
]

const highlights = [
  {
    title: 'Sri Sai Baba Temple',
    text: 'The sacred Samadhi Mandir where devotees seek Baba’s blessings.',
    icon: '🛕',
  },
  {
    title: 'Free Annadaan',
    text: 'Daily meals served with love to pilgrims and the needy.',
    icon: '🍲',
  },
  {
    title: 'Healthcare Services',
    text: 'Medical care and camps supporting devotees and the community.',
    icon: '✚',
  },
  {
    title: 'Educational Support',
    text: 'Schools and learning support for underprivileged children.',
    icon: '🎓',
  },
  {
    title: 'Social Welfare',
    text: 'Welfare programs that uplift lives with compassion.',
    icon: '👥',
  },
]

function Flourish() {
  return (
    <svg viewBox="0 0 48 12" className="h-3 w-12 text-[#B38644]" fill="currentColor" aria-hidden="true">
      <path d="M0 6c8-5 16-5 24 0-8 5-16 5-24 0zm48 0c-8-5-16-5-24 0 8 5 16 5 24 0z" />
    </svg>
  )
}

function MilestonesPage() {
  return (
    <div className="w-full font-serif">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]">
          <img
            src={banner2}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a0a0c]/92 via-[#2a0a0c]/70 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[360px] max-w-7xl flex-col justify-center px-4 py-12 sm:min-h-[420px] sm:px-6 lg:min-h-[460px] lg:px-8">
            <div className="flex items-center gap-3">
              <Flourish />
              <span className="text-sm tracking-[0.2em] text-[#e8c96a]">|| Om Sai Ram ||</span>
              <Flourish />
            </div>

            <h1 className="mt-4 text-4xl font-bold text-[#e8c96a] sm:text-5xl lg:text-6xl">Mile Stones</h1>
            <p className="mt-3 max-w-lg text-base text-white sm:text-lg">
              The remarkable journey of Shri Saibaba Sansthan Trust, Shirdi
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
              A timeline of faith, service and compassion that continues to inspire millions.
            </p>
          </div>
        </div>

        {/* Stats under hero */}
        <div className="relative z-20 mx-auto -mt-6 max-w-7xl px-4 sm:-mt-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-y divide-[#ebdcb9]/30 overflow-hidden rounded-xl bg-white shadow-[0_10px_30px_rgba(40,20,10,0.12)] sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
            {heroStats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2 px-3 py-5 text-center">
                <span className="text-xl" aria-hidden="true">
                  {s.icon}
                </span>
                <span className="text-xs font-semibold leading-snug text-[#5a0e14] sm:text-[0.8rem]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#FCF8F2] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <Flourish />
              <h2 className="text-2xl font-bold text-[#5a0e14] sm:text-3xl">Our Journey – Key Milestones</h2>
              <Flourish />
            </div>
            <p className="mx-auto max-w-2xl text-sm text-[#3b1f0f]/75">
              From a small village to a global center of devotion – the divine journey continues...
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            {/* Center line */}
            <div className="absolute top-0 bottom-0 left-4 w-px bg-[#c9a227]/70 md:left-1/2 md:-translate-x-px" />

            <div className="space-y-10 md:space-y-14">
              {milestones.map((m) => {
                const isLeft = m.side === 'left'
                return (
                  <div key={m.year} className="relative grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10">
                    {/* Year dot */}
                    <div className="absolute top-6 left-4 z-10 flex -translate-x-1/2 items-center justify-center md:left-1/2">
                      <span className="flex h-12 min-w-12 items-center justify-center rounded-full bg-[#5a0e14] px-2 text-center text-[0.65rem] font-bold leading-tight text-[#e8c96a] shadow-md sm:text-xs">
                        {m.year}
                      </span>
                    </div>

                    {/* Left card / spacer */}
                    <div className={`pl-12 md:pl-0 ${isLeft ? 'md:pr-10 md:text-right' : 'md:order-2 md:pl-10'}`}>
                      <article className="overflow-hidden rounded-xl border border-[#ebdcb9]/50 bg-white shadow-sm">
                        <div className="h-40 overflow-hidden bg-[#f3ead7]">
                          <img src={m.img} alt={m.title} className="h-full w-full object-cover" />
                        </div>
                        <div className={`space-y-1.5 p-4 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                          <h3 className="text-lg font-bold text-[#5a0e14]">{m.title}</h3>
                          <p className="text-sm leading-relaxed text-[#3b1f0f]/75">{m.text}</p>
                        </div>
                      </article>
                    </div>

                    {/* Empty side for alternating layout on desktop */}
                    <div className={`hidden md:block ${isLeft ? '' : 'md:order-1'}`} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-center gap-3">
            <Flourish />
            <h2 className="text-2xl font-bold text-[#5a0e14] sm:text-3xl">Key Highlights</h2>
            <Flourish />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-xl border border-[#ebdcb9]/40 bg-[#FCF8F2] p-5 text-center shadow-sm"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#f3ead7] text-xl text-[#B38644]">
                  {h.icon}
                </div>
                <h3 className="text-sm font-bold text-[#5a0e14]">{h.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#3b1f0f]/75">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section className="relative overflow-hidden bg-[#5a0e14] py-12 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-6 md:flex-row md:justify-between lg:px-8">
          <img
            src={galleryDiya}
            alt=""
            className="hidden h-28 w-28 rounded-full object-cover opacity-90 md:block"
          />
          <div className="max-w-2xl text-center">
            <p className="text-xl font-semibold leading-relaxed text-[#e8c96a] sm:text-2xl">
              &quot;Why fear, when I am here! I will never leave my devotee.&quot;
            </p>
            <span className="mt-3 block text-sm tracking-widest text-[#e8c96a]/80 uppercase">— Sai Baba</span>
          </div>
          <img
            src={heroBaba}
            alt=""
            className="hidden h-28 w-28 rounded-full object-cover object-top opacity-80 md:block"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FCF8F2] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border-2 border-[#c9a227]/50 bg-white px-6 py-8 text-center shadow-sm sm:flex-row sm:text-left lg:px-10">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f3ead7] text-2xl">
                🤲
              </span>
              <div>
                <h3 className="text-lg font-bold text-[#5a0e14]">Be a part of this divine journey</h3>
                <p className="mt-1 text-sm text-[#3b1f0f]/75">
                  Support the Sai Baba Sansthan Trust and serve humanity with love.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#B38644] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9a7138]"
            >
              Donate Now <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MilestonesPage
