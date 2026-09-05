import { CertGallery, PageHeader, SiteShell } from "@/components/ui"
import { CERTS } from "@/data"

export default function CertificationsPage() {
  return (
    <SiteShell>
      <PageHeader kicker="04" title="All certifications" accent="yellow" />
      <p className="mb-10 max-w-2xl text-muted">
        AWS, Cisco Networking Academy, and DICT Python credentials — click any
        card to open the full certificate.
      </p>
      <CertGallery items={CERTS} />
    </SiteShell>
  )
}
