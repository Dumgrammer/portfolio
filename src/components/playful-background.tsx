import type { CSSProperties } from "react"

const COLORS = ["#4285f4", "#ea4335", "#fbbc04", "#34a853"] as const

type Floater = {
  id: string
  kind: "cloud" | "x" | "o" | "triangle" | "square"
  color: string
  top: string
  left: string
  size: number
  duration: number
  delay: number
  drift: number
}

const FLOATERS: Floater[] = [
  { id: "c1", kind: "cloud", color: COLORS[0], top: "8%", left: "6%", size: 72, duration: 22, delay: 0, drift: 18 },
  { id: "c2", kind: "cloud", color: COLORS[2], top: "18%", left: "78%", size: 88, duration: 26, delay: -4, drift: -22 },
  { id: "c3", kind: "cloud", color: COLORS[3], top: "62%", left: "88%", size: 64, duration: 20, delay: -8, drift: 14 },
  { id: "c4", kind: "cloud", color: COLORS[1], top: "72%", left: "4%", size: 56, duration: 24, delay: -2, drift: -16 },
  { id: "x1", kind: "x", color: COLORS[1], top: "12%", left: "48%", size: 36, duration: 16, delay: -5, drift: -14 },
  { id: "x2", kind: "x", color: COLORS[3], top: "55%", left: "18%", size: 32, duration: 17, delay: -9, drift: 16 },
  { id: "x3", kind: "x", color: COLORS[0], top: "88%", left: "42%", size: 28, duration: 15, delay: -1, drift: -10 },
  { id: "o1", kind: "o", color: COLORS[2], top: "35%", left: "58%", size: 40, duration: 19, delay: -7, drift: 15 },
  { id: "o2", kind: "o", color: COLORS[3], top: "8%", left: "28%", size: 34, duration: 23, delay: -11, drift: -12 },
  { id: "o3", kind: "o", color: COLORS[1], top: "68%", left: "52%", size: 38, duration: 18, delay: -4, drift: 11 },
  { id: "t1", kind: "triangle", color: COLORS[0], top: "48%", left: "82%", size: 36, duration: 17, delay: -6, drift: -15 },
  { id: "t2", kind: "triangle", color: COLORS[2], top: "22%", left: "38%", size: 30, duration: 21, delay: -12, drift: 13 },
  { id: "t3", kind: "triangle", color: COLORS[1], top: "82%", left: "22%", size: 34, duration: 19, delay: -3, drift: 17 },
  { id: "s1", kind: "square", color: COLORS[3], top: "40%", left: "30%", size: 28, duration: 18, delay: -8, drift: -11 },
  { id: "s2", kind: "square", color: COLORS[0], top: "14%", left: "90%", size: 26, duration: 20, delay: -2, drift: 14 },
  { id: "s3", kind: "square", color: COLORS[2], top: "90%", left: "60%", size: 32, duration: 16, delay: -9, drift: -13 },
]

function CloudIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 64 40" aria-hidden="true">
      <path
        d="M18 32c-6.6 0-12-4.5-12-10S11.4 12 18 12c1.2-5.5 6.2-9.5 12.1-9.5 5.2 0 9.7 3.1 11.6 7.6 1.1-.4 2.2-.6 3.4-.6 5.5 0 10 4.5 10 10s-4.5 12-10 12H18z"
        fill={color}
        stroke="var(--ink)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function XIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path
        d="M10 10l20 20M30 10L10 30"
        fill="none"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M10 10l20 20M30 10L10 30"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function OIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="12" fill="none" stroke={color} strokeWidth="7" />
      <circle cx="20" cy="20" r="12" fill="none" stroke="var(--ink)" strokeWidth="2.5" />
    </svg>
  )
}

function TriangleIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path
        d="M20 6L34 32H6L20 6z"
        fill={color}
        stroke="var(--ink)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SquareIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <rect
        x="8"
        y="8"
        width="24"
        height="24"
        rx="3"
        fill={color}
        stroke="var(--ink)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Shape({ kind, color }: { kind: Floater["kind"]; color: string }) {
  if (kind === "cloud") return <CloudIcon color={color} />
  if (kind === "x") return <XIcon color={color} />
  if (kind === "o") return <OIcon color={color} />
  if (kind === "triangle") return <TriangleIcon color={color} />
  return <SquareIcon color={color} />
}

export function PlayfulBackground() {
  return (
    <div className="playful-bg" aria-hidden="true">
      {FLOATERS.map((f) => (
        <span
          key={f.id}
          className="playful-bg__item"
          style={
            {
              top: f.top,
              left: f.left,
              width: f.size,
              height: f.size,
              "--dur": `${f.duration}s`,
              "--delay": `${f.delay}s`,
              "--drift": `${f.drift}px`,
            } as CSSProperties
          }
        >
          <Shape kind={f.kind} color={f.color} />
        </span>
      ))}
    </div>
  )
}
