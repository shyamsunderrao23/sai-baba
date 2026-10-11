import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroBaba from '../assets/hero-baba.png'
import galleryDiya from '../assets/gallery/gallery-diya.jpg'
import gallerySamadhi from '../assets/gallery/gallery-samadhi.jpg'

const contactCards = [
  {
    title: 'Visit Us',
    text: 'Shirdi Sai Baba Sansthan Trust, Shirdi, Tal. Rahata, Dist. Ahmednagar, Maharashtra – 423109, India',
    href: 'https://maps.google.com/?q=Shirdi+Sai+Baba+Sansthan+Trust',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Call Us',
    text: '+91 2423 258500\n(10:00 AM to 6:00 PM – IST) All days',
    href: 'tel:+912423258500',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
      </svg>
    ),
  },
  {
    title: 'Email Us',
    text: 'info@saibaba.org\nconnect@saibaba.org',
    href: 'mailto:info@saibaba.org',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path strokeLinecap="round" d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    title: 'Timings',
    text: 'Temple Open: 4:00 AM to 11:00 PM\n(Aarti timings may vary)',
    href: '/aarti-timings',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "We're Here",
    text: 'For seva, support, and spiritual guidance. Please reach out.',
    href: '#message',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 13V8a1.5 1.5 0 013 0v5M11 13V7a1.5 1.5 0 013 0v6M14 13v-3a1.5 1.5 0 013 0v5c0 3-2 5-5 5h-1c-3.5 0-6-2-6-5v-3a1.5 1.5 0 013 0v1" />
      </svg>
    ),
  },
]

const subjects = [
  'General Enquiry',
  'Online Seva / Aarti Booking',
  'Donation Related',
  'Volunteer Enquiry',
  'Accommodation',
  'Feedback / Suggestion',
  'Other',
]

const faqs = [
  {
    q: 'How can I book online seva or aarti?',
    a: 'You can book online seva and aarti through our Seva & Services section or by contacting us with your preferred date and seva type. Our team will guide you through the process.',
  },
  {
    q: 'What are the temple visiting timings?',
    a: 'The temple is generally open from 4:00 AM to 11:00 PM. Daily aarti timings may vary on festival days — please check the Aarti & Events page for the latest schedule.',
  },
  {
    q: 'How do I donate online securely?',
    a: 'Click Donate Now and follow the secure payment options. For receipt or large contributions, email info@saibaba.org with your details.',
  },
  {
    q: 'Can I volunteer at the Sansthan?',
    a: 'Yes. Visit Become a Volunteer under About Us, fill the form, and our coordination team will contact you with available seva opportunities.',
  },
  {
    q: 'How can I get darshan pass information?',
    a: 'Darshan pass details and booking help are available under Seva & Services → Darshan Pass, or call our helpline during office hours.',
  },
]

const socials = [
  {
    name: 'Facebook',
    handle: '@saibabashirdi',
    href: 'https://facebook.com',
    bg: 'bg-[#1877F2]',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@saibabashirdi',
    href: 'https://instagram.com',
    bg: 'bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: 'Sai Baba Shirdi',
    href: 'https://youtube.com',
    bg: 'bg-[#FF0000]',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    handle: '+91 99499 12345',
    href: 'https://wa.me/919949912345',
    bg: 'bg-[#25D366]',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 00-8.7 15l-1.1 4 4.1-1.1A10 10 0 1012 2zm5.6 14.2c-.2.7-1.3 1.2-2.1 1.4-.5.1-1.2.2-3.5-.7-2.8-1.2-4.6-4.1-4.7-4.3-.2-.2-1.2-1.6-1.2-3s.8-2.1 1-2.3c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.8 2c.1.2.1.4 0 .6l-.3.5c-.1.2-.3.4-.1.7.2.3.7 1.2 1.6 1.9 1.1.9 2 1.2 2.3 1.3.3.1.5.1.7-.1l.6-.7c.2-.2.4-.2.6-.1l2 .9c.2.1.4.2.4.4 0 .2 0 1-.2 1.6z" />
      </svg>
    ),
  },
]

function Flourish() {
  return (
    <svg viewBox="0 0 48 12" className="h-3 w-12 text-[#B38644]" fill="currentColor" aria-hidden="true">
      <path d="M0 6c8-5 16-5 24 0-8 5-16 5-24 0zm48 0c-8-5-16-5-24 0 8 5 16 5 24 0z" />
    </svg>
  )
}

function SectionTitle({ children }) {
  return (
    <div className="mb-6 text-center sm:text-left">
      <h2 className="text-xl font-bold text-[#5a0e14] sm:text-2xl">{children}</h2>
      <div className="mt-2 flex items-center justify-center gap-1.5 sm:justify-start" aria-hidden="true">
        <span className="h-px w-8 bg-[#B38644]" />
        <span className="h-1 w-1 rounded-full bg-[#B38644]" />
        <span className="h-px w-8 bg-[#e8dfd0]" />
      </div>
    </div>
  )
}

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  agree: false,
}

