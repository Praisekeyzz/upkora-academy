import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "w-[158px] h-[50px] rounded-[4px] px-[40px] py-[12px] bg-brand hover:bg-brand-hover text-white font-semibold text-[14px] leading-[100%] transition-colors",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
PrimaryButton.displayName = "PrimaryButton"

export { PrimaryButton }
