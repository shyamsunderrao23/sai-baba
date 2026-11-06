function Contact() {
  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gold/40 bg-white/70 p-6 text-center shadow-sm">
            <span className="text-3xl">🛕</span>
            <h3 className="mt-3 font-display text-lg text-maroon-dark">Visit Us</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Sri Sadguru Shiridi Kshetram, Bhaskar Nagar, Water Tank Prakkana, Kakinada.
            </p>
          </div>
          <div className="rounded-2xl border border-gold/40 bg-white/70 p-6 text-center shadow-sm">
            <span className="text-3xl">📞</span>
            <h3 className="mt-3 font-display text-lg text-maroon-dark">Call Us</h3>
            <p className="mt-2 text-sm text-neutral-600">
              <a href="tel:+919849641164" className="font-medium text-saffron-dark hover:underline">
                +91 98496 41164
              </a>
            </p>
          </div>
          <div className="rounded-2xl border border-gold/40 bg-white/70 p-6 text-center shadow-sm">
            <span className="text-3xl">✉️</span>
            <h3 className="mt-3 font-display text-lg text-maroon-dark">Get in Touch</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Have a story, question or blessing to share? Write to us at{' '}
              <span className="font-medium text-saffron-dark">devotees@saibaba-tribute.org</span>
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-gold/50 bg-maroon-dark/5 p-6 text-center text-sm text-neutral-500">
          This is an unofficial devotional tribute site created to share Sai Baba's life and
          teachings. For darshan bookings, donations and official Sansthan services, please
          visit the official Shree Saibaba Sansthan Trust website,{' '}
          <a
            href="https://www.sai.org.in"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-saffron-dark underline underline-offset-2"
          >
            sai.org.in
          </a>
          .
        </div>
      </div>
    </section>
  )
}

export default Contact
