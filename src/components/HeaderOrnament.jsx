function HeaderOrnament({ flip = false }) {
  const stroke = '#e8b04a'
  const strokeLight = '#f0c860'
  const strokeDark = '#c9a227'

  return (
    <svg
      className={`pointer-events-none absolute top-0 h-full w-[min(42vw,220px)] min-w-[140px] opacity-90 ${
        flip ? 'right-0 scale-x-[-1]' : 'left-0'
      }`}
      viewBox="0 0 200 110"
      preserveAspectRatio="xMinYMin meet"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 0 H120" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M0 0 V90" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />

      <path
        d="M6 6 C30 6 50 14 62 32 C70 44 68 58 56 68 C44 76 28 78 14 72 C8 68 4 58 6 46 C8 34 16 24 28 18"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M10 10 C28 10 44 16 52 30 C58 40 56 52 48 60 C40 66 28 68 18 64 C12 60 10 50 12 40 C14 30 20 22 30 18"
        stroke={strokeLight}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M18 18 C32 18 42 24 46 36 C48 44 44 52 36 56 C28 58 20 54 16 46 C14 38 16 28 22 22"
        stroke={strokeDark}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M24 24 C34 24 40 28 42 36 C43 42 40 48 34 50 C28 51 22 48 20 42 C19 36 21 30 26 26"
        stroke={strokeLight}
        strokeWidth="0.7"
        strokeLinecap="round"
      />

      <path
        d="M72 4 C78 8 80 14 76 18 C72 20 68 16 70 10 C71 7 72 5 72 4"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M92 4 C98 8 100 14 96 18 C92 20 88 16 90 10"
        stroke={strokeLight}
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <path
        d="M108 6 C112 10 112 16 108 18 C104 19 102 14 104 10"
        stroke={stroke}
        strokeWidth="0.6"
        strokeLinecap="round"
      />

      <path
        d="M4 72 C8 78 14 80 18 76 C20 72 16 68 10 70 C7 71 5 72 4 72"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M4 52 C8 58 14 60 18 56 C20 52 16 48 10 50"
        stroke={strokeLight}
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <path
        d="M6 36 C10 42 16 44 20 40 C22 36 18 32 12 34"
        stroke={stroke}
        strokeWidth="0.6"
        strokeLinecap="round"
      />

      <circle cx="58" cy="14" r="5" stroke={stroke} strokeWidth="0.8" />
      <circle cx="58" cy="14" r="2" stroke={strokeLight} strokeWidth="0.5" />
      <line x1="56" y1="14" x2="60" y2="14" stroke={strokeLight} strokeWidth="0.4" />
      <line x1="58" y1="12" x2="58" y2="16" stroke={strokeLight} strokeWidth="0.4" />

      <circle cx="14" cy="58" r="5" stroke={stroke} strokeWidth="0.8" />
      <circle cx="14" cy="58" r="2" stroke={strokeLight} strokeWidth="0.5" />
      <line x1="12" y1="58" x2="16" y2="58" stroke={strokeLight} strokeWidth="0.4" />
      <line x1="14" y1="56" x2="14" y2="60" stroke={strokeLight} strokeWidth="0.4" />

      <circle cx="38" cy="38" r="4" stroke={strokeDark} strokeWidth="0.7" />

      <path
        d="M64 20 C72 16 82 20 86 30 C88 36 84 42 78 44"
        stroke={stroke}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M80 28 C86 26 92 30 94 36"
        stroke={strokeLight}
        strokeWidth="0.6"
        strokeLinecap="round"
      />
      <path
        d="M20 64 C16 72 20 82 30 86 C36 88 42 84 44 78"
        stroke={stroke}
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M28 80 C26 86 30 92 36 94"
        stroke={strokeLight}
        strokeWidth="0.6"
        strokeLinecap="round"
      />

      <path
        d="M48 8 C54 4 62 8 64 16 C65 20 62 24 58 24"
        stroke={strokeDark}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M78 8 C84 5 90 10 90 16"
        stroke={stroke}
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <path
        d="M98 10 C102 8 106 12 106 16"
        stroke={strokeLight}
        strokeWidth="0.6"
        strokeLinecap="round"
      />

      <path
        d="M8 48 C4 54 8 62 16 64 C20 65 24 62 24 58"
        stroke={strokeDark}
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M8 78 C5 84 10 90 16 90"
        stroke={stroke}
        strokeWidth="0.7"
        strokeLinecap="round"
      />

      <path
        d="M30 30 C34 26 40 28 40 34 C40 38 36 40 32 38 C28 36 28 32 30 30"
        stroke={strokeLight}
        strokeWidth="0.6"
        strokeLinecap="round"
      />
      <path
        d="M26 42 C30 38 36 40 36 46 C36 50 32 52 28 50"
        stroke={stroke}
        strokeWidth="0.5"
        strokeLinecap="round"
      />

      <path d="M42 12 L44 10 M44 14 L46 12" stroke={strokeLight} strokeWidth="0.5" strokeLinecap="round" />
      <path d="M12 42 L10 44 M14 44 L12 46" stroke={strokeLight} strokeWidth="0.5" strokeLinecap="round" />
      <path d="M54 30 L56 28 M56 32 L58 30" stroke={strokeLight} strokeWidth="0.4" strokeLinecap="round" />
      <path d="M30 54 L28 56 M32 56 L30 58" stroke={strokeLight} strokeWidth="0.4" strokeLinecap="round" />

      <path
        d="M100 14 C106 10 114 14 118 22 C120 28 116 34 110 34"
        stroke={strokeDark}
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <path
        d="M14 100 C10 106 14 114 22 118 C28 120 34 116 34 110"
        stroke={strokeDark}
        strokeWidth="0.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default HeaderOrnament
