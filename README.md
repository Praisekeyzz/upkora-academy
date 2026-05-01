# Upkora Academy

Marketing and landing page for [Upkora Academy](https://upkora-academy.vercel.app) — A premier training and learning platform designed to bridge the skill gap in the tech industry.

## 🚀 Key Features

- **Modern Landing Page**: High-conversion design with Hero, Featured Courses, and Category showcases.
- **Interactive Components**: Smooth animations powered by Framer Motion.
- **SEO Optimized**: Complete metadata configuration and structured data for educational organizations.
- **Responsive Legal Framework**: Revamped Privacy Policy and Terms of Service tailored for a learning environment.
- **Theme-able UI**: Robust design system using CSS variables and Tailwind CSS 4.

## 🛠️ Tech Stack

- **Framework** — Next.js 16 (App Router), React 19, TypeScript
- **Styling** — Tailwind CSS 4, shadcn/ui, Radix UI
- **Animation** — Framer Motion
- **Validation** — Zod
- **Analytics** — @vercel/analytics

## 🏁 Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Scripts

| Command      | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Start development server |
| `pnpm build` | Production build         |
| `pnpm start` | Run production server    |
| `pnpm lint`  | Run ESLint checks        |

## 📂 Project Structure

```
app/                        # Next.js App Router (Pages & Layouts)
  faq/                      # FAQ page
  privacy/                  # Privacy policy (Revamped for Upkora)
  terms/                    # Terms & conditions (Revamped for Upkora)
components/
  layout/                   # Global Navbar, Footer, and Legal layouts
  sections/                 # Landing page sections (Hero, Courses, FAQ, etc.)
  ui/                       # shadcn/ui reusable primitives
lib/
  data/                     # Content data (FAQs, Legal, Navigation)
  metadata.ts               # SEO and OpenGraph configuration
  animations.ts             # Global Framer Motion variants
```

## 🎨 Design Tokens

The UI is built on a custom green-based color palette defined in `globals.css`:

| Token            | Value     | Usage                    |
| ---------------- | --------- | ------------------------ |
| `brand`          | `#1e7d30` | Primary brand green      |
| `brand-hover`    | `#1a6a28` | Hover state for brand    |
| `accent-green`   | `#7ed957` | Highlight/Accent green   |
| `heading`        | `#0d1609` | High-contrast headings   |
| `body`           | `#6e736b` | Readable body text       |
| `surface`        | `#f9fdf7` | Base background color    |

---

© 2026 Upkora Academy. Private and proprietary.
