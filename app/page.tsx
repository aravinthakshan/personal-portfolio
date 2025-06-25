import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Brain, Code, Database } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Timeline } from "@/components/timeline"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { SkillsSection } from "@/components/skills-section"
import { ProjectShowcase } from "@/components/project-showcase"
import { ContactSection } from "@/components/contact-section"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-deepgreen via-darkgreen to-deepgreen text-cream overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section - Deep Green Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deepgreen px-6 pt-20">
        {/* Background gradient blobs */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-beige/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-sage/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-lg text-sage font-medium">Hello! I'm</h2>
              <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sage to-beige">
                Shine Kyaw Kyaw Aung
              </h1>
              <p className="text-xl text-beige">Machine Learning Engineer & Full Stack Developer</p>
            </div>

            <div className="flex gap-4">
              <Button className="bg-beige text-darkgreen hover:bg-beige/90" asChild>
                <Link href="/about">About Me</Link>
              </Button>
              <Button
                variant="outline"
                className="border-forest text-beige hover:text-cream hover:border-sage hover:bg-forest/50"
              >
                Download CV
              </Button>
            </div>

            <div className="flex gap-6 pt-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-beige hover:text-sage transition-colors"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/shinekyawkyawaung/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-beige hover:text-sage transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                {
                  icon: <Brain className="w-8 h-8 text-sage mb-2" />,
                  title: "ML/AI",
                  subtitle: "Deep Learning Expert",
                },
                {
                  icon: <Database className="w-8 h-8 text-sage mb-2" />,
                  title: "Research ML",
                  subtitle: "Machine Learning Research",
                },
                {
                  icon: <Code className="w-8 h-8 text-sage mb-2" />,
                  title: "Full Stack",
                  subtitle: "MERN Developer",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-xl bg-darkgreen/50 backdrop-blur-sm border border-darkgreen/50 p-4 transition-all duration-300 hover:border-sage/50 hover:scale-105"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-sage/10 to-beige/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
                  <div className="relative">
                    {item.icon}
                    <h3 className="font-semibold text-cream">{item.title}</h3>
                    <p className="text-sm text-beige/70">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-full absolute -z-10 bg-beige/20 blur-[120px] rounded-full" />
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-sage/20 to-beige/20 blur-xl opacity-70"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-forest">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Shine Kyaw Kyaw Aung"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepgreen/80 via-deepgreen/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-sage animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section - Dark Green Background */}
      <section id="experience" className="py-32 relative bg-darkgreen">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-sage rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-beige rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Projects Section - Dark Green Background */}
      <ProjectShowcase />

      {/* Skills Section - Deep Green Background */}
      <SkillsSection />

      {/* Contact Section - Dark Green Background */}
      <ContactSection />

      {/* Footer - Deep Green Background */}
      <footer className="border-t border-forest py-12 bg-deepgreen">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sage to-beige">Shine</span>
              <span className="text-cream">KKA</span>
            </Link>
            <p className="text-sm text-beige/70 mt-2">
              © {new Date().getFullYear()} Shine Kyaw Kyaw Aung. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-darkgreen/50 hover:bg-darkgreen text-beige hover:text-cream"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/shinekyawkyawaung/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-darkgreen/50 hover:bg-darkgreen text-beige hover:text-cream"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-darkgreen/50 hover:bg-darkgreen text-beige hover:text-cream"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:hello@example.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-darkgreen/50 hover:bg-darkgreen text-beige hover:text-cream"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
