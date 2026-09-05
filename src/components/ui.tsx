import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { PlayfulBackground } from "@/components/playful-background"
import {
  ACCENT,
  NAV_PAGES,
  NAV_SECTIONS,
  type Accent,
} from "@/data"
import { useTheme, type ThemeMode } from "@/theme"
import { useNavLayout } from "@/nav-layout"
import { asset } from "@/asset"

export function Cross({
  className = "",
  color,
}: {
  className?: string
  color: string
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        d="M38 6h24v32h32v24H62v32H38V62H6V38h32z"
        fill={color}
        stroke="var(--ink)"
        strokeWidth="6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Brackets({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="font-mono text-g-blue">{"{"}</span>
      {children}
      <span className="font-mono text-g-green">{"}"}</span>
    </span>
  )
}

export function SectionLabel({
  n,
  children,
  accent,
  action,
}: {
  n: string
  children: React.ReactNode
  accent: Accent
  action?: React.ReactNode
}) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <span
          className={`h-3 w-3 rounded-full ${ACCENT[accent].dot} ring-2 ring-ink`}
        />
        <span className="font-mono text-xs tracking-widest text-faint">
          {n}
        </span>
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          {children}
        </h2>
      </div>
      {action}
    </div>
  )
}

export function PageHeader({
  kicker,
  title,
  accent,
}: {
  kicker: string
  title: string
  accent: Accent
}) {
  return (
    <div className="mb-10">
      <Link
        to="/"
        className="mb-6 inline-flex font-mono text-xs tracking-widest text-faint transition hover:text-ink"
      >
        ← BACK HOME
      </Link>
      <div className="flex items-center gap-3">
        <span
          className={`h-3 w-3 rounded-full ${ACCENT[accent].dot} ring-2 ring-ink`}
        />
        <span className="font-mono text-xs tracking-widest text-faint">
          {kicker}
        </span>
      </div>
      <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
        {title}
      </h1>
    </div>
  )
}

function ThemeToggle() {
  const { mode, setMode } = useTheme()
  const options: { id: ThemeMode; label: string; icon: React.ReactNode }[] = [
    {
      id: "system",
      label: "System",
      icon: (
        <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "light",
      label: "Light",
      icon: (
        <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "dark",
      label: "Dark",
      icon: (
        <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5z" strokeLinejoin="round" />
        </svg>
      ),
    },
  ]

  return (
    <div
      className="flex h-9 w-full items-center gap-0.5 rounded-full border border-sidebar-border bg-paper p-0.5"
      role="group"
      aria-label="Color theme"
    >
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          title={opt.label}
          aria-label={opt.label}
          aria-pressed={mode === opt.id}
          onClick={() => setMode(opt.id)}
          className={`flex h-8 flex-1 items-center justify-center rounded-full p-1.5 transition ${
            mode === opt.id
              ? "bg-ink text-paper"
              : "text-faint hover:text-ink"
          }`}
        >
          <span className="h-4 w-4">{opt.icon}</span>
        </button>
      ))}
    </div>
  )
}

function LayoutToggle({ className = "" }: { className?: string }) {
  const { layout, setLayout } = useNavLayout()

  return (
    <div
      className={`flex h-9 w-full items-center gap-0.5 rounded-full border border-sidebar-border bg-paper p-0.5 ${className}`}
      role="group"
      aria-label="Navigation layout"
    >
      <button
        type="button"
        title="Side navigation"
        aria-label="Side navigation"
        aria-pressed={layout === "side"}
        onClick={() => setLayout("side")}
        className={`flex h-8 flex-1 items-center justify-center rounded-full transition ${
          layout === "side" ? "bg-ink text-paper" : "text-faint hover:text-ink"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M9 4v16" />
        </svg>
      </button>
      <button
        type="button"
        title="Top navigation"
        aria-label="Top navigation"
        aria-pressed={layout === "top"}
        onClick={() => setLayout("top")}
        className={`flex h-8 flex-1 items-center justify-center rounded-full transition ${
          layout === "top" ? "bg-ink text-paper" : "text-faint hover:text-ink"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18" />
        </svg>
      </button>
    </div>
  )
}

function NavLinkItem({
  to,
  label,
  active,
  onNavigate,
}: {
  to: string
  label: string
  active: boolean
  onNavigate?: () => void
}) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      className={`group flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[0.9375rem] transition ${
        active
          ? "font-medium text-g-blue"
          : "text-muted hover:bg-nav-hover hover:text-ink"
      }`}
    >
      <span
        className={`font-mono text-xs transition ${
          active ? "opacity-100" : "opacity-0 group-hover:opacity-40"
        }`}
      >
        →
      </span>
      {label}
    </Link>
  )
}

