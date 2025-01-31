"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hi, I'm Aravinthakshan</h1>
          <p className="text-xl text-gray-400 mb-8">
            Machine Learning Engineer & Full Stack Developer passionate about AI innovation and software development.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/aravinthakshan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/aravinthakshan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a href="mailto:aravinthakshanmain@gmail.com" className="hover:text-yellow-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-96 md:h-96 bg-yellow-400 rounded-full absolute blur-3xl opacity-20" />
          <Image src="/placeholder.svg" alt="Profile" width={400} height={400} className="relative z-10" />
        </motion.div>
      </div>
    </section>
  )
}

