"use client"

import { motion } from "framer-motion"
import { Code2, Brain, Database, BadgeIcon as Certificate, GitGraphIcon as Git, Cloud } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Python", "C", "C++", "Java", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "ML/AI",
    icon: <Brain className="w-6 h-6" />,
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas"],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
  },
  {
    title: "Web Technologies",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["React", "Node.js", "Express.js", "Next.js", "Tailwind"],
  },
  {
    title: "Tools",
    icon: <Git className="w-6 h-6" />,
    skills: ["Git", "Docker", "Linux", "VS Code"],
  },
  {
    title: "Cloud",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["Google Cloud", "AWS", "Firebase", "Vercel"],
  },
]

const certifications = [
  "Machine Learning (DeepLearning.ai)",
  "Deep Learning Specialization",
  "Natural Language Processing",
  "Python for Data Science Bootcamp",
  "The Complete Web Developer Bootcamp (MERN)",
  "Version Control with Git",
]

export default function Skills() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-indigo-500/20 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text">Skills & Certifications</h2>
          <p className="text-gray-400 mt-2">Technical expertise and professional achievements.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-gradient rounded-xl p-4"
            >
              <div className="text-indigo-400 mb-2">{category.icon}</div>
              <h3 className="font-semibold mb-2">{category.title}</h3>
              <div className="text-sm text-gray-400">
                {category.skills.map((skill, i) => (
                  <span key={skill} className="inline-block">
                    {skill}
                    {i < category.skills.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="card-gradient rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Certificate className="w-6 h-6 text-indigo-400" />
            <h3 className="text-xl font-semibold">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-3 text-gray-300"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

