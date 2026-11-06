import { Link } from 'react-router-dom'
import HomeBanner from '../components/HomeBanner'
import VideoSection from '../components/VideoSection'
import welcomeBabaTree from '../assets/second-section.png'
import sevaPooja from '../assets/generated/seva-pooja.png'
import sevaAnnadaan from '../assets/generated/seva-annadaan.png'
import sevaTemple from '../assets/generated/seva-temple.png'
import sevaMedical from '../assets/generated/seva-medical.png'
import sevaEducation from '../assets/generated/seva-education.png'
import galleryDhuni from '../assets/gallery/gallery-dhuni.jpg'
import galleryDiya from '../assets/gallery/gallery-diya.jpg'
import galleryDwarkamai from '../assets/gallery/gallery-dwarkamai.jpg'
import gallerySamadhi from '../assets/gallery/gallery-samadhi.jpg'
import heroBaba from '../assets/hero-baba.png'
import homeBanner from '../assets/home-banner.png'

const welcomeAttributes = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#c96f18]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    text: 'He saw all Hearts Equal',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#c96f18]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    text: 'He helps those who Surrender',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#c96f18]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11.571V9a4 4 0 00-4-4H4" />
      </svg>
    ),
    text: 'He is always with you',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#c96f18]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2z" />
      </svg>
    ),
    text: 'He gives what you need',
  },
]

const sevaServices = [
  {
    img: sevaPooja,
    title: 'Pooja Seva',
    desc: 'Book various Pooja services online.',
    link: '/contact',
  },
  {
    img: sevaAnnadaan,
    title: 'Annadaan Seva',
    desc: 'Feed the needy and be blessed.',
    link: '/contact',
  },
  {
    img: sevaTemple,
    title: 'Temple Seva',
    desc: 'Contribute for temple maintenance & development.',
    link: '/contact',
  },
  {
    img: sevaMedical,
    title: 'Medical Seva',
    desc: 'Support for free healthcare facilities and help the needy.',
    link: '/contact',
  },
  {
    img: sevaEducation,
    title: 'Education Seva',
    desc: 'Help children for a better tomorrow through education.',
    link: '/contact',
  },
  {
    img: galleryDhuni,
    title: 'Gau Seva',
    desc: 'Support and care for cows and other animals.',
    link: '/contact',
  },
]

const galleryImages = [
  { src: heroBaba, alt: 'Sai Baba idol' },
  { src: gallerySamadhi, alt: 'Samadhi Mandir' },
  { src: homeBanner, alt: 'Sai Baba darshan' },
  { src: galleryDiya, alt: 'Sacred diya' },
  { src: galleryDhuni, alt: 'Dhuni pooja' },
  { src: galleryDwarkamai, alt: 'Dwarkamai' },
]

function GalleryFlourish() {
  return (
    <svg viewBox="0 0 48 12" className="h-3 w-10 text-[#B38644]" fill="currentColor" aria-hidden="true">
      <path d="M0 6c6-4 12-4 18 0-6 4-12 4-18 0zm48 0c-6-4-12-4-18 0 6 4 12 4 18 0zM20 6c2-3 4-3 6 0-2 3-4 3-6 0z" />
    </svg>
  )
}

