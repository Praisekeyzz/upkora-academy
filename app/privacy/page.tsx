import { LegalPageLayout } from "@/components/layout/legal-page-layout"
import { LegalSections } from "@/components/layout/legal-sections"
import { privacySections, privacyLastUpdated } from "@/lib/data/legal"

const sections = privacySections.map(({ id, title }) => ({ id, title }))

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy" },
]

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated={privacyLastUpdated}
      sections={sections}
      breadcrumbItems={breadcrumbItems}
    >
      <LegalSections sections={privacySections} />
    </LegalPageLayout>
  )
}
