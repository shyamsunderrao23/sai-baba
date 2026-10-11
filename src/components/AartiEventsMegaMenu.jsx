import { Link } from 'react-router-dom'
import galleryDiya from '../assets/gallery/gallery-diya.jpg'
import gallerySamadhi from '../assets/gallery/gallery-samadhi.jpg'

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

function DiyaIcon(props = {}) {
  return (
    <svg {...svgBase} {...props}>
      <path d="M12 3c1.5 2 2.5 3.5 2.5 5a2.5 2.5 0 11-5 0c0-1.5 1-3 2.5-5z" />
      <path d="M7 14c0-1.5 2.2-2.5 5-2.5s5 1 5 2.5c0 3-2.2 5-5 5s-5-2-5-5z" />
      <path d="M6 20h12" />
    </svg>
  )
}

function CalendarIcon(props = {}) {
  return (
    <svg {...svgBase} {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  )
}

function SectionTitle({ icon, children }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <span className="text-[#B38644]">{icon}</span>
        <h4 className="font-serif text-[0.72rem] font-semibold tracking-[0.16em] text-[#5a0e14] uppercase">
          {children}
        </h4>
      </div>
      <div className="mt-2 flex items-center gap-1.5" aria-hidden="true">
        <span className="h-px w-8 bg-[#B38644]" />
        <span className="h-1 w-1 rounded-full bg-[#B38644]" />
        <span className="h-px flex-1 bg-[#e8dfd0]" />
      </div>
    </div>
  )
}

export const aartiSchedule = [
  {
    to: '/aarti-timings#kakad',
    title: 'Kakad Aarti',
    time: '4:15 AM',
    icon: (
      <svg {...svgBase}>
        <path d="M12 4v3M9 5.5c1 .8 3 .8 4 0" />
        <path d="M8 14c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.5-1.8 4-4 4s-4-1.5-4-4z" />
        <path d="M7 20h10" />
      </svg>
    ),
  },
  {
    to: '/aarti-timings#madhyan',
    title: 'Madhyan Aarti',
    time: '12:00 PM',
    icon: (
      <svg {...svgBase}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" />
      </svg>
    ),
  },
  {
    to: '/aarti-timings#dhoop',
    title: 'Dhoop Aarti',
    time: '6:30 PM',
    icon: (
      <svg {...svgBase}>
        <path d="M12 3c.8 1.5 1.5 2.8 1.5 4.2a1.5 1.5 0 11-3 0C10.5 5.8 11.2 4.5 12 3z" />
        <path d="M9 14h6l-1 6H10l-1-6z" />
        <path d="M10 14c0-1.5.9-2.5 2-2.5s2 1 2 2.5" />
      </svg>
    ),
  },
  {
    to: '/aarti-timings#shej',
    title: 'Shej Aarti',
    time: '10:30 PM',
    icon: (
      <svg {...svgBase}>
        <path d="M4 18h16" />
        <path d="M6 18V10a2 2 0 012-2h3v10" />
        <path d="M11 14h7a2 2 0 012 2v2" />
        <path d="M16 5l1 2 2 .3-1.5 1.4.4 2L16 9.5 13.1 10.7l.4-2L12 7.3l2-.3z" />
      </svg>
    ),
  },
  {
    to: '/aarti-timings#palki',
    title: 'Palki Procession',
    time: '10:45 PM',
    icon: (
      <svg {...svgBase}>
        <path d="M5 18h14" />
        <path d="M7 18l1-6h8l1 6" />
        <path d="M9 12V8l3-2 3 2v4" />
        <path d="M8 8H6M16 8h2" />
      </svg>
    ),
  },
]

