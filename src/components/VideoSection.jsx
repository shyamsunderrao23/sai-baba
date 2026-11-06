import { useState, useEffect, useRef } from 'react'
import video1 from '../assets/vidoe1.mp4'
import video2 from '../assets/vidoe2.mp4'
import video3 from '../assets/video3.mp4'
import video4 from '../assets/video4.mp4'

const initialVideos = [
  {
    id: 'vid-1',
    title: 'Sri Sadguru Shiridi Kshetram Darshan',
    subtitle: 'Daily Alankaram & Harathi',
    src: video1,
    tag: 'Daily Darshan',
  },
  {
    id: 'vid-2',
    title: 'Baba Divya Mangala Harathi',
    subtitle: 'Sacred Temple Harathi',
    src: video2,
    tag: 'Harathi Seva',
  },
  {
    id: 'vid-3',
    title: 'Special Archana & Flower Seva',
    subtitle: 'Sri Shiridi Sai Puja & Darshan',
    src: video3,
    tag: 'Special Archana',
  },
  {
    id: 'vid-4',
    title: 'Evening Dhoop Harathi & Bhajans',
    subtitle: 'Divine Devotional Moments',
    src: video4,
    tag: 'Dhoop Harathi',
  },
]

function SectionFlourish() {
  return (
    <svg viewBox="0 0 48 12" className="h-3 w-10 text-[#B38644]" fill="currentColor" aria-hidden="true">
      <path d="M0 6c6-4 12-4 18 0-6 4-12 4-18 0zm48 0c-6-4-12-4-18 0 6 4 12 4 18 0zM20 6c2-3 4-3 6 0-2 3-4 3-6 0z" />
    </svg>
  )
}

