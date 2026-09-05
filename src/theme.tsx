import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

export type ThemeMode = "light" | "dark" | "system"

type ThemeContextValue = {
  mode: ThemeMode
  resolved: "light" | "dark"
  setMode: (mode: ThemeMode) => void
}

const STORAGE_KEY = "karl-theme"
const ThemeContext = createContext<ThemeContextValue | null>(null)

function getSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function applyTheme(resolved: "light" | "dark") {
  document.documentElement.classList.toggle("dark", resolved === "dark")
  document.documentElement.style.colorScheme = resolved
}

function resolveMode(mode: ThemeMode): "light" | "dark" {
  return mode === "system" ? getSystemTheme() : mode
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/** Light expands from top-right; dark expands from bottom-left. */
function rippleOrigin(next: "light" | "dark") {
  if (next === "light") {
    return { x: window.innerWidth, y: 0 }
  }
  return { x: 0, y: window.innerHeight }
}

function runThemeRipple(next: "light" | "dark", commit: () => void) {
  const doc = document as Document & {
    startViewTransition?: (cb: () => void) => {
      ready: Promise<void>
    }
  }

  if (!doc.startViewTransition || prefersReducedMotion()) {
    commit()
    return
  }

  const { x, y } = rippleOrigin(next)
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  )

  const transition = doc.startViewTransition(commit)

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 640,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        pseudoElement: "::view-transition-new(root)",
      },
    )
  })
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "system"
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null
    return stored === "light" || stored === "dark" || stored === "system"
      ? stored
      : "system"
  })
  const [resolved, setResolved] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light"
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null
    if (stored === "light" || stored === "dark") return stored
    return getSystemTheme()
  })

  useEffect(() => {
    if (mode !== "system") return

    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = () => {
      const sys = getSystemTheme()
      setResolved(sys)
      applyTheme(sys)
    }
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [mode])

  const setMode = useCallback(
    (next: ThemeMode) => {
      const nextResolved = resolveMode(next)

      const commit = () => {
        setModeState(next)
        localStorage.setItem(STORAGE_KEY, next)
        setResolved(nextResolved)
        applyTheme(nextResolved)
      }

      if (nextResolved === resolved) {
        commit()
        return
      }

      runThemeRipple(nextResolved, commit)
    },
    [resolved],
  )

  return (
    <ThemeContext.Provider value={{ mode, resolved, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