export const eventItems = [
  {
    to: '/festivals#ram-navami',
    title: 'Ram Navami',
    time: 'April (Chaitra)',
    icon: (
      <svg {...svgBase}>
        <path d="M12 3l1.5 4.5H18l-3.5 2.8 1.3 4.5L12 12.5 8.2 14.8l1.3-4.5L6 7.5h4.5z" />
        <path d="M7 20h10" />
      </svg>
    ),
  },
  {
    to: '/festivals#guru-purnima',
    title: 'Guru Purnima',
    time: 'July (Ashadh)',
    icon: (
      <svg {...svgBase}>
        <circle cx="12" cy="12" r="5" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    to: '/festivals#vijayadashami',
    title: 'Vijayadashami',
    time: 'October (Ashwin)',
    icon: (
      <svg {...svgBase}>
        <path d="M12 4v16" />
        <path d="M8 8c2 1 4 1 6 0" />
        <path d="M7 12c2.5 1.5 7.5 1.5 10 0" />
        <path d="M8 16c2 1 4 1 6 0" />
      </svg>
    ),
  },
  {
    to: '/festivals#punyatithi',
    title: 'Sri Sai Baba Punyatithi',
    time: 'October (Ashwin)',
    icon: (
      <svg {...svgBase}>
        <path d="M12 21s-7-4.5-9.5-8.2C.7 9.8 2.2 6 5.8 6c2 0 3.3 1.1 4.2 2.2C11 7.1 12.2 6 14.2 6c3.6 0 5.1 3.8 3.3 6.8C19 16.5 12 21 12 21z" />
      </svg>
    ),
  },
  {
    to: '/festivals#christmas',
    title: 'Christmas Celebration',
    time: 'December',
    icon: (
      <svg {...svgBase}>
        <path d="M12 3l4 6H8l4-6z" />
        <path d="M12 8l5 6H7l5-6z" />
        <path d="M12 13l5.5 6H6.5l5.5-6z" />
        <path d="M12 19v2" />
      </svg>
    ),
  },
]

export const eventUtilities = [
  {
    to: '/festivals',
    title: 'Event Calendar',
    desc: 'See full calendar',
    icon: <CalendarIcon />,
  },
  {
    to: '/contact',
    title: 'Book for Events',
    desc: 'Register online',
    icon: (
      <svg {...svgBase}>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
        <path d="M9 14h6" />
      </svg>
    ),
  },
  {
    to: '/gallery',
    title: 'Events Gallery',
    desc: 'Photos & videos',
    icon: (
      <svg {...svgBase}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="11" r="2" />
        <path d="M3 16l5-4 4 3 3-2 6 3" />
      </svg>
    ),
  },
  {
    to: '/festivals#announcements',
    title: 'Important Announcements',
    desc: 'Latest updates',
    icon: (
      <svg {...svgBase}>
        <path d="M12 4v2" />
        <path d="M6 10a6 6 0 0112 0c0 4-2 5-2 8H8c0-3-2-4-2-8z" />
        <path d="M10 20h4" />
      </svg>
    ),
  },
]

function AartiEventsMegaMenu({ onNavigate }) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#e8dfd0] bg-white shadow-[0_16px_40px_rgba(40,20,10,0.14)]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Aarti Schedule */}
        <div className="border-b border-[#efe6d6] p-5 sm:p-6 lg:border-r lg:border-b-0">
          <SectionTitle icon={<DiyaIcon className="h-[1.05rem] w-[1.05rem]" />}>Aarti Schedule</SectionTitle>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_180px]">
            <div>
              <ul className="space-y-0.5">
                {aartiSchedule.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.to}
                      onClick={onNavigate}
                      className="flex items-center gap-3 rounded-lg px-1.5 py-2 transition hover:bg-[#FDF8EF]"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#B38644]">
                        {item.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-serif text-sm font-semibold text-[#5a0e14]">{item.title}</span>
                        <span className="block text-[0.7rem] text-[#6b6b6b]">{item.time}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/aarti-timings"
                onClick={onNavigate}
                className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[#B38644] px-3.5 py-2 font-serif text-xs font-semibold text-[#5a0e14] transition hover:bg-[#FDF8EF]"
              >
                View Full Aarti Schedule →
              </Link>
            </div>

            <div className="relative flex flex-col overflow-hidden rounded-xl border border-[#efe6d6] bg-[#FDFBF8] p-3">
              <img
                src={galleryDiya}
                alt="Live Aarti Darshan"
                className="h-20 w-full rounded-lg object-cover"
              />
              <h5 className="mt-2.5 font-serif text-[0.78rem] font-bold tracking-wide text-[#5a0e14] uppercase">
                Live Aarti Darshan
              </h5>
              <p className="mt-1 text-[0.68rem] leading-snug text-[#6b6b6b]">
                Join our live aarti and feel Baba&apos;s divine presence.
              </p>
              <Link
                to="/aarti-timings#live"
                onClick={onNavigate}
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-md bg-[#5a0e14] px-3 py-2 font-serif text-[0.7rem] font-semibold text-white transition hover:bg-[#4a0c10]"
              >
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Live Aarti
              </Link>
              <span className="pointer-events-none absolute right-2 bottom-2 text-[#B38644]/35" aria-hidden="true">
                <DiyaIcon className="h-7 w-7" />
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-[#efe6d6] bg-[#FDF8EF] px-3 py-2.5">
            <div className="flex items-center gap-2">
              <span className="text-[#B38644]">
                <svg {...svgBase}>
                  <path d="M6 10v4l-2 3h16l-2-3v-4a6 6 0 10-12 0z" />
                  <path d="M10 20h4" />
                </svg>
              </span>
              <span className="font-serif text-xs font-semibold text-[#5a0e14]">Get Aarti Notifications</span>
            </div>
            <Link
              to="/contact"
              onClick={onNavigate}
              className="inline-flex items-center rounded-md border border-[#B38644] px-2.5 py-1 font-serif text-[0.68rem] font-semibold text-[#5a0e14] transition hover:bg-white"
            >
              Enable Now →
            </Link>
          </div>
        </div>

        {/* Events & Celebrations */}
        <div className="p-5 sm:p-6">
          <SectionTitle icon={<CalendarIcon className="h-[1.05rem] w-[1.05rem]" />}>
            Events & Celebrations
          </SectionTitle>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_200px]">
            <div>
              <ul className="space-y-0.5">
                {eventItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.to}
                      onClick={onNavigate}
                      className="flex items-center gap-3 rounded-lg px-1.5 py-2 transition hover:bg-[#FDF8EF]"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#B38644]">
                        {item.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-serif text-sm font-semibold text-[#5a0e14]">{item.title}</span>
                        <span className="block text-[0.7rem] text-[#6b6b6b]">{item.time}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/festivals"
                onClick={onNavigate}
                className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-[#B38644] px-3.5 py-2 font-serif text-xs font-semibold text-[#5a0e14] transition hover:bg-[#FDF8EF]"
              >
                View All Events →
              </Link>
            </div>

            <Link
              to="/festivals#guru-purnima"
              onClick={onNavigate}
              className="group relative block min-h-[200px] overflow-hidden rounded-xl"
            >
              <img
                src={gallerySamadhi}
                alt="Guru Purnima"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a0a0c]/90 via-[#2a0a0c]/45 to-[#2a0a0c]/15" />
              <div className="relative z-10 flex h-full flex-col justify-end p-3.5">
                <span className="mb-2 inline-flex w-fit rounded-full bg-[#B38644] px-2 py-0.5 text-[0.6rem] font-semibold tracking-wide text-white uppercase">
                  Upcoming Event
                </span>
                <h5 className="font-serif text-lg font-bold text-white">Guru Purnima</h5>
                <p className="mt-0.5 text-[0.7rem] text-white/85">10 July 2025, Thursday</p>
                <span className="mt-3 inline-flex w-fit items-center rounded-md bg-[#B38644] px-3 py-1.5 font-serif text-[0.7rem] font-semibold text-[#5a0e14] transition group-hover:bg-[#c9a227]">
                  View Details →
                </span>
              </div>
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {eventUtilities.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                onClick={onNavigate}
                className="rounded-lg border border-[#efe6d6] px-2.5 py-2.5 transition hover:border-[#c9a227]/50 hover:bg-[#FDF8EF]"
              >
                <span className="text-[#B38644]">{item.icon}</span>
                <span className="mt-1.5 block font-serif text-[0.72rem] font-semibold leading-snug text-[#5a0e14]">
                  {item.title}
                </span>
                <span className="mt-0.5 block text-[0.62rem] text-[#6b6b6b]">{item.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AartiEventsMegaMenu
