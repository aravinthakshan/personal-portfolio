"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Brain, Code } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#c7b793]/20 blur-[120px] rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#a3b68a]/20 blur-[120px] rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <motion.h2
              className="text-lg text-[#5c724a] font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello! I'm
            </motion.h2>
            <motion.h1
              className="text-5xl md:text-6xl font-bold gradient-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              A S Aravinthakshan
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Machine Learning Engineer & Full Stack Developer
            </motion.p>
          </div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#c7b793] text-white rounded-lg flex items-center gap-2"
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
          </motion.div>

          <motion.div
            className="flex gap-6 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="https://github.com/aravinthakshan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#6366F1" }}
              className="text-gray-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/aravinthakshan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#6366F1" }}
              className="text-gray-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {[
              {
                icon: <Brain className="w-8 h-8 text-[#5c724a] mb-2" />,
                title: "ML/AI",
                subtitle: "Deep Learning Expert",
              },
              {
                icon: <Brain className="w-8 h-8 text-[#5c724a] mb-2" />,
                title: "Research ML",
                subtitle: "Machine Learning Research",
              },
              {
                icon: <Code className="w-8 h-8 text-[#5c724a] mb-2" />,
                title: "Full Stack",
                subtitle: "MERN Developer",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="card-gradient p-4 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="w-full h-full absolute -z-10 bg-[#c7b793]/20 blur-[120px] rounded-full" />
          <motion.div
            className="relative w-full aspect-square max-w-md mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/profile-pic.jpeg"
              alt="Profile"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

