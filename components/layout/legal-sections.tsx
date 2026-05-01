import type { LegalSection } from "@/lib/data/legal"

interface LegalSectionsProps {
  sections: LegalSection[]
}

export function LegalSections({ sections }: LegalSectionsProps) {
  return (
    <>
      {sections.map((section, idx) => (
        <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
          <h2 className="font-bold text-[24px] md:text-[32px] leading-[110%] text-heading mb-4">
            {idx + 1}. {section.title}
          </h2>
          {section.intro && (
            <p className="text-[16px] leading-[170%] text-body mb-4">{section.intro}</p>
          )}
          {section.body && (
            <p className="text-[16px] leading-[170%] text-body whitespace-pre-line">{section.body}</p>
          )}
          {section.list && (
            <ul className="text-[16px] leading-[170%] text-body space-y-2 list-disc pl-6 mt-2">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
          {section.outro && (
            <p className="text-[16px] leading-[170%] text-body mt-4">{section.outro}</p>
          )}
        </section>
      ))}
    </>
  )
}