function VideoCard({ video, onPlay, onPause, autoUnmute = true }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return

    // Attempt unmuted autoplay directly
    vid.muted = false
    setIsMuted(false)
    const playPromise = vid.play()

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true)
        })
        .catch(() => {
          // If browser restricts unmuted autoplay without prior user interaction:
          // Start playing muted and automatically unmute on the first user interaction
          vid.muted = true
          setIsMuted(true)
          vid.play().then(() => setIsPlaying(true)).catch(() => {})

          if (autoUnmute) {
            const unmuteOnInteraction = () => {
              if (vid) {
                vid.muted = false
                setIsMuted(false)
                vid.play().catch(() => {})
              }
              window.removeEventListener('click', unmuteOnInteraction)
              window.removeEventListener('touchstart', unmuteOnInteraction)
              window.removeEventListener('keydown', unmuteOnInteraction)
            }

            window.addEventListener('click', unmuteOnInteraction, { once: true })
            window.addEventListener('touchstart', unmuteOnInteraction, { once: true })
            window.addEventListener('keydown', unmuteOnInteraction, { once: true })
          }
        })
    }
  }, [autoUnmute])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  const handlePlay = () => {
    setIsPlaying(true)
    if (onPlay) onPlay()
  }

  const handlePause = () => {
    setIsPlaying(false)
    if (onPause) onPause()
  }

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#dfc083]/50 bg-[#1f0a0d] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a227] hover:shadow-2xl">
      {/* Video Container (aspect 9/16 for portrait mobile video recordings) */}
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={video.src}
          className="h-full w-full object-cover"
          autoPlay
          loop
          playsInline
          preload="auto"
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handlePause}
        />

        {/* Gradient dark overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60 transition-opacity duration-300 group-hover:via-black/10" />

        {/* Top bar with Tag + Mute/Unmute Button */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="rounded-full bg-[#5a0e14]/85 px-3 py-1 text-[0.68rem] font-bold tracking-wider text-[#e8c96a] uppercase backdrop-blur-sm border border-[#e8c96a]/30">
            {video.tag}
          </span>
          <button
            type="button"
            onClick={toggleMute}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-[#e8c96a] backdrop-blur-sm transition hover:bg-[#5a0e14] hover:text-white"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>
        </div>

        {/* Center Play/Pause button */}
        <button
          type="button"
          onClick={togglePlay}
          className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300 ${
            isPlaying ? 'opacity-0 hover:opacity-100 bg-black/20' : 'opacity-100'
          }`}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#e8c96a] bg-[#5a0e14]/80 text-[#e8c96a] shadow-xl backdrop-blur-sm transition-transform duration-200 hover:scale-110 hover:bg-[#7a1520] hover:text-white">
            {isPlaying ? (
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg className="ml-0.5 h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </button>

        {/* Bottom Title & Subtitle */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-left z-10">
          <p className="font-serif text-base font-bold text-white drop-shadow-md line-clamp-1">
            {video.title}
          </p>
          <p className="mt-0.5 text-xs text-[#e8c96a] drop-shadow line-clamp-1">
            {video.subtitle}
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-[0.65rem] text-white/80">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Sri Sadguru Shiridi Kshetram</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function VideoSection({ videos = initialVideos }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [activePlayCount, setActivePlayCount] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  // Track viewport width to calculate items visible per row
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setItemsPerView(4) // 4 videos in each row on desktop
      } else if (width >= 640) {
        setItemsPerView(2) // 2 videos on tablet
      } else {
        setItemsPerView(1) // 1 video on mobile
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  // Activate auto carousel if more than 4 videos (or when videos exceed items visible on mobile/tablet)
  const isCarousel = videos.length > 4 || (videos.length > itemsPerView && itemsPerView < 4)
  const maxIndex = Math.max(0, videos.length - itemsPerView)

  // Keep currentIndex bounded if itemsPerView changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [maxIndex, currentIndex])

  // Auto-carousel timer (every 4 seconds)
  useEffect(() => {
    if (!isCarousel || isHovered || activePlayCount > 0 || maxIndex <= 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isCarousel, isHovered, activePlayCount, maxIndex])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const handleVideoPlay = () => {
    setActivePlayCount((count) => count + 1)
  }

  const handleVideoPause = () => {
    setActivePlayCount((count) => Math.max(0, count - 1))
  }

  return (
    <section className="relative overflow-hidden bg-[#FCFBF7] py-16 sm:py-20 border-t border-[#dfc083]/30" id="videos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-2 mb-10">
          <div className="flex items-center justify-center gap-3">
            <SectionFlourish />
            <span className="text-xs font-bold tracking-[0.25em] text-[#c96f18] uppercase">
              Divine Darshan
            </span>
            <SectionFlourish />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5a0e14] font-display">
            Sacred Darshan & Harathi Videos
          </h2>
          <p className="mx-auto max-w-2xl text-xs sm:text-sm text-[#3b1f0f]/80 leading-relaxed">
            Experience the divine blessings, sacred aartis, and joyful celebrations of Sri Sadguru Shiridi Kshetram.
          </p>
          <div className="pt-2 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#5a0e14]/10 border border-[#dfc083]/50 px-3 py-1 text-[0.72rem] font-medium text-[#5a0e14]">
              <span className="text-[#c96f18]">🔊</span> Autoplay with audio enabled • Tap any video to pause or toggle sound
            </span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#dfc083] to-transparent mx-auto mt-3" />
        </div>

        {/* Content: Carousel or Static 4-Grid */}
        {isCarousel ? (
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Carousel Navigation Buttons */}
            <div className="hidden sm:flex items-center justify-between absolute -top-14 right-0 gap-2 z-10">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B38644] bg-[#FCF8F2] text-[#5a0e14] shadow-sm transition hover:bg-[#5a0e14] hover:text-[#e8c96a]"
                aria-label="Previous videos"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B38644] bg-[#FCF8F2] text-[#5a0e14] shadow-sm transition hover:bg-[#5a0e14] hover:text-[#e8c96a]"
                aria-label="Next videos"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Carousel track */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out -mx-2 sm:-mx-3"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                }}
              >
                {videos.map((vid, idx) => (
                  <div
                    key={vid.id || idx}
                    className="w-full shrink-0 px-2 sm:px-3 sm:w-1/2 lg:w-1/4"
                  >
                    <VideoCard
                      video={vid}
                      onPlay={handleVideoPlay}
                      onPause={handleVideoPause}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile / indicator dots */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="sm:hidden flex h-8 w-8 items-center justify-center rounded-full border border-[#B38644] bg-white text-[#5a0e14]"
                aria-label="Previous"
              >
                ‹
              </button>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === i
                        ? 'w-6 bg-[#5a0e14]'
                        : 'w-2 bg-[#dfc083]/60 hover:bg-[#dfc083]'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="sm:hidden flex h-8 w-8 items-center justify-center rounded-full border border-[#B38644] bg-white text-[#5a0e14]"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>
        ) : (
          /* Grid when 4 or fewer videos (4 per row on desktop) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {videos.map((vid, idx) => (
              <VideoCard
                key={vid.id || idx}
                video={vid}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

