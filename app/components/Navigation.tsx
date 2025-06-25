"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(9, 23, 23, 0)", "rgba(92, 114, 74, 0.95)"]
  );

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      className="fixed w-full z-50 px-6 py-4 transition-colors duration-300"
      style={{ backgroundColor }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold gradient-text">
          Aravinthakshan
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {["experience", "skills"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-[#a3b68a] hover:text-[#5c724a] transition-colors capitalize"
            >
              {section}
            </button>
          ))}
          <motion.button
            onClick={() => scrollToSection("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-[#a3b68a] text-white rounded-lg"
          >
            Contact Me
          </motion.button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-[#a3b68a] hover:text-[#5c724a]"
          onClick={() => setIsOpen(!isOpen)}
        >
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
            {["experience", "skills"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-[#a3b68a] hover:text-[#5c724a] transition-colors capitalize text-left"
              >
                {section}
              </button>
            ))}
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-[#a3b68a] text-white rounded-lg text-left"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
