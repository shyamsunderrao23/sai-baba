const assurances = [
  'Whoever puts his feet on Shirdi soil, his sufferings would come to an end.',
  'The wretched and miserable would rise to joy and happiness as soon as they climb the steps of my mosque.',
  'I shall be ever active and vigorous even after leaving this earthly body.',
  'My tomb shall bless and speak to the needs of my devotees.',
  'I shall be active and vigorous even from my tomb.',
  'My mortal remains would speak from the tomb.',
  'I am ever living to help and guide all who come to me, who surrender to me, and who seek refuge in me.',
  'If you look to me, I look to you.',
  'If you cast your burden on me, I shall surely bear it.',
  'If you seek my advice and help, it shall be given to you at once.',
  'There shall be no want in the house of my devotees.',
]

function Assurances() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-5xl px-4">
        <ol className="grid gap-5 sm:grid-cols-2">
          {assurances.map((text, i) => (
            <li
              key={text}
              className="flex gap-4 rounded-xl border border-gold/40 bg-white/60 p-5 shadow-sm shadow-saffron/5"
            >
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border-2 border-saffron/60 font-display text-saffron-dark">
                {i + 1}
              </span>
              <p className="text-[15px] leading-relaxed text-neutral-700">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Assurances
