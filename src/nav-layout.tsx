import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react"

export type NavLayout = "side" | "top"

type NavLayoutContextValue = {
  layout: NavLayout
  setLayout: (layout: NavLayout) => void
  toggleLayout: () => void
}

const STORAGE_KEY = "karl-nav-layout"
const NavLayoutContext = createContext<NavLayoutContextValue | null>(null)

export function NavLayoutProvider({ children }: { children: ReactNode }) {
  const [layout, setLayoutState] = useState<NavLayout>(() => {
    if (typeof window === "undefined") return "side"
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === "top" || stored === "side" ? stored : "side"
  })

  const setLayout = useCallback((next: NavLayout) => {
    setLayoutState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const toggleLayout = useCallback(() => {
    setLayoutState((prev) => {
      const next = prev === "side" ? "top" : "side"
      localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  return (
    <NavLayoutContext.Provider value={{ layout, setLayout, toggleLayout }}>
      {children}
    </NavLayoutContext.Provider>
  )
}

export function useNavLayout() {
  const ctx = useContext(NavLayoutContext)
  if (!ctx) throw new Error("useNavLayout must be used within NavLayoutProvider")
  return ctx
}
