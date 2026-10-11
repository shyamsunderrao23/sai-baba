import dwarkamai from '../assets/gallery/gallery-dwarkamai.jpg'

const facts = [
  {
    title: 'Arrival in Shirdi',
    text: 'Sai Baba is believed to have arrived in the village of Shirdi, Maharashtra, as a young ascetic, and lived there for the rest of his life, revered by Hindus and Muslims alike.',
  },
  {
    title: 'Life at Dwarkamai',
    text: 'He resided in a dilapidated mosque he called "Dwarkamai," where he tended a sacred fire (dhuni) that is said to have burned continuously, and shared its holy ash (udi) as a blessing.',
  },
  {
    title: 'Sabka Malik Ek',
    text: 'His central teaching, "Sabka Malik Ek" (One God governs all), transcended religion — he welcomed devotees of every faith and preached love, forgiveness, charity and inner peace.',
  },
  {
    title: 'Mahasamadhi',
    text: 'Sai Baba attained Mahasamadhi on Vijayadashami day, 15th October 1918. His shrine at the Samadhi Mandir in Shirdi continues to draw millions of devotees every year.',
  },
]

function About() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-2xl bg-saffron/10" aria-hidden="true" />
            <img
              src={dwarkamai}
              alt="Painting of Dwarkamai, the mosque-courtyard where Sai Baba lived"
              className="relative w-full rounded-2xl border-4 border-gold/60 shadow-xl"
            />
          </div>

          <div className="space-y-6">
            {facts.map((fact) => (
              <div key={fact.title} className="flex gap-4">
                <span className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-maroon text-sm font-display text-gold-light">
                  ॐ
                </span>
                <div>
                  <h3 className="font-display text-lg text-maroon-dark">{fact.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-neutral-600">
                    {fact.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
