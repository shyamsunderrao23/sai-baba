import { useState } from 'react'
import { Link } from 'react-router-dom'
import dwarkamai from '../assets/gallery/gallery-dwarkamai.jpg'
import samadhi from '../assets/gallery/gallery-samadhi.jpg'
import dhuni from '../assets/gallery/gallery-dhuni.jpg'
import diya from '../assets/gallery/gallery-diya.jpg'

const galleryItems = [
  { src: dwarkamai, title: 'Dwarkamai', desc: 'Where Baba lived and blessed devotees' },
  { src: samadhi, title: 'Samadhi Mandir', desc: "Baba's shrine, adorned with flowers" },
  { src: diya, title: 'Chavadi', desc: 'The sacred resting place of devotion' },
  { src: dhuni, title: 'Eternal Dhuni', desc: 'The eternal fire at Dwarkamai' },
]

function GalleryCarousel() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i === 0 ? galleryItems.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === galleryItems.length - 1 ? 0 : i + 1))

  return (
    <section className="bg-cream py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center">
          <p className="font-serif text-sm uppercase tracking-[0.2em] text-saffron-dark">A Glimpse</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-maroon-dark md:text-4xl">
            Sacred Gallery
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={prev}
            className="absolute -left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-white text-maroon-dark shadow-md transition hover:bg-cream-dark md:flex"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute -right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-white text-maroon-dark shadow-md transition hover:bg-cream-dark md:flex"
            aria-label="Next"
          >
            ›
          </button>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item, i) => (
              <figure
                key={item.title}
                className={`group overflow-hidden rounded-xl border-2 border-gold/40 shadow-md transition ${
                  i === index ? 'ring-2 ring-gold/50' : ''
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="bg-maroon-dark px-4 py-3 text-center">
                  <p className="font-display text-sm font-semibold text-gold-light">{item.title}</p>
                  <p className="text-xs text-cream/70">{item.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-block rounded-full bg-maroon-dark px-8 py-3 text-sm font-semibold text-gold-light shadow-md transition hover:bg-burgundy"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}

export default GalleryCarousel
