"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900/30 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-500/20 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text">Get in Touch</h2>
          <p className="text-gray-400 mt-2">Let's collaborate on something amazing.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="card-gradient rounded-xl p-6 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Contact Information</h3>
          <div className="space-y-6">
            <a
              href="mailto:aravinthakshanmain@gmail.com"
              className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              aravinthakshanmain@gmail.com
            </a>
            <a
              href="tel:+918754563674"
              className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91 8754563674
            </a>
            <a
              href="https://github.com/aravinthakshan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Github className="w-5 h-5" />
              github.com/aravinthakshan
            </a>
            <a
              href="https://linkedin.com/in/aravinthakshan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              linkedin.com/in/aravinthakshan
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

