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

export function SkillsSection() {
  return (
    <section className="py-32 px-6 bg-deepgreen relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-block">
            <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 mb-4">
              <span className="relative z-10">Technologies I work with</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-sage/20 to-beige/20 animate-pulse"></span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cream to-beige mb-4">
            Skills & Certifications
          </h2>
          <p className="text-beige/70 mt-2">Technical expertise and professional achievements.</p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-sage to-beige rounded-full mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl bg-darkgreen/50 backdrop-blur-sm border border-darkgreen/50 p-4 transition-all duration-300 hover:border-sage/50"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-sage/10 to-beige/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
              <div className="relative">
                <div className="text-sage mb-2">{category.icon}</div>
                <h3 className="font-semibold mb-2 text-cream">{category.title}</h3>
                <div className="text-sm text-beige">
                  {category.skills.map((skill, i) => (
                    <span key={skill} className="inline-block">
                      {skill}
                      {i < category.skills.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-xl bg-darkgreen/50 backdrop-blur-sm border border-darkgreen/50 p-6 transition-all duration-300 hover:border-sage/50"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-sage/10 to-beige/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <Certificate className="w-6 h-6 text-sage" />
              <h3 className="text-xl font-semibold text-cream">Certifications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-deepgreen/50 rounded-lg p-3 text-beige border border-forest/30"
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
