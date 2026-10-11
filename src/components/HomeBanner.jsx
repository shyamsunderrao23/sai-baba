import { Link } from 'react-router-dom'
import homeBanner from '../assets/home-banner.png'
import iconAarti from '../assets/img1-icon.png'
import iconTeachings from '../assets/img2-icon.png'
import iconSeva from '../assets/img3-icon.png'
import iconDonation from '../assets/img4-icon.png'
import iconGifts from '../assets/img5-icon.png'

const pillars = [
  {
    title: 'Shraddha',
    sub: 'Faith',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.5-9.5-8.2C.7 9.8 2.2 6 5.8 6c2 0 3.3 1.1 4.2 2.2C11 7.1 12.2 6 14.2 6c3.6 0 5.1 3.8 3.3 6.8C19 16.5 12 21 12 21z" />
      </svg>
    ),
  },
  {
    title: 'Saburi',
    sub: 'Patience',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: 'Seva',
    sub: 'Selfless Service',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.2 4.5L19 8.2l-3.5 3.4.8 4.9L12 14.2 7.7 16.5l.8-4.9L5 8.2l4.8-.7L12 3z" />
      </svg>
    ),
  },
  {
    title: 'Prem',
    sub: 'Divine Love',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

const services = [
  {
    title: 'Daily Aarti',
    desc: 'Join live Aarti from Shirdi Temple.',
    linkText: 'View Timings',
    to: '/aarti-timings',
    icon: iconAarti,
  },
  {
    title: 'Online Seva',
    desc: 'Book Seva & Pooja services online.',
    linkText: 'Book Now',
    to: '/contact',
    icon: iconSeva,
  },
  {
    title: 'Sai Teachings',
    desc: 'Explore the teachings of Shirdi Sai Baba.',
    linkText: 'Explore',
    to: '/teachings',
    icon: iconTeachings,
  },
  {
    title: 'Donation',
    desc: 'Contribute for noble causes & Annadaan.',
    linkText: 'Donate Now',
    to: '/contact',
    icon: iconDonation,
  },
  {
    title: 'Prasad & Gifts',
    desc: 'Order Prasad, Udi & Divine Gifts.',
    linkText: 'Shop Now',
    to: '/contact',
    icon: iconGifts,
  },
]

function HomeBanner() {
  return (
    <>
      {/* Banner only — no extra bottom space */}
      <section className="relative w-full overflow-hidden bg-[#1a0c08]">
        <img
          src={homeBanner}
          alt="Shirdi Sai Baba seated on a golden throne in the temple"
          className="block h-auto min-h-[460px] w-full object-cover object-[72%_center] sm:min-h-[500px] lg:min-h-[560px]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />

        <div className="absolute inset-0 z-10 flex items-center pb-10 sm:pb-12">
          <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="max-w-xl animate-[fadeIn_0.9s_ease-out] font-serif text-center sm:ml-10 sm:text-left md:ml-16 lg:ml-24 xl:ml-28">
              <p className="text-3xl text-[#e8c96a] sm:text-4xl">ॐ</p>

              <h1 className="mt-1 text-4xl font-semibold leading-none text-[#e8c96a] sm:text-5xl lg:text-[3.6rem]">
                Om Sai Ram
              </h1>

              <div className="mt-3 flex items-center justify-center gap-3 sm:justify-start">
                <span className="h-px w-10 bg-[#c9a227]/80 sm:w-14" />
                <span className="text-[0.7rem] font-medium tracking-[0.28em] text-[#e8c96a] sm:text-xs">
                  SHIRDI SAI BABA
                </span>
                <span className="h-px w-10 bg-[#c9a227]/80 sm:w-14" />
              </div>

              <p className="mx-auto mt-4 max-w-md text-base italic leading-relaxed text-white/90 sm:mx-0 sm:text-lg">
                &quot;Faith, Patience &amp; Devotion are the keys to a blissful life.&quot;
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-5 sm:justify-start sm:gap-7">
                {pillars.map((p) => (
                  <div key={p.title} className="flex flex-col items-center text-center">
                    <span className="flex h-11 w-11 items-center justify-center text-[#e8c96a]">
                      {p.icon}
                    </span>
                    <span className="mt-1 text-sm font-semibold text-white">{p.title}</span>
                    <span className="text-[0.7rem] text-white/65">({p.sub})</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-md bg-[#C4A35A] px-5 py-3 font-serif text-sm font-semibold text-[#3b1f0f] transition-colors hover:bg-[#d4b56a]"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Read Sai Baba&apos;s Life
                </Link>
                <Link
                  to="/aarti-timings"
                  className="inline-flex items-center gap-2 rounded-md border border-[#C4A35A] px-5 py-3 font-serif text-sm font-semibold text-[#e8c96a] transition-colors hover:bg-[#C4A35A]/10"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                  Watch Aarti Live
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tight overlap — no gap above/below the bar */}
      <div className="relative z-30 mx-auto -mt-14 -mb-14 max-w-[1280px] px-4 sm:-mt-16 sm:-mb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-[#efe6d6] rounded-2xl bg-white px-2 shadow-[0_10px_36px_rgba(40,20,10,0.16)] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group flex items-start gap-2.5 px-3 py-3 font-serif transition-colors hover:bg-[#FDFBF2] lg:py-3"
            >
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center">
                <img
                  src={s.icon}
                  alt=""
                  className="h-11 w-11 object-contain"
                />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-[0.95rem] font-semibold leading-tight text-[#1a1a1a]">{s.title}</h3>
                <p className="mt-0.5 text-[0.78rem] font-normal leading-snug text-[#5a5a5a]">{s.desc}</p>
                <span className="mt-1.5 inline-flex items-center gap-1 text-[0.78rem] font-medium text-[#7a1520] transition-transform group-hover:translate-x-0.5">
                  {s.linkText} <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default HomeBanner
