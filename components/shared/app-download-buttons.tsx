import Image from "next/image"
import { downloadLinks } from "@/lib/data/footer-links"

interface AppDownloadButtonsProps {
  size?: "sm" | "md"
  className?: string
  variant?: "badge" | "store"
}

export function AppDownloadButtons({ size = "md", className = "", variant = "badge" }: AppDownloadButtonsProps) {
  const dimensions = size === "sm" ? { width: 120, height: 36 } : { width: 150, height: 44 }
  const icons = variant === "store"
    ? { appStore: "/icons/store-app-store.svg", googlePlay: "/icons/store-google-play.svg" }
    : { appStore: downloadLinks.appStore.icon, googlePlay: downloadLinks.googlePlay.icon }

  return (
    <div className={`flex gap-3 md:gap-4 ${className}`}>
      <a
        href={downloadLinks.appStore.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={downloadLinks.appStore.alt}
        className="inline-block hover:scale-105 transition-transform"
      >
        <Image
          src={icons.appStore}
          alt={downloadLinks.appStore.alt}
          width={dimensions.width}
          height={dimensions.height}
          draggable={false}
        />
      </a>
      <a
        href={downloadLinks.googlePlay.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={downloadLinks.googlePlay.alt}
        className="inline-block hover:scale-105 transition-transform"
      >
        <Image
          src={icons.googlePlay}
          alt={downloadLinks.googlePlay.alt}
          width={dimensions.width}
          height={dimensions.height}
          draggable={false}
        />
      </a>
    </div>
  )
}
