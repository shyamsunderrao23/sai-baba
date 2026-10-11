import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import heroBaba from '../assets/hero-baba.png'
import homeBanner from '../assets/home-banner.png'
import galleryDiya from '../assets/gallery/gallery-diya.jpg'
import galleryDhuni from '../assets/gallery/gallery-dhuni.jpg'
import gallerySamadhi from '../assets/gallery/gallery-samadhi.jpg'
import galleryDwarkamai from '../assets/gallery/gallery-dwarkamai.jpg'
import sevaAnnadaan from '../assets/generated/seva-annadaan.png'
import sevaPooja from '../assets/generated/seva-pooja.png'
import sevaTemple from '../assets/generated/seva-temple.png'
import sevaMedical from '../assets/generated/seva-medical.png'
import welcomeBaba from '../assets/generated/welcome-baba-tree.png'
import secondSection from '../assets/second-section.png'

const POSTS_PER_PAGE = 6

const categoryQuick = [
  {
    id: 'teachings',
    title: 'Teachings',
    sub: 'Wisdom & Guidance',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h10a3 3 0 013 3v11H7a3 3 0 01-3-3V5z" />
        <path strokeLinecap="round" d="M17 5h3v14h-3" />
      </svg>
    ),
  },
  {
    id: 'experiences',
    title: 'Devotee Experiences',
    sub: 'Real Life Miracles',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-4.5-9.5-8.2C.7 9.8 2.2 6 5.8 6c2 0 3.3 1.1 4.2 2.2C11 7.1 12.2 6 14.2 6c3.6 0 5.1 3.8 3.3 6.8C19 16.5 12 21 12 21z" />
      </svg>
    ),
  },
  {
    id: 'leelas',
    title: 'Sai Leelas',
    sub: 'Divine Stories',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" d="M12 3c1.5 2.5 2.5 4.5 2.5 6.5a2.5 2.5 0 11-5 0C9.5 7.5 10.5 5.5 12 3z" />
        <path strokeLinecap="round" d="M7 20h10M9 14h6l-1 6H10l-1-6z" />
      </svg>
    ),
  },
  {
    id: 'seva',
    title: 'Seva & Service',
    sub: 'Selfless Acts',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 13V8a1.5 1.5 0 013 0v5M11 13V7a1.5 1.5 0 013 0v6M14 13v-3a1.5 1.5 0 013 0v5c0 3-2 5-5 5h-1c-3.5 0-6-2-6-5v-3a1.5 1.5 0 013 0v1" />
      </svg>
    ),
  },
  {
    id: 'festivals',
    title: 'Festivals',
    sub: 'Sacred Celebrations',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path strokeLinecap="round" d="M3 10h18M8 3v4M16 3v4" />
      </svg>
    ),
  },
]

const moreCategories = [
  { id: 'aarti', title: 'Aarti & Rituals', sub: 'Daily worship' },
  { id: 'quotes', title: 'Quotes', sub: 'Sacred words' },
]

