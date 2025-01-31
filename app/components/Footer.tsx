"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm"
        >
          <p>Website built by A S Aravinthakshan</p>
          <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

