const quotes = [
  {
    text: 'Sabka Malik Ek — One God governs all.',
    sub: "Baba's core teaching on the oneness of the divine, beyond religion.",
  },
  {
    text: 'Why fear when I am here?',
    sub: 'A promise of protection and comfort to every devotee who seeks refuge in him.',
  },
  {
    text: 'Trust and patience — Shraddha and Saburi — are the keys to my grace.',
    sub: "Baba's two guiding pillars for a devotee's spiritual journey.",
  },
  {
    text: 'Look at me and I shall look at you.',
    sub: 'An invitation to unwavering faith and mutual devotion.',
  },
  {
    text: 'Whatever creature comes to me, I become his slave for a grain of love.',
    sub: 'On the boundless compassion he held for all beings.',
  },
  {
    text: 'Moving forward is Faith, going back is fear.',
    sub: 'Baba on courage and steadfastness on the spiritual path.',
  },
]

function Teachings() {
  return (
    <section className="bg-gradient-to-b from-cream to-gold-light/30 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q) => (
            <blockquote
              key={q.text}
              className="relative rounded-2xl border border-gold/40 bg-white/70 p-6 shadow-sm"
            >
              <span className="font-display text-5xl leading-none text-saffron/30">“</span>
              <p className="-mt-4 font-display text-lg text-maroon-dark">{q.text}</p>
              <footer className="mt-3 text-sm text-neutral-500">{q.sub}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Teachings
