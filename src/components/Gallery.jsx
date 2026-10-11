import dhuni from '../assets/gallery/gallery-dhuni.jpg'
import samadhi from '../assets/gallery/gallery-samadhi.jpg'
import dwarkamai from '../assets/gallery/gallery-dwarkamai.jpg'
import diya from '../assets/gallery/gallery-diya.jpg'

const images = [
  { src: dhuni, title: 'The Sacred Dhuni', desc: 'The eternal fire at Dwarkamai' },
  { src: samadhi, title: 'Samadhi Mandir', desc: "Baba's shrine, adorned with flowers" },
  { src: dwarkamai, title: 'Dwarkamai', desc: 'Where Baba lived and blessed devotees' },
  { src: diya, title: 'Deepa Aradhana', desc: 'Lamps lit in devotion every evening' },
]

function Gallery() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img) => (
            <figure
              key={img.title}
              className="group overflow-hidden rounded-2xl border-4 border-gold/50 shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <figcaption className="bg-maroon-dark px-4 py-3 text-center text-cream">
                <p className="font-display text-sm text-gold-light">{img.title}</p>
                <p className="text-xs text-cream/70">{img.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
