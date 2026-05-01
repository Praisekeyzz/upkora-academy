import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbHeroProps {
  title: string
  subtitle?: string
  items: BreadcrumbItem[]
}

export function BreadcrumbHero({ title, subtitle, items }: BreadcrumbHeroProps) {
  return (
    <section className="relative w-full min-h-[200px] md:min-h-[260px] overflow-hidden bg-gradient-hero-alt">
      <div className="absolute top-[80px] left-[-6px] w-[100px] h-[56px] md:w-[160px] md:h-[90px] hidden sm:block opacity-80">
        <img src="/icons/cloud-left.svg" alt="" className="w-full h-full" />
      </div>
      <div className="absolute top-[90px] right-[10px] w-[100px] h-[56px] md:w-[160px] md:h-[90px] hidden sm:block opacity-80">
        <img src="/icons/cloud-right.svg" alt="" className="w-full h-full" />
      </div>
      <div className="relative page-container pt-28 md:pt-36 pb-8 md:pb-10">
        <nav className="flex items-center gap-1.5 text-sm text-white/90 mb-3 md:mb-4">
          {items.map((item, i) => (
            <span key={item.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="w-4 h-4 opacity-70" />}
              {item.href ? (
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="font-bold text-[28px] md:text-[40px] lg:text-[48px] leading-[1.1] text-heading mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm md:text-base leading-[150%] text-[#325723]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
