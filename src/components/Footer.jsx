import { Link } from 'react-router-dom'
import saiBabaLogo from '../assets/sai-baba-logo-mark-cream.png'

const quickLinks = [
  { to: '/about', label: 'About Saibaba Trust' },
  { to: '/teachings', label: 'Teachings' },
  { to: '/#seva', label: 'Seva & Services' },
  { to: '/aarti-timings', label: 'Aarti & Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

const usefulLinks = [
  { to: '/aarti-timings', label: 'Daily Aarti Timings' },
  { to: '/contact', label: 'Online Seva' },
  { to: '/contact', label: 'Donate Now' },
  { to: '/contact', label: 'Prasad & Gifts' },
  { to: '/teachings', label: 'Sai Baba Quotes' },
  { to: '/contact', label: 'FAQs' },
  { to: '/contact', label: 'Terms & Conditions' },
]

function Flourish() {
  return (
    <svg viewBox="0 0 28 6" className="h-1.5 w-5 text-[#c9a227]" fill="currentColor" aria-hidden="true">
      <path d="M0 3c4-3 8-3 12 0-4 3-8 3-12 0zm28 0c-4-3-8-3-12 0 4 3 8 3 12 0zM12 3c1.5-2 2.5-2 4 0-1.5 2-2.5 2-4 0z" />
    </svg>
  )
}

function TempleWatermark() {
  return (
    <svg
      viewBox="0 0 200 220"
      className="pointer-events-none absolute -right-4 bottom-0 h-48 w-40 text-[#c9a227]/15 sm:h-56 sm:w-48 lg:h-64 lg:w-52"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <path d="M100 12 L160 70 H40 Z" />
      <path d="M100 12 V55" />
      <circle cx="100" cy="62" r="8" />
      <rect x="55" y="70" width="90" height="18" />
      <path d="M48 88 H152 L148 100 H52 Z" />
      <rect x="60" y="100" width="80" height="95" />
      <path d="M78 195 V130 Q100 110 122 130 V195" />
      <path d="M88 195 V145 Q100 130 112 145 V195" />
      <rect x="70" y="195" width="60" height="10" />
      <path d="M40 100 V180 M160 100 V180" />
      <path d="M30 180 H170" />
      <path d="M35 188 H165" />
    </svg>
  )
}

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative overflow-hidden bg-[#5a0e14] font-serif text-[#FCF8F2]">
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-8 lg:py-16">
        {/* Brand */}
        <div className="space-y-4">
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src={saiBabaLogo}
              alt=""
              className="h-14 w-14 rounded-full object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-semibold tracking-[0.06em] text-[#e8c96a]">SAI BABA</span>
              <div className="mt-1.5 flex items-center gap-1.5">
                <Flourish />
                <span className="text-[0.65rem] font-medium tracking-[0.22em] text-[#e8c96a]">SHIRDI WALE</span>
                <Flourish />
              </div>
            </div>
          </Link>

          <p className="max-w-xs text-sm leading-relaxed text-white/85">
            Our mission is to spread the message of Sai Baba and serve humanity with love, compassion and
            devotion.
          </p>

          <div className="flex items-end gap-2 pt-2" aria-hidden="true">
            <span className="text-lg">🌸</span>
            <span className="text-base">🌺</span>
            <span className="mb-0.5 text-2xl">🪔</span>
            <span className="text-base">🌺</span>
            <span className="text-lg">🌸</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#e8c96a] uppercase">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/90">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-[#e8c96a]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#e8c96a] uppercase">Useful Links</h4>
          <ul className="space-y-2.5 text-sm text-white/90">
            {usefulLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="transition-colors hover:text-[#e8c96a]">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="relative">
          <TempleWatermark />
          <h4 className="relative mb-4 text-xs font-semibold tracking-[0.2em] text-[#e8c96a] uppercase">
            Contact Us
          </h4>
          <ul className="relative space-y-4 text-sm text-white/90">
            <li className="flex items-start gap-2.5">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#e8c96a]" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              <span className="leading-relaxed">
                Sai Baba Seva Sansthan, Shirdi, Tal. Rahata, Dist. Ahmednagar, Maharashtra - 423109
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <svg className="h-4 w-4 shrink-0 text-[#e8c96a]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              <a href="tel:+919949912345" className="transition-colors hover:text-[#e8c96a]">
                +91 99499 12345
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <svg className="h-4 w-4 shrink-0 text-[#e8c96a]" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <a href="mailto:info@saibaba.org" className="transition-colors hover:text-[#e8c96a]">
                info@saibaba.org
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#c9a227]/25">
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
          <p className="text-center text-xs text-white/75 lg:text-left">
            © 2025 Sai Baba Seva Sansthan. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3 text-[#e8c96a]">
            <Flourish />
            <span className="text-sm font-semibold tracking-wide">|| Om Sai Ram ||</span>
            <Flourish />
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#3b1f0f] shadow-sm transition hover:bg-[#e8c96a]"
            aria-label="Back to top"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
