import { Link, useParams } from 'react-router-dom'
import { sevaList, serviceCards } from '../components/SevaServicesMegaMenu'
import heroBaba from '../assets/hero-baba.png'

const allItems = [...sevaList, ...serviceCards]

function SevaServicePage() {
  const { slug } = useParams()
  const item = allItems.find((i) => i.to === `/seva/${slug}`) || {
    title: 'Seva & Services',
    desc: 'Serve with love and devotion in Baba’s mission.',
    icon: '🙏',
  }

  return (
    <div className="w-full font-serif">
      <section className="relative min-h-[280px] overflow-hidden sm:min-h-[320px]">
        <img src={heroBaba} alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a0a0c]/85 via-[#2a0a0c]/55 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[280px] max-w-7xl flex-col justify-center px-4 py-12 sm:min-h-[320px] sm:px-6 lg:px-8">
          <p className="text-sm text-[#e8c96a]">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-1.5">›</span>
            <span>Seva & Services</span>
            <span className="mx-1.5">›</span>
            <span>{item.title}</span>
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{item.title}</h1>
          <p className="mt-3 max-w-xl text-sm text-white/85">{item.desc}</p>
        </div>
      </section>

      <section className="bg-[#FCF8F2] py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm leading-relaxed text-[#3b1f0f]/80">
            This seva page is ready for detailed content. Meanwhile, you can register as a volunteer or contact
            the Trust to take part in Baba&apos;s mission of selfless service.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/about/volunteer"
              className="rounded-md bg-[#5a0e14] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Become a Volunteer
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-[#5a0e14] px-5 py-2.5 text-sm font-semibold text-[#5a0e14]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SevaServicePage
