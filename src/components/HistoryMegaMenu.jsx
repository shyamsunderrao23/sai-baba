import { Link } from 'react-router-dom'
import heroBaba from '../assets/hero-baba.png'
import galleryDiya from '../assets/gallery/gallery-diya.jpg'
import gallerySamadhi from '../assets/gallery/gallery-samadhi.jpg'
import sevaAnnadaan from '../assets/generated/seva-annadaan.png'
import homeBanner from '../assets/home-banner.png'

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

export const historyLinks = [
  {
    to: '/history/introduction',
    title: 'Introduction',
    desc: 'Explore the divine journey of Shri Sai Baba.',
    icon: (
      <svg {...svgBase}>
        <path d="M4 5h10a3 3 0 013 3v11H7a3 3 0 01-3-3V5z" />
        <path d="M17 5h3v14h-3" />
      </svg>
    ),
  },
  {
    to: '/history/wonderful-incarnation',
    title: 'Wonderful Incarnation',
    desc: 'The miraculous advent of Sai Baba on Earth.',
    icon: (
      <svg {...svgBase}>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M7 20c1-4 3-6 5-6s4 2 5 6" />
        <path d="M12 3v1.5" />
      </svg>
    ),
  },
  {
    to: '/history/origin',
    title: 'Origin of Shri Sai Baba',
    desc: 'His early life, background and spiritual roots.',
    icon: (
      <svg {...svgBase}>
        <path d="M4 20V8l8-4 8 4v12" />
        <path d="M10 20v-5h4v5" />
      </svg>
    ),
  },
  {
    to: '/history/how-he-formed',
    title: 'About Sai Baba How He Formed',
    desc: 'How Sai Baba came to be and established Himself.',
    icon: (
      <svg {...svgBase}>
        <path d="M12 3c2.5 3 4 5.5 4 8a4 4 0 11-8 0c0-2.5 1.5-5 4-8z" />
        <path d="M12 15v6M9 21h6" />
      </svg>
    ),
  },
  {
    to: '/history/mission',
    title: "Shri Sai Baba's Mission",
    desc: 'His purpose and mission for all humanity.',
    icon: (
      <svg {...svgBase}>
        <path d="M12 21s-7-4.5-9.5-8.2C.7 9.8 2.2 6 5.8 6c2 0 3.3 1.1 4.2 2.2C11 7.1 12.2 6 14.2 6c3.6 0 5.1 3.8 3.3 6.8C19 16.5 12 21 12 21z" />
      </svg>
    ),
  },
  {
    to: '/history/advice-teachings',
    title: 'Advice & Teachings',
    desc: 'Timeless advice and teachings for a righteous life.',
    icon: (
      <svg {...svgBase}>
        <path d="M5 17l-2 3V7a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5z" />
        <path d="M8 10h8M8 13h5" />
      </svg>
    ),
  },
]

const exploreMore = [
  {
    to: '/festivals',
    title: 'Events & Celebrations',
    desc: 'Join the sacred events and celebrations at Shirdi.',
    img: gallerySamadhi,
    icon: (
      <svg {...svgBase}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </svg>
    ),
  },
  {
    to: '/seva/anna',
    title: 'Seva & Services',
    desc: 'Participate in selfless service and help those in need.',
    img: sevaAnnadaan,
    icon: (
      <svg {...svgBase}>
        <path d="M8 13V8a1.5 1.5 0 013 0v5M11 13V7a1.5 1.5 0 013 0v6M14 13v-3a1.5 1.5 0 013 0v5c0 3-2 5-5 5h-1c-3.5 0-6-2-6-5v-3a1.5 1.5 0 013 0v1" />
      </svg>
    ),
  },
  {
    to: '/teachings',
    title: 'Teachings of Sai Baba',
    desc: 'Read the divine teachings and messages for a better life.',
    img: homeBanner,
    icon: (
      <svg {...svgBase}>
        <path d="M4 5h10a3 3 0 013 3v11H7a3 3 0 01-3-3V5z" />
        <path d="M17 5h3v14h-3" />
      </svg>
    ),
  },
]

