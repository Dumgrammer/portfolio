/** Prefix public paths with Vite's base (e.g. `/Portfolio/` on GitHub Pages). */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || "/"
  const clean = path.replace(/^\//, "")
  return `${base}${clean}`
}
