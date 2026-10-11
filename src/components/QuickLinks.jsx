const quickLinks = [
  { icon: '🪔', title: 'Daily Aarti', sub: 'Join Online' },
  { icon: '📖', title: 'Sai Satcharitra', sub: 'Read Online' },
  { icon: '🛕', title: 'Darshan', sub: 'Live Darshan' },
  { icon: '📿', title: 'Mantras', sub: 'Divine Chants' },
  { icon: '🙏', title: 'Prayers', sub: 'Offer Prayers' },
  { icon: '🍚', title: 'Prasadam', sub: 'Receive Blessings' },
  { icon: '🤲', title: 'Seva', sub: 'Serve & Support' },
]

function QuickLinks() {
  return (
    <section className="relative border-y border-gold/20 bg-cream py-6 ornate-border-top">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 lg:grid-cols-7 lg:gap-2 lg:px-6">
        {quickLinks.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center transition hover:-translate-y-0.5"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-maroon/15 bg-white text-lg shadow-sm">
              {item.icon}
            </span>
            <span className="mt-2 text-xs font-semibold text-maroon-dark">{item.title}</span>
            <span className="text-[10px] text-neutral-500">{item.sub}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default QuickLinks
