"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { BreadcrumbHero } from "@/components/layout/breadcrumb-hero"

interface Section {
  id: string
  title: string
}

interface BreadcrumbItem {
  label: string
  href?: string
}

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  sections: Section[]
  breadcrumbItems: BreadcrumbItem[]
  children: React.ReactNode
}

export function LegalPageLayout({
  title,
  lastUpdated,
  sections,
  breadcrumbItems,
  children,
}: LegalPageLayoutProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsSidebarOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="w-full min-h-screen bg-surface">
      <BreadcrumbHero
        title={title}
        subtitle={`Last updated on: ${lastUpdated}`}
        items={breadcrumbItems}
      />

      <div className="w-full flex flex-col lg:flex-row">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden flex items-center gap-2 px-4 md:px-6 py-4 text-heading font-semibold text-sm border-b border-[#E5E7E5] bg-surface"
        >
          Table of contents
          <ChevronRight className={`w-4 h-4 transition-transform ${isSidebarOpen ? "rotate-90" : ""}`} />
        </button>

        {isSidebarOpen && (
          <div className="lg:hidden px-4 md:px-6 py-4 border-b border-[#E5E7E5] bg-surface">
            <nav className="space-y-0.5">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left flex items-center justify-between p-2.5 rounded-lg text-sm transition-colors ${
                    activeSection === section.id
                      ? "text-heading font-semibold bg-heading/5"
                      : "text-body hover:text-heading"
                  }`}
                >
                  <span>
                    {index + 1}. {section.title}
                  </span>
                  {activeSection === section.id && (
                    <ChevronRight className="w-4 h-4 text-heading shrink-0" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        )}

        <div className="hidden lg:block w-72 xl:w-80 shrink-0 p-6 lg:p-8 sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto bg-surface border-r border-[#E5E7E5]">
          <h3 className="font-semibold text-base text-heading mb-4">Table of contents</h3>
          <nav className="space-y-0.5">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left flex items-center justify-between p-2.5 rounded-lg text-sm transition-colors ${
                  activeSection === section.id
                    ? "text-heading font-semibold bg-heading/5"
                    : "text-body hover:text-heading"
                }`}
              >
                <span>
                  {index + 1}. {section.title}
                </span>
                {activeSection === section.id && (
                  <ChevronRight className="w-4 h-4 text-heading shrink-0" />
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1 px-4 py-6 md:px-6 md:py-8 lg:p-8 xl:p-10 bg-surface">
          <div className="max-w-4xl">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
