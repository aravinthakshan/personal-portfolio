import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { GraduationCap, Award } from "lucide-react"
import { SkillTag } from "./skill-tag"
import { AnimatedSection } from "./animated-section"
import { getCredentialsInfo } from "../lib/data"

export function CredentialsSection() {
  const credentialsInfo = getCredentialsInfo()

  return (
    <Card className="bg-black/90 border-primary-forest backdrop-blur-sm shadow-lg shadow-primary-forest/10">
      <CardContent className="p-4 sm:p-6 bg-gradient-to-br from-primary-forest/10 to-black/60 rounded-lg">
        <div className="flex items-center mb-4 sm:mb-6">
          <div className="p-2 bg-primary-forest/20 rounded-lg mr-3">
            <Award className="w-5 h-5 text-primary-green" />
          </div>
          <h3 className="text-lg font-medium text-primary-light">Credentials</h3>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* Professional Certifications */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-primary-green flex items-center border-b border-primary-forest/50 pb-2">
                <Award className="w-4 h-4 mr-2 text-primary-green" />
                Professional Certifications
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {credentialsInfo.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-primary-forest/20 p-2 sm:p-3 rounded-lg border border-primary-green/30"
                  >
                    {cert.logo && (
                      <div className="relative w-10 h-10 rounded overflow-hidden mr-3 flex-shrink-0 bg-primary-forest/50">
                        <Image
                          src={cert.logo || "/placeholder.svg"}
                          alt={cert.issuer}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div>
                      <h5 className="text-sm font-medium text-primary-light">{cert.name}</h5>
                      <p className="text-xs text-primary-green">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-primary-green flex items-center border-b border-primary-forest/50 pb-2">
                <GraduationCap className="w-4 h-4 mr-2 text-primary-green" />
                Education
              </h4>
              <div className="space-y-3 sm:space-y-4">
                {credentialsInfo.education.map((edu, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-primary-forest/20 p-2 sm:p-3 rounded-lg border border-primary-green/30"
                  >
                    {edu.logo && (
                      <div className="relative w-10 h-10 rounded overflow-hidden mr-3 flex-shrink-0 bg-primary-forest/50">
                        <Image
                          src={edu.logo || "/placeholder.svg"}
                          alt={edu.institution}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    )}
                    <div>
                      <h5 className="text-sm font-medium text-primary-light">{edu.degree}</h5>
                      <p className="text-xs text-primary-green">
                        {edu.institution} • {edu.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Skills & Expertise */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-primary-green flex items-center border-b border-primary-forest/50 pb-2">
                <Award className="w-4 h-4 mr-2 text-primary-green" />
                Skills & Expertise
              </h4>
              <div className="flex flex-wrap gap-2 bg-primary-forest/10 p-4 rounded-lg border border-primary-forest/30">
                {credentialsInfo.skills.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </CardContent>
    </Card>
  )
}
