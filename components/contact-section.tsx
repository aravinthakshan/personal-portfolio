"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 relative bg-darkgreen">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sage rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-beige rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-block">
            <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 mb-4">
              <span className="relative z-10">Let's work together</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-sage/20 to-beige/20 animate-pulse"></span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cream to-beige mb-4">
            Get In Touch
          </h2>
          <p className="text-beige mt-2">Let's collaborate on something amazing.</p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-sage to-beige rounded-full mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-6 max-w-4xl mx-auto"
        >
          {[
            {
              href: "mailto:hello@example.com",
              icon: Mail,
              text: "hello@example.com",
            },
            {
              href: "tel:+1234567890",
              icon: Phone,
              text: "+1 (234) 567-890",
            },
            {
              href: "https://github.com/shinekyawkyawaung",
              icon: Github,
              text: "github.com/shinekyawkyawaung",
            },
            {
              href: "https://linkedin.com/in/shinekyawkyawaung",
              icon: Linkedin,
              text: "linkedin.com/in/shinekyawkyawaung",
            },
          ].map(({ href, icon: Icon, text }) => (
            <a
              key={text}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-beige hover:text-sage transition-colors group"
            >
              <div className="bg-deepgreen p-3 rounded-full group-hover:bg-sage/10 transition-colors border border-forest">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm">{text}</span>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-beige mb-4">Want to learn more about my journey and expertise?</p>
          <Link
            href="/about"
            className="inline-flex items-center text-sage hover:text-beige transition-colors font-medium"
          >
            View my full profile
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
