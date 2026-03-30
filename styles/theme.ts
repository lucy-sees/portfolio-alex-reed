// ─── Design Tokens ────────────────────────────────────────────────────────────

export const colors = {
  pageBg:         "#DDDDD8",
  cardBg:         "#ffffff",
  profileCard:    "#8E94F2",
  black:          "#000000",
  darkChip:       "#111111",
  accentPurple:   "#8E94F2",
  accentTeal:     "#A8E6CF",
  accentYellow:   "#FFD384",
  accentDarkPurple: "#8B5CF6",
  borderLight:    "#f0f0f0",
  textMuted:      "#aaa",
} as const;

export const fonts = {
  headline: "'Epilogue', sans-serif",
  body:     "'Manrope', sans-serif",
  icons:    "'Material Symbols Outlined'",
} as const;

export const radii = {
  card:    "2.5rem",
  wrapper: "3rem",
  chip:    "2rem",
  inner:   "1rem",
  sm:      "0.5rem",
} as const;

export const shadows = {
  wrapper: "0 40px 100px rgba(0,0,0,0.18)",
  play:    "0 4px 20px rgba(0,0,0,0.15)",
} as const;

export const transitions = {
  cardSpring: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s",
  color:      "color 0.2s",
  all:        "all 0.2s",
} as const;
