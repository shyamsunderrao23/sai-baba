const schedule = [
  { time: '4:45 AM', event: 'Temple Opens', note: 'The sanctum opens for the day' },
  { time: '5:00 AM', event: 'Bhupali', note: 'Baba is gently woken with devotional song' },
  { time: '5:15 AM', event: 'Kakad Aarti', note: 'Morning aarti' },
  { time: '5:50 AM', event: 'Mangal Snaan', note: 'Ceremonial bathing in the Samadhi Mandir' },
  { time: '6:20 AM', event: 'Shirdi Majhe Pandharpur', note: 'Aarti hymn sung before darshan' },
  { time: '6:25 AM', event: 'Darshan Begins', note: 'Devotees receive darshan in the Samadhi Mandir' },
  { time: '11:30 AM', event: 'Dhuni Pooja', note: 'Rice and ghee offered to the sacred fire in Dwarkamai' },
  { time: '12:00 PM', event: 'Madhyan Aarti', note: 'Mid-day aarti' },
  { time: '4:00 PM', event: 'Pothi Reading', note: 'Devotional reading & study in the Samadhi Mandir' },
  { time: 'Sunset', event: 'Dhoop Aarti', note: 'Evening aarti as lamps are lit' },
  { time: '8:30 – 10:00 PM', event: 'Devotional Songs', note: 'Bhajans & cultural programmes' },
  { time: '10:00 PM', event: 'Shej Aarti', note: 'Final aarti before Baba retires for the night' },
]

function AartiTimings() {
  return (
    <section className="bg-maroon-dark py-16 text-cream">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {schedule.map((item) => (
            <div
              key={item.event}
              className="flex items-center gap-4 rounded-xl border border-gold/25 bg-maroon/60 px-5 py-4 transition hover:border-gold/60 hover:bg-maroon/80"
            >
              <div className="flex h-14 w-20 flex-none flex-col items-center justify-center rounded-lg bg-gold/15 text-center">
                <span className="text-[13px] font-semibold text-gold-light">{item.time}</span>
              </div>
              <div>
                <h3 className="font-display text-base text-gold-light">{item.event}</h3>
                <p className="text-sm text-cream/70">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AartiTimings
