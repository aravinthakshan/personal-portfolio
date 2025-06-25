"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Github, Linkedin, Phone, ArrowLeft } from "lucide-react"
import { CreativeHero } from "@/components/creative-hero"

export default function About() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-deepgreen text-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-forest/90 backdrop-blur-md z-50 border-b border-forest">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="px-4 py-2 border-2 border-sage text-beige hover:bg-sage hover:text-darkgreen transition-colors rounded-md flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <button
            onClick={scrollToContact}
            className="text-cream hover:text-sage transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Header with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-24 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-[4/5] w-full max-w-md">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-sage/20 to-beige/20 blur-xl opacity-70"></div>
            <div className="relative aspect-square rounded-xl overflow-hidden border border-forest">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Shine Kyaw Kyaw Aung"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepgreen/80 via-deepgreen/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-sage animate-pulse"></div>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 mb-4">
                <span className="relative z-10">Software Engineer & Creative Developer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-sage/20 to-beige/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sage to-beige">
                Shine Kyaw Kyaw Aung
              </span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-sage to-beige rounded-full"></div>
            <p className="text-beige text-lg leading-relaxed">
              A passionate Machine Learning Engineer & Full Stack Developer specializing in AI-powered applications and
              modern web development. I love creating innovative solutions that bridge the gap between cutting-edge
              technology and real-world problems.
            </p>
            <p className="text-beige text-lg leading-relaxed">
              Currently focused on developing intelligent systems using PyTorch, TensorFlow, and modern web
              technologies. I enjoy working on projects that involve computer vision, natural language processing, and
              scalable web applications.
            </p>
          </div>
        </motion.div>

        {/* Content with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-start mb-24"
        >
          {/* Left Content */}
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-cream mb-6 relative">
                Areas of Expertise
                <div className="h-1 w-16 bg-gradient-to-r from-sage to-beige rounded-full absolute -bottom-2 left-0"></div>
              </h2>
              <div className="space-y-8">
                <div className="relative overflow-hidden rounded-xl bg-darkgreen/50 backdrop-blur-sm border border-darkgreen/50 p-6">
                  <div className="absolute -inset-1 bg-gradient-to-r from-sage/10 to-beige/10 rounded-xl blur opacity-25"></div>
                  <div className="relative">
                    <h3 className="font-semibold text-cream mb-4">Machine Learning & AI</h3>
                    <ul className="space-y-2 text-beige">
                      <li>• Deep Learning architecture design and implementation</li>
                      <li>• Natural Language Processing and Computer Vision</li>
                      <li>• PyTorch, TensorFlow, and Scikit-learn</li>
                      <li>• MLOps and Model Deployment</li>
                    </ul>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl bg-darkgreen/50 backdrop-blur-sm border border-darkgreen/50 p-6">
                  <div className="absolute -inset-1 bg-gradient-to-r from-sage/10 to-beige/10 rounded-xl blur opacity-25"></div>
                  <div className="relative">
                    <h3 className="font-semibold text-cream mb-4">Full Stack Development</h3>
                    <ul className="space-y-2 text-beige">
                      <li>• Modern web applications using React, Next.js, and Node.js</li>
                      <li>• RESTful API design and implementation</li>
                      <li>• Database design and optimization (SQL and NoSQL)</li>
                      <li>• Cloud infrastructure and deployment (AWS, GCP)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cream mb-6 relative">
                Professional Philosophy
                <div className="h-1 w-16 bg-gradient-to-r from-sage to-beige rounded-full absolute -bottom-2 left-0"></div>
              </h2>
              <div className="relative overflow-hidden rounded-xl bg-darkgreen/50 backdrop-blur-sm border border-darkgreen/50 p-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-sage/10 to-beige/10 rounded-xl blur opacity-25"></div>
                <div className="relative">
                  <p className="text-lg leading-relaxed text-beige">
                    I believe in building technology that not only pushes the boundaries of what's possible but also
                    maintains a strong focus on ethical considerations and real-world impact. My approach combines
                    rigorous theoretical understanding with practical implementation skills, always striving to create
                    solutions that are both innovative and sustainable.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cream mb-6 relative">
                Current Focus
                <div className="h-1 w-16 bg-gradient-to-r from-sage to-beige rounded-full absolute -bottom-2 left-0"></div>
              </h2>
              <div className="relative overflow-hidden rounded-xl bg-darkgreen/50 backdrop-blur-sm border border-darkgreen/50 p-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-sage/10 to-beige/10 rounded-xl blur opacity-25"></div>
                <div className="relative">
                  <ul className="space-y-2 text-beige">
                    <li>• Optimizing deep learning models for production environments</li>
                    <li>• Developing novel architectures for specific domain problems</li>
                    <li>• Contributing to open-source AI projects</li>
                    <li>• Research in privacy-preserving machine learning techniques</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Animation */}
          <div className="sticky top-32">
            <CreativeHero />
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8"
        >
          <h2 className="text-2xl font-bold text-cream mb-6 relative text-center">
            Get In Touch
            <div className="h-1 w-16 bg-gradient-to-r from-sage to-beige rounded-full absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <a
              href="mailto:hello@example.com"
              className="flex flex-col items-center gap-3 text-beige hover:text-sage transition-colors group"
            >
              <div className="bg-darkgreen p-4 rounded-full group-hover:bg-sage/10 transition-colors border border-forest">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-sm text-center">Email</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex flex-col items-center gap-3 text-beige hover:text-sage transition-colors group"
            >
              <div className="bg-darkgreen p-4 rounded-full group-hover:bg-sage/10 transition-colors border border-forest">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-sm text-center">Phone</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-beige hover:text-sage transition-colors group"
            >
              <div className="bg-darkgreen p-4 rounded-full group-hover:bg-sage/10 transition-colors border border-forest">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-sm text-center">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shinekyawkyawaung/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-beige hover:text-sage transition-colors group"
            >
              <div className="bg-darkgreen p-4 rounded-full group-hover:bg-sage/10 transition-colors border border-forest">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-sm text-center">LinkedIn</span>
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
