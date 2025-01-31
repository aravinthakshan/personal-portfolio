"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Navigation() {
  return (
    <motion.header
      className="fixed w-full z-50 px-6 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Aravinthakshan
        </Link>
        <div className="flex gap-8">
          <Link href="#experience" className="hover:text-yellow-400 transition-colors">
            Experience
          </Link>
          <Link href="#research" className="hover:text-yellow-400 transition-colors">
            Research
          </Link>
          <Link href="#projects" className="hover:text-yellow-400 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-yellow-400 transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}

