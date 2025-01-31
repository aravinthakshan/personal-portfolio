"use client"

import { motion } from "framer-motion"

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "TypeScript",
  "Next.js",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Git",
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg mb-12 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm a passionate full-stack developer with a keen eye for design. I love creating beautiful, functional, and
          user-friendly applications that solve real-world problems.
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