function SidebarBody({ onNavigate }: { onNavigate?: () => void }) {
  const { pathname, hash } = useLocation()

  return (
    <div className="flex h-full flex-col">
      <Link
        to="/"
        onClick={onNavigate}
        className="mb-6 font-display text-base font-extrabold tracking-tight"
      >
        <Brackets>
          <span>karl.lacap</span>
        </Brackets>
      </Link>

      <div className="flex flex-col gap-6">
        <div>
          <div className="mb-2 px-2.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-faint">
            On this site
          </div>
          <ul className="space-y-0.5">
            {NAV_SECTIONS.map((item) => (
              <li key={item.id}>
                <NavLinkItem
                  to={item.to}
                  label={item.label}
                  active={pathname === "/" && hash === `#${item.id}`}
                  onNavigate={onNavigate}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-sidebar-border pt-5">
          <div className="mb-2 px-2.5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-faint">
            Explore
          </div>
          <ul className="space-y-0.5">
            {NAV_PAGES.map((item) => (
              <li key={item.id}>
                <NavLinkItem
                  to={item.to}
                  label={item.label}
                  active={pathname === item.to}
                  onNavigate={onNavigate}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto space-y-3 border-t border-sidebar-border pt-5">
        <div className="space-y-1.5">
          <div className="px-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-faint">
            Theme
          </div>
          <ThemeToggle />
        </div>
        <div className="space-y-1.5">
          <div className="px-1 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-faint">
            Layout
          </div>
          <LayoutToggle />
        </div>
        <div className="space-y-1.5 px-1 pt-2">
          <p className="text-xs leading-relaxed text-faint">
            For work, collabs &amp; everything else
          </p>
          <a
            href="mailto:bastianlacap55@gmail.com"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-ink transition hover:text-g-blue"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 7 9-7" />
            </svg>
            bastianlacap55@gmail.com
          </a>
        </div>
        <a
          href={asset("Karl_Bastian_C_Lacap_CV.pdf")}
          download="Karl_Bastian_C_Lacap_CV.pdf"
          className="inline-flex items-center gap-1 px-1 font-mono text-xs text-muted transition hover:text-ink"
        >
          Download CV ↗
        </a>
      </div>
    </div>
  )
}

function TopBarNav() {
  const { pathname, hash } = useLocation()
  const [open, setOpen] = useState(false)
  const links = [...NAV_SECTIONS, ...NAV_PAGES]

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <nav className="relative z-50 flex w-full max-w-5xl items-center justify-between gap-2 rounded-full border-2 border-ink bg-surface/90 p-1.5 pl-4 shadow-[0_4px_0_0_var(--chunk-shadow)] backdrop-blur">
          <Link to="/" className="shrink-0 font-display text-lg font-extrabold">
            <Brackets>
              <span>karl.lacap</span>
            </Brackets>
          </Link>
          <ul className="hidden items-center gap-0.5 xl:flex">
            {links.map((item) => {
              const active = item.to.startsWith("/#")
                ? pathname === "/" && hash === `#${item.id}`
                : pathname === item.to
              return (
                <li key={item.id}>
                  <Link
                    to={item.to}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                      active ? "bg-ink text-paper" : "hover:bg-paper"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center gap-1.5">
            <div className="hidden w-[5.5rem] sm:block">
              <ThemeToggle />
            </div>
            <div className="hidden w-[4.5rem] sm:block">
              <LayoutToggle />
            </div>
            <Link
              to="/#contact"
              className="hidden rounded-full border-2 border-ink bg-g-yellow px-4 py-1.5 text-sm font-semibold text-[#0f0f0f] transition hover:-translate-y-0.5 sm:inline-flex"
            >
              Let&apos;s talk
            </Link>
            <button
              type="button"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink xl:hidden"
            >
              {open ? (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-paper/95 px-4 pb-8 pt-24 backdrop-blur xl:hidden">
          <ul className="mx-auto flex max-w-md flex-col gap-1">
            {links.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-lg font-medium hover:bg-surface"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:hidden">
            <ThemeToggle />
            <LayoutToggle />
            <Link
              to="/#contact"
              onClick={() => setOpen(false)}
              className="rounded-full border-2 border-ink bg-g-yellow px-4 py-2.5 text-center text-sm font-semibold text-[#0f0f0f]"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

function SideNav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-56 border-r border-sidebar-border bg-sidebar/95 px-4 py-6 backdrop-blur lg:flex lg:flex-col">
        <SidebarBody />
      </aside>

      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-sidebar-border bg-sidebar/90 px-4 py-3 backdrop-blur lg:hidden">
        <Link to="/" className="font-display text-base font-extrabold">
          <Brackets>
            <span>karl.lacap</span>
          </Brackets>
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-28">
            <ThemeToggle />
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-sidebar-border text-ink"
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-ink/40"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 flex w-[min(18rem,88vw)] flex-col border-r border-sidebar-border bg-sidebar px-4 py-6 pt-16 shadow-xl">
            <SidebarBody onNavigate={() => setOpen(false)} />
          </aside>
        </div>
      )}
    </>
  )
}

export function SiteNav() {
  const { layout } = useNavLayout()
  return layout === "top" ? <TopBarNav /> : <SideNav />
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { layout } = useNavLayout()
  const isSide = layout === "side"

  return (
    <div className="relative min-h-full font-body text-ink">
      <PlayfulBackground />
      <SiteNav />
      <main
        className={
          isSide
            ? "relative z-10 mx-auto max-w-5xl px-4 pb-24 pt-20 lg:ml-56 lg:mr-0 lg:w-[calc(100%-14rem)] lg:max-w-none lg:px-8 lg:pt-10"
            : "relative z-10 mx-auto max-w-5xl px-4 pb-24 pt-28 sm:pt-32"
        }
      >
        <div className={isSide ? "mx-auto w-full max-w-5xl" : undefined}>
          {children}
        </div>
      </main>
    </div>
  )
}

export function ProjectCard({
  p,
}: {
  p: (typeof import("@/data").PROJECTS)[number]
}) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-[2rem] border-2 border-ink bg-surface p-6 chunk-shadow transition hover:-translate-y-1 chunk-shadow-hover"
    >
      <div className="mb-4 flex items-start justify-between gap-2">
        <span
          className={`rounded-full border-2 border-ink px-3 py-1 font-mono text-xs ${ACCENT[p.accent].soft}`}
        >
          {p.tag}
        </span>
        <span
          className={`inline-flex items-center gap-1 font-mono text-xs font-semibold tracking-wide ${ACCENT[p.accent].text}`}
        >
          View project
          <span className="transition group-hover:translate-x-0.5">→</span>
        </span>
      </div>
      <h3 className="font-display text-2xl font-bold">{p.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.blurb}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-full bg-paper px-2.5 py-1 font-mono text-xs text-muted"
          >
            {s}
          </span>
        ))}
      </div>
    </a>
  )
}

export function CertList({
  items,
}: {
  items: (typeof import("@/data").CERTS)[number][]
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] border-2 border-ink bg-surface chunk-shadow">
      {items.map((c, i) => (
        <div
          key={c.name}
          className={`flex items-center gap-4 px-6 py-5 transition hover:bg-paper ${
            i !== 0 ? "border-t-2 border-ink" : ""
          }`}
        >
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-ink font-display text-[0.6rem] font-extrabold ${ACCENT[c.accent].soft}`}
          >
            {c.badge}
          </span>
          <div className="min-w-0 flex-1">
            <div className="font-display text-base font-bold sm:text-lg">
              {c.name}
            </div>
            <div className="text-sm text-muted">{c.issuer}</div>
          </div>
          <span
            className={`h-3 w-3 shrink-0 rounded-full ${ACCENT[c.accent].dot} ring-2 ring-ink`}
          />
        </div>
      ))}
    </div>
  )
}

export function CertGallery({
  items,
}: {
  items: (typeof import("@/data").CERTS)[number][]
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((c) => (
        <a
          key={c.name}
          href={c.image}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-card group overflow-hidden rounded-[2rem] border-2 border-ink bg-surface chunk-shadow transition hover:-translate-y-1 chunk-shadow-hover"
        >
          <div className="cert-card__media border-b-2 border-ink bg-paper">
            <img src={c.image} alt={c.name} />
          </div>
          <div className="cert-card__meta">
            <div className="min-w-0 flex-1">
              <div className="cert-card__title font-display text-lg font-bold">
                {c.name}
              </div>
              <div className="cert-card__issuer mt-1 truncate text-sm text-muted">
                {c.issuer}
              </div>
            </div>
            <span
              className={`shrink-0 rounded-full border-2 border-ink px-2.5 py-1 font-mono text-[0.65rem] font-semibold ${ACCENT[c.accent].soft}`}
            >
              {c.badge}
            </span>
          </div>
        </a>
      ))}
    </div>
  )
}

export function WinCard({
  w,
}: {
  w: (typeof import("@/data").WINS)[number]
}) {
  return (
    <div className="rounded-[2rem] border-2 border-ink bg-surface p-6 chunk-shadow transition hover:-translate-y-1">
      <div
        className={`font-display text-3xl font-extrabold sm:text-4xl ${ACCENT[w.accent].text}`}
      >
        {w.stat}
      </div>
      <div className="mt-3 font-semibold leading-snug">{w.label}</div>
      <div className="mt-1 text-sm text-muted">{w.note}</div>
    </div>
  )
}

export function AchievementGallery({
  items,
}: {
  items: (typeof import("@/data").ACHIEVEMENT_PHOTOS)[number][]
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((a) => (
        <a
          key={a.image}
          href={a.image}
          target="_blank"
          rel="noopener noreferrer"
          className="ach-card group overflow-hidden rounded-[2rem] border-2 border-ink bg-surface chunk-shadow transition hover:-translate-y-1 chunk-shadow-hover"
        >
          <div className="ach-card__media border-b-2 border-ink bg-paper">
            <img src={a.image} alt={a.title} />
          </div>
          <div className="ach-card__meta">
            <div className="min-w-0 flex-1">
              <div className="ach-card__title font-display text-lg font-bold">
                {a.title}
              </div>
              <div className="mt-1 truncate text-sm text-muted">{a.note}</div>
            </div>
            <span
              className={`h-3 w-3 shrink-0 rounded-full ${ACCENT[a.accent].dot} ring-2 ring-ink`}
            />
          </div>
        </a>
      ))}
    </div>
  )
}
