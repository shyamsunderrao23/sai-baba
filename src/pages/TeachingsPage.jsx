import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroBaba from '../assets/hero-baba.png'
import homeBanner from '../assets/home-banner.png'
import galleryDiya from '../assets/gallery/gallery-diya.jpg'
import galleryDhuni from '../assets/gallery/gallery-dhuni.jpg'
import gallerySamadhi from '../assets/gallery/gallery-samadhi.jpg'
import galleryDwarkamai from '../assets/gallery/gallery-dwarkamai.jpg'
import welcomeBaba from '../assets/generated/welcome-baba-tree.png'
import sevaAnnadaan from '../assets/generated/seva-annadaan.png'
import saiLogo from '../assets/sai-baba-logo-mark-cream.png'

const quickLinks = [
  { title: 'About Teachings', sub: 'Core wisdom', icon: '📜', href: '#essence' },
  { title: 'Sai Baba Sayings', sub: 'Sacred words', icon: '💬', href: '#featured' },
  { title: 'Life Lessons', sub: 'Daily guidance', icon: '🌱', href: '#transform' },
  { title: 'Practice & Follow', sub: 'Live the path', icon: '🙏', href: '#daily' },
  { title: 'Listen Teachings', sub: 'Audio wisdom', icon: '🎧', href: '#hero' },
  { title: 'Teachings in Action', sub: 'Apply daily', icon: '✨', href: '#daily' },
]

const essence = [
  {
    title: 'Shraddha',
    sub: 'Faith',
    text: 'Trust Baba completely — faith opens the door to grace.',
    img: galleryDiya,
  },
  {
    title: 'Saburi',
    sub: 'Patience',
    text: 'Wait with calm devotion — patience brings lasting peace.',
    img: galleryDhuni,
  },
  {
    title: 'Prem',
    sub: 'Love',
    text: 'Love all beings equally — love is the highest worship.',
    img: welcomeBaba,
  },
  {
    title: 'Seva',
    sub: 'Selfless Service',
    text: 'Serve without ego — seva is service to God Himself.',
    img: sevaAnnadaan,
  },
  {
    title: 'Daya',
    sub: 'Compassion',
    text: 'Be kind to every heart — compassion heals the world.',
    img: galleryDwarkamai,
  },
]

const transformItems = [
  { title: 'Stay Positive', text: 'Keep faith even in difficulty.' },
  { title: 'Respect All', text: 'See God in every being.' },
  { title: 'Control Ego', text: 'Surrender pride at Baba’s feet.' },
  { title: 'Speak Truth', text: 'Live honestly in word and deed.' },
  { title: 'Help Others', text: 'Seva multiplies divine blessings.' },
  { title: 'Be Patient', text: 'Saburi brings calm and clarity.' },
]

const dailyLife = [
  { title: 'Challenges', text: 'Face trials with faith and courage.', icon: '⚡' },
  { title: 'Forgiveness', text: 'Let go of anger — forgive freely.', icon: '🤍' },
  { title: 'Inner Peace', text: 'Find calm through prayer and trust.', icon: '🕊️' },
  { title: 'Simple Life', text: 'Live simply, love deeply, serve gladly.', icon: '🌿' },
]

function Flourish() {
  return (
    <svg viewBox="0 0 48 12" className="h-3 w-12 text-[#B38644]" fill="currentColor" aria-hidden="true">
      <path d="M0 6c8-5 16-5 24 0-8 5-16 5-24 0zm48 0c-8-5-16-5-24 0 8 5 16 5 24 0z" />
    </svg>
  )
}

