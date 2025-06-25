"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { SocialLinks } from "./social-links"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { User, MapPin, Mail, Phone, Languages, Clock, Briefcase } from "lucide-react"
import { getPersonalInfo, getAboutInfo } from "../lib/data"

export function EnhancedProfile() {
  const [activeTab, setActiveTab] = useState("about")

  const personalInfo = getPersonalInfo()
  const aboutInfo = getAboutInfo()

  return (
    <Card className="bg-black/90 border-primary-forest backdrop-blur-sm col-span-1 flex flex-col shadow-lg shadow-primary-forest/10">
      <CardContent className="p-0">
        {/* Profile Header - Improved mobile layout */}
        <div className="bg-gradient-to-br from-primary-forest/20 to-black/80 p-4 sm:p-6 flex flex-col items-center border-b border-primary-forest/50">
          <div className="flex flex-col sm:flex-col items-center w-full">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-2 border-primary-green/30 ring-4 ring-primary-forest/30 shadow-lg shadow-primary-green/20">
              <Image
                src={personalInfo.avatar || "/placeholder.svg"}
                alt={personalInfo.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-primary-light">{personalInfo.name}</h2>
              <p className="text-sm text-primary-sage mb-1">{personalInfo.title}</p>
              <div className="flex items-center justify-center text-xs text-primary-green/80 mb-3">
                <MapPin className="w-3 h-3 mr-1" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {personalInfo.badges.map((badge, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-primary-forest/30 hover:bg-primary-green/20 border-primary-green/40 text-primary-light"
              >
                {badge}
              </Badge>
            ))}
          </div>

          <SocialLinks socialLinks={personalInfo.social} />
        </div>

        {/* Tabbed Content - Mobile optimized */}
        <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
          <div className="border-b border-primary-forest/50">
            <TabsList className="w-full bg-transparent border-b border-primary-forest/50 rounded-none h-auto p-0">
              <TabsTrigger
                value="about"
                className={`flex-1 rounded-none border-b-2 px-2 sm:px-4 py-2 text-xs sm:text-sm ${
                  activeTab === "about"
                    ? "border-primary-green text-primary-green"
                    : "border-transparent text-primary-sage/60"
                }`}
              >
                <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                About
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className={`flex-1 rounded-none border-b-2 px-2 sm:px-4 py-2 text-xs sm:text-sm ${
                  activeTab === "contact"
                    ? "border-primary-green text-primary-green"
                    : "border-transparent text-primary-sage/60"
                }`}
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Contact
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="about" className="p-4 sm:p-6 space-y-4 sm:space-y-6 focus:outline-none">
            <div className="space-y-3 bg-primary-forest/10 p-4 rounded-lg border border-primary-forest/30">
              <h3 className="text-sm font-medium text-primary-green flex items-center">
                <User className="w-4 h-4 mr-2 text-primary-green" />
                About Me
              </h3>
              <p className="text-sm text-primary-light">{aboutInfo.bio}</p>
            </div>

            <div className="space-y-3 bg-primary-forest/10 p-4 rounded-lg border border-primary-forest/30">
              <h3 className="text-sm font-medium text-primary-green flex items-center">
                <Briefcase className="w-4 h-4 mr-2 text-primary-green" />
                Professional Focus
              </h3>
              <div className="space-y-2">
                {aboutInfo.focus.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-primary-green mr-2">•</span>
                    <p className="text-sm text-primary-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 bg-primary-forest/10 p-4 rounded-lg border border-primary-forest/30">
              <h3 className="text-sm font-medium text-primary-green flex items-center">
                <Languages className="w-4 h-4 mr-2 text-primary-green" />
                Languages
              </h3>
              <div className="space-y-3">
                {aboutInfo.languages.map((language, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-primary-light">{language.name}</span>
                      <span className="text-xs text-primary-green">{language.proficiency}</span>
                    </div>
                    <div className="h-1.5 bg-primary-deep rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-green to-primary-sage rounded-full"
                        style={{ width: `${language.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="p-4 sm:p-6 space-y-4 focus:outline-none">
            <div className="space-y-4">
              <div className="flex items-start bg-primary-forest/10 p-3 rounded-lg border border-primary-forest/30">
                <Mail className="w-5 h-5 mr-3 text-primary-green mt-0.5" />
                <div>
                  <h4 className="font-medium text-primary-light">Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-primary-sage hover:text-primary-green transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start bg-primary-forest/10 p-3 rounded-lg border border-primary-forest/30">
                <Phone className="w-5 h-5 mr-3 text-primary-green mt-0.5" />
                <div>
                  <h4 className="font-medium text-primary-light">Phone</h4>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm text-primary-sage hover:text-primary-green transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start bg-primary-forest/10 p-3 rounded-lg border border-primary-forest/30">
                <MapPin className="w-5 h-5 mr-3 text-primary-green mt-0.5" />
                <div>
                  <h4 className="font-medium text-primary-light">Location</h4>
                  <p className="text-sm text-primary-sage">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-start bg-primary-forest/10 p-3 rounded-lg border border-primary-forest/30">
                <Clock className="w-5 h-5 mr-3 text-primary-green mt-0.5" />
                <div>
                  <h4 className="font-medium text-primary-light">Working Hours</h4>
                  <p className="text-sm text-primary-sage">{personalInfo.workingHours}</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Profile Footer - Availability Status */}
        <div className="p-3 sm:p-4 border-t border-primary-forest/50 flex items-center justify-center bg-primary-forest/5">
          <div className="flex items-center">
            <span
              className={`w-2 h-2 ${personalInfo.availableForWork ? "bg-primary-green" : "bg-red-500"} rounded-full mr-2`}
            ></span>
            <span className="text-xs text-primary-sage">
              {personalInfo.availableForWork ? "Available for new projects" : "Not available for new projects"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
