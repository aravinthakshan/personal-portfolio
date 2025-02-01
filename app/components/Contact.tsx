"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "next/link"; // This import is missing

export default function Contact({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="py-12 px-6 bg-[#0A0B14] relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#6366F1]/20 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold gradient-text">Get in Touch</h2>
          <p className="text-gray-400 mt-2">
            Let's collaborate on something amazing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto"
        >
          {[
            {
              href: "mailto:aravinthakshanmain@gmail.com",
              icon: Mail,
              text: "aravinthakshanmain@gmail.com",
            },
            {
              href: "tel:+918754563674",
              icon: Phone,
              text: "+91 8754563674",
            },
            {
              href: "https://github.com/aravinthakshan",
              icon: Github,
              text: "github.com/aravinthakshan",
            },
            {
              href: "https://linkedin.com/in/aravinthakshan",
              icon: Linkedin,
              text: "linkedin.com/in/aravinthakshan",
            },
          ].map(({ href, icon: Icon, text }) => (
            <a
              key={text}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-[#6366F1] transition-colors group"
            >
              <div className="bg-[#1A1B23] p-3 rounded-full group-hover:bg-[#6366F1]/10 transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm">{text}</span>
            </a>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Want to learn more about my journey and expertise?
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-[#6366F1] hover:text-[#4F46E5] transition-colors"
          >
            View my full profile
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