function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.agree) return
    setSent(true)
    setForm(initialForm)
  }

  return (
    <div className="w-full font-serif">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBaba} alt="" className="h-full w-full object-cover object-top" />
          <div className="absolute inset-0 bg-[#FDFBF2]/88" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF2]/40 via-transparent to-[#FDFBF2]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Flourish />
            <span className="text-[0.7rem] font-semibold tracking-[0.22em] text-[#B38644] uppercase">Contact Us</span>
            <Flourish />
          </div>
          <h1 className="text-3xl font-bold text-[#5a0e14] sm:text-4xl lg:text-5xl">We Are Here To Serve You</h1>
          <div className="mt-3 flex justify-center" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#B38644]" fill="currentColor">
              <path d="M12 3c.5 2.5 2 4.5 4.5 5.5C14 10 12.5 12 12 14.5 11.5 12 10 10 7.5 8.5 10 7.5 11.5 5.5 12 3z" />
            </svg>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#5a0e14]/85 sm:text-base">
            Have a question, need guidance, or wish to offer seva? Reach out with love — our team is ready to
            help every devotee with care and devotion.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="relative z-20 -mt-4 bg-[#FDFBF2] px-4 pb-4 sm:-mt-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {contactCards.map((card) => {
            const inner = (
              <>
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#f3ead7] text-[#B38644]">
                  {card.icon}
                </span>
                <h3 className="text-sm font-bold text-[#5a0e14]">{card.title}</h3>
                <p className="mt-1.5 whitespace-pre-line text-[0.72rem] leading-relaxed text-[#6b6b6b]">{card.text}</p>
              </>
            )
            const className =
              'flex flex-col rounded-xl border border-[#e8dfd0] bg-white p-4 shadow-[0_8px_24px_rgba(40,20,10,0.06)] transition hover:border-[#c9a227]/50 hover:shadow-md'
            if (card.href.startsWith('http') || card.href.startsWith('tel') || card.href.startsWith('mailto')) {
              return (
                <a key={card.title} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={className}>
                  {inner}
                </a>
              )
            }
            if (card.href.startsWith('#')) {
              return (
                <a key={card.title} href={card.href} className={className}>
                  {inner}
                </a>
              )
            }
            return (
              <Link key={card.title} to={card.href} className={className}>
                {inner}
              </Link>
            )
          })}
        </div>
      </section>

      {/* Form + Map */}
      <section id="message" className="bg-[#FDFBF2] py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 lg:grid-cols-2 lg:gap-8 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#e8dfd0] bg-white p-5 shadow-[0_8px_28px_rgba(40,20,10,0.06)] sm:p-7">
            <SectionTitle>Send Us a Message</SectionTitle>

            {sent ? (
              <div className="rounded-xl border border-[#B38644]/30 bg-[#FDF8EF] px-5 py-10 text-center">
                <p className="text-lg font-bold text-[#5a0e14]">Message sent with devotion</p>
                <p className="mt-2 text-sm text-[#6b6b6b]">
                  Thank you. Our team will respond as soon as possible. Om Sai Ram.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-5 text-sm font-semibold text-[#B38644] hover:text-[#5a0e14]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-[#5a0e14]">Your Name</span>
                  <span className="relative block">
                    <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#B38644]">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="3.5" />
                        <path strokeLinecap="round" d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
                      </svg>
                    </span>
                    <input
                      required
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-[#e8dfd0] bg-[#FDFBF8] py-2.5 pr-3 pl-10 text-sm text-[#3b1f0f] outline-none transition focus:border-[#B38644]"
                    />
                  </span>
                </label>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-[#5a0e14]">Email Address</span>
                    <span className="relative block">
                      <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#B38644]">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <path d="M3 7l9 6 9-6" />
                        </svg>
                      </span>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={update('email')}
                        placeholder="your@email.com"
                        className="w-full rounded-lg border border-[#e8dfd0] bg-[#FDFBF8] py-2.5 pr-3 pl-10 text-sm text-[#3b1f0f] outline-none transition focus:border-[#B38644]"
                      />
                    </span>
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-semibold text-[#5a0e14]">Phone Number</span>
                    <span className="relative block">
                      <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#B38644]">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                        </svg>
                      </span>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-lg border border-[#e8dfd0] bg-[#FDFBF8] py-2.5 pr-3 pl-10 text-sm text-[#3b1f0f] outline-none transition focus:border-[#B38644]"
                      />
                    </span>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-[#5a0e14]">Subject</span>
                  <select
                    required
                    value={form.subject}
                    onChange={update('subject')}
                    className="w-full rounded-lg border border-[#e8dfd0] bg-[#FDFBF8] px-3 py-2.5 text-sm text-[#3b1f0f] outline-none transition focus:border-[#B38644]"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold text-[#5a0e14]">Message</span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Write your message with devotion..."
                    className="w-full resize-y rounded-lg border border-[#e8dfd0] bg-[#FDFBF8] px-3 py-2.5 text-sm text-[#3b1f0f] outline-none transition focus:border-[#B38644]"
                  />
                </label>

                <label className="flex items-start gap-2 text-xs text-[#6b6b6b]">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={update('agree')}
                    required
                    className="mt-0.5 accent-[#5a0e14]"
                  />
                  <span>
                    I agree to the privacy policy and terms.
                  </span>
                </label>

                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md bg-[#5a0e14] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7a1520]"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="rounded-2xl border border-[#e8dfd0] bg-white p-5 shadow-[0_8px_28px_rgba(40,20,10,0.06)] sm:p-7">
            <SectionTitle>Find Us</SectionTitle>
            <div className="overflow-hidden rounded-xl border border-[#e8dfd0]">
              <iframe
                title="Shirdi Sai Baba Sansthan Trust Map"
                src="https://maps.google.com/maps?q=Shirdi%20Sai%20Baba%20Sansthan%20Trust&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-[280px] w-full border-0 sm:h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Shirdi+Sai+Baba+Sansthan+Trust"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#B38644] bg-[#FCF8F2] px-4 py-2.5 text-sm font-semibold text-[#5a0e14] transition hover:bg-[#FDF8EF]"
            >
              <svg className="h-4 w-4 text-[#B38644]" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              Get Directions
            </a>
            <div className="mt-5 overflow-hidden rounded-xl">
              <img src={gallerySamadhi} alt="Shirdi Temple" className="h-32 w-full object-cover sm:h-36" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Social */}
      <section className="bg-[#FDFBF2] pb-12 sm:pb-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 lg:grid-cols-2 lg:gap-8 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#e8dfd0] bg-white p-5 shadow-[0_8px_28px_rgba(40,20,10,0.06)] sm:p-7">
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <ul className="divide-y divide-[#efe6d6]">
              {faqs.map((item, i) => {
                const open = openFaq === i
                return (
                  <li key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? -1 : i)}
                      className="flex w-full items-center justify-between gap-3 py-3.5 text-left"
                      aria-expanded={open}
                    >
                      <span className="text-sm font-semibold text-[#5a0e14]">{item.q}</span>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#e8dfd0] text-[#B38644]">
                        {open ? '−' : '+'}
                      </span>
                    </button>
                    {open && <p className="pb-3.5 text-xs leading-relaxed text-[#6b6b6b] sm:text-sm">{item.a}</p>}
                  </li>
                )
              })}
            </ul>
            <div className="mt-5 text-center">
              <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-[#B38644] hover:text-[#5a0e14]">
                View All FAQs →
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-[#e8dfd0] bg-white p-5 shadow-[0_8px_28px_rgba(40,20,10,0.06)] sm:p-7">
            <SectionTitle>Connect With Us</SectionTitle>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 rounded-xl border border-[#efe6d6] px-2 py-4 text-center transition hover:border-[#c9a227]/50 hover:bg-[#FDF8EF]"
                >
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full text-white ${s.bg}`}>
                    {s.icon}
                  </span>
                  <span className="text-xs font-bold text-[#5a0e14]">{s.name}</span>
                  <span className="text-[0.62rem] leading-tight text-[#6b6b6b]">{s.handle}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4 rounded-xl border border-[#dfc083]/40 bg-[#FDF8EF] p-4">
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-[#5a0e14]">Your feedback helps us improve</h3>
                <p className="mt-1 text-xs text-[#6b6b6b]">
                  Share your experience so we can serve devotees better every day.
                </p>
                <a href="#message" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#B38644] hover:text-[#5a0e14]">
                  Share Your Feedback →
                </a>
              </div>
              <img src={galleryDiya} alt="" className="h-16 w-16 shrink-0 rounded-lg object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#FDFBF2] pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-[#5a0e14] px-6 py-8 sm:px-10 sm:py-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  'radial-gradient(circle at 15% 50%, rgba(201,162,39,0.35) 0%, transparent 40%), radial-gradient(circle at 85% 50%, rgba(179,134,68,0.2) 0%, transparent 45%)',
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#B38644]/20 text-[#e8c96a] ring-1 ring-[#B38644]/40">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" d="M12 3c1.2 2 2 3.5 2 5a2 2 0 11-4 0c0-1.5.8-3 2-5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 14h8l-1.5 6h-5L8 14z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-xl font-bold text-[#e8c96a] sm:text-2xl">Let&apos;s Walk the Path of Faith Together</h2>
                <p className="mt-1.5 text-sm text-white/80">
                  For any assistance, seva, or guidance, we are just a call or message away.
                </p>
              </div>
              <a
                href="#message"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#B38644] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c9a227]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s-7-4.5-9.5-8.2C.7 9.8 2.2 6 5.8 6c2 0 3.3 1.1 4.2 2.2C11 7.1 12.2 6 14.2 6c3.6 0 5.1 3.8 3.3 6.8C19 16.5 12 21 12 21z"
                  />
                </svg>
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
