import type React from "react"
import { GlobeIcon, CodeIcon, BriefcaseIcon } from "lucide-react"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { ProjectCard } from "./components/project-card"
import { getAllProjects, getExperienceInfo, getTechnicalSkillsInfo } from "./lib/data"
import { ExperienceCard } from "./components/experience-card"
import { EnhancedScrollIndicator } from "./components/enhanced-scroll-indicator"
import { AnimatedSection } from "./components/animated-section"
import { EnhancedProfile } from "./components/enhanced-profile"
import { CredentialsSection } from "./components/credentials-section"
import { PortfolioHeader } from "./components/portfolio-header"

const SkillTagComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-2 py-1 bg-primary-deep border border-primary-forest rounded-full text-xs font-medium text-primary-sage">
      {children}
    </div>
  )
}

export default function Home() {
  const projects = getAllProjects()
  const experienceInfo = getExperienceInfo()
  const technicalSkills = getTechnicalSkillsInfo()

  return (
    <main className="min-h-screen bg-black text-primary-light">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#a3b68a_1px,transparent_1px)] [background-size:20px_20px] opacity-10 z-0"></div>

      {/* Header */}
      <PortfolioHeader />

      <div className="relative z-10 container mx-auto p-3 sm:p-4 pt-20 sm:pt-24 pb-6 sm:pb-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Enhanced Profile Section */}
          <div className="md:sticky md:top-24 self-start">
            <AnimatedSection animation="slide-right">
              <EnhancedProfile />
            </AnimatedSection>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-4 sm:space-y-6">
            {/* Experience Section - Light green accent */}
            <AnimatedSection animation="fade-up" id="experience">
              <Card className="bg-black/80 border-primary-green/30 backdrop-blur-sm shadow-lg shadow-primary-green/5">
                <CardContent className="p-4 sm:p-6 bg-gradient-to-br from-primary-green/5 to-black/40 rounded-lg border border-primary-green/20">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="p-2 bg-primary-green/10 rounded-lg mr-3">
                      <BriefcaseIcon className="w-5 h-5 text-primary-green" />
                    </div>
                    <h3 className="text-lg font-medium text-primary-light">Experience</h3>
                  </div>

                  <div className="space-y-6 sm:space-y-8">
                    {experienceInfo.map((experience, index) => (
                      <AnimatedSection key={index} animation="fade-up" delay={100 * (index + 1)}>
                        <div className="bg-primary-forest/10 p-4 rounded-lg border-l-4 border-primary-green">
                          <ExperienceCard
                            title={experience.title}
                            company={experience.company}
                            period={experience.period}
                            description={experience.description}
                            achievements={experience.achievements}
                            technologies={experience.technologies}
                          />
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Credentials Section - Dark green accent */}
            <AnimatedSection animation="fade-up" id="credentials">
              <div className="bg-primary-deep/20 p-1 rounded-lg border border-primary-forest/50">
                <CredentialsSection />
              </div>
            </AnimatedSection>

            {/* Skills Section - Light green accent */}
            <AnimatedSection animation="fade-up" id="skills">
              <Card className="bg-black/80 border-primary-green/30 backdrop-blur-sm shadow-lg shadow-primary-green/5">
                <CardContent className="p-4 sm:p-6 bg-gradient-to-br from-primary-green/5 to-black/40 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary-green/10 rounded-lg mr-3">
                      <CodeIcon className="w-5 h-5 text-primary-green" />
                    </div>
                    <h3 className="text-lg font-medium text-primary-light">Technical Skills</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <AnimatedSection animation="slide-right" delay={100}>
                      <div className="space-y-3 bg-primary-forest/10 p-4 rounded-lg border border-primary-forest/30">
                        <h4 className="text-sm font-medium text-primary-green">Design</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.design.map((skill, index) => (
                            <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-left" delay={200}>
                      <div className="space-y-3 bg-primary-forest/10 p-4 rounded-lg border border-primary-forest/30">
                        <h4 className="text-sm font-medium text-primary-green">Development</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.development.map((skill, index) => (
                            <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-right" delay={300}>
                      <div className="space-y-3 bg-primary-forest/10 p-4 rounded-lg border border-primary-forest/30">
                        <h4 className="text-sm font-medium text-primary-green">UX Methods</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.uxMethods.map((skill, index) => (
                            <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-left" delay={400}>
                      <div className="space-y-3 bg-primary-forest/10 p-4 rounded-lg border border-primary-forest/30">
                        <h4 className="text-sm font-medium text-primary-green">Soft Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.softSkills.map((skill, index) => (
                            <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Projects Section - Dark green accent */}
            <AnimatedSection animation="fade-up" id="projects">
              <Card className="bg-black/95 border-primary-forest backdrop-blur-sm shadow-lg shadow-primary-forest/10">
                <CardContent className="p-4 sm:p-6 bg-gradient-to-br from-primary-forest/10 to-black/60 rounded-lg">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center">
                      <div className="p-2 bg-primary-forest/20 rounded-lg mr-3">
                        <GlobeIcon className="w-5 h-5 text-primary-green" />
                      </div>
                      <h3 className="text-lg font-medium text-primary-light">Recent Projects</h3>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs sm:text-sm px-2 sm:px-3 text-primary-sage hover:text-primary-light hover:bg-primary-green/20 border border-primary-green/30"
                    >
                      View All
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {projects.map((project, index) => (
                      <AnimatedSection key={project.id} animation="zoom-in" delay={100 * (index + 1)}>
                        <ProjectCard
                          title={project.title}
                          category={project.category}
                          image={project.thumbnailImage}
                          slug={project.slug}
                        />
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Footer */}
        <AnimatedSection
          animation="fade-in"
          delay={500}
          className="mt-8 sm:mt-12 py-4 sm:py-6 text-center text-xs sm:text-sm text-primary-sage border-t border-primary-forest/30"
        >
          <p>© {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
        </AnimatedSection>
      </div>

      {/* Scroll to Top Button */}
      <EnhancedScrollIndicator />
    </main>
  )
}
