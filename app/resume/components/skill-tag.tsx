import type { ReactNode } from "react"

interface SkillTagProps {
  children: ReactNode
}

export function SkillTag({ children }: SkillTagProps) {
  return (
    <span className="inline-block px-1.5 sm:px-2 py-0.5 sm:py-1 bg-primary-deep border border-primary-green/40 text-xs rounded-md text-primary-sage hover:bg-primary-green/10 hover:text-primary-green transition-colors">
      {children}
    </span>
  )
}