function HistoryMegaMenu({ onNavigate }) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#e8dfd0] bg-[#FDF8F1] shadow-[0_16px_40px_rgba(40,20,10,0.14)]">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr_1fr]">
        {/* Left — History links */}
        <div className="border-b border-dotted border-[#d9cfc0] p-5 sm:p-6 lg:border-r lg:border-b-0">
          <div className="mb-4 text-center">
            <h4 className="font-serif text-[0.75rem] font-bold tracking-[0.2em] text-[#5a0e14] uppercase">
              History
            </h4>
            <div className="mx-auto mt-2 flex w-16 items-center gap-1" aria-hidden="true">
              <span className="h-px flex-1 bg-[#B38644]" />
              <span className="h-1 w-1 rounded-full bg-[#B38644]" />
              <span className="h-px flex-1 bg-[#B38644]" />
            </div>
          </div>

          <ul className="space-y-0.5">
            {historyLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={onNavigate}
                  className="group flex items-center gap-3 rounded-xl px-2 py-2.5 transition hover:bg-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#B38644]/55 text-[#B38644]">
                    {item.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-sm font-semibold text-[#3D0C11]">{item.title}</span>
                    <span className="mt-0.5 block text-[0.68rem] leading-snug text-[#7a6a5a]">{item.desc}</span>
                  </span>
                  <span
                    className="shrink-0 text-sm text-[#B38644] opacity-50 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    ›
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/history"
            onClick={onNavigate}
            className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-md border border-[#B38644] bg-transparent px-3.5 py-2.5 font-serif text-xs font-semibold text-[#5a0e14] transition hover:bg-white"
          >
            View All History →
          </Link>
        </div>

        {/* Center — Journey of Compassion */}
        <div className="border-b border-dotted border-[#d9cfc0] p-5 sm:p-6 lg:border-r lg:border-b-0">
          <div className="mb-2 flex items-center justify-center gap-2">
            <svg viewBox="0 0 32 8" className="h-2 w-7 text-[#B38644]" fill="currentColor" aria-hidden="true">
              <path d="M0 4c5-3 10-3 14 0-5 3-10 3-14 0z" />
            </svg>
            <h4 className="text-center font-serif text-[0.68rem] font-bold tracking-[0.14em] text-[#B38644] uppercase">
              The Journey of Compassion
            </h4>
            <svg viewBox="0 0 32 8" className="h-2 w-7 text-[#B38644]" fill="currentColor" aria-hidden="true">
              <path d="M32 4c-5-3-10-3-14 0 5 3 10 3 14 0z" />
            </svg>
          </div>
          <p className="mb-2.5 text-center text-[0.68rem] leading-snug text-[#7a6a5a]">
            Discover Sai Baba&apos;s sacred life of love, faith and compassion.
          </p>
          <div className="overflow-hidden rounded-xl shadow-sm">
            <img
              src={heroBaba}
              alt="Sai Baba"
              className="h-[310px] w-full object-cover object-top sm:h-[330px]"
            />
          </div>
          <div className="relative mt-2.5 flex items-center gap-2.5 overflow-hidden rounded-xl border border-[#dfc083]/35 bg-[#FCF6EA] p-2.5">
            <div className="min-w-0 flex-1">
              <p className="font-serif text-[0.75rem] leading-snug text-[#5a0e14] italic">
                &quot;Have faith and patience. All will be well.&quot;
              </p>
              <span className="mt-1 block text-[0.6rem] font-semibold tracking-wide text-[#B38644]">
                — Shri Sai Baba
              </span>
            </div>
            <img
              src={galleryDiya}
              alt=""
              className="h-11 w-11 shrink-0 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        {/* Right — Explore More */}
        <div className="flex flex-col p-5 sm:p-6">
          <div className="mb-4">
            <h4 className="font-serif text-[0.75rem] font-bold tracking-[0.2em] text-[#5a0e14] uppercase">
              Explore More
            </h4>
            <div className="mt-2 flex w-16 items-center gap-1" aria-hidden="true">
              <span className="h-px flex-1 bg-[#B38644]" />
              <span className="h-1 w-1 rounded-full bg-[#B38644]" />
              <span className="h-px flex-1 bg-[#B38644]" />
            </div>
          </div>

          <ul className="space-y-3">
            {exploreMore.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={onNavigate}
                  className="flex items-center gap-3 rounded-xl border border-[#efe6d6] bg-[#FCF8F2] px-3 py-2.5 transition hover:border-[#c9a227]/55 hover:bg-white"
                >
                  <span className="shrink-0 text-[#B38644]">{item.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-sm font-semibold text-[#3D0C11]">{item.title}</span>
                    <span className="mt-0.5 block text-[0.65rem] leading-snug text-[#7a6a5a]">{item.desc}</span>
                  </span>
                  <img src={item.img} alt="" className="h-12 w-14 shrink-0 rounded-md object-cover" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#5a0e14] px-3.5 py-3.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#B38644]/25 text-[#e8c96a]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" d="M12 3c1.2 2 2 3.5 2 5a2 2 0 11-4 0c0-1.5.8-3 2-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 14h8l-1.5 6h-5L8 14z" />
              </svg>
            </span>
            <p className="min-w-0 flex-1 text-[0.7rem] leading-snug text-white/90">
              Let Sai&apos;s wisdom guide you on the path of faith.
            </p>
            <Link
              to="/history"
              onClick={onNavigate}
              className="shrink-0 rounded-md border border-[#B38644] px-2.5 py-1.5 font-serif text-[0.65rem] font-semibold text-[#e8c96a] transition hover:bg-[#B38644]/15"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryMegaMenu
