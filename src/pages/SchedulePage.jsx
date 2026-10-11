import { Link } from 'react-router-dom'
import homeBanner from '../assets/home-banner.png'
import heroBaba from '../assets/hero-baba.png'
import galleryDiya from '../assets/gallery/gallery-diya.jpg'

const schedule = [
  {
    time: '4:00 AM',
    title: 'Kakad Aarti',
    desc: 'Dawn aarti welcoming Baba with sacred hymns and devotion.',
    icon: '🌅',
  },
  {
    time: '4:15 AM',
    title: 'Bhupali Aarti',
    desc: 'Early morning bhupali songs offered at Baba’s holy feet.',
    icon: '🔔',
  },
  {
    time: '5:00 AM',
    title: 'Mangala Snaan',
    desc: 'Sacred bathing ritual and preparation for morning darshan.',
    icon: '💧',
  },
  {
    time: '12:00 PM',
    title: 'Madhyan Aarti',
    desc: 'Midday aarti performed with deep faith and gratitude.',
    icon: '☀️',
  },
  {
    time: '4:00 PM',
    title: 'Dhoop Aarti',
    desc: 'Evening incense aarti filling the temple with divine fragrance.',
    icon: '🪔',
  },
  {
    time: '7:30 PM',
    title: 'Shej Aarti',
    desc: 'Night aarti before Baba rests in peaceful silence.',
    icon: '🌙',
  },
  {
    time: '10:30 PM',
    title: 'Palki Procession',
    desc: 'Sacred palki procession filled with chants and devotion.',
    icon: '🚶',
  },
  {
    time: '10:45 PM',
    title: 'Shayan',
    desc: 'Final resting ritual closing the day’s divine schedule.',
    icon: '✨',
  },
]

const importantInfo = [
  { text: 'Aarti darshan may require passes on crowded days.', icon: '🎫' },
  { text: 'Arrive early — timings can vary slightly on festivals.', icon: '⏰' },
  { text: 'Photography is restricted inside the sanctum.', icon: '📷' },
  { text: 'Follow temple guidelines for a peaceful darshan.', icon: '🛡️' },
]

const weeklySpecials = [
  { day: 'Thursday', title: 'Special Abhishek', desc: 'Devotees offer special abhishek with deep faith.' },
  { day: 'Friday', title: 'Annadaan Seva', desc: 'Community meals served as sacred seva.' },
  { day: 'Saturday', title: 'Bhajan Sandhya', desc: 'Evening bhajans filling hearts with devotion.' },
  { day: 'Sunday', title: 'Family Darshan', desc: 'Special arrangements for family devotees.' },
]

function Flourish() {
  return (
    <svg viewBox="0 0 48 12" className="h-3 w-12 text-[#B38644]" fill="currentColor" aria-hidden="true">
      <path d="M0 6c8-5 16-5 24 0-8 5-16 5-24 0zm48 0c-8-5-16-5-24 0 8 5 16 5 24 0z" />
    </svg>
  )
}

