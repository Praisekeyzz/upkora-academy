import { LegalPageLayout } from "@/components/layout/legal-page-layout"
import { LegalSections } from "@/components/layout/legal-sections"
import { termsSections, termsLastUpdated } from "@/lib/data/legal"

const sections = termsSections.map(({ id, title }) => ({ id, title }))

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Terms & Conditions" },
]

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      lastUpdated={termsLastUpdated}
      sections={sections}
      breadcrumbItems={breadcrumbItems}
    >
      <LegalSections sections={termsSections} />
    </LegalPageLayout>
  )
}
