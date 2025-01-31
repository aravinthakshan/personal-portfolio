"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    company: "ProCodeBase Company",
    role: "Machine Learning Engineer Intern",
    location: "Remote, United States",
    date: "December 2024 (Present)",
    description:
      "Developing an AI agent using AutoGen AI to automatically generate optimized SQL queries for complex relationships within large databases by integrated Ollama's models with the Zep Memory Layer.",
  },
  {
    company: "Samsung R&D Institute India",
    role: "Prism AI Developer and Research Intern",
    location: "Bengaluru, Karnataka",
    date: "November 2024 (Present)",
    description:
      "Developing a web application with a Django backend, for hosting on a Linux server, utilizing a customized segmentation model (SAM 2) for multi-view image annotation.",
  },
  {
    company: "Mars Rover Manipal",
    role: "AI Researcher",
    location: "Manipal, Karnataka",
    date: "January 2024 (Present)",
    description:
      'Implemented Deep Learning and Machine Learning algorithms from scratch. Working on "De-FiNet", a novel image denoising architecture.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-lg"
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400">{exp.company}</h3>
                  <p className="text-lg text-gray-300">{exp.role}</p>
                  <p className="text-gray-400">{exp.location}</p>
                </div>
                <span className="text-gray-400">{exp.date}</span>
              </div>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

