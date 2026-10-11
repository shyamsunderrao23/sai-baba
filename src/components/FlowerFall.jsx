import { useMemo } from 'react'

const PETALS = ['🌸', '🌼', '🏵️', '🌺']

function randBetween(min, max) {
  return Math.random() * (max - min) + min
}

function FlowerFall({ count = 18 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: randBetween(6, 90),
        duration: randBetween(10, 20),
        delay: randBetween(-20, 0),
        size: randBetween(14, 22),
        drift: randBetween(-30, 30),
        spin: randBetween(180, 540),
        emoji: PETALS[Math.floor(Math.random() * PETALS.length)],
      })),
    [count],
  )

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal absolute select-none"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`,
            '--spin': `${p.spin}deg`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  )
}

export default FlowerFall