function SchedulePage() {
  return (
    <div className="w-full font-serif">
      {/* Hero */}
      <section className="relative min-h-[340px] overflow-hidden sm:min-h-[400px]">
        <img
          src={homeBanner}
          alt="Sai Baba temple"
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FCF8F2]/95 via-[#FCF8F2]/80 to-[#FCF8F2]/25" />

        <div className="relative z-10 mx-auto flex min-h-[340px] max-w-7xl flex-col justify-center px-4 py-12 sm:min-h-[400px] sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#B38644]">
            ~ SANSTHAN DAILY SCHEDULE ~
          </p>
          <h1 className="mt-3 max-w-xl text-3xl font-bold leading-tight text-[#5a0e14] sm:text-4xl lg:text-5xl">
            A Day in Baba&apos;s Divine Presence
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#3b1f0f]/80">
            Experience the sacred rhythm of Shirdi — from Kakad Aarti at dawn to Shej Aarti at night — a full
            day immersed in Baba’s grace.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#5a0e14] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7a1520]"
            >
              <span aria-hidden="true">📅</span> Plan Your Visit
            </Link>
            <Link
              to="/aarti-timings"
              className="text-sm font-semibold text-[#5a0e14] transition hover:text-[#B38644]"
            >
              View Aarti Timings →
            </Link>
          </div>
        </div>
      </section>

      {/* Daily schedule cards */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-center gap-3">
            <Flourish />
            <h2 className="text-xl font-bold tracking-wide text-[#5a0e14] uppercase sm:text-2xl">
              Daily Schedule
            </h2>
            <Flourish />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {schedule.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-[#ebdcb9]/50 bg-[#FDFBF2] p-3 text-center shadow-sm transition hover:shadow-md sm:p-4"
              >
                <p className="text-xs font-bold text-[#5a0e14] sm:text-sm">{item.time}</p>
                <div className="my-2 text-xl sm:text-2xl" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-[0.8rem] font-bold leading-snug text-[#5a0e14] sm:text-sm">{item.title}</h3>
                <p className="mt-1.5 text-[0.65rem] leading-relaxed text-[#3b1f0f]/70 sm:text-[0.7rem]">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-xl border border-[#ebdcb9]/60 bg-[#F3EAD7]/50 px-4 py-4 sm:px-5">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#B38644] text-xs font-bold text-white">
              i
            </span>
            <p className="text-sm leading-relaxed text-[#3b1f0f]/80">
              <strong className="text-[#5a0e14]">Please Note:</strong> On festivals and special occasions,
              timings may change. Kindly check the notice board or official updates before your visit.
            </p>
          </div>
        </div>
      </section>

      {/* 3 columns */}
      <section className="bg-[#FCF8F2] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {/* Important info */}
          <div className="overflow-hidden rounded-xl border border-[#ebdcb9]/40 bg-white shadow-sm">
            <div className="bg-[#5a0e14] px-5 py-3">
              <h3 className="text-sm font-semibold tracking-[0.15em] text-[#e8c96a] uppercase">
                Important Information
              </h3>
            </div>
            <ul className="space-y-4 p-5">
              {importantInfo.map((item) => (
                <li key={item.text} className="flex gap-3">
                  <span className="text-lg" aria-hidden="true">
                    {item.icon}
                  </span>
                  <p className="text-sm leading-relaxed text-[#3b1f0f]/80">{item.text}</p>
                </li>
              ))}
            </ul>
            <div className="border-t border-[#ebdcb9]/40 px-5 py-3">
              <Link to="/contact" className="text-sm font-semibold text-[#5a0e14] hover:text-[#B38644]">
                View Guidelines →
              </Link>
            </div>
          </div>

          {/* Weekly specials */}
          <div className="overflow-hidden rounded-xl border border-[#ebdcb9]/40 bg-white shadow-sm">
            <div className="flex items-center justify-center gap-2 px-5 py-3">
              <Flourish />
              <h3 className="text-sm font-semibold tracking-[0.15em] text-[#B38644] uppercase">
                Weekly Specials
              </h3>
              <Flourish />
            </div>
            <ul className="space-y-4 px-5 pb-2">
              {weeklySpecials.map((w) => (
                <li key={w.day} className="border-b border-[#efe6d6] pb-3 last:border-0">
                  <span className="inline-block rounded bg-[#f3ead7] px-2 py-0.5 text-[0.65rem] font-semibold tracking-wide text-[#5a0e14] uppercase">
                    {w.day}
                  </span>
                  <h4 className="mt-1.5 text-sm font-bold text-[#5a0e14]">{w.title}</h4>
                  <p className="mt-0.5 text-xs text-[#3b1f0f]/70">{w.desc}</p>
                </li>
              ))}
            </ul>
            <div className="border-t border-[#ebdcb9]/40 px-5 py-3">
              <Link to="/festivals" className="text-sm font-semibold text-[#5a0e14] hover:text-[#B38644]">
                View All Events →
              </Link>
            </div>
          </div>

          {/* Festival highlights */}
          <div className="overflow-hidden rounded-xl border border-[#ebdcb9]/40 bg-white shadow-sm">
            <div className="flex items-center justify-center gap-2 px-5 py-3">
              <Flourish />
              <h3 className="text-sm font-semibold tracking-[0.15em] text-[#B38644] uppercase">
                Festival Highlights
              </h3>
              <Flourish />
            </div>
            <div className="px-5 pb-2">
              <img
                src={heroBaba}
                alt="Sai Baba"
                className="mb-4 h-36 w-full rounded-lg object-cover object-top"
              />
              <p className="text-sm leading-relaxed text-[#3b1f0f]/80">
                Celebrate Ram Navami, Guru Purnima and other sacred festivals in Shirdi with grand aartis,
                processions and divine celebrations.
              </p>
            </div>
            <div className="mt-3 border-t border-[#ebdcb9]/40 px-5 py-3">
              <Link to="/festivals" className="text-sm font-semibold text-[#5a0e14] hover:text-[#B38644]">
                View Festival Calendar →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#5a0e14] py-12 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <div className="flex w-full items-center justify-between gap-4">
            <img
              src={galleryDiya}
              alt=""
              className="hidden h-16 w-16 rounded-full object-cover opacity-80 md:block"
            />
            <div className="mx-auto max-w-2xl">
              <p className="text-xl font-semibold text-white sm:text-2xl">
                Plan your visit and be a part of Baba&apos;s divine routine.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#B38644] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#9a7138]"
              >
                <span aria-hidden="true">📅</span> Plan Your Visit <span aria-hidden="true">→</span>
              </Link>
            </div>
            <span className="hidden text-4xl md:block" aria-hidden="true">
              🙏
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SchedulePage
