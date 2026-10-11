import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import saiBabaLogo from '../assets/sai-baba-logo-mark-cream.png'
import AboutUsMegaMenu, {
  aboutTrustLinks,
  aboutJourneyLinks,
  aboutSansthanLinks,
} from './AboutUsMegaMenu'
import SevaServicesMegaMenu, { sevaList, serviceCards } from './SevaServicesMegaMenu'
import AartiEventsMegaMenu, { aartiSchedule, eventItems } from './AartiEventsMegaMenu'
import HistoryMegaMenu, { historyLinks } from './HistoryMegaMenu'

const links = [
  { to: '/', label: 'Home' },
  { type: 'about', label: 'About Us' },
  { type: 'history', label: 'History' },
  { to: '/teachings', label: 'Teachings' },
  { type: 'seva', label: 'Seva & Services' },
  { type: 'aarti', label: 'Aarti & Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

function Flourish() {
  return (
    <svg viewBox="0 0 28 6" className="h-1.5 w-5 text-[#8B6914]" fill="currentColor" aria-hidden="true">
      <path d="M0 3c4-3 8-3 12 0-4 3-8 3-12 0zm28 0c-4-3-8-3-12 0 4 3 8 3 12 0zM12 3c1.5-2 2.5-2 4 0-1.5 2-2.5 2-4 0z" />
    </svg>
  )
}

function TopBarFlourish() {
  return (
    <svg viewBox="0 0 40 10" className="h-2.5 w-9 text-[#e8c96a]" fill="currentColor" aria-hidden="true">
      <path d="M0 5c6-4 12-4 18 0-6 4-12 4-18 0zm40 0c-6-4-12-4-18 0 6 4 12 4 18 0zM17 5c1.8-2.5 3.2-2.5 5 0-1.8 2.5-3.2 2.5-5 0z" />
    </svg>
  )
}

function TopBar() {
  return (
    <div className="bg-[#5a0e14] text-[#e8c96a]">
      <div className="relative mx-auto flex max-w-[1400px] items-center justify-center px-4 py-2 sm:px-6 lg:justify-end lg:px-8">
        {/* Centered blessing */}
        <div className="flex items-center gap-2.5 font-serif text-[0.78rem] tracking-[0.08em] sm:text-[0.85rem] lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <TopBarFlourish />
          <span className="whitespace-nowrap font-medium">|| Om Sai Ram ||</span>
          <TopBarFlourish />
        </div>

        {/* Right contact + socials */}
        <div className="ml-auto hidden items-center gap-5 font-serif text-[0.78rem] lg:flex">
          <a
            href="tel:+912423258500"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            <span>+91 2423 258500</span>
          </a>
          <a
            href="mailto:info@saibaba.org"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            <span>info@saibaba.org</span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-6 w-6 items-center justify-center rounded-full border border-[#e8c96a]/70 text-[0.65rem] transition hover:border-white hover:text-white"
            >
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-6 w-6 items-center justify-center rounded-full border border-[#e8c96a]/70 transition hover:border-white hover:text-white"
            >
              <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-6 w-6 items-center justify-center rounded-full border border-[#e8c96a]/70 transition hover:border-white hover:text-white"
            >
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function ActiveUnderline() {
  return (
    <span className="absolute bottom-0 left-0 right-0 flex items-center" aria-hidden="true">
      <span className="h-px flex-1 bg-[#B38644]" />
      <span className="mx-0.5 h-1.5 w-1.5 rounded-full bg-[#B38644]" />
      <span className="h-px flex-1 bg-[#B38644]" />
    </span>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [historyOpen, setHistoryOpen] = useState(false)
  const [sevaOpen, setSevaOpen] = useState(false)
  const [aartiOpen, setAartiOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [mobileHistoryOpen, setMobileHistoryOpen] = useState(false)
  const [mobileSevaOpen, setMobileSevaOpen] = useState(false)
  const [mobileAartiOpen, setMobileAartiOpen] = useState(false)
  const desktopNavRef = useRef(null)
  const hoverTimer = useRef(null)
  const location = useLocation()
  const aboutActive = location.pathname.startsWith('/about')
  const historyActive = location.pathname.startsWith('/history')
  const sevaActive = location.pathname.startsWith('/seva')
  const aartiActive =
    location.pathname.startsWith('/aarti') || location.pathname.startsWith('/festivals')
  const anyDesktopMenuOpen = aboutOpen || historyOpen || sevaOpen || aartiOpen

  const closeAllDesktop = () => {
    setAboutOpen(false)
    setHistoryOpen(false)
    setSevaOpen(false)
    setAartiOpen(false)
  }

  const clearHoverTimer = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current)
      hoverTimer.current = null
    }
  }

  const openMenu = (menu) => {
    clearHoverTimer()
    setAboutOpen(menu === 'about')
    setHistoryOpen(menu === 'history')
    setSevaOpen(menu === 'seva')
    setAartiOpen(menu === 'aarti')
  }

  const scheduleClose = () => {
    clearHoverTimer()
    hoverTimer.current = setTimeout(() => {
      closeAllDesktop()
    }, 180)
  }

  useEffect(() => {
    closeAllDesktop()
    setOpen(false)
    setMobileAboutOpen(false)
    setMobileHistoryOpen(false)
    setMobileSevaOpen(false)
    setMobileAartiOpen(false)
  }, [location.pathname])

  useEffect(() => () => clearHoverTimer(), [])

  useEffect(() => {
    const onDocClick = (e) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target)) {
        closeAllDesktop()
      }
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  const closeMenus = () => {
    closeAllDesktop()
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8dfd0] bg-[#FDFBF2]">
      <TopBar />
      <div ref={desktopNavRef} className="relative">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <span className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border-[1.5px] border-[#c9a84a] bg-[#FDFBF2] shadow-sm sm:h-[4.5rem] sm:w-[4.5rem]">
              <img
                src={saiBabaLogo}
                alt="Sai Baba"
                width={72}
                height={72}
                decoding="async"
                className="h-[92%] w-[92%] object-contain"
              />
            </span>
            <div className="flex flex-col font-serif leading-none">
              <span className="text-[1.4rem] font-semibold tracking-[0.04em] text-[#4A1C1C] sm:text-[1.6rem]">
                SAI BABA
              </span>
              <div className="mt-1.5 flex items-center gap-1.5">
                <Flourish />
                <span className="text-[0.68rem] font-medium tracking-[0.24em] text-[#5C2A2A]">SHIRDI WALE</span>
                <Flourish />
              </div>
            </div>
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-end gap-5 xl:flex">
            <nav className="flex items-center gap-4 2xl:gap-5">
              {links.map((link) => {
                if (link.type === 'about') {
                  return (
                    <div
                      key="about"
                      onMouseEnter={() => openMenu('about')}
                      onMouseLeave={scheduleClose}
                    >
                      <button
                        type="button"
                        className={[
                          'relative flex items-center gap-1 pb-1.5 font-serif text-[0.95rem] transition-colors',
                          aboutActive || aboutOpen
                            ? 'font-semibold text-[#B38644]'
                            : 'font-medium text-[#2A1810] hover:text-[#B38644]',
                        ].join(' ')}
                        aria-expanded={aboutOpen}
                        aria-haspopup="true"
                      >
                        About Us
                        <svg
                          className={`h-3.5 w-3.5 transition ${aboutOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        {(aboutActive || aboutOpen) && <ActiveUnderline />}
                      </button>
                    </div>
                  )
                }

                if (link.type === 'history') {
                  return (
                    <div
                      key="history"
                      onMouseEnter={() => openMenu('history')}
                      onMouseLeave={scheduleClose}
                    >
                      <button
                        type="button"
                        className={[
                          'relative flex items-center gap-1 pb-1.5 font-serif text-[0.95rem] transition-colors',
                          historyActive || historyOpen
                            ? 'font-semibold text-[#B38644]'
                            : 'font-medium text-[#2A1810] hover:text-[#B38644]',
                        ].join(' ')}
                        aria-expanded={historyOpen}
                        aria-haspopup="true"
                      >
                        History
                        <svg
                          className={`h-3.5 w-3.5 transition ${historyOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        {(historyActive || historyOpen) && <ActiveUnderline />}
                      </button>
                    </div>
                  )
                }

                if (link.type === 'seva') {
                  return (
                    <div
                      key="seva"
                      onMouseEnter={() => openMenu('seva')}
                      onMouseLeave={scheduleClose}
                    >
                      <button
                        type="button"
                        className={[
                          'relative flex items-center gap-1 pb-1.5 font-serif text-[0.95rem] transition-colors',
                          sevaActive || sevaOpen
                            ? 'font-semibold text-[#B38644]'
                            : 'font-medium text-[#2A1810] hover:text-[#B38644]',
                        ].join(' ')}
                        aria-expanded={sevaOpen}
                        aria-haspopup="true"
                      >
                        Seva & Services
                        <svg
                          className={`h-3.5 w-3.5 transition ${sevaOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        {(sevaActive || sevaOpen) && <ActiveUnderline />}
                      </button>
                    </div>
                  )
                }

                if (link.type === 'aarti') {
                  return (
                    <div
                      key="aarti"
                      onMouseEnter={() => openMenu('aarti')}
                      onMouseLeave={scheduleClose}
                    >
                      <button
                        type="button"
                        className={[
                          'relative flex items-center gap-1 pb-1.5 font-serif text-[0.95rem] transition-colors',
                          aartiActive || aartiOpen
                            ? 'font-semibold text-[#B38644]'
                            : 'font-medium text-[#2A1810] hover:text-[#B38644]',
                        ].join(' ')}
                        aria-expanded={aartiOpen}
                        aria-haspopup="true"
                      >
                        Aarti & Events
                        <svg
                          className={`h-3.5 w-3.5 transition ${aartiOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        {(aartiActive || aartiOpen) && <ActiveUnderline />}
                      </button>
                    </div>
                  )
                }

                const isHash = link.to.startsWith('/#')
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) => {
                      const active = isActive && !isHash
                      return [
                        'relative pb-1.5 font-serif text-[0.95rem] transition-colors',
                        active
                          ? 'font-semibold text-[#B38644]'
                          : 'font-medium text-[#2A1810] hover:text-[#B38644]',
                      ].join(' ')
                    }}
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && !isHash && <ActiveUnderline />}
                      </>
                    )}
                  </NavLink>
                )
              })}
            </nav>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-[#5a0e14] px-4 py-2 font-serif text-sm font-semibold text-white transition-colors hover:bg-[#7a1520]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s-7-4.5-9.5-8.2C.7 9.8 2.2 6 5.8 6c2 0 3.3 1.1 4.2 2.2C11 7.1 12.2 6 14.2 6c3.6 0 5.1 3.8 3.3 6.8C19 16.5 12 21 12 21z"
                />
              </svg>
              Donate Now
            </Link>
          </div>

          <div className="flex items-center gap-3 xl:hidden">
            <Link
              to="/contact"
              className="hidden items-center gap-1.5 rounded-md bg-[#B38644] px-3 py-2 font-serif text-xs font-semibold text-white sm:inline-flex"
            >
              Donate Now
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="rounded p-1.5 text-[#4A1C1C] hover:bg-[#efe6d6]"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Centered mega menus under the full header bar */}
        {anyDesktopMenuOpen && (
          <div
            className="absolute inset-x-0 top-full z-50 hidden pt-2 xl:block"
            onMouseEnter={clearHoverTimer}
            onMouseLeave={scheduleClose}
          >
            <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
              <div className="mx-auto w-full max-w-[1100px]">
                {aboutOpen && <AboutUsMegaMenu onNavigate={closeMenus} />}
                {historyOpen && <HistoryMegaMenu onNavigate={closeMenus} />}
                {sevaOpen && <SevaServicesMegaMenu onNavigate={closeMenus} />}
                {aartiOpen && <AartiEventsMegaMenu onNavigate={closeMenus} />}
              </div>
            </div>
          </div>
        )}
      </div>

      {open && (
        <div className="max-h-[70vh] overflow-y-auto border-t border-[#e8dfd0] bg-[#FDFBF2] px-4 py-3 xl:hidden">
          <nav className="flex flex-col">
            <Link to="/" onClick={closeMenus} className="border-b border-[#efe6d6] py-2.5 font-serif text-[0.95rem] text-[#2A1810]">
              Home
            </Link>

            <button
              type="button"
              onClick={() => setMobileAboutOpen((v) => !v)}
              className="flex w-full items-center justify-between border-b border-[#efe6d6] py-2.5 font-serif text-[0.95rem] text-[#2A1810]"
            >
              About Us
              <svg className={`h-4 w-4 transition ${mobileAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileAboutOpen && (
              <div className="space-y-1 border-b border-[#efe6d6] bg-[#FDF8EF]/60 py-2 pl-3">
                <p className="pt-1 text-[0.65rem] font-semibold tracking-wide text-[#B38644] uppercase">About the Trust</p>
                {aboutTrustLinks.map((item) => (
                  <Link key={item.title} to={item.to} onClick={closeMenus} className="block py-1.5 font-serif text-sm text-[#5C2A2A]">
                    {item.title}
                  </Link>
                ))}
                <p className="pt-2 text-[0.65rem] font-semibold tracking-wide text-[#B38644] uppercase">Our Journey</p>
                {aboutJourneyLinks.map((item) => (
                  <Link key={item.title} to={item.to} onClick={closeMenus} className="block py-1.5 font-serif text-sm text-[#5C2A2A]">
                    {item.title}
                  </Link>
                ))}
                <p className="pt-2 text-[0.65rem] font-semibold tracking-wide text-[#B38644] uppercase">Our Sansthan</p>
                {aboutSansthanLinks.map((item) => (
                  <Link key={item.title} to={item.to} onClick={closeMenus} className="block py-1.5 font-serif text-sm text-[#5C2A2A]">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setMobileHistoryOpen((v) => !v)}
              className="flex w-full items-center justify-between border-b border-[#efe6d6] py-2.5 font-serif text-[0.95rem] text-[#2A1810]"
            >
              History
              <svg className={`h-4 w-4 transition ${mobileHistoryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileHistoryOpen && (
              <div className="space-y-1 border-b border-[#efe6d6] bg-[#FDF8EF]/60 py-2 pl-3">
                {historyLinks.map((item) => (
                  <Link key={item.to} to={item.to} onClick={closeMenus} className="block py-1.5 font-serif text-sm text-[#5C2A2A]">
                    {item.title}
                  </Link>
                ))}
                <Link to="/history" onClick={closeMenus} className="block py-1.5 font-serif text-sm font-semibold text-[#B38644]">
                  View All History
                </Link>
              </div>
            )}

            <Link to="/teachings" onClick={closeMenus} className="border-b border-[#efe6d6] py-2.5 font-serif text-[0.95rem] text-[#2A1810]">
              Teachings
            </Link>

            <button
              type="button"
              onClick={() => setMobileSevaOpen((v) => !v)}
              className="flex w-full items-center justify-between border-b border-[#efe6d6] py-2.5 font-serif text-[0.95rem] text-[#2A1810]"
            >
              Seva & Services
              <svg className={`h-4 w-4 transition ${mobileSevaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileSevaOpen && (
              <div className="space-y-1 border-b border-[#efe6d6] bg-[#FDF8EF]/60 py-2 pl-3">
                <p className="pt-1 text-[0.65rem] font-semibold tracking-wide text-[#B38644] uppercase">Seva</p>
                {sevaList.map((item) => (
                  <Link key={item.to} to={item.to} onClick={closeMenus} className="block py-1.5 font-serif text-sm text-[#5C2A2A]">
                    {item.title}
                  </Link>
                ))}
                <p className="pt-2 text-[0.65rem] font-semibold tracking-wide text-[#B38644] uppercase">Services</p>
                {serviceCards.map((item) => (
                  <Link key={item.to} to={item.to} onClick={closeMenus} className="block py-1.5 font-serif text-sm text-[#5C2A2A]">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setMobileAartiOpen((v) => !v)}
              className="flex w-full items-center justify-between border-b border-[#efe6d6] py-2.5 font-serif text-[0.95rem] text-[#2A1810]"
            >
              Aarti & Events
              <svg className={`h-4 w-4 transition ${mobileAartiOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileAartiOpen && (
              <div className="space-y-1 border-b border-[#efe6d6] bg-[#FDF8EF]/60 py-2 pl-3">
                <p className="pt-1 text-[0.65rem] font-semibold tracking-wide text-[#B38644] uppercase">Aarti</p>
                {aartiSchedule.map((item) => (
                  <Link key={item.to} to={item.to} onClick={closeMenus} className="block py-1.5 font-serif text-sm text-[#5C2A2A]">
                    {item.title}
                  </Link>
                ))}
                <Link to="/aarti-timings" onClick={closeMenus} className="block py-1.5 font-serif text-sm font-semibold text-[#B38644]">
                  Full Aarti Schedule
                </Link>
                <p className="pt-2 text-[0.65rem] font-semibold tracking-wide text-[#B38644] uppercase">Events</p>
                {eventItems.map((item) => (
                  <Link key={item.to} to={item.to} onClick={closeMenus} className="block py-1.5 font-serif text-sm text-[#5C2A2A]">
                    {item.title}
                  </Link>
                ))}
                <Link to="/festivals" onClick={closeMenus} className="block py-1.5 font-serif text-sm font-semibold text-[#B38644]">
                  View All Events
                </Link>
              </div>
            )}

            {links
              .filter((l) => !l.type && l.to !== '/' && l.to !== '/teachings')
              .map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenus}
                  className="border-b border-[#efe6d6] py-2.5 font-serif text-[0.95rem] text-[#2A1810] last:border-0"
                >
                  {link.label}
                </Link>
              ))}
          </nav>
          <Link
            to="/contact"
            onClick={closeMenus}
            className="mt-3 flex items-center justify-center gap-2 rounded-md bg-[#B38644] px-4 py-2.5 font-serif text-sm font-semibold text-white sm:hidden"
          >
            Donate Now
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar
