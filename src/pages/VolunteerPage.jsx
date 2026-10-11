import { useState } from 'react'
import heroBaba from '../assets/hero-baba.png'
import sevaAnnadaan from '../assets/generated/seva-annadaan.png'
import galleryDiya from '../assets/gallery/gallery-diya.jpg'
import saiLogo from '../assets/sai-baba-logo-mark-cream.png'

const benefitCards = [
  {
    title: 'Make a Difference',
    text: 'Serve devotees and the needy with love and devotion.',
    icon: '🤲',
  },
  {
    title: 'Spiritual Growth',
    text: 'Grow closer to Baba through selfless seva every day.',
    icon: '📖',
  },
  {
    title: 'Community Connection',
    text: 'Join a family of devotees united in faith and service.',
    icon: '👥',
  },
  {
    title: 'Temple Experience',
    text: 'Experience the sacred atmosphere of Shirdi seva.',
    icon: '🛕',
  },
]

const whyCards = [
  { title: 'Seva Opportunities', text: 'Annadaan, temple seva, guidance and more.', icon: '🪔' },
  { title: 'Flexible Commitments', text: 'Choose timings that suit your schedule.', icon: '🗓️' },
  { title: 'Training & Support', text: 'Guidance and orientation for every volunteer.', icon: '📘' },
  { title: 'Recognition', text: 'Your seva is valued and gratefully acknowledged.', icon: '⭐' },
  { title: 'Safe & Organized', text: 'Structured seva with care and coordination.', icon: '🛡️' },
  { title: 'Be Closer to Baba', text: 'Serve at His feet and feel His presence.', icon: '🙏' },
]

const steps = [
  { n: '01', title: 'Apply', text: 'Fill out the online volunteer form.' },
  { n: '02', title: 'Review', text: 'Our team reviews your application.' },
  { n: '03', title: 'Orientation', text: 'Attend a short orientation session.' },
  { n: '04', title: 'Start Serving', text: 'Begin your seva with Baba’s blessings.' },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    since: '2022',
    text: 'Volunteering here filled my heart with peace. Every seva feels like a blessing from Baba.',
  },
  {
    name: 'Ramesh Patel',
    since: '2021',
    text: 'Serving devotees taught me patience and love. Sai Baba guides every step of this journey.',
  },
  {
    name: 'Anjali Menon',
    since: '2023',
    text: 'The temple seva experience brought me closer to Baba than I ever imagined.',
  },
]

function Flourish() {
  return (
    <svg viewBox="0 0 48 12" className="h-3 w-12 text-[#B38644]" fill="currentColor" aria-hidden="true">
      <path d="M0 6c8-5 16-5 24 0-8 5-16 5-24 0zm48 0c-8-5-16-5-24 0 8 5 16 5 24 0z" />
    </svg>
  )
}

const initialForm = {
  fullName: '',
  mobile: '',
  email: '',
  dob: '',
  address: '',
  interest: '',
  location: '',
  availability: '',
}