export const blogPosts = [
  {
    slug: 'power-of-faith-and-patience',
    title: 'The Power of Faith and Patience',
    excerpt:
      'Shraddha and Saburi are the twin pillars of Baba’s path. Discover how faith and patience transform everyday struggles into spiritual strength.',
    content:
      'Sai Baba taught that Shraddha (faith) and Saburi (patience) are the foundation of a devotee’s life. When we trust Baba completely and wait with calm devotion, grace unfolds in ways we cannot imagine. In modern life, these twin virtues help us face uncertainty with courage and peace.',
    img: heroBaba,
    category: 'teachings',
    date: 'May 12, 2025',
    author: 'Sai Baba Team',
    readTime: '5 min read',
    featured: true,
  },
  {
    slug: 'teachings-for-modern-life',
    title: "Sai Baba's Teachings for Modern Life",
    excerpt: 'Timeless wisdom that guides work, relationships, and inner peace in today’s fast world.',
    img: gallerySamadhi,
    category: 'teachings',
    date: 'May 8, 2025',
    author: 'Sai Baba Team',
    readTime: '4 min read',
  },
  {
    slug: 'miracle-of-devotion',
    title: 'A Devotee’s Miracle of Devotion',
    excerpt: 'A heartfelt story of how unwavering faith brought healing and hope to a family.',
    img: galleryDiya,
    category: 'experiences',
    date: 'May 5, 2025',
    author: 'Devotee Stories',
    readTime: '6 min read',
  },
  {
    slug: 'sai-leela-dwarkamai',
    title: 'Sai Leela at Dwarkamai',
    excerpt: 'Remembering the sacred moments when Baba’s presence filled Dwarkamai with light.',
    img: galleryDwarkamai,
    category: 'leelas',
    date: 'Apr 28, 2025',
    author: 'Sai Baba Team',
    readTime: '5 min read',
  },
  {
    slug: 'anna-seva-love-on-plate',
    title: 'Anna Seva: Love Served on a Plate',
    excerpt: 'How feeding devotees every day continues Baba’s message of compassion and equality.',
    img: sevaAnnadaan,
    category: 'seva',
    date: 'Apr 22, 2025',
    author: 'Seva Desk',
    readTime: '3 min read',
  },
  {
    slug: 'guru-purnima-celebrations',
    title: 'Guru Purnima Celebrations at Shirdi',
    excerpt: 'A glimpse into the devotion, aarti, and joy that fill Shirdi on this sacred day.',
    img: homeBanner,
    category: 'festivals',
    date: 'Apr 18, 2025',
    author: 'Events Team',
    readTime: '4 min read',
  },
  {
    slug: 'sacred-dhuni-fire',
    title: 'The Sacred Dhuni Fire',
    excerpt: 'Why Baba’s eternal fire remains a symbol of purification and divine protection.',
    img: galleryDhuni,
    category: 'leelas',
    date: 'Apr 12, 2025',
    author: 'Sai Baba Team',
    readTime: '4 min read',
  },
  {
    slug: 'pooja-with-pure-heart',
    title: 'Pooja with a Pure Heart',
    excerpt: 'Simple ways to offer worship that Baba accepts — sincerity over grandeur.',
    img: sevaPooja,
    category: 'aarti',
    date: 'Apr 8, 2025',
    author: 'Sai Baba Team',
    readTime: '3 min read',
  },
  {
    slug: 'why-fear-when-i-am-here',
    title: '“Why Fear When I Am Here”',
    excerpt: 'Reflecting on Baba’s most comforting assurance and how to live by it daily.',
    img: welcomeBaba,
    category: 'quotes',
    date: 'Apr 2, 2025',
    author: 'Sai Baba Team',
    readTime: '5 min read',
  },
  {
    slug: 'temple-seva-stories',
    title: 'Temple Seva Stories',
    excerpt: 'Volunteers share how serving at the temple deepened their bond with Baba.',
    img: sevaTemple,
    category: 'seva',
    date: 'Mar 28, 2025',
    author: 'Seva Desk',
    readTime: '4 min read',
  },
  {
    slug: 'healing-through-faith',
    title: 'Healing Through Faith',
    excerpt: 'Medical seva and prayer — how compassion and devotion walk hand in hand.',
    img: sevaMedical,
    category: 'experiences',
    date: 'Mar 20, 2025',
    author: 'Devotee Stories',
    readTime: '5 min read',
  },
  {
    slug: 'under-the-neem-tree',
    title: 'Under the Neem Tree',
    excerpt: 'Lessons from the quiet shade where Baba sat and blessed countless hearts.',
    img: secondSection,
    category: 'leelas',
    date: 'Mar 14, 2025',
    author: 'Sai Baba Team',
    readTime: '6 min read',
  },
]

const categoryCounts = blogPosts.reduce((acc, post) => {
  acc[post.category] = (acc[post.category] || 0) + 1
  return acc
}, {})

const sidebarCategories = [
  { id: 'teachings', label: 'Teachings' },
  { id: 'experiences', label: 'Devotee Experiences' },
  { id: 'leelas', label: 'Sai Leelas' },
  { id: 'seva', label: 'Seva & Service' },
  { id: 'festivals', label: 'Festivals' },
  { id: 'aarti', label: 'Aarti & Rituals' },
  { id: 'quotes', label: 'Quotes' },
]

