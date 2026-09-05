import { Link } from "react-router-dom"
import {
  Brackets,
  CertList,
  Cross,
  ProjectCard,
  SectionLabel,
  SiteShell,
  WinCard,
} from "@/components/ui"
import {
  ACCENT,
  CERTS,
  EXPERIENCE,
  PROJECTS,
  STACK,
  STATS,
  WINS,
} from "@/data"
import { asset } from "@/asset"

export default function Home() {
  return (
    <SiteShell>
      {/* ---------------------------------------------------------- hero */}
      <section id="about" className="relative scroll-mt-28">
        <div
          className="pointer-events-none absolute -left-6 bottom-8 z-10 hidden h-16 w-32 rounded-full border-2 border-ink bg-g-green-soft sm:block"
          aria-hidden="true"
        />

        <div className="relative rounded-[2.5rem] border-2 border-ink bg-surface p-6 chunk-shadow-lg sm:p-12">
          <Cross
            className="pointer-events-none absolute -right-4 -top-4 z-30 h-14 w-14 rotate-12 sm:-right-5 sm:-top-5 sm:h-20 sm:w-20"
            color="#ea4335"
          />

          <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-g-blue-soft px-3 py-1 font-mono text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-g-green" />
            Open to new roles
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            Hi, I&apos;m Karl Lacap.
            <br />I&apos;m an aspiring{" "}
            <span className="text-g-blue">DevOps</span> &amp;{" "}
            <span className="text-g-red">Cloud</span> engineer.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            I build modern web apps and ship them with CI/CD, containers, and
            AWS. These days I&apos;m focused on reliable cloud infrastructure —
            turning rough ideas into systems people can actually depend on.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="rounded-full border-2 border-ink bg-ink px-5 py-2.5 font-semibold text-paper transition hover:-translate-y-0.5"
            >
              View projects
            </Link>
            <a
              href={asset("Karl_Bastian_C_Lacap_CV.pdf")}
              download="Karl_Bastian_C_Lacap_CV.pdf"
              className="rounded-full border-2 border-ink bg-surface px-5 py-2.5 font-semibold transition hover:-translate-y-0.5 hover:bg-paper"
            >
              Download CV
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.v}
                className={`rounded-2xl border-2 border-ink bg-paper px-4 py-3${
                  i === 0 ? " relative z-20" : ""
                }`}
              >
                <div className="font-display text-xl font-extrabold sm:text-2xl">
                  {s.k}
                </div>
                <div className="text-xs text-muted">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- experience */}
      <section id="experience" className="mt-24 scroll-mt-28">
        <SectionLabel n="01" accent="blue">
          Experience
        </SectionLabel>
        <div className="flex flex-col gap-5">
          {EXPERIENCE.map((job) => (
            <article
              key={job.role + job.org}
              className="rounded-[2rem] border-2 border-ink bg-surface p-6 chunk-shadow sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span
                    className={`rounded-full border-2 border-ink px-3 py-1 font-mono text-xs ${ACCENT[job.accent].soft}`}
                  >
                    {job.org}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold sm:text-2xl">
                    {job.role}
                  </h3>
                </div>
                <div className="text-right font-mono text-sm text-faint">
                  <div>{job.when}</div>
                  {job.where ? <div>{job.where}</div> : null}
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${ACCENT[job.accent].dot}`}
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------ projects */}
      <section id="projects" className="mt-24 scroll-mt-28">
        <SectionLabel
          n="02"
          accent="red"
          action={
            <Link
              to="/projects"
              className="font-mono text-xs tracking-widest text-faint transition hover:text-ink"
            >
              ALL PROJECTS →
            </Link>
          }
        >
          Selected projects
        </SectionLabel>
        <div className="grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------- stack */}
      <section id="stack" className="relative mt-24 scroll-mt-28">
        <Cross
          className="pointer-events-none absolute -left-3 -top-6 h-12 w-12 -rotate-12"
          color="#4285f4"
        />
        <SectionLabel n="03" accent="green">
          Tech stack
        </SectionLabel>
        <div className="grid gap-5 sm:grid-cols-2">
          {STACK.map((g) => (
            <div
              key={g.group}
              className="rounded-[2rem] border-2 border-ink bg-surface p-6 chunk-shadow"
            >
              <div className="mb-4 flex items-center gap-2">
                <span
                  className={`h-3 w-3 rounded-full ${ACCENT[g.accent].dot} ring-2 ring-ink`}
                />
                <h3 className="font-display text-lg font-bold">{g.group}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border-2 border-ink bg-paper px-3.5 py-1.5 text-sm font-medium transition hover:bg-surface"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------- certifications */}
      <section id="certs" className="mt-24 scroll-mt-28">
        <SectionLabel
          n="04"
          accent="yellow"
          action={
            <Link
              to="/certifications"
              className="font-mono text-xs tracking-widest text-faint transition hover:text-ink"
            >
              ALL CERTIFICATIONS →
            </Link>
          }
        >
          Certifications
        </SectionLabel>
        <CertList items={CERTS.slice(0, 3)} />
      </section>

      {/* ---------------------------------------------------- achievements */}
      <section id="wins" className="relative mt-24 scroll-mt-28">
        <SectionLabel
          n="05"
          accent="red"
          action={
            <Link
              to="/achievements"
              className="font-mono text-xs tracking-widest text-faint transition hover:text-ink"
            >
              ALL ACHIEVEMENTS →
            </Link>
          }
        >
          Achievements
        </SectionLabel>
        <div className="grid gap-5 sm:grid-cols-2">
          {WINS.slice(0, 2).map((w) => (
            <WinCard key={w.label} w={w} />
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------- contact */}
      <section id="contact" className="mt-24 scroll-mt-28">
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-[#0f0f0f] bg-[#0f0f0f] p-8 text-[#f1f3f4] chunk-shadow-lg sm:p-14">
          <Cross
            className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rotate-12 opacity-90"
            color="#fbbc04"
          />
          <h2 className="max-w-xl font-display text-3xl font-extrabold sm:text-5xl">
            Let&apos;s build something{" "}
            <span className="text-g-yellow">worth shipping.</span>
          </h2>
          <p className="mt-4 max-w-md text-[#f1f3f4]/70">
            Open to roles in software engineering, QA automation, and cloud.
            Reach out anytime.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:bastianlacap55@gmail.com"
              className="rounded-full border-2 border-[#f1f3f4] bg-g-yellow px-5 py-2.5 font-semibold text-[#0f0f0f] transition hover:-translate-y-0.5"
            >
              bastianlacap55@gmail.com
            </a>
            <a
              href="https://github.com/Dumgrammer"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[#f1f3f4] px-5 py-2.5 font-semibold transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/karl-bastian-lacap"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[#f1f3f4] px-5 py-2.5 font-semibold transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              href={asset("Karl_Bastian_C_Lacap_CV.pdf")}
              download="Karl_Bastian_C_Lacap_CV.pdf"
              className="rounded-full border-2 border-[#f1f3f4] px-5 py-2.5 font-semibold transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Download CV
            </a>
          </div>
        </div>
        <p className="mt-8 text-center font-mono text-xs text-faint">
          <Brackets>
            <span>designed &amp; built by Karl Lacap — 2026</span>
          </Brackets>
        </p>
      </section>
    </SiteShell>
  )
}
