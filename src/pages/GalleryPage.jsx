import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import heroBaba from '../assets/hero-baba.png'
import homeBanner from '../assets/home-banner.png'
import secondSection from '../assets/second-section.png'
import galleryDhuni from '../assets/gallery/gallery-dhuni.jpg'
import galleryDiya from '../assets/gallery/gallery-diya.jpg'
import galleryDwarkamai from '../assets/gallery/gallery-dwarkamai.jpg'
import gallerySamadhi from '../assets/gallery/gallery-samadhi.jpg'
import sevaAnnadaan from '../assets/generated/seva-annadaan.png'
import sevaPooja from '../assets/generated/seva-pooja.png'
import sevaTemple from '../assets/generated/seva-temple.png'
import sevaMedical from '../assets/generated/seva-medical.png'
import sevaEducation from '../assets/generated/seva-education.png'
import welcomeBaba from '../assets/generated/welcome-baba-tree.png'
import banner1 from '../assets/banners/banner-1.png'
import banner2 from '../assets/banners/banner-2.png'
import banner3 from '../assets/banners/banner-3.png'
import banner4 from '../assets/banners/banner-4.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'darshan', label: 'Sai Baba Darshan' },
  { id: 'temples', label: 'Temples & Places' },
  { id: 'aarti', label: 'Aarti & Pujas' },
  { id: 'events', label: 'Events & Celebrations' },
  { id: 'devotees', label: 'Devotees' },
]

const MORE_CATEGORIES = [
  { id: 'seva', label: 'Seva Moments' },
  { id: 'festivals', label: 'Festivals' },
]

const INITIAL_COUNT = 12

const galleryItems = [
  { src: heroBaba, alt: 'Sai Baba idol on throne', category: 'darshan' },
  { src: gallerySamadhi, alt: 'Samadhi Mandir evening glow', category: 'temples' },
  { src: homeBanner, alt: 'Divine darshan at Shirdi', category: 'darshan' },
  { src: galleryDiya, alt: 'Sacred diyas glowing', category: 'aarti' },
  { src: galleryDhuni, alt: 'Sacred Dhuni fire', category: 'aarti' },
  { src: galleryDwarkamai, alt: 'Dwarkamai Mandir', category: 'temples' },
  { src: sevaPooja, alt: 'Pooja offerings', category: 'aarti' },
  { src: sevaAnnadaan, alt: 'Anna Seva for devotees', category: 'devotees' },
  { src: sevaTemple, alt: 'Temple seva', category: 'temples' },
  { src: welcomeBaba, alt: 'Baba under the tree', category: 'darshan' },
  { src: secondSection, alt: 'Sai Baba blessing devotees', category: 'darshan' },
  { src: sevaMedical, alt: 'Medical seva', category: 'seva' },
  { src: sevaEducation, alt: 'Education seva', category: 'seva' },
  { src: banner1, alt: 'Festival celebration', category: 'events' },
  { src: banner2, alt: 'Temple festivities', category: 'festivals' },
  { src: banner3, alt: 'Devotee gathering', category: 'devotees' },
  { src: banner4, alt: 'Sacred procession', category: 'events' },
  { src: img1, alt: 'Temple architecture', category: 'temples' },
  { src: img2, alt: 'Evening aarti', category: 'aarti' },
  { src: img3, alt: 'Devotees in prayer', category: 'devotees' },
  { src: img4, alt: 'Festival lights', category: 'festivals' },
  { src: img5, alt: 'Sacred celebration', category: 'events' },
]

const stats = [
  {
    value: '5000+',
    label: 'Photos',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="11" r="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16l5-4 4 3 3-2 6 3" />
      </svg>
    ),
  },
  {
    value: '250+',
    label: 'Videos',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="6" width="14" height="12" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 10l4-2v8l-4-2v-4z" />
      </svg>
    ),
  },
  {
    value: '100+',
    label: 'Events',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path strokeLinecap="round" d="M3 10h18M8 3v4M16 3v4" />
      </svg>
    ),
  },
  {
    value: 'Millions',
    label: 'Blessed Devotees',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a3 3 0 010 5.74" />
      </svg>
    ),
  },
]

