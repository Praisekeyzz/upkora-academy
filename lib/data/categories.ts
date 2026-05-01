export interface CategoryItem {
  name: string
  examples: string
  accent: "green" | "yellow" | "blue" | "pink" | "purple" | "orange"
}

export const categoryItems: CategoryItem[] = [
  {
    name: "Home Services",
    examples: "Cleaning, plumbing, electrical, handyman, carpentry",
    accent: "green",
  },
  {
    name: "Tech & IT",
    examples: "Web & mobile dev, IT support, software setup",
    accent: "blue",
  },
  {
    name: "Creative & Design",
    examples: "Graphic design, video editing, content writing",
    accent: "pink",
  },
  {
    name: "Health & Wellness",
    examples: "Personal training, massage therapy, nutrition",
    accent: "yellow",
  },
  {
    name: "Beauty & Grooming",
    examples: "Makeup, hairstyling, nails, barbering",
    accent: "purple",
  },
  {
    name: "Moving & Logistics",
    examples: "Errands, moving help, dispatch, delivery",
    accent: "orange",
  },
  {
    name: "Tutoring & Lessons",
    examples: "Academic tutoring, music, language coaching",
    accent: "green",
  },
  {
    name: "Events & Hospitality",
    examples: "Planning, MCs, catering, photography, decor",
    accent: "pink",
  },
  {
    name: "Pet Care",
    examples: "Walking, sitting, grooming, training",
    accent: "blue",
  },
]

export const accentClasses: Record<CategoryItem["accent"], string> = {
  green: "bg-card-green text-brand",
  yellow: "bg-[#FFF6CC] text-[#7A5A00]",
  blue: "bg-[#DBEEFE] text-[#1B4F8A]",
  pink: "bg-[#FFE2EC] text-[#9A1F4F]",
  purple: "bg-[#EADCFF] text-[#5A2EAD]",
  orange: "bg-[#FFE2D1] text-[#9A4A0F]",
}
