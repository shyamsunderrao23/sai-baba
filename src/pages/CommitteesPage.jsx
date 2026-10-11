import { useState } from 'react'
import { Link } from 'react-router-dom'
import homeBanner from '../assets/home-banner.png'
import heroBaba from '../assets/hero-baba.png'
import galleryDiya from '../assets/gallery/gallery-diya.jpg'
import saiLogo from '../assets/sai-baba-logo-mark-cream.png'

const values = [
  {
    title: 'Collective Leadership',
    text: 'Guided decisions taken together with devotion and wisdom.',
    icon: '👥',
  },
  {
    title: 'Devotion in Action',
    text: 'Every responsibility is carried out as seva to Baba.',
    icon: '💛',
  },
  {
    title: 'Transparency',
    text: 'Clear processes and accountable service for all devotees.',
    icon: '🛡️',
  },
  {
    title: 'Service to All',
    text: 'Committees work for the welfare of every seeker.',
    icon: '🤝',
  },
]

const committees = [
  { name: 'Executive', desc: 'Overall governance and strategic direction of the Trust.', icon: '⚖️' },
  { name: 'Temple', desc: 'Daily rituals, darshan and temple sanctity management.', icon: '🛕' },
  { name: 'Finance', desc: 'Accounts, donations and transparent fund utilization.', icon: '💰' },
  { name: 'Education', desc: 'Schools, scholarships and learning support programs.', icon: '🎓' },
  { name: 'Health', desc: 'Hospitals, medical camps and devotee healthcare.', icon: '✚' },
  { name: 'Seva & Welfare', desc: 'Annadaan, shelters and community welfare seva.', icon: '🤲' },
  { name: 'Environment', desc: 'Green campus, cleanliness and eco initiatives.', icon: '🌿' },
  { name: 'Public Relations', desc: 'Communication, media and devotee outreach.', icon: '📢' },
  { name: 'Event Management', desc: 'Festivals, celebrations and special occasions.', icon: '🎉' },
  { name: 'Disciplinary', desc: 'Discipline, guidelines and orderly temple systems.', icon: '📋' },
]

const leaders = [
  {
    name: 'Shri. Radhakrishna Vikhe Patil',
    role: 'Chairman',
    bio: 'Leading the Trust with devotion, vision and service to humanity.',
  },
  {
    name: 'Shri. Suresh Kadam',
    role: 'Vice Chairman',
    bio: 'Supporting governance and sacred seva initiatives across Shirdi.',
  },
  {
    name: 'Smt. Meena Deshmukh',
    role: 'Secretary',
    bio: 'Coordinating committees and ensuring smooth Trust operations.',
  },
  {
    name: 'Shri. Anil Pawar',
    role: 'Treasurer',
    bio: 'Overseeing finances with transparency and accountability.',
  },
]

function Flourish() {
  return (
    <svg viewBox="0 0 48 12" className="h-3 w-12 text-[#B38644]" fill="currentColor" aria-hidden="true">
      <path d="M0 6c8-5 16-5 24 0-8 5-16 5-24 0zm48 0c-8-5-16-5-24 0 8 5 16 5 24 0z" />
    </svg>
  )
}

function CommitteesPage() {
  const [leaderIndex, setLeaderIndex] = useState(0)
  const visibleLeaders = [
    leaders[leaderIndex % leaders.length],
    leaders[(leaderIndex + 1) % leaders.length],
    leaders[(leaderIndex + 2) % leaders.length],
  ]

  return (
    <div className="w-full font-serif">
      {/* Hero */}
      <section className="relative min-h-[340px] overflow-hidden sm:min-h-[400px]">
        <img
          src={homeBanner}
          alt="Sai Baba temple"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a0a0c]/90 via-[#2a0a0c]/65 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[340px] max-w-7xl flex-col justify-center px-4 py-12 sm:min-h-[400px] sm:px-6 lg:px-8">
          <p className="text-sm text-[#e8c96a]">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-1.5">›</span>
            <span>About Us</span>
            <span className="mx-1.5">›</span>
            <span>Our Committees</span>
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-wide text-white uppercase sm:text-4xl lg:text-5xl">
            Our Committees
          </h1>
          <p className="mt-3 text-lg text-[#e8c96a] sm:text-xl">United in Devotion, Committed to Service</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90">
            Dedicated committees work together to preserve Baba’s sanctity, guide devotees, and serve humanity
            with faith, patience and compassion.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#FCF8F2] py-10 sm:py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-[#ebdcb9]/40 bg-white p-5 text-center shadow-sm"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a227]/50 text-xl text-[#5a0e14]">
                {v.icon}
              </div>
              <h3 className="text-sm font-bold text-[#5a0e14]">{v.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#3b1f0f]/75">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Committees grid */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-center gap-3">
            <Flourish />
            <h2 className="text-xl font-bold tracking-wide text-[#5a0e14] uppercase sm:text-2xl">
              Our Committees
            </h2>
            <Flourish />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {committees.map((c) => (
              <article
                key={c.name}
                className="flex flex-col items-center rounded-xl border border-[#ebdcb9]/40 bg-[#FCF8F2] p-5 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#5a0e14] text-xl text-white">
                  {c.icon}
                </div>
                <h3 className="text-base font-bold text-[#5a0e14]">{c.name}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[#3b1f0f]/75">{c.desc}</p>
                <button
                  type="button"
                  className="mt-4 text-xs font-semibold text-[#5a0e14] transition hover:text-[#B38644]"
                >
                  View Members →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#FCF8F2] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-center gap-3">
            <Flourish />
            <h2 className="text-xl font-bold tracking-wide text-[#5a0e14] uppercase sm:text-2xl">
              Our Leadership
            </h2>
            <Flourish />
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setLeaderIndex((i) => (i - 1 + leaders.length) % leaders.length)}
              className="absolute top-1/2 left-0 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#5a0e14] text-white md:flex"
              aria-label="Previous leaders"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setLeaderIndex((i) => (i + 1) % leaders.length)}
              className="absolute top-1/2 right-0 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#5a0e14] text-white md:flex"
              aria-label="Next leaders"
            >
              ›
            </button>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:px-12">
              {visibleLeaders.map((l) => (
                <article key={l.name} className="rounded-xl bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-[#e8c96a] bg-[#f3ead7]">
                    <img src={saiLogo} alt="" className="h-full w-full object-cover object-top" />
                  </div>
                  <h3 className="text-base font-bold text-[#5a0e14]">{l.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#B38644]">{l.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[#3b1f0f]/75">{l.bio}</p>
                  <div className="mt-4 flex justify-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5a0e14] text-xs text-white">
                      f
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5a0e14] text-xs text-white">
                      🌐
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative overflow-hidden bg-[#FDF8EF] py-12 sm:py-14">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <img
            src={heroBaba}
            alt=""
            className="hidden h-28 w-28 rounded-full object-cover object-top opacity-40 md:block"
          />
          <div className="mx-auto max-w-3xl text-center">
            <span className="block text-4xl text-[#c9a227]/50 select-none">“</span>
            <p className="mt-2 text-lg italic leading-relaxed text-[#5a0e14] sm:text-xl">
              When we work together with faith and unity, Baba&apos;s blessings multiply and transform lives.
            </p>
          </div>
          <img
            src={galleryDiya}
            alt=""
            className="hidden h-28 w-28 rounded-full object-cover opacity-70 md:block"
          />
        </div>
      </section>
    </div>
  )
}

export default CommitteesPage
