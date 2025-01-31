"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react"

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card-gradient rounded-xl p-6 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-800/50 rounded-lg border border-gray-700 px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-800/50 rounded-lg border border-gray-700 px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-gray-800/50 rounded-lg border border-gray-700 px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white rounded-lg px-4 py-2 flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card-gradient rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

