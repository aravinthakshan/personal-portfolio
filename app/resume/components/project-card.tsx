import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  slug: string
}

export function ProjectCard({ title, category, image, slug }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block h-full">
      <Card className="bg-black/80 border-primary-forest/50 overflow-hidden group hover:border-primary-green/60 hover:shadow-lg hover:shadow-primary-green/10 transition-all h-full">
        <div className="relative h-40 sm:h-48 w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-primary-forest/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-3 sm:p-4">
            <div className="text-xs text-primary-green mb-1 bg-primary-forest/30 px-2 py-1 rounded-full">
              {category}
            </div>
            <h3 className="font-medium text-sm sm:text-base text-primary-light">{title}</h3>
          </div>
        </div>
      </Card>
    </Link>
  )
}
