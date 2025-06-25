import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  achievements,
  technologies,
}: ExperienceCardProps) {
  return (
    <div className="space-y-4 pb-6 border-b border-primary-forest/30 last:border-0 last:pb-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
        <div>
          <h4 className="font-medium text-base sm:text-lg text-primary-light">{title}</h4>
          <div className="text-sm text-primary-green">{company}</div>
        </div>
        <div className="text-xs text-primary-sage bg-primary-forest/50 border border-primary-green/30 px-2 py-1 sm:px-3 sm:py-1 rounded-full self-start mt-1 sm:mt-0 sm:self-auto">
          {period}
        </div>
      </div>

      <p className="text-sm text-primary-light/90">{description}</p>

      <div className="space-y-3">
        <h5 className="text-sm font-medium text-primary-green">Key Achievements</h5>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex text-sm text-primary-light/90">
              <CheckCircle2 className="w-4 h-4 mr-2 text-primary-green flex-shrink-0 mt-0.5" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="text-sm font-medium text-primary-green mb-2">Technologies & Skills</h5>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs bg-primary-forest/30 hover:bg-primary-green/20 border-primary-green/40 text-primary-light"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
