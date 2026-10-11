import { Link } from 'react-router-dom'
import heroBaba from '../assets/hero-baba.png'
import aboutTrustBanner from '../assets/about-saibab.png'
import sevaEducation from '../assets/generated/seva-education.png'
import sevaMedical from '../assets/generated/seva-medical.png'
import sevaAnnadaan from '../assets/generated/seva-annadaan.png'
import sevaTemple from '../assets/generated/seva-temple.png'
import sevaPooja from '../assets/generated/seva-pooja.png'
import galleryDwarkamai from '../assets/gallery/gallery-dwarkamai.jpg'

const trustPoints = [
  {
    title: 'Preserve Sanctity',
    text: 'To protect and maintain the sacred atmosphere of Shirdi and Baba’s Samadhi.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M6 20V10l6-4 6 4v10M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Spiritual & Social Services',
    text: 'To provide spiritual guidance along with social welfare for every devotee.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.5 3 4 5.5 4 8a4 4 0 11-8 0c0-2.5 1.5-5 4-8z" />
        <path strokeLinecap="round" d="M12 15v6M9 21h6" />
      </svg>
    ),
  },
  {
    title: 'Promote Sai Values',
    text: 'To spread Faith, Patience, Love and Selfless Service across the world.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a3 3 0 010 5.74" />
      </svg>
    ),
  },
]

const stats = [
  { value: '1950', label: 'Established' },
  { value: '100+', label: 'Acres Campus' },
  { value: '5000+', label: 'Employees & Volunteers' },
  { value: 'Millions', label: 'Global Devotees' },
  { value: '100+', label: 'Seva & Welfare Activities' },
  { value: '24/7', label: 'Devotional & Seva Services' },
]

const initiatives = [
  {
    img: sevaEducation,
    title: 'Education',
    desc: 'Schools, hostels and educational support for underprivileged children.',
  },
  {
    img: sevaMedical,
    title: 'Healthcare',
    desc: 'Hospitals and free medical camps serving devotees and local communities.',
  },
  {
    img: sevaAnnadaan,
    title: 'Annadan Seva',
    desc: 'Daily free meals offered with love to pilgrims and the needy.',
  },
  {
    img: sevaTemple,
    title: 'Social Welfare',
    desc: 'Community support, shelters and welfare programs for all.',
  },
  {
    img: sevaPooja,
    title: 'Spiritual Activities',
    desc: 'Daily aarti, festivals, discourses and sacred celebrations.',
  },
  {
    img: galleryDwarkamai,
    title: 'Environment',
    desc: 'Green campus care, cleanliness and eco-friendly initiatives.',
  },
]

const values = [
  { title: 'Faith', text: 'Trust in Baba with a pure and devoted heart.' },
  { title: 'Patience', text: 'Wait with calm devotion — Saburi brings peace.' },
  { title: 'Compassion', text: 'Serve every being with kindness and empathy.' },
  { title: 'Service', text: 'Selfless seva is the highest form of worship.' },
  { title: 'Truth', text: 'Live honestly in thought, word and action.' },
]

function AboutPage() {
  return (
    <div className="w-full font-serif">
      {/* Hero */}
      <section className="relative min-h-[300px] overflow-hidden sm:min-h-[360px] lg:min-h-[440px] xl:min-h-[480px]">
        <img
          src={aboutTrustBanner}
          alt="Shirdi Sai Baba at the sacred temple"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-[75%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a0808]/80 via-[#1a0808]/45 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[300px] max-w-7xl flex-col justify-center px-4 py-12 sm:min-h-[360px] sm:px-6 lg:min-h-[440px] lg:px-8 xl:min-h-[480px]">
          <p className="text-sm text-white/85">
            <Link to="/" className="hover:text-[#e8c96a]">
              Home
            </Link>
            <span className="mx-1.5">›</span>
            <span>About Us</span>
            <span className="mx-1.5">›</span>
            <span className="text-[#e8c96a]">About Saibaba Trust</span>
          </p>

          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            <span className="text-white">About </span>
            <span className="text-[#e8c96a]">Saibaba Trust</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
            Established to preserve the sacred legacy of Shirdi Sai Baba, the Trust continues to serve humanity
            through devotion, welfare and the eternal values of Love, Faith, Patience and Selfless Service.
          </p>
        </div>
      </section>

      {/* About the Trust */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="lg:col-span-4">
            <img
              src={heroBaba}
              alt="Sai Baba"
              className="h-auto w-full rounded-2xl object-cover shadow-md"
            />
          </div>

          <div className="space-y-5 lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#B38644]" />
              <span className="text-xs font-semibold tracking-[0.22em] text-[#B38644] uppercase">
                About the Trust
              </span>
              <span className="h-px w-8 bg-[#B38644]" />
            </div>

            <h2 className="text-2xl font-bold leading-snug text-[#5a0e14] sm:text-3xl">
              A Mission of Devotion and Service to Humanity
            </h2>

            <p className="text-sm leading-relaxed text-[#3b1f0f]/85">
              Shri Saibaba Sansthan Trust, Shirdi, is dedicated to protecting the sanctity of Baba’s holy abode
              and offering spiritual guidance to millions of devotees from around the world.
            </p>
            <p className="text-sm leading-relaxed text-[#3b1f0f]/85">
              Through temples, seva, education, healthcare and social welfare, the Trust carries forward Baba’s
              message that service to man is service to God.
            </p>

            <ul className="space-y-4 pt-2">
              {trustPoints.map((p) => (
                <li key={p.title} className="flex gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f3ead7] text-[#B38644]">
                    {p.icon}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#5a0e14]">{p.title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#3b1f0f]/75">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="mt-2 inline-flex items-center gap-2 rounded-md bg-[#5a0e14] px-5 py-3 text-xs font-semibold tracking-wider text-white uppercase transition hover:bg-[#7a1520]"
            >
              Know More About Sai Baba <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-xl border border-[#dfc083]/40 bg-[#FDF8EF] p-6 text-center shadow-sm">
              <span className="block text-4xl text-[#c9a227]/50 select-none">“</span>
              <p className="mt-2 text-base italic leading-relaxed text-[#5a0e14]">
                Service to man is service to God. Why fear when I am here!
              </p>
              <span className="mt-4 block text-xs font-semibold tracking-widest text-[#B38644] uppercase">
                — Sai Baba
              </span>
              <div className="mt-5 text-2xl" aria-hidden="true">
                🪔
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[#ebdcb9]/50 bg-[#FCF8F2] py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-[#B38644] sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs font-medium text-[#3b1f0f]/80 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Initiatives */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold tracking-[0.22em] text-[#B38644] uppercase">
              Our Initiatives
            </span>
            <div className="mx-auto mt-3 h-px w-20 bg-gradient-to-r from-transparent via-[#B38644] to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-xl border border-[#ebdcb9]/40 bg-[#FCF8F2] shadow-sm transition hover:shadow-md"
              >
                <div className="h-40 overflow-hidden">
                  <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="text-lg font-bold text-[#5a0e14]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#3b1f0f]/75">{item.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1 pt-1 text-sm font-semibold text-[#B38644]">
                    Read More <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-[#5a0e14] py-14 sm:py-16">
        <div className="pointer-events-none absolute inset-4 rounded-xl border border-[#c9a227]/35 sm:inset-6" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold tracking-[0.22em] text-[#e8c96a] uppercase">Our Values</span>
            <div className="mx-auto mt-3 h-px w-20 bg-gradient-to-r from-transparent via-[#e8c96a] to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#e8c96a]/50 text-[#e8c96a]">
                  ॐ
                </div>
                <h3 className="text-base font-semibold text-[#e8c96a]">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
