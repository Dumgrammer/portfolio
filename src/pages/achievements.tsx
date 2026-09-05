import {
  AchievementGallery,
  PageHeader,
  SiteShell,
  WinCard,
} from "@/components/ui"
import { ACHIEVEMENT_PHOTOS, WINS } from "@/data"

export default function AchievementsPage() {
  return (
    <SiteShell>
      <PageHeader kicker="05" title="All achievements" accent="red" />
      <p className="mb-10 max-w-2xl text-muted">
        Competition placements, academic honors, leadership, and moments from
        the road — click any photo to open it full size.
      </p>

      <div className="mb-12 grid gap-5 sm:grid-cols-2">
        {WINS.map((w) => (
          <WinCard key={w.label} w={w} />
        ))}
      </div>

      <h2 className="mb-6 font-display text-2xl font-bold">Gallery</h2>
      <AchievementGallery items={ACHIEVEMENT_PHOTOS} />
    </SiteShell>
  )
}
