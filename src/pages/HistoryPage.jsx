import { Link, useParams } from 'react-router-dom'
import { historyLinks } from '../components/HistoryMegaMenu'
import heroBaba from '../assets/hero-baba.png'
import gallerySamadhi from '../assets/gallery/gallery-samadhi.jpg'

const pages = {
  introduction: {
    title: 'Introduction',
    desc: 'Explore the divine journey of Shri Sai Baba.',
    body: 'Shirdi Sai Baba is revered as a saint who transcended religion and caste, teaching humanity the path of love, faith and patience. His life in Shirdi continues to inspire millions across the world.',
  },
  'wonderful-incarnation': {
    title: 'Wonderful Incarnation',
    desc: 'The miraculous advent of Sai Baba on Earth.',
    body: 'Devotees believe Sai Baba’s advent was a divine incarnation meant to restore faith and compassion. His mysterious arrival and radiant presence filled hearts with devotion and wonder.',
  },
  origin: {
    title: 'Origin of Shri Sai Baba',
    desc: 'His early life, background and spiritual roots.',
    body: 'Little is known of Sai Baba’s early years with certainty. What remains clear is His spiritual depth, simplicity, and the grace with which He drew seekers of every faith to Shirdi.',
  },
  'how-he-formed': {
    title: 'About Sai Baba How He Formed',
    desc: 'How Sai Baba came to be and established Himself.',
    body: 'Sai Baba settled in Shirdi and made Dwarkamai His abode. Through daily life, miracles and teachings, He established a living path of Shraddha and Saburi for all devotees.',
  },
  mission: {
    title: "Shri Sai Baba's Mission",
    desc: 'His purpose and mission for all humanity.',
    body: 'Baba’s mission was to unite hearts, remove fear, and teach that service to man is service to God. His assurance “Why fear when I am here” remains a blessing for every devotee.',
  },
  'advice-teachings': {
    title: 'Advice & Teachings',
    desc: 'Timeless advice and teachings for a righteous life.',
    body: 'Faith, patience, truth, compassion and selfless seva form the essence of Baba’s advice. Living these teachings brings peace to the mind and purity to the heart.',
  },
}

function HistoryLanding() {
  return (
    <div className="w-full font-serif">
      <section className="relative min-h-[280px] overflow-hidden sm:min-h-[320px]">
        <img src={gallerySamadhi} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#2a0a0c]/75" />
        <div className="relative z-10 mx-auto flex min-h-[280px] max-w-4xl flex-col justify-center px-4 py-12 text-center sm:min-h-[320px] sm:px-6">
          <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-[#e8c96a] uppercase">History</p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">The Divine Journey of Sai Baba</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/85">
            Discover Baba&apos;s life, incarnation, mission and timeless teachings that continue to guide devotees
            worldwide.
          </p>
        </div>
      </section>

      <section className="bg-[#FDFBF2] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {historyLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-xl border border-[#e8dfd0] bg-white p-5 transition hover:border-[#c9a227]/50 hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B38644]/40 text-[#B38644]">
                {item.icon}
              </span>
              <h2 className="mt-3 text-base font-bold text-[#5a0e14]">{item.title}</h2>
              <p className="mt-1.5 text-xs leading-relaxed text-[#6b6b6b]">{item.desc}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-[#B38644]">Read More →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

function HistoryPage() {
  const { slug } = useParams()

  if (!slug) return <HistoryLanding />

  const page = pages[slug] || {
    title: 'History',
    desc: 'Explore the divine journey of Shri Sai Baba.',
    body: 'This history page shares the sacred life and teachings of Sai Baba of Shirdi.',
  }

  return (
    <div className="w-full font-serif">
      <section className="relative min-h-[260px] overflow-hidden sm:min-h-[300px]">
        <img src={heroBaba} alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a0a0c]/85 via-[#2a0a0c]/55 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[260px] max-w-7xl flex-col justify-center px-4 py-12 sm:min-h-[300px] sm:px-6 lg:px-8">
          <p className="text-sm text-[#e8c96a]">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-1.5">›</span>
            <Link to="/history" className="hover:text-white">
              History
            </Link>
            <span className="mx-1.5">›</span>
            <span>{page.title}</span>
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{page.title}</h1>
          <p className="mt-3 max-w-xl text-sm text-white/85">{page.desc}</p>
        </div>
      </section>

      <section className="bg-[#FDFBF2] py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm leading-relaxed text-[#3b1f0f]/85 sm:text-base">{page.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/history"
              className="rounded-md border border-[#5a0e14] px-5 py-2.5 text-sm font-semibold text-[#5a0e14]"
            >
              ← All History
            </Link>
            <Link
              to="/teachings"
              className="rounded-md bg-[#5a0e14] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Read Teachings
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HistoryPage