function TeachingsPage() {
  const [transformIndex, setTransformIndex] = useState(0)
  const visibleTransform = [
    transformItems[transformIndex % transformItems.length],
    transformItems[(transformIndex + 1) % transformItems.length],
    transformItems[(transformIndex + 2) % transformItems.length],
    transformItems[(transformIndex + 3) % transformItems.length],
  ]

  return (
    <div className="w-full font-serif">
      {/* Hero */}
      <section id="hero" className="relative overflow-hidden bg-[#FCF8F2]">
        <div className="absolute inset-0 opacity-20">
          <img src={gallerySamadhi} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
          <div>
            <h1 className="text-3xl font-bold tracking-wide text-[#5a0e14] uppercase sm:text-4xl lg:text-5xl">
              Sai Baba Teachings
            </h1>
            <p className="mt-3 text-lg text-[#B38644]">Timeless Wisdom for a Better Life.</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#3b1f0f]/80">
              Discover Baba’s eternal message of Faith, Patience, Love and Selfless Service — guidance that
              transforms everyday life into a sacred path.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#featured"
                className="inline-flex items-center gap-2 rounded-md bg-[#5a0e14] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7a1520]"
              >
                <span aria-hidden="true">📖</span> Read Sayings
              </a>
              <a
                href="#essence"
                className="inline-flex items-center gap-2 rounded-md border border-[#B38644] px-5 py-3 text-sm font-semibold text-[#B38644] transition hover:bg-[#B38644]/10"
              >
                <span aria-hidden="true">🎧</span> Listen Teachings
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={heroBaba}
              alt="Sai Baba"
              className="w-full max-w-md object-contain drop-shadow-lg lg:max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="relative z-20 bg-white pb-10">
        <div className="mx-auto -mt-4 grid max-w-7xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:px-8">
          {quickLinks.map((l) => (
            <a
              key={l.title}
              href={l.href}
              className="rounded-xl border border-[#ebdcb9]/40 bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mx-auto mb-2 text-2xl text-[#B38644]">{l.icon}</div>
              <h3 className="text-sm font-bold text-[#5a0e14]">{l.title}</h3>
              <p className="mt-0.5 text-[0.7rem] text-[#3b1f0f]/65">{l.sub}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Essence */}
      <section id="essence" className="bg-[#FCF8F2] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-center gap-3">
            <Flourish />
            <h2 className="text-center text-xl font-bold text-[#5a0e14] sm:text-2xl">
              Essence of Sai Baba&apos;s Teachings
            </h2>
            <Flourish />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {essence.map((e) => (
              <article
                key={e.title}
                className="overflow-hidden rounded-xl border border-[#ebdcb9]/40 bg-white text-center shadow-sm"
              >
                <div className="space-y-2 p-5">
                  <div className="mx-auto text-2xl text-[#B38644]">ॐ</div>
                  <h3 className="text-lg font-bold text-[#5a0e14]">{e.title}</h3>
                  <p className="text-xs font-semibold tracking-wide text-[#B38644] uppercase">{e.sub}</p>
                  <p className="text-xs leading-relaxed text-[#3b1f0f]/75">{e.text}</p>
                </div>
                <div className="h-28 overflow-hidden">
                  <img src={e.img} alt={e.title} className="h-full w-full object-cover" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section className="relative overflow-hidden bg-[#F3EAD7]/60 py-12 sm:py-14">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <img
            src={saiLogo}
            alt=""
            className="hidden h-28 w-28 rounded-full object-cover opacity-40 md:block"
          />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xl font-semibold leading-relaxed text-[#5a0e14] sm:text-2xl">
              &quot;Why fear, when I am here! I will never leave my devotee.&quot;
            </p>
            <span className="mt-3 block text-sm tracking-widest text-[#B38644] uppercase">— Sai Baba</span>
          </div>
          <img
            src={galleryDiya}
            alt=""
            className="hidden h-28 w-28 rounded-full object-cover opacity-80 md:block"
          />
        </div>
      </section>

      {/* Transform carousel */}
      <section id="transform" className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-center gap-3">
            <Flourish />
            <h2 className="text-xl font-bold text-[#5a0e14] sm:text-2xl">Teachings That Transform Life</h2>
            <Flourish />
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setTransformIndex((i) => (i - 1 + transformItems.length) % transformItems.length)}
              className="absolute top-1/2 left-0 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#5a0e14] text-white md:flex"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setTransformIndex((i) => (i + 1) % transformItems.length)}
              className="absolute top-1/2 right-0 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#5a0e14] text-white md:flex"
              aria-label="Next"
            >
              ›
            </button>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:px-14">
              {visibleTransform.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#f3ead7] bg-[#5a0e14] text-xl text-[#e8c96a]">
                    ॐ
                  </div>
                  <h3 className="text-sm font-bold text-[#5a0e14]">{item.title}</h3>
                  <p className="mt-1 text-xs text-[#3b1f0f]/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured + Daily life */}
      <section id="featured" className="bg-[#FCF8F2] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#5a0e14] p-8 text-white sm:p-10">
            <img
              src={heroBaba}
              alt=""
              className="pointer-events-none absolute right-0 bottom-0 h-48 w-48 object-contain opacity-20"
            />
            <p className="relative text-xs font-semibold tracking-[0.2em] text-[#e8c96a] uppercase">
              Featured Teaching
            </p>
            <p className="relative mt-4 text-xl font-semibold leading-relaxed sm:text-2xl">
              &quot;My treasury is open — take as much as you can. Ask with a pure heart and I shall give.&quot;
            </p>
            <span className="relative mt-3 block text-sm text-[#e8c96a]">— Sai Baba</span>
            <Link
              to="/teachings"
              className="relative mt-8 inline-flex rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[#5a0e14] transition hover:bg-[#e8c96a]"
            >
              Read More Sayings
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_140px]">
            <div className="space-y-3">
              <h3 className="mb-2 text-lg font-bold text-[#5a0e14]">Teachings in Daily Life</h3>
              {dailyLife.map((d) => (
                <div
                  key={d.title}
                  className="flex items-center gap-3 rounded-xl border border-[#ebdcb9]/40 bg-white p-4 shadow-sm"
                >
                  <span className="text-xl">{d.icon}</span>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-[#5a0e14]">{d.title}</h4>
                    <p className="text-xs text-[#3b1f0f]/70">{d.text}</p>
                  </div>
                  <span className="text-[#B38644]">›</span>
                </div>
              ))}
            </div>
            <img
              src={homeBanner}
              alt="Temple"
              className="hidden h-full rounded-xl object-cover object-center sm:block"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#5a0e14] py-12 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <img
            src={galleryDiya}
            alt=""
            className="hidden h-20 w-20 rounded-full object-cover opacity-80 md:block"
          />
          <p className="max-w-xl text-lg font-semibold text-white sm:text-xl">
            Apply Baba&apos;s Teachings in your life and experience His divine presence.
          </p>
          <a
            href="#essence"
            className="inline-flex items-center gap-2 rounded-md bg-[#B38644] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#9a7138]"
          >
            <span aria-hidden="true">⬇</span> Download Teachings PDF
          </a>
        </div>
      </section>
    </div>
  )
}

export default TeachingsPage
