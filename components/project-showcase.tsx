"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, Stripe, and Prisma. Features include user authentication, product management, shopping cart functionality, and secure payment processing. The platform is designed to be scalable and user-friendly with a modern interface.",
    images: [
      "/placeholder.svg?height=600&width=800&text=E-commerce+Dashboard",
      "/placeholder.svg?height=600&width=800&text=Product+Catalog",
      "/placeholder.svg?height=600&width=800&text=Shopping+Cart",
      "/placeholder.svg?height=600&width=800&text=Payment+Flow",
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool using OpenAI's GPT models. This application helps users create high-quality content for blogs, social media, and marketing materials. Features include multiple content types, customizable tone and style, and real-time generation with preview capabilities.",
    images: [
      "/placeholder.svg?height=600&width=800&text=AI+Dashboard",
      "/placeholder.svg?height=600&width=800&text=Content+Generator",
      "/placeholder.svg?height=600&width=800&text=Template+Library",
      "/placeholder.svg?height=600&width=800&text=Export+Options",
    ],
    technologies: ["Next.js", "OpenAI API", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features. Built with React and Firebase, it includes project boards, task assignments, deadline tracking, and team communication tools. Perfect for remote teams and project management.",
    images: [
      "/placeholder.svg?height=600&width=800&text=Task+Board",
      "/placeholder.svg?height=600&width=800&text=Team+Dashboard",
      "/placeholder.svg?height=600&width=800&text=Calendar+View",
      "/placeholder.svg?height=600&width=800&text=Analytics",
    ],
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux", "WebSocket"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]

export function ProjectShowcase() {
  const [currentProject, setCurrentProject] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % projects[currentProject].images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [currentProject])

  const handleProjectChange = (index: number) => {
    setCurrentProject(index)
    setCurrentImage(0)
  }

  return (
    <section className="py-32 relative bg-darkgreen">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-sage rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-beige rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 mb-4">
              <span className="relative z-10">Some of my recent work</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-sage/20 to-beige/20 animate-pulse"></span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cream to-beige mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-sage to-beige rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Project Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-2 rounded-full bg-deepgreen/50 backdrop-blur-sm border border-forest/50">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleProjectChange(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentProject === index
                    ? "bg-gradient-to-r from-sage to-beige text-darkgreen"
                    : "text-beige hover:text-cream hover:bg-forest/30"
                }`}
              >
                Project {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Project Display */}
        <motion.div
          key={currentProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl border border-forest/30 bg-deepgreen/60 backdrop-blur-sm">
            {/* Image Section */}
            <div className="md:w-2/3 w-full h-[350px] md:h-[500px] flex items-center justify-center bg-forest/10 transition-all duration-700 relative overflow-hidden">
              <img
                src={projects[currentProject].images[currentImage] || "/placeholder.svg"}
                alt={`${projects[currentProject].title} Screenshot`}
                className="object-cover w-full h-full transition-all duration-700"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {projects[currentProject].images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImage === index ? "bg-sage" : "bg-beige/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Description Section */}
            <div className="md:w-1/3 w-full flex flex-col justify-center p-8 bg-deepgreen text-beige">
              <h3 className="text-3xl font-bold mb-6 text-cream">{projects[currentProject].title}</h3>
              <p className="text-lg leading-relaxed mb-6 text-beige/90">{projects[currentProject].description}</p>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-sage mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[currentProject].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-forest/50 text-beige border border-forest"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 mt-auto">
                <Button
                  className="bg-gradient-to-r from-sage to-beige text-darkgreen hover:from-beige hover:to-sage border-0"
                  asChild
                >
                  <a
                    href={projects[currentProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Demo
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-forest text-sage hover:bg-forest hover:text-cream"
                  asChild
                >
                  <a
                    href={projects[currentProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
