"use client"

import { motion } from "framer-motion"
import { Brain, Code, Database, Building2, BookOpen } from "lucide-react"

const experiences = [
  {
    company: "ProCodeBase Company",
    logo: "/placeholder.svg",
    role: "Machine Learning Engineer Intern",
    location: "Remote, United States",
    date: "December 2024",
    period: "December 2024 - Present",
    description:
      "Developing an AI agent using AutoGen AI to automatically generate optimized SQL queries for complex relationships within large databases by integrated Ollama's models with the Zep Memory Layer.",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    company: "Samsung R&D Institute India",
    logo: "/placeholder.svg",
    role: "Prism AI Developer and Research Intern",
    location: "Bengaluru, Karnataka",
    date: "November 2024",
    period: "November 2024 - Present",
    description:
      "Developing a web application with a Django backend, for hosting on a Linux server, utilizing a customized segmentation model (SAM 2) for multi-view image annotation.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    company: "Mars Rover Manipal",
    logo: "/placeholder.svg",
    role: "AI Researcher",
    location: "Manipal, Karnataka",
    date: "January 2024",
    period: "January 2024 - Present",
    description:
      'Implemented Deep Learning and Machine Learning algorithms from scratch. Working on "De-FiNet", a novel image denoising architecture.',
    icon: <Database className="w-6 h-6" />,
  },
  {
    company: "Larsen and Toubro Limited",
    logo: "/placeholder.svg",
    role: "ML and NLP Intern",
    location: "Chennai, Tamil Nadu",
    date: "June 2024",
    period: "June 2024 - July 2024",
    description:
      "Standardized construction activity codes in a master database utilizing the Gemini API, Google Cloud, and NLTK library. Incorporated a semantic search feature using embeddings in a Pinecone vector database.",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    company: "BugBase",
    logo: "/placeholder.svg",
    role: "Founders Office Intern",
    location: "Manipal, Karnataka",
    date: "February 2024",
    period: "February 2024 - May 2024",
    description:
      "Helped improve the automated Bug Triaging ML Model using an application of RAG (Retrieval-Augmented-Generation).",
    icon: <BookOpen className="w-6 h-6" />,
  },
]

export default function Experience({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 px-6 bg-[#091717]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text">Experience</h2>
          <p className="text-gray-400 mt-2">My professional journey in AI and software development.</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#5c724a]/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Date on top */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                  <span className="bg-[#5c724a] text-[#A1A16A] px-4 py-1 rounded-full text-sm">{exp.date}</span>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#5c724a] rounded-full border-4 border-[#091717]" />

                {/* Content card - alternating sides */}
                <div
                  className={`flex ${index % 2 === 0 ? "justify-end pl-8 md:pl-0 md:pr-[50%]" : "justify-start pr-8 md:pr-0 md:pl-[50%]"}`}
                >
                  <motion.div whileHover={{ scale: 1.02 }} className="card-gradient rounded-xl p-6 max-w-xl">
                    <div className="flex items-start gap-6">
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-[#1A1B23] flex items-center justify-center text-[#5c724a]">
                          {exp.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold text-[#5c724a]">{exp.company}</h3>
                          <p className="text-lg text-[#A1A16A]">{exp.role}</p>
                          <p className="text-[#A1A16A] text-sm">{exp.location}</p>
                          <p className="text-[#5c724a] text-sm mt-1">{exp.period}</p>
                        </div>
                        <p className="text-[#A1A16A] text-sm">{exp.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

