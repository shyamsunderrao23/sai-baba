import { Link } from 'react-router-dom'
import heroBaba from '../assets/hero-baba.png'
import galleryDiya from '../assets/gallery/gallery-diya.jpg'
import gallerySamadhi from '../assets/gallery/gallery-samadhi.jpg'
import banner1 from '../assets/banners/banner-1.png'

const svgBase = {
  className: 'h-4 w-4',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.6',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
}

export const aboutTrustLinks = [
  {
    to: '/about',
    title: 'About Saibaba Trust',
    desc: 'Know about Shirdi Sai Baba Sansthan Trust and our mission.',
    icon: (
      <svg {...svgBase}>
        <path d="M4 20V8l8-4 8 4v12" />
        <path d="M10 20v-5h4v5" />
      </svg>
    ),
  },
  {
    to: '/about/milestones',
    title: 'Our History',
    desc: 'Journey of faith, devotion and selfless service.',
    icon: (
      <svg {...svgBase}>
        <path d="M4 18l5-6 4 3 7-9" />
        <path d="M16 6h4v4" />
      </svg>
    ),
  },
  {
    to: '/about#vision',
    title: 'Vision & Mission',
    desc: 'Our vision for a better world and our mission to serve.',
    icon: (
      <svg {...svgBase}>
        <circle cx="12" cy="12" r="3" />
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
      </svg>
    ),
  },
  {
    to: '/about#values',
    title: 'Our Values',
    desc: 'The core values that guide every step we take.',
    icon: (
      <svg {...svgBase}>
        <path d="M12 3l2.5 5.5L20 10l-4 3.5L17.5 20 12 16.5 6.5 20 8 13.5 4 10l5.5-1.5L12 3z" />
      </svg>
    ),
  },
  {
    to: '/about/committees',
    title: 'Trustees & Leadership',
    desc: 'Meet the leaders and trustees behind the mission.',
    icon: (
      <svg {...svgBase}>
        <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="3" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a3 3 0 010 5.74" />
      </svg>
    ),
  },
]

export const aboutJourneyLinks = [
  {
    to: '/about/milestones',
    title: 'Milestones',
    desc: 'Key milestones in our journey of service.',
    img: banner1,
  },
  {
    to: '/about/milestones',
    title: 'From Then to Now',
    desc: 'Evolution of the Sansthan through the years.',
    img: heroBaba,
  },
  {
    to: '/about',
    title: 'Growth & Impact',
    desc: "The growing impact of Baba's blessings and our efforts.",
    img: gallerySamadhi,
  },
  {
    to: '/about',
    title: 'Legacy for Generations',
    desc: 'A legacy of faith and service for generations to come.',
    img: galleryDiya,
  },
]

export const aboutSansthanLinks = [
  {
    to: '/about/committees',
    title: 'Our Committees',
    desc: 'Dedicated committees working selflessly.',
    icon: (
      <svg {...svgBase}>
        <circle cx="9" cy="8" r="3" />
        <circle cx="16" cy="9" r="2.5" />
        <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5" />
        <path d="M14 19c0-2 1.5-3.5 4-3.5 2 0 3.5 1 3.5 3.5" />
      </svg>
    ),
  },
  {
    to: '/about/schedule',
    title: 'Sansthan Daily Schedule',
    desc: 'Daily routine and timings of Sansthan activities.',
    icon: (
      <svg {...svgBase}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </svg>
    ),
  },
  {
    to: '/about/volunteer',
    title: 'Become Volunteer',
    desc: "Join hands with us and be a part of Baba's mission.",
    icon: (
      <svg {...svgBase}>
        <path d="M12 21s-7-4.5-9.5-8.2C.7 9.8 2.2 6 5.8 6c2 0 3.3 1.1 4.2 2.2C11 7.1 12.2 6 14.2 6c3.6 0 5.1 3.8 3.3 6.8C19 16.5 12 21 12 21z" />
      </svg>
    ),
  },
  {
    to: '/about#guidelines',
    title: 'Rules & Guidelines',
    desc: 'Important guidelines for devotees and visitors.',
    icon: (
      <svg {...svgBase}>
        <path d="M7 4h10a2 2 0 012 2v14l-7-3-7 3V6a2 2 0 012-2z" />
        <path d="M9 10h6M9 14h4" />
      </svg>
    ),
  },
  {
    to: '/contact',
    title: 'Contact Us',
    desc: 'We are here to help you. Get in touch.',
    icon: (
      <svg {...svgBase}>
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
      </svg>
    ),
  },
]

const featuredStats = [
  { value: '125+', label: 'Years of Faith' },
  { value: '1000+', label: 'Seva Activities' },
  { value: 'Millions', label: 'Devotees' },
  { value: 'Worldwide', label: 'Presence' },
]

function ColumnTitle({ children }) {
  return (
    <h4 className="mb-3 font-serif text-[0.7rem] font-semibold tracking-[0.16em] text-[#5a0e14] uppercase">
      {children}
    </h4>
  )
}