function MetaRow({ date, author, readTime, compact = false }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[#6b6b6b] ${compact ? 'text-[0.68rem]' : 'text-xs'}`}>
      <span className="inline-flex items-center gap-1">
        <svg className="h-3.5 w-3.5 text-[#B38644]" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path strokeLinecap="round" d="M3 10h18M8 3v4M16 3v4" />
        </svg>
        {date}
      </span>
      {author && (
        <span className="inline-flex items-center gap-1">
          <svg className="h-3.5 w-3.5 text-[#B38644]" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="8" r="3.5" />
            <path strokeLinecap="round" d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
          </svg>
          {author}
        </span>
      )}
      <span className="inline-flex items-center gap-1">
        <svg className="h-3.5 w-3.5 text-[#B38644]" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <path strokeLinecap="round" d="M12 8v4l2.5 2.5" />
        </svg>
        {readTime}
      </span>
    </div>
  )
}

function BlogPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [showMoreCats, setShowMoreCats] = useState(false)
  const [page, setPage] = useState(1)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const featured = blogPosts.find((p) => p.featured) || blogPosts[0]

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return blogPosts.filter((post) => {
      if (post.featured) return false
      if (activeCategory !== 'all' && post.category !== activeCategory) return false
      if (!q) return true
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q)
      )
    })
  }, [query, activeCategory])

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const pagePosts = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)
  const popular = blogPosts.filter((p) => !p.featured).slice(0, 5)

  const selectCategory = (id) => {
    setActiveCategory(id)
    setPage(1)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setPage(1)
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <div className="w-full font-serif">
      {/* Hero */}
      <section className="relative min-h-[280px] overflow-hidden sm:min-h-[320px]">
        <img src={gallerySamadhi} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#2a0a0c]/75" />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 py-14 text-center sm:px-6 sm:py-16">
          <div className="mb-3 flex items-center gap-2 text-[#c9a227]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h10a3 3 0 013 3v11H7a3 3 0 01-3-3V5z" />
              <path strokeLinecap="round" d="M17 5h3v14h-3" />
            </svg>
            <span className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase">Blog</span>
          </div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Sai Baba Blog</h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85">
            Read inspiring stories, teachings, and experiences that bring us closer to Sai.
          </p>
          <form onSubmit={handleSearch} className="mt-7 flex w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-lg">
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setPage(1)
              }}
              placeholder="Search articles, teachings, stories..."
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-[#3b1f0f] outline-none placeholder:text-[#9a9a9a]"
              aria-label="Search blog"
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-[#B38644] px-4 text-white transition hover:bg-[#9a7138]"
              aria-label="Search"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* Category quick bar */}
      <section className="relative z-20 -mt-5 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-stretch justify-center gap-1 overflow-hidden rounded-2xl border border-[#e8dfd0] bg-white shadow-[0_12px_30px_rgba(40,20,10,0.1)] sm:flex-nowrap">
          {categoryQuick.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => selectCategory(cat.id)}
              className={[
                'flex min-w-[120px] flex-1 flex-col items-center gap-1 border-b border-[#efe6d6] px-3 py-3.5 text-center transition sm:border-b-0 sm:border-r last:sm:border-r-0',
                activeCategory === cat.id ? 'bg-[#FDF8EF]' : 'hover:bg-[#FDFBF8]',
              ].join(' ')}
            >
              <span className="text-[#B38644]">{cat.icon}</span>
              <span className="text-xs font-bold text-[#5a0e14] sm:text-sm">{cat.title}</span>
              <span className="hidden text-[0.65rem] text-[#6b6b6b] sm:block">{cat.sub}</span>
            </button>
          ))}
          <div className="relative flex items-center px-2 py-2 sm:px-3">
            <button
              type="button"
              onClick={() => setShowMoreCats((v) => !v)}
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-xs font-semibold text-[#5a0e14] hover:bg-[#FDF8EF]"
            >
              More
              <svg className={`h-3.5 w-3.5 transition ${showMoreCats ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showMoreCats && (
              <div className="absolute top-full right-0 z-30 mt-1 min-w-[180px] rounded-lg border border-[#e8dfd0] bg-white py-1 shadow-lg">
                <button
                  type="button"
                  onClick={() => {
                    selectCategory('all')
                    setShowMoreCats(false)
                  }}
                  className="block w-full px-4 py-2 text-left text-sm text-[#5a0e14] hover:bg-[#FDF8EF]"
                >
                  All Posts
                </button>
                {moreCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      selectCategory(cat.id)
                      setShowMoreCats(false)
                    }}
                    className="block w-full px-4 py-2 text-left text-sm text-[#5a0e14] hover:bg-[#FDF8EF]"
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="bg-[#FDFBF2] pt-10 pb-16 sm:pt-12 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          {(activeCategory === 'all' || featured.category === activeCategory) && !query && (
            <section className="mb-12">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-[#5a0e14] sm:text-2xl">Featured Post</h2>
                <button
                  type="button"
                  onClick={() => selectCategory('all')}
                  className="text-sm font-semibold text-[#B38644] transition hover:text-[#5a0e14]"
                >
                  View All Posts →
                </button>
              </div>
              <div className="overflow-hidden rounded-2xl border border-[#e8dfd0] bg-white shadow-[0_8px_28px_rgba(40,20,10,0.08)]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative min-h-[240px] lg:min-h-[320px]">
                    <img src={featured.img} alt={featured.title} className="absolute inset-0 h-full w-full object-cover object-top" />
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <span className="mb-3 inline-flex w-fit rounded-full bg-[#B38644]/15 px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-[#B38644] uppercase">
                      Featured
                    </span>
                    <h3 className="text-2xl font-bold text-[#5a0e14] sm:text-3xl">{featured.title}</h3>
                    <div className="mt-3">
                      <MetaRow date={featured.date} author={featured.author} readTime={featured.readTime} />
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-[#3b1f0f]/80">{featured.excerpt}</p>
                    <Link
                      to={`/blog/${featured.slug}`}
                      className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-[#5a0e14] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7a1520]"
                    >
                      Read Full Article →
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Latest + Sidebar */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_300px] lg:gap-8 xl:grid-cols-[1fr_320px]">
            <section>
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold text-[#5a0e14] sm:text-2xl">
                  {activeCategory === 'all' ? 'Latest Posts' : 'Posts'}
                </h2>
                {activeCategory !== 'all' && (
                  <button
                    type="button"
                    onClick={() => selectCategory('all')}
                    className="text-sm font-semibold text-[#B38644] hover:text-[#5a0e14]"
                  >
                    View All Posts →
                  </button>
                )}
              </div>

              {pagePosts.length === 0 ? (
                <p className="rounded-xl border border-[#e8dfd0] bg-white px-6 py-16 text-center text-sm text-[#6b6b6b]">
                  No posts found. Try another search or category.
                </p>
              ) : (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {pagePosts.map((post) => (
                    <article
                      key={post.slug}
                      className="overflow-hidden rounded-xl border border-[#e8dfd0] bg-white shadow-sm transition hover:shadow-md"
                    >
                      <Link to={`/blog/${post.slug}`} className="block aspect-[16/10] overflow-hidden">
                        <img
                          src={post.img}
                          alt={post.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                      </Link>
                      <div className="p-4 sm:p-5">
                        <h3 className="text-base font-bold leading-snug text-[#5a0e14]">
                          <Link to={`/blog/${post.slug}`} className="hover:text-[#B38644]">
                            {post.title}
                          </Link>
                        </h3>
                        <div className="mt-2">
                          <MetaRow date={post.date} readTime={post.readTime} compact />
                        </div>
                        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#6b6b6b]">{post.excerpt}</p>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="mt-3 inline-block text-sm font-semibold text-[#5a0e14] hover:text-[#B38644]"
                        >
                          Read More →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => {
                        setPage(n)
                        window.scrollTo({ top: 400, behavior: 'smooth' })
                      }}
                      className={[
                        'flex h-9 w-9 items-center justify-center rounded-md border text-sm font-semibold transition',
                        n === currentPage
                          ? 'border-[#5a0e14] bg-[#5a0e14] text-white'
                          : 'border-[#e8dfd0] bg-white text-[#5a0e14] hover:border-[#B38644]',
                      ].join(' ')}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              )}
            </section>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-xl border border-[#e8dfd0] bg-white p-5 shadow-sm">
                <h3 className="text-base font-bold text-[#5a0e14]">Categories</h3>
                <div className="mt-2 mb-4 flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-px w-8 bg-[#B38644]" />
                  <span className="h-1 w-1 rounded-full bg-[#B38644]" />
                  <span className="h-px flex-1 bg-[#e8dfd0]" />
                </div>
                <ul className="space-y-1">
                  {sidebarCategories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        type="button"
                        onClick={() => selectCategory(cat.id)}
                        className={[
                          'flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm transition',
                          activeCategory === cat.id ? 'bg-[#FDF8EF] font-semibold text-[#5a0e14]' : 'text-[#3b1f0f] hover:bg-[#FDF8EF]',
                        ].join(' ')}
                      >
                        <span className="inline-flex items-center gap-2">
                          <span className="text-[#B38644]">
                            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                              <path strokeLinecap="round" d="M12 3c1.2 2 2 3.5 2 5a2 2 0 11-4 0c0-1.5.8-3 2-5z" />
                            </svg>
                          </span>
                          {cat.label}
                        </span>
                        <span className="rounded border border-[#B38644]/40 px-1.5 py-0.5 text-[0.65rem] font-semibold text-[#B38644]">
                          {categoryCounts[cat.id] || 0}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => selectCategory('all')}
                  className="mt-3 text-xs font-semibold text-[#B38644] hover:text-[#5a0e14]"
                >
                  View All Categories →
                </button>
              </div>

              <div className="rounded-xl border border-[#e8dfd0] bg-white p-5 shadow-sm">
                <h3 className="text-base font-bold text-[#5a0e14]">Popular Posts</h3>
                <div className="mt-2 mb-4 flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-px w-8 bg-[#B38644]" />
                  <span className="h-1 w-1 rounded-full bg-[#B38644]" />
                  <span className="h-px flex-1 bg-[#e8dfd0]" />
                </div>
                <ul className="space-y-3">
                  {popular.map((post, i) => (
                    <li key={post.slug}>
                      <Link to={`/blog/${post.slug}`} className="group flex gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#5a0e14] text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        <img
                          src={post.img}
                          alt=""
                          className="h-12 w-12 shrink-0 rounded-md object-cover"
                        />
                        <span className="min-w-0">
                          <span className="line-clamp-2 block text-sm font-semibold leading-snug text-[#5a0e14] group-hover:text-[#B38644]">
                            {post.title}
                          </span>
                          <span className="mt-0.5 block text-[0.65rem] text-[#6b6b6b]">{post.date}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-xl bg-[#5a0e14] p-5 text-white shadow-sm">
                <svg
                  className="pointer-events-none absolute top-3 right-3 h-8 w-8 text-[#B38644]/50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <h3 className="text-base font-bold">Stay Connected</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/80">
                  Subscribe to get latest updates, inspiring stories & events.
                </p>
                {subscribed ? (
                  <p className="mt-4 rounded-md bg-white/10 px-3 py-2 text-sm text-[#e8c96a]">
                    Thank you for subscribing.
                  </p>
                ) : (
                  <form onSubmit={handleSubscribe} className="mt-4 space-y-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full rounded-md border-0 bg-white px-3 py-2.5 text-sm text-[#3b1f0f] outline-none placeholder:text-[#9a9a9a]"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-md bg-[#B38644] py-2.5 text-sm font-semibold text-white transition hover:bg-[#c9a227]"
                    >
                      Subscribe Now
                    </button>
                  </form>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