function VolunteerPage() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  const fieldClass =
    'w-full rounded-md border border-[#ebdcb9] bg-[#FDFBF2] px-3 py-2.5 text-sm text-[#3b1f0f] outline-none transition focus:border-[#B38644]'

  return (
    <div className="w-full font-serif">
      {/* Hero */}
      <section className="bg-[#FCF8F2]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
          <div>
            <h1 className="text-3xl font-bold tracking-wide text-[#5a0e14] uppercase sm:text-4xl lg:text-5xl">
              Become a Volunteer
            </h1>
            <p className="mt-3 text-lg italic text-[#B38644]">Serve Selflessly, Grow Spiritually</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#3b1f0f]/80">
              Join Sai Baba’s mission of love and service. Offer your time, skills and devotion — every act of
              seva becomes worship at His feet.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#volunteer-form"
                className="inline-flex items-center gap-2 rounded-md bg-[#5a0e14] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7a1520]"
              >
                Join Us In Service <span aria-hidden="true">→</span>
              </a>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B38644]/60" />
                <span className="text-sm italic text-[#B38644]">Every Service is Worship</span>
                <span className="h-px w-8 bg-[#B38644]/60" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-2 -top-2 h-28 w-28 overflow-hidden rounded-full opacity-30 sm:h-36 sm:w-36">
              <img src={heroBaba} alt="" className="h-full w-full object-cover object-top" />
            </div>
            <img
              src={sevaAnnadaan}
              alt="Volunteers in seva"
              className="relative z-10 w-full rounded-2xl object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-12 sm:py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {benefitCards.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-[#ebdcb9]/40 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#f3ead7] text-xl">
                {c.icon}
              </div>
              <h3 className="text-base font-bold text-[#5a0e14]">{c.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#3b1f0f]/75">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why volunteer */}
      <section className="bg-[#FCF8F2] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-center gap-3">
            <Flourish />
            <h2 className="text-xl font-bold tracking-wide text-[#5a0e14] uppercase sm:text-2xl">
              Why Volunteer With Us?
            </h2>
            <Flourish />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-[#c9a227]/40 bg-white p-5 text-center shadow-sm"
              >
                <div className="mx-auto mb-3 text-2xl">{c.icon}</div>
                <h3 className="text-sm font-bold text-[#5a0e14]">{c.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#3b1f0f]/75">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works + Form */}
      <section className="bg-white py-14 sm:py-16" id="volunteer-form">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Steps */}
          <div className="relative overflow-hidden rounded-2xl bg-[#5a0e14] p-8 text-white sm:p-10">
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <img src={saiLogo} alt="" className="h-full w-full object-contain object-bottom" />
            </div>
            <h2 className="relative text-xl font-bold tracking-wide uppercase sm:text-2xl">How It Works</h2>
            <div className="relative mt-8 space-y-6">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e8c96a]/50 text-sm font-bold text-[#e8c96a]">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#e8c96a]">{s.title}</h3>
                    <p className="mt-0.5 text-sm text-white/80">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="relative rounded-2xl border border-[#ebdcb9]/50 bg-[#FDFBF2] p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-wide text-[#5a0e14] uppercase">Volunteer Registration</h2>

            {submitted ? (
              <p className="mt-8 rounded-md bg-[#f3ead7] px-4 py-6 text-center text-sm text-[#5a0e14]">
                Thank you! Our team will contact you within 7 working days. Om Sai Ram.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    name="fullName"
                    required
                    value={form.fullName}
                    onChange={onChange}
                    placeholder="Full Name"
                    className={fieldClass}
                  />
                  <input
                    name="mobile"
                    required
                    value={form.mobile}
                    onChange={onChange}
                    placeholder="Mobile Number"
                    className={fieldClass}
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    placeholder="Email Address"
                    className={fieldClass}
                  />
                  <input
                    name="dob"
                    type="date"
                    required
                    value={form.dob}
                    onChange={onChange}
                    className={fieldClass}
                  />
                </div>

                <textarea
                  name="address"
                  required
                  rows={3}
                  value={form.address}
                  onChange={onChange}
                  placeholder="Address"
                  className={fieldClass}
                />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <select name="interest" required value={form.interest} onChange={onChange} className={fieldClass}>
                    <option value="">Areas of Interest</option>
                    <option value="annadaan">Annadaan</option>
                    <option value="temple">Temple Seva</option>
                    <option value="medical">Medical Seva</option>
                    <option value="guidance">Devotee Guidance</option>
                    <option value="other">Other</option>
                  </select>
                  <select name="location" required value={form.location} onChange={onChange} className={fieldClass}>
                    <option value="">Preferred Seva Location</option>
                    <option value="shirdi">Shirdi</option>
                    <option value="local">Local Center</option>
                    <option value="online">Online Support</option>
                  </select>
                  <select
                    name="availability"
                    required
                    value={form.availability}
                    onChange={onChange}
                    className={fieldClass}
                  >
                    <option value="">Availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-[#5a0e14] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7a1520]"
                >
                  Submit Application <span aria-hidden="true">✈</span>
                </button>
                <p className="text-center text-xs text-[#3b1f0f]/60">
                  Our team will contact you within 7 working days.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#FCF8F2] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-center gap-3">
            <Flourish />
            <h2 className="text-xl font-bold tracking-wide text-[#5a0e14] uppercase sm:text-2xl">
              Hearts That Serve
            </h2>
            <Flourish />
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <article
                  key={t.name}
                  className={`rounded-xl border border-[#ebdcb9]/40 bg-white p-6 shadow-sm ${
                    i === activeTestimonial ? 'ring-1 ring-[#B38644]/40' : ''
                  }`}
                >
                  <span className="text-3xl text-[#c9a227]/50">“</span>
                  <p className="mt-2 text-sm leading-relaxed text-[#3b1f0f]/80">{t.text}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3ead7] text-sm font-bold text-[#5a0e14]">
                      {t.name[0]}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#5a0e14]">{t.name}</p>
                      <p className="text-xs text-[#3b1f0f]/60">Volunteer since {t.since}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setActiveTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5a0e14] text-white"
                aria-label="Previous testimonial"
              >
                ‹
              </button>
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveTestimonial(i)}
                    className={`h-2 w-2 rounded-full ${i === activeTestimonial ? 'bg-[#B38644]' : 'bg-[#ebdcb9]'}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setActiveTestimonial((i) => (i + 1) % testimonials.length)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5a0e14] text-white"
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="bg-[#f3ead7] py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="hidden text-3xl sm:block">💛</span>
            <div>
              <h3 className="text-lg font-bold text-[#5a0e14]">Your Time. Your Heart. Baba&apos;s Mission.</h3>
              <p className="text-sm text-[#3b1f0f]/75">Every act of seva brings us closer to Sai.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#volunteer-form"
              className="rounded-md bg-[#B38644] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#9a7138]"
            >
              Register Now
            </a>
            <div className="text-center sm:text-left">
              <p className="text-xs text-[#3b1f0f]/60">Call Us</p>
              <a href="tel:+919949912345" className="text-sm font-semibold text-[#5a0e14]">
                +91 99499 12345
              </a>
            </div>
            <img src={galleryDiya} alt="" className="hidden h-14 w-14 rounded-full object-cover opacity-80 lg:block" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default VolunteerPage