function Home() {
  return (
    <div className="relative w-full">
      <HomeBanner />

      {/* Welcome / About — top padding clears the overlapping service bar */}
      <section className="relative overflow-hidden bg-[#FCF8F2] pb-16 pt-24 sm:pb-20 sm:pt-28" id="about">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-6 lg:px-8">
          
          {/* Welcome Left Image */}
          <div className="relative flex justify-center overflow-visible lg:col-span-5 lg:justify-start">
            <img
              src={welcomeBabaTree}
              alt="Sai Baba"
              className="h-auto w-full min-h-[320px] object-contain object-left sm:min-h-[400px] lg:-ml-12 lg:min-h-[480px] lg:w-[115%] lg:max-w-none xl:-ml-16"
            />
          </div>

          {/* Welcome Center Description */}
          <div className="min-w-0 space-y-6 lg:col-span-4">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 whitespace-nowrap text-[0.7rem] font-semibold tracking-[0.18em] text-[#c96f18] uppercase sm:text-xs sm:tracking-[0.2em]">
                <span aria-hidden="true">🪔</span>
                Welcome to Sai Baba Devotees
              </span>
              <h2 className="font-serif text-[1.75rem] font-bold leading-[1.25] text-[#4A1C1C] sm:text-3xl lg:text-[2.15rem]">
                <span className="whitespace-nowrap">A Beacon of Hope, Love</span>
                <br />
                and Compassion
              </h2>
              <div className="flex items-center gap-2 pt-1" aria-hidden="true">
                <span className="h-px w-10 bg-[#c96f18]/70" />
                <span className="text-[10px] text-[#c96f18]">❧</span>
                <span className="h-px w-10 bg-[#c96f18]/70" />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#3b1f0f]/80">
              Sai Baba of Shirdi was a timeless saint who embraced all religions and preached the values of love, forgiveness, charity, contentment, inner peace and devotion to the God and Guru.
            </p>

            {/* Mini Attributes Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {welcomeAttributes.map((a, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-1.5 bg-[#ebdcb9]/30 rounded-full flex-shrink-0">
                    {a.icon}
                  </div>
                  <span className="text-xs font-bold text-[#7a1520] leading-snug">{a.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="bg-[#5a0e14] hover:bg-[#7a1520] text-white px-5 py-3 rounded text-xs font-bold tracking-wider uppercase transition-colors inline-flex items-center gap-2"
              >
                Know More About Sai Baba <span>→</span>
              </Link>
            </div>
          </div>

          {/* Welcome Right Scroll quote card */}
          <div className="lg:col-span-3">
            <div className="bg-[#fcfbf9] relative border border-[#dfc083]/40 rounded-lg p-6 text-center shadow-lg ornate-border-top space-y-6">
              {/* Quote marks */}
              <span className="text-5xl font-serif text-[#ebdcb9] block select-none">“</span>
              
              <div className="space-y-4">
                <p className="font-serif italic text-lg sm:text-xl text-[#7a1520] leading-relaxed font-display font-medium">
                  Why fear, when I am here! I will never leave my devotee.
                </p>
                <span className="text-xs font-bold tracking-widest text-[#c96f18] uppercase block">
                  — Sai Baba
                </span>
              </div>

              {/* Burning Diya SVG Animation */}
              <div className="w-full flex justify-center pt-4">
                <div className="relative w-12 h-10">
                  {/* Diya Base */}
                  <svg className="w-full h-full text-[#c9a227]" fill="currentColor" viewBox="0 0 100 80">
                    <path d="M10,40 Q50,90 90,40 C90,40 85,25 50,30 C15,25 10,40 10,40 Z" />
                  </svg>
                  {/* Flame */}
                  <div className="absolute top-[-10px] left-[42%] w-4 h-6 bg-gradient-to-t from-[#c96f18] via-[#e8872a] to-[#e8c96a] rounded-full animate-ping opacity-75" />
                  <div className="absolute top-[-6px] left-[44%] w-3 h-5 bg-gradient-to-t from-[#e8872a] to-[#e8c96a] rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SEVA & SERVICES SECTION */}
      <section className="py-20 bg-[#FCFBF7] relative" id="seva">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center space-y-2">
            <span className="text-xs font-bold tracking-[0.25em] text-[#c96f18] uppercase">Serve the Divine</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#7a1520] font-display">
              Seva & Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#dfc083] to-transparent mx-auto mt-3" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sevaServices.map((s, i) => (
              <div
                key={i}
                className="bg-[#FCF8F2] border border-[#ebdcb9]/30 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative overflow-hidden h-48 sm:h-52">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A05]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#7a1520] font-display">{s.title}</h3>
                    <p className="text-xs leading-relaxed text-[#3b1f0f]/80">{s.desc}</p>
                  </div>
                  <Link
                    to={s.link}
                    className="text-xs font-bold text-[#c96f18] uppercase tracking-wider flex items-center gap-1 group-hover:text-[#5a0e14] transition-colors"
                  >
                    Book Now <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sai Baba Gallery */}
      <section className="relative bg-[#FCF8F2] py-16 sm:py-20" id="gallery">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-center gap-3 sm:gap-4">
            <GalleryFlourish />
            <h2 className="font-serif text-xl font-bold tracking-[0.12em] text-[#5a0e14] uppercase sm:text-2xl">
              Sai Baba Gallery
            </h2>
            <GalleryFlourish />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-7">
            {galleryImages.map((img) => (
              <Link
                key={img.alt}
                to="/gallery"
                className="group aspect-square overflow-hidden rounded-xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
            ))}

            <Link
              to="/gallery"
              className="group relative flex aspect-square flex-col items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#5a0e14] p-4 text-center"
            >
              <span className="pointer-events-none absolute inset-2 rounded-lg border border-[#c9a227]/50" />
              <span className="relative font-serif text-sm font-semibold leading-snug text-[#FCF8F2] sm:text-base">
                View Full
                <br />
                Gallery
              </span>
              <svg
                className="relative h-7 w-7 text-[#c9a227] transition group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="1.5" />
                <path strokeLinecap="round" d="M3 9h18M8 5v4M16 5v4" />
                <circle cx="12" cy="14" r="2" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Sacred Videos Section */}
      <VideoSection />
    </div>
  )
}

export default Home
