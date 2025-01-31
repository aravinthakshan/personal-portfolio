"use client"

import { motion } from "framer-motion"

const skills = {
  Languages: ["Python", "C", "C++", "Java", "JavaScript", "HTML", "CSS", "SQL"],
  "Frameworks/Libraries": [
    "NumPy",
    "Pandas",
    "PyTorch",
    "MongoDB",
    "Express.js",
    "React",
    "Tailwind",
    "Node.js",
    "Git",
    "Google Cloud",
    "LangChain",
  ],
  Certifications: [
    "Machine Learning (DeepLearning.ai)",
    "Deep Learning Specialization",
    "Natural Language Processing",
    "Python for Data Science Bootcamp",
    "The Complete Web Developer Bootcamp (MERN)",
    "Version Control with Git",
  ],
}

export default function Skills() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

