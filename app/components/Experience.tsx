"use client"

import { motion } from "framer-motion"
import { Brain, Code, Database } from "lucide-react"

const experiences = [
  {
    company: "ProCodeBase Company",
    logo: "/placeholder.svg",
    role: "Machine Learning Engineer Intern",
    location: "Remote, United States",
    date: "December 2024 (Present)",
    description:
      "Developing an AI agent using AutoGen AI to automatically generate optimized SQL queries for complex relationships within large databases by integrated Ollama's models with the Zep Memory Layer.",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    company: "Samsung R&D Institute India",
    logo: "/placeholder.svg",
    role: "Prism AI Developer and Research Intern",
    location: "Bengaluru, Karnataka",
    date: "November 2024 (Present)",
    description:
      "Developing a web application with a Django backend, for hosting on a Linux server, utilizing a customized segmentation model (SAM 2) for multi-view image annotation.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    company: "Mars Rover Manipal",
    logo: "/placeholder.svg",
    role: "AI Researcher",
    location: "Manipal, Karnataka",
    date: "January 2024 (Present)",
    description:
      'Implemented Deep Learning and Machine Learning algorithms from scratch. Working on "De-FiNet", a novel image denoising architecture.',
    icon: <Database className="w-6 h-6" />,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
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

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-gradient rounded-xl p-6"
            >
              <div className="flex items-start gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center text-indigo-400">
                    {exp.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-indigo-400">{exp.company}</h3>
                      <p className="text-lg text-gray-300">{exp.role}</p>
                      <p className="text-gray-400">{exp.location}</p>
                    </div>
                    <span className="text-gray-400 text-sm bg-gray-800/50 px-3 py-1 rounded-full">{exp.date}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

