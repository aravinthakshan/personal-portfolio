"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className="fixed w-full z-50 px-6 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold gradient-text">
          Aravinthakshan
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#experience" className="text-gray-400 hover:text-indigo-400 transition-colors">
            Experience
          </Link>
          <Link href="#research" className="text-gray-400 hover:text-indigo-400 transition-colors">
            Research
          </Link>
          <Link href="#projects" className="text-gray-400 hover:text-indigo-400 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">
            Contact
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Resume
          </motion.button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-gray-400 hover:text-indigo-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm py-4 px-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            <Link
              href="#experience"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#research"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Research
            </Link>
            <Link
              href="#projects"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-left"
            >
              Resume
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

