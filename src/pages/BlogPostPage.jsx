import { Link, useParams } from 'react-router-dom'
import { blogPosts } from './BlogPage'

function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="bg-[#FDFBF2] px-4 py-24 text-center font-serif">
        <h1 className="text-2xl font-bold text-[#5a0e14]">Post not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-sm font-semibold text-[#B38644]">
          ← Back to Blog
        </Link>
      </div>
    )
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)

  return (
    <div className="w-full font-serif">
      <section className="relative min-h-[280px] overflow-hidden sm:min-h-[360px]">
        <img src={post.img} alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a0a0c]/90 via-[#2a0a0c]/55 to-[#2a0a0c]/30" />
        <div className="relative z-10 mx-auto flex min-h-[280px] max-w-3xl flex-col justify-end px-4 py-10 sm:min-h-[360px] sm:px-6 sm:py-12">
          <p className="text-sm text-[#e8c96a]">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-1.5">›</span>
            <Link to="/blog" className="hover:text-white">
              Blog
            </Link>
            <span className="mx-1.5">›</span>
            <span className="text-white/80">{post.title}</span>
          </p>
          <span className="mt-4 inline-flex w-fit rounded-full bg-[#B38644]/25 px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-[#e8c96a] uppercase">
            {post.category}
          </span>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{post.title}</h1>
          <div className="mt-3 flex flex-wrap gap-3 text-xs text-white/80">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <article className="bg-[#FDFBF2] py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-base leading-relaxed text-[#3b1f0f]/85 sm:text-lg">{post.excerpt}</p>
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-[#3b1f0f]/80 sm:text-base">
            <p>{post.content || post.excerpt}</p>
            <p>
              May Baba’s blessings guide every reader on the path of faith, patience, love and selfless service.
              Om Sai Ram.
            </p>
          </div>
          <Link
            to="/blog"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#5a0e14] hover:text-[#B38644]"
          >
            ← Back to all posts
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-[#e8dfd0] bg-[#FCF8F2] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-xl font-bold text-[#5a0e14]">Related Posts</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className="overflow-hidden rounded-xl border border-[#e8dfd0] bg-white transition hover:shadow-md"
                >
                  <img src={item.img} alt={item.title} className="aspect-[16/10] w-full object-cover" />
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-[#5a0e14]">{item.title}</h3>
                    <p className="mt-1 text-[0.7rem] text-[#6b6b6b]">{item.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default BlogPostPage
