"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Mail className="text-yellow-400" />
              <a
                href="mailto:aravinthakshanmain@gmail.com"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                aravinthakshanmain@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-yellow-400" />
              <a href="tel:+918754563674" className="text-gray-300 hover:text-yellow-400 transition-colors">
                +91 8754563674
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Github className="text-yellow-400" />
              <a
                href="https://github.com/aravinthakshan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                github.com/aravinthakshan
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin className="text-yellow-400" />
              <a
                href="https://linkedin.com/in/aravinthakshan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                linkedin.com/in/aravinthakshan
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-yellow-400">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Manipal Institute of Technology</h4>
                <p className="text-gray-400">B.Tech in Computer Science and Engineering</p>
                <p className="text-gray-400">2023-2027 • CGPA: 8.83/10.0</p>
              </div>
              <div>
                <h4 className="font-semibold">Maharishi Vidya Mandir</h4>
                <p className="text-gray-400">All India Senior School Certificate Examination</p>
                <p className="text-gray-400">2021-2023 • 94.8%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

