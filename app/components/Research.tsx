"use client"

import { motion } from "framer-motion"

const research = [
  {
    title: "Research Apprenticeship at Arizona State University",
    description:
      "Working on prostate cancer stage classification using a random walk algorithm and Graph Neural Networks in collaboration with Wu-Lab.",
  },
  {
    title: "Undergraduate Researcher at MIT Manipal",
    description:
      'Co-authored "AdaptPhishSysNet: Adaptive Phishing Detection System for Blockchains using Machine Learning" - accepted at ISBM Conference 2024.',
  },
  {
    title: "Research Apprenticeship at Indian Statistical Institute",
    description:
      "Designing a custom clustering algorithm for small object detection in wildlife monitoring using UAVs.",
  },
]

export default function Research() {
  return (
    <section id="research" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Research
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {research.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

