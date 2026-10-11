function Subscribe() {
  return (
    <section className="border-y border-gold/20 bg-gradient-to-r from-cream via-cream-dark to-cream py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 md:flex-row md:justify-between lg:px-6">
        <div className="flex items-center gap-4 text-center md:text-left">
          <span className="text-3xl" aria-hidden="true">
            🪷
          </span>
          <div>
            <h3 className="font-display text-lg font-semibold text-maroon-dark">
              Stay Connected with Baba&apos;s Blessings
            </h3>
            <p className="text-sm text-neutral-600">
              Subscribe to receive devotional updates, aarti reminders and festival notices.
            </p>
          </div>
        </div>

        <form
          className="flex w-full max-w-md items-center gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full border border-gold/30 bg-white px-4 py-2.5 text-sm outline-none focus:border-gold"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-maroon-dark px-5 py-2.5 text-sm font-semibold text-gold-light transition hover:bg-burgundy"
          >
            Subscribe
          </button>
          <span className="hidden text-xl sm:inline" aria-hidden="true">
            🔔
          </span>
        </form>
      </div>
    </section>
  )
}

export default Subscribe
