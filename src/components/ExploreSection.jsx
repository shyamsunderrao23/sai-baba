import { Link } from 'react-router-dom'
import dwarkamai from '../assets/gallery/gallery-dwarkamai.jpg'
import samadhi from '../assets/gallery/gallery-samadhi.jpg'
import dhuni from '../assets/gallery/gallery-dhuni.jpg'
import diya from '../assets/gallery/gallery-diya.jpg'
import heroBaba from '../assets/hero-baba.png'

const cards = [
  {
    to: '/about',
    icon: '🕉️',
    title: 'About Sai Baba',
    desc: "Discover the life of the saint of Shirdi and his timeless message, Sabka Malik Ek.",
    image: heroBaba,
  },
  {
    to: '/aarti-timings',
    icon: '🪔',
    title: 'Aarti Timings',
    desc: 'The traditional daily programme of aartis and darshan observed in devotion.',
    image: diya,
  },
  {
    to: '/teachings',
    icon: '📿',
    title: 'Teachings',
    desc: "Words of wisdom on faith, patience and love from Baba's own sayings.",
    image: samadhi,
  },
  {
    to: '/assurances',
    icon: '🙏',
    title: '11 Assurances',
    desc: 'The eleven sacred promises Baba gave to comfort every devotee.',
    image: dhuni,
  },
  {
    to: '/gallery',
    icon: '🖼️',
    title: 'Sacred Gallery',
    desc: 'A visual glimpse of Dwarkamai, the Samadhi Mandir and the eternal dhuni.',
    image: dwarkamai,
  },
  {
    to: '/festivals',
    icon: '🎉',
    title: 'Festivals',
    desc: 'Ram Navami, Guru Purnima, Vijayadashami and Datta Jayanti at the temple.',
    image: samadhi,
  },
]

function ExploreSection() {
  return (
    <section className="bg-cream py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center">
          <p className="font-serif text-sm uppercase tracking-[0.2em] text-saffron-dark">Explore</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-maroon-dark md:text-4xl">
            Walk Through Baba&apos;s World
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group relative overflow-hidden rounded-xl border border-gold/20 bg-white p-5 card-shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-lg">
                  {card.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-semibold text-maroon-dark">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{card.desc}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-saffron-dark transition group-hover:translate-x-1">
                    Read more →
                  </span>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-4 -top-2 h-24 w-24 overflow-hidden rounded-full opacity-20 transition group-hover:opacity-30">
                <img src={card.image} alt="" className="h-full w-full object-cover" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExploreSection
