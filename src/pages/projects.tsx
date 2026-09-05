import {
  PageHeader,
  ProjectCard,
  SiteShell,
} from "@/components/ui"
import { PROJECTS } from "@/data"

export default function ProjectsPage() {
  return (
    <SiteShell>
      <PageHeader kicker="02" title="All projects" accent="red" />
      <p className="mb-10 max-w-2xl text-muted">
        Selected builds across cloud SaaS, accounting platforms, attendance
        systems, and PWAs — with live demos and source where available.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </SiteShell>
  )
}