function AboutUsMegaMenu({ onNavigate }) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#e8dfd0] bg-white shadow-[0_16px_40px_rgba(40,20,10,0.14)]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_240px]">
        {/* About the Trust */}
        <div className="border-b border-[#efe6d6] p-5 lg:border-r lg:border-b-0">
          <ColumnTitle>About the Trust</ColumnTitle>
          <ul className="space-y-0.5">
            {aboutTrustLinks.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.to}
                  onClick={onNavigate}
                  className="flex items-start gap-2.5 rounded-lg px-1.5 py-2 transition hover:bg-[#FDF8EF]"
                >
                  <span className="mt-0.5 shrink-0 text-[#B38644]">{item.icon}</span>
                  <span className="min-w-0">
                    <span className="block font-serif text-sm font-semibold text-[#5a0e14]">{item.title}</span>
                    <span className="mt-0.5 block text-[0.68rem] leading-snug text-[#6b6b6b]">{item.desc}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            onClick={onNavigate}
            className="mt-4 inline-flex items-center gap-1.5 rounded-md border border-[#B38644] px-3.5 py-2 font-serif text-xs font-semibold text-[#5a0e14] transition hover:bg-[#FDF8EF]"
          >
            More About Trust →
          </Link>
        </div>

        {/* Our Journey */}
        <div className="border-b border-[#efe6d6] p-5 lg:border-r lg:border-b-0">
          <ColumnTitle>Our Journey</ColumnTitle>
          <ul className="space-y-2">
            {aboutJourneyLinks.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.to}
                  onClick={onNavigate}
                  className="flex items-start gap-3 rounded-lg px-1 py-1.5 transition hover:bg-[#FDF8EF]"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="h-12 w-14 shrink-0 rounded-md object-cover"
                  />
                  <span className="min-w-0 pt-0.5">
                    <span className="block font-serif text-sm font-semibold text-[#5a0e14]">{item.title}</span>
                    <span className="mt-0.5 block text-[0.68rem] leading-snug text-[#6b6b6b]">{item.desc}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/about/milestones"
            onClick={onNavigate}
            className="mt-4 inline-block font-serif text-xs font-semibold text-[#5a0e14] transition hover:text-[#B38644]"
          >
            Explore Our Journey →
          </Link>
        </div>

        {/* Our Sansthan */}
        <div className="border-b border-[#efe6d6] p-5 lg:border-r lg:border-b-0">
          <ColumnTitle>Our Sansthan</ColumnTitle>
          <ul className="space-y-0.5">
            {aboutSansthanLinks.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.to}
                  onClick={onNavigate}
                  className="flex items-start gap-2.5 rounded-lg px-1.5 py-2 transition hover:bg-[#FDF8EF]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f3ead7] text-[#B38644]">
                    {item.icon}
                  </span>
                  <span className="min-w-0 pt-0.5">
                    <span className="block font-serif text-sm font-semibold text-[#5a0e14]">{item.title}</span>
                    <span className="mt-0.5 block text-[0.68rem] leading-snug text-[#6b6b6b]">{item.desc}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured card */}
        <div className="flex flex-col p-5">
          <div className="overflow-hidden rounded-xl border border-[#efe6d6]">
            <img src={heroBaba} alt="Shirdi Sai Baba" className="h-28 w-full object-cover object-top" />
            <div className="p-3.5">
              <h5 className="font-serif text-sm font-bold leading-snug text-[#5a0e14]">
                Shirdi Sai Baba Sansthan Trust
              </h5>
              <p className="mt-1.5 text-[0.68rem] leading-snug text-[#6b6b6b]">
                Dedicated to the welfare of devotees through faith, seva and spiritual guidance.
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {featuredStats.map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-[#FDF8EF] px-2 py-1.5 text-center">
                    <span className="block text-xs font-bold text-[#5a0e14]">{stat.value}</span>
                    <span className="block text-[0.58rem] leading-tight text-[#6b6b6b]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-3 overflow-hidden rounded-xl border border-[#dfc083]/45 bg-[#FDF8EF] p-3.5">
            <p className="font-serif text-[0.72rem] leading-relaxed text-[#5a0e14] italic">
              &quot;The more you give, the more you receive. Service to man is service to God.&quot;
            </p>
            <span className="mt-1.5 block text-[0.65rem] font-semibold tracking-wide text-[#B38644]">
              — Sai Baba
            </span>
            <svg
              className="pointer-events-none absolute right-2 bottom-2 h-7 w-7 text-[#B38644]/25"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 3c.5 2.5 2 4.5 4.5 5.5C14 10 12.5 12 12 14.5 11.5 12 10 10 7.5 8.5 10 7.5 11.5 5.5 12 3z" />
              <path d="M12 14.5c.3 1.5 1.2 2.8 2.8 3.5-1.5.6-2.5 1.8-2.8 3.5-.3-1.7-1.3-2.9-2.8-3.5 1.6-.7 2.5-2 2.8-3.5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsMegaMenu
