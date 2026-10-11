const festivals = [
  {
    name: 'Ram Navami',
    when: 'Chaitra (Mar – Apr)',
    desc: 'Celebrated with grandeur in Shirdi since Baba\'s time, marking the birth of Lord Rama with processions and bhajans.',
  },
  {
    name: 'Guru Purnima',
    when: 'Ashadha (Jun – Jul)',
    desc: "Devotees honour Sai Baba as their Sadguru with special pujas, expressing gratitude for his eternal guidance.",
  },
  {
    name: 'Vijayadashami (Punyatithi)',
    when: 'Ashwin (Sep – Oct)',
    desc: 'The day Baba attained Mahasamadhi in 1918 — observed as his Punyatithi with prayers and remembrance.',
  },
  {
    name: 'Datta Jayanti',
    when: 'Margashirsha (Dec)',
    desc: 'Celebrating Lord Dattatreya, whom many devotees believe Sai Baba to be an incarnation of.',
  },
]

function Festivals() {
  return (
    <section className="bg-maroon-dark py-16 text-cream">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {festivals.map((f) => (
            <div
              key={f.name}
              className="rounded-2xl border border-gold/30 bg-maroon/50 p-6 text-center transition hover:border-gold/70"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 font-display text-xl text-gold-light">
                🪔
              </span>
              <h3 className="mt-4 font-display text-lg text-gold-light">{f.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-saffron/90">{f.when}</p>
              <p className="mt-3 text-sm text-cream/75">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Festivals