function HangingLamp({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 140" fill="none" aria-hidden="true">
      <path d="M32 0v28" stroke="#B38644" strokeWidth="1.4" />
      <path d="M24 28h16" stroke="#B38644" strokeWidth="1.4" />
      <path
        d="M20 36c0-4 5.5-8 12-8s12 4 12 8c0 18-4 34-12 48-8-14-12-30-12-48z"
        fill="#B38644"
        fillOpacity="0.18"
        stroke="#B38644"
        strokeWidth="1.4"
      />
      <ellipse cx="32" cy="88" rx="10" ry="4" fill="#B38644" fillOpacity="0.35" stroke="#B38644" strokeWidth="1" />
      <path d="M28 92c1.5 6 3 10 4 14 1-4 2.5-8 4-14" stroke="#c9a227" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="32" cy="108" r="2.5" fill="#c9a227" opacity="0.8" />
    </svg>
  )
}

function CategoryIcon({ id }) {
  const props = {
    className: 'h-3.5 w-3.5',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.7',
    viewBox: '0 0 24 24',
    'aria-hidden': true,
  }
  switch (id) {
    case 'all':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      )
    case 'darshan':
      return (
        <svg {...props}>
          <circle cx="12" cy="10" r="4" />
          <path strokeLinecap="round" d="M4 20c1.5-3 4.5-5 8-5s6.5 2 8 5" />
        </svg>
      )
    case 'temples':
      return (
        <svg {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V8l8-4 8 4v12M10 20v-5h4v5" />
        </svg>
      )
    case 'aarti':
      return (
        <svg {...props}>
          <path strokeLinecap="round" d="M12 3c1.2 2 2 3.5 2 5a2 2 0 11-4 0c0-1.5.8-3 2-5z" />
          <path strokeLinecap="round" d="M8 14h8l-1.5 6h-5L8 14z" />
        </svg>
      )
    case 'events':
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path strokeLinecap="round" d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      )
    case 'devotees':
      return (
        <svg {...props}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="16" cy="9" r="2.5" />
          <path strokeLinecap="round" d="M3 19c0-3 2.5-5 6-5s6 2 6 5" />
        </svg>
      )
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
          <path strokeLinecap="round" d="M12 8v4l2.5 2.5" />
        </svg>
      )
  }
}

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [showMoreCats, setShowMoreCats] = useState(false)
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)
  const [lightbox, setLightbox] = useState(null)

  const categories = showMoreCats ? [...CATEGORIES, ...MORE_CATEGORIES] : CATEGORIES

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return galleryItems
    return galleryItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const selectCategory = (id) => {
    setActiveCategory(id)
    setVisibleCount(INITIAL_COUNT)
  }

  return (
    <div className="w-full font-serif">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FDFBF2]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(179,134,68,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(90,14,20,0.05) 0%, transparent 45%)',
          }}
        />
        <div className="pointer-events-none absolute top-0 left-[6%] hidden opacity-70 sm:block" aria-hidden="true">
          <HangingLamp className="h-36 w-14" />
        </div>
        <div className="pointer-events-none absolute top-4 left-[14%] hidden opacity-50 lg:block" aria-hidden="true">
          <HangingLamp className="h-28 w-11" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#B38644]" aria-hidden="true" />
              <span className="text-[0.7rem] font-semibold tracking-[0.22em] text-[#B38644] uppercase">Gallery</span>
              <span className="flex items-center gap-1" aria-hidden="true">
                <span className="h-1 w-1 rounded-full bg-[#B38644]" />
                <span className="h-px w-8 bg-[#B38644]" />
              </span>
            </div>
            <h1 className="max-w-lg text-3xl font-bold leading-tight text-[#5a0e14] sm:text-4xl lg:text-[2.6rem]">
              Divine Moments, Captured with Devotion
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#3b1f0f]/80">
              Explore sacred photographs from Shirdi — darshan, aarti, temples, festivals and the love of
              millions of devotees.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#upload"
                className="inline-flex items-center gap-2 rounded-md bg-[#5a0e14] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7a1520]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h4l2-2h6l2 2h4v12H3V7z" />
                  <circle cx="12" cy="13" r="3.5" />
                </svg>
                Submit Your Photos
              </a>
              <Link
                to="/aarti-timings#live"
                className="inline-flex items-center gap-2 rounded-md border border-[#B38644] px-5 py-2.5 text-sm font-semibold text-[#B38644] transition hover:bg-[#B38644]/10"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                View Videos
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(40,20,10,0.18)]">
              <img
                src={heroBaba}
                alt="Sai Baba"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#5a0e14]/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative z-20 -mt-6 px-4 sm:-mt-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#e8dfd0] bg-white shadow-[0_12px_36px_rgba(40,20,10,0.1)] sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1.5 bg-white px-4 py-5 text-center sm:py-6">
              <span className="text-[#B38644]">{stat.icon}</span>
              <span className="text-xl font-bold text-[#5a0e14] sm:text-2xl">{stat.value}</span>
              <span className="text-[0.7rem] tracking-wide text-[#6b6b6b]">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="bg-[#FDFBF2] pt-12 pb-16 sm:pt-14 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const active = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => selectCategory(cat.id)}
                  className={[
                    'inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-semibold transition sm:text-sm',
                    active
                      ? 'bg-[#5a0e14] text-white shadow-sm'
                      : 'border border-[#e8dfd0] bg-[#FCF8F2] text-[#5a0e14] hover:border-[#B38644]/60',
                  ].join(' ')}
                >
                  <CategoryIcon id={cat.id} />
                  {cat.label}
                </button>
              )
            })}
            <button
              type="button"
              onClick={() => setShowMoreCats((v) => !v)}
              className="inline-flex items-center gap-1 rounded-full border border-[#e8dfd0] bg-[#FCF8F2] px-3.5 py-2 text-xs font-semibold text-[#5a0e14] transition hover:border-[#B38644]/60 sm:text-sm"
            >
              More
              <svg
                className={`h-3.5 w-3.5 transition ${showMoreCats ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {visible.map((item, index) => (
              <button
                key={`${item.src}-${index}`}
                type="button"
                onClick={() => setLightbox(item)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B38644]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-[#5a0e14]/0 transition group-hover:bg-[#5a0e14]/25" />
                <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-[#2a0a0c]/80 to-transparent p-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block text-left text-xs font-semibold text-white">{item.alt}</span>
                </span>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-sm text-[#6b6b6b]">No photos in this category yet.</p>
          )}

          {hasMore && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + 8)}
                className="inline-flex items-center gap-2 rounded-md border border-[#B38644] bg-[#FCF8F2] px-8 py-3 text-sm font-semibold text-[#5a0e14] transition hover:bg-[#FDF8EF]"
              >
                Load More
                <svg className="h-4 w-4 text-[#B38644]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Upload CTA */}
      <section id="upload" className="bg-[#FDFBF2] pb-16 sm:pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-[#dfc083]/50 bg-[#FCF8F2] px-6 py-8 sm:px-10 sm:py-10">
            <div className="pointer-events-none absolute top-3 left-3 h-6 w-6 border-t border-l border-[#B38644]/50" aria-hidden="true" />
            <div className="pointer-events-none absolute top-3 right-3 h-6 w-6 border-t border-r border-[#B38644]/50" aria-hidden="true" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-6 w-6 border-b border-l border-[#B38644]/50" aria-hidden="true" />
            <div className="pointer-events-none absolute right-3 bottom-3 h-6 w-6 border-r border-b border-[#B38644]/50" aria-hidden="true" />

            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#f3ead7] text-[#B38644]">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" d="M12 3c1.2 2 2 3.5 2 5a2 2 0 11-4 0c0-1.5.8-3 2-5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 14h8l-1.5 6h-5L8 14z" />
                  <path strokeLinecap="round" d="M7 21h10" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-xl font-bold text-[#5a0e14] sm:text-2xl">Have beautiful moments from Shirdi?</h2>
                <p className="mt-1.5 text-sm text-[#3b1f0f]/75">
                  Share your clicks with us and be a part of our divine gallery.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#5a0e14] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7a1520]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4M8 8l4-4 4 4M4 20h16" />
                </svg>
                Upload Your Photos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
          onKeyDown={(e) => e.key === 'Escape' && setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default GalleryPage
