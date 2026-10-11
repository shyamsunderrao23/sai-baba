import { Link } from 'react-router-dom'
import samadhi from '../assets/gallery/gallery-samadhi.jpg'
import diya from '../assets/gallery/gallery-diya.jpg'
import heroBaba from '../assets/hero-baba.png'

const events = [
  { day: '21', month: 'JUL', title: 'Guru Purnima', date: 'July 21, 2026' },
  { day: '15', month: 'AUG', title: 'Independence Day Seva', date: 'August 15, 2026' },
  { day: '02', month: 'OCT', title: 'Vijayadashami (Punyatithi)', date: 'October 2, 2026' },
]

function EventsQuote() {
  return (
    <section className="bg-cream-dark py-14 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-2 lg:gap-8 lg:px-6">
        {/* Upcoming Events */}
        <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-white p-6 card-shadow">
          <div
            className="pointer-events-none absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url(${samadhi})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-maroon-dark">
                Upcoming Events
              </h3>
              <Link to="/festivals" className="text-sm font-medium text-saffron-dark hover:underline">
                View All
              </Link>
            </div>

            <ul className="mt-6 space-y-4">
              {events.map((e) => (
                <li key={e.title} className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-maroon-dark text-cream">
                    <span className="text-lg font-bold leading-none">{e.day}</span>
                    <span className="text-[10px] uppercase tracking-wide">{e.month}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-maroon-dark">{e.title}</p>
                    <p className="text-sm text-neutral-500">{e.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Featured Quote */}
        <div className="relative overflow-hidden rounded-2xl border-4 border-gold/50 bg-maroon-dark p-8 text-center text-cream card-shadow">
          <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-2 border-gold/60">
            <img src={heroBaba} alt="" className="h-full w-full object-cover object-top" />
          </div>
          <blockquote className="mt-6 font-display text-2xl font-semibold italic text-gold-light md:text-3xl">
            &ldquo;Why fear, when I am here!&rdquo;
          </blockquote>
          <p className="mt-3 text-sm text-cream/70">— Shirdi Sai Baba</p>
          <div className="mx-auto mt-6 h-16 w-20 overflow-hidden rounded-lg opacity-80">
            <img src={diya} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsQuote
