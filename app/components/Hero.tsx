"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, Brain, Code, Book } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-lg text-indigo-400 font-medium">Hello! I'm</h2>
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              A S Aravinthakshan
            </h1>
            <p className="text-xl text-gray-400">
              Machine Learning Engineer & Full Stack Developer
            </p>
          </div>

          <div className="flex gap-4">
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg flex items-center gap-2"
            >
              About Me
            </motion.a>
            <motion.a
              href="/cv.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gray-800 text-white rounded-lg"
            >
              Download CV
            </motion.a>
          </div>

          <div className="flex gap-6 pt-4">
            <motion.a
              href="https://github.com/aravinthakshan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/aravinthakshan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="card-gradient p-4 rounded-lg">
              <Brain className="w-8 h-8 text-indigo-400 mb-2" />
              <h3 className="font-semibold">ML/AI</h3>
              <p className="text-sm text-gray-400">Deep Learning Expert</p>
            </div>
            <div className="card-gradient p-4 rounded-lg">
              <Book className="w-8 h-8 text-indigo-400 mb-2" />
              <h3 className="font-semibold">Research ML</h3>
              <p className="text-sm text-gray-400">Machine Learning Research</p>
            </div>
            <div className="card-gradient p-4 rounded-lg">
              <Code className="w-8 h-8 text-indigo-400 mb-2" />
              <h3 className="font-semibold">Full Stack</h3>
              <p className="text-sm text-gray-400">MERN Developer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-full h-full absolute -z-10 bg-indigo-500/20 blur-[120px] rounded-full" />
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Image
              src="/profile-pic.jpeg"
              alt="Profile"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
