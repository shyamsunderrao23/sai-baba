import { Link } from 'react-router-dom'
import heroBaba from '../assets/hero-baba.png'

function IconWrap({ children }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f3ead7] text-[#B38644]">
      {children}
    </span>
  )
}

const svgProps = {
  className: 'h-[1.1rem] w-[1.1rem]',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.6',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
}

const icons = {
  bowl: (
    <svg {...svgProps}>
      <path d="M4 11h16a6 6 0 01-6 6H10a6 6 0 01-6-6z" />
      <path d="M8 11V9a4 4 0 018 0v2" />
    </svg>
  ),
  cross: (
    <svg {...svgProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  cap: (
    <svg {...svgProps}>
      <path d="M3 10l9-4 9 4-9 4-9-4z" />
      <path d="M7 12v4c2 1.5 8 1.5 10 0v-4" />
      <path d="M21 10v6" />
    </svg>
  ),
  cow: (
    <svg {...svgProps}>
      <ellipse cx="12" cy="14" rx="7" ry="5" />
      <circle cx="9" cy="13" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13" r="0.8" fill="currentColor" stroke="none" />
      <path d="M7 10c-1-2 0-4 2-3M17 10c1-2 0-4-2-3" />
    </svg>
  ),
  broom: (
    <svg {...svgProps}>
      <path d="M14 3l7 7" />
      <path d="M11 6l7 7" />
      <path d="M3 21l8-8 3 3-8 8z" />
    </svg>
  ),
  heart: (
    <svg {...svgProps}>
      <path d="M7 11c-1.5 0-3 1.2-3 3 0 3.5 5 6 8 7.5 3-1.5 8-4 8-7.5 0-1.8-1.5-3-3-3-1.2 0-2.2.6-3 1.5-.8-.9-1.8-1.5-3-1.5z" />
      <path d="M8 8V5M16 8V5M10 5h4" />
    </svg>
  ),
  people: (
    <svg {...svgProps}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5" />
      <path d="M14 19c0-2 1.5-3.5 4-3.5 2 0 3.5 1 3.5 3.5" />
    </svg>
  ),
  bed: (
    <svg {...svgProps}>
      <path d="M3 18V9a2 2 0 012-2h6v7" />
      <path d="M11 14h8a2 2 0 012 2v2" />
      <path d="M3 18h18" />
      <path d="M5 7V5" />
    </svg>
  ),
  ticket: (
    <svg {...svgProps}>
      <path d="M4 9a2 2 0 010-4h16a2 2 0 010 4" />
      <path d="M4 9v6a2 2 0 000 4h16a2 2 0 000-4V9" />
      <path d="M12 5v14" strokeDasharray="2 2" />
    </svg>
  ),
  gift: (
    <svg {...svgProps}>
      <rect x="4" y="10" width="16" height="10" rx="1" />
      <path d="M12 10v10M4 14h16" />
      <path d="M12 10c-2-3-5-3-5-1s2 2 5 1zM12 10c2-3 5-3 5-1s-2 2-5 1z" />
    </svg>
  ),
  book: (
    <svg {...svgProps}>
      <path d="M5 5h6a3 3 0 013 3v11a2.5 2.5 0 00-2.5-2.5H5V5z" />
      <path d="M19 5h-6a3 3 0 00-3 3v11a2.5 2.5 0 012.5-2.5H19V5z" />
    </svg>
  ),
  laptop: (
    <svg {...svgProps}>
      <rect x="4" y="5" width="16" height="11" rx="1.5" />
      <path d="M2 19h20" />
    </svg>
  ),
  chat: (
    <svg {...svgProps}>
      <path d="M5 17l-2 3V7a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5z" />
      <path d="M8 10h8M8 13h5" />
    </svg>
  ),
  building: (
    <svg {...svgProps}>
      <path d="M4 20V6l8-3 8 3v14" />
      <path d="M10 20v-5h4v5" />
      <path d="M8 10h1M15 10h1M8 14h1M15 14h1" />
    </svg>
  ),
  hands: (
    <svg {...svgProps}>
      <path d="M8 13V8a1.5 1.5 0 013 0v5" />
      <path d="M11 13V7a1.5 1.5 0 013 0v6" />
      <path d="M14 13v-3a1.5 1.5 0 013 0v5c0 3-2 5-5 5h-1c-3.5 0-6-2-6-5v-3a1.5 1.5 0 013 0v1" />
    </svg>
  ),
}

export const sevaList = [
  { to: '/seva/anna', title: 'Anna Seva', desc: 'Food for all devotees.', icon: 'bowl' },
  { to: '/seva/medical', title: 'Medical Seva', desc: 'Healthcare for the needy.', icon: 'cross' },
  { to: '/seva/education', title: 'Education Seva', desc: 'Support for a better future.', icon: 'cap' },
  { to: '/seva/gau', title: 'Gau Seva', desc: 'Care and protection for cows.', icon: 'cow' },
  { to: '/seva/cleanliness', title: 'Cleanliness Seva', desc: 'Clean surroundings, pure hearts.', icon: 'broom' },
  { to: '/seva/disaster', title: 'Disaster Relief', desc: 'Help in times of need.', icon: 'heart' },
  { to: '/seva/other', title: 'Other Seva Activities', desc: 'Many ways to serve.', icon: 'people' },
]

export const serviceCards = [
  { to: '/seva/accommodation', title: 'Accommodation', desc: 'Comfortable stay for devotees.', icon: 'bed' },
  { to: '/seva/darshan', title: 'Darshan Pass', desc: 'Book your darshan passes online.', icon: 'ticket' },
  { to: '/seva/prasad', title: 'Prasad & Gifts', desc: 'Special Prasad & spiritual gifts.', icon: 'gift' },
  { to: '/seva/library', title: 'Sai Library', desc: 'Explore spiritual books & resources.', icon: 'book' },
  { to: '/seva/online', title: 'Online Seva', desc: 'Seva from the comfort of your home.', icon: 'laptop' },
  { to: '/seva/counseling', title: 'Counseling Seva', desc: 'Spiritual guidance & life counseling.', icon: 'chat' },
  { to: '/seva/facilities', title: 'Facilities', desc: 'Other facilities for devotees.', icon: 'building' },
  { to: '/about/volunteer', title: 'Volunteer Program', desc: "Join hands in Baba's mission.", icon: 'hands' },
]

function SevaServicesMegaMenu({ onNavigate }) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#e8dfd0] bg-white shadow-[0_16px_40px_rgba(40,20,10,0.14)]">
      <div className="grid grid-cols-1 lg:grid-cols-[230px_1fr_210px]">
        {/* Seva list */}
        <div className="border-b border-[#efe6d6] p-5 lg:border-r lg:border-b-0">
          <h4 className="mb-3 font-serif text-[0.7rem] font-semibold tracking-[0.16em] text-[#5a0e14] uppercase">
            Seva (Selfless Service)
          </h4>
          <ul className="space-y-0.5">
            {sevaList.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.to}
                  onClick={onNavigate}
                  className="flex items-start gap-2.5 rounded-lg px-1.5 py-2 transition hover:bg-[#FDF8EF]"
                >
                  <IconWrap>{icons[item.icon]}</IconWrap>
                  <span className="min-w-0 pt-0.5">
                    <span className="block font-serif text-sm font-semibold text-[#5a0e14]">{item.title}</span>
                    <span className="mt-0.5 block text-[0.7rem] leading-snug text-[#6b6b6b]">{item.desc}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div className="border-b border-[#efe6d6] p-5 lg:border-r lg:border-b-0">
          <h4 className="mb-3 font-serif text-[0.7rem] font-semibold tracking-[0.16em] text-[#5a0e14] uppercase">
            Our Services
          </h4>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {serviceCards.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                onClick={onNavigate}
                className="group flex items-start gap-2.5 rounded-lg border border-[#efe6d6] bg-[#FDFBF8] px-3 py-2.5 transition hover:border-[#c9a227]/55 hover:bg-[#FDF8EF]"
              >
                <span className="mt-0.5 shrink-0 text-[#B38644]">{icons[item.icon]}</span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-start justify-between gap-1">
                    <span className="font-serif text-sm font-semibold text-[#5a0e14]">{item.title}</span>
                    <span className="mt-0.5 shrink-0 text-xs text-[#B38644]" aria-hidden="true">
                      →
                    </span>
                  </span>
                  <span className="mt-0.5 block text-[0.68rem] leading-snug text-[#6b6b6b]">{item.desc}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured */}
        <div className="flex flex-col gap-4 p-5">
          <h4 className="font-serif text-[0.7rem] font-semibold tracking-[0.16em] text-[#5a0e14] uppercase">
            Featured Service
          </h4>
          <Link
            to="/seva/anna"
            onClick={onNavigate}
            className="overflow-hidden rounded-xl border border-[#efe6d6] transition hover:border-[#c9a227]/50"
          >
            <img src={heroBaba} alt="Anna Seva" className="h-28 w-full object-cover object-top" />
            <div className="space-y-1 p-3">
              <h5 className="font-serif text-sm font-bold text-[#5a0e14]">Anna Seva</h5>
              <p className="text-[0.7rem] leading-snug text-[#6b6b6b]">
                Every day, thousands of devotees are served with love and devotion.
              </p>
              <span className="inline-block pt-1 font-serif text-xs font-semibold text-[#5a0e14]">
                Know More →
              </span>
            </div>
          </Link>

          <div className="relative mt-auto overflow-hidden rounded-xl border border-[#dfc083]/45 bg-[#FDF8EF] p-4">
            <p className="font-serif text-sm leading-relaxed text-[#5a0e14] italic">
              &quot;Service to man is service to God.&quot;
            </p>
            <span className="mt-2 block text-xs font-semibold tracking-wide text-[#B38644]">— Sai Baba</span>
            <svg
              className="pointer-events-none absolute right-2 bottom-2 h-8 w-8 text-[#B38644]/25"
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

export default SevaServicesMegaMenu
