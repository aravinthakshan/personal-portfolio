"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Mail, Github, Linkedin, Phone, HomeIcon } from "lucide-react";

export default function About() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0A0B14] z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="px-4 py-2 border-2 border-[#6366F1] text-white hover:bg-[#6366F1] transition-colors rounded-md flex items-center gap-2"
          >
            <HomeIcon className="w-4 h-4" />
            Main Dashboard
          </Link>
          <button
            onClick={scrollToContact}
            className="text-white hover:text-[#6366F1] transition-colors flex items-center gap-2"
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
            <Image
              src="/placeholder.svg"
              alt="Profile"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-normal">
              I'm Aravinthakshan, a Machine Learning Engineer & Full Stack
              Developer
            </h1>
            <div className="h-0.5 w-24 bg-[#6366F1]" />
            <p className="text-gray-600 text-lg leading-relaxed">
              I specialize in developing AI-powered applications and conducting
              research in machine learning. Currently working on projects
              involving federated learning, computer vision, and natural
              language processing.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              When I'm not coding or researching, you'll find me exploring new
              AI research papers, contributing to open-source projects, and
              mentoring aspiring developers in machine learning.
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-12 text-gray-600 max-w-4xl"
        >
          {/* Previous sections remain the same until Contact section */}
          <section>
            <h2 className="text-2xl text-black mb-6 relative">
              Areas of Expertise
              <div className="h-0.5 w-16 bg-[#6366F1] absolute -bottom-2 left-0" />
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-black mb-4">
                  Machine Learning & AI
                </h3>
                <ul className="space-y-2">
                  <li>Deep Learning architecture design and implementation</li>
                  <li>Natural Language Processing and Computer Vision</li>
                  <li>Federated Learning and Distributed Systems</li>
                  <li>MLOps and Model Deployment</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-black mb-4">
                  Full Stack Development
                </h3>
                <ul className="space-y-2">
                  <li>
                    Modern web applications using React, Next.js, and Node.js
                  </li>
                  <li>RESTful API design and implementation</li>
                  <li>Database design and optimization (SQL and NoSQL)</li>
                  <li>Cloud infrastructure and deployment (AWS, GCP)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-6 relative">
              Research Interests
              <div className="h-0.5 w-16 bg-[#6366F1] absolute -bottom-2 left-0" />
            </h2>
            <ul className="space-y-2">
              <li>
                Graph Neural Networks and their applications in healthcare
              </li>
              <li>Efficient deep learning architectures for edge devices</li>
              <li>AI security and privacy-preserving machine learning</li>
              <li>Computer vision for wildlife monitoring and conservation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-6 relative">
              Professional Philosophy
              <div className="h-0.5 w-16 bg-[#6366F1] absolute -bottom-2 left-0" />
            </h2>
            <p className="text-lg leading-relaxed">
              I believe in building technology that not only pushes the
              boundaries of what's possible but also maintains a strong focus on
              ethical considerations and real-world impact. My approach combines
              rigorous theoretical understanding with practical implementation
              skills, always striving to create solutions that are both
              innovative and sustainable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-6 relative">
              Current Focus
              <div className="h-0.5 w-16 bg-[#6366F1] absolute -bottom-2 left-0" />
            </h2>
            <ul className="space-y-2">
              <li>
                Optimizing deep learning models for production environments
              </li>
              <li>
                Developing novel architectures for specific domain problems
              </li>
              <li>Contributing to open-source AI projects</li>
              <li>
                Research in privacy-preserving machine learning techniques
              </li>
            </ul>
          </section>

          {/* Contact Section */}
          <section id="contact" className="pt-8">
            <h2 className="text-2xl text-black mb-6 relative">
              Contact
              <div className="h-0.5 w-16 bg-[#6366F1] absolute -bottom-2 left-0" />
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a
                href="mailto:aravinthakshanmain@gmail.com"
                className="flex items-center gap-3 text-gray-600 hover:text-[#6366F1] transition-colors group"
              >
                <div className="bg-gray-100 p-3 rounded-full group-hover:bg-[#6366F1]/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">Email</span>
              </a>
              <a
                href="tel:+918754563674"
                className="flex items-center gap-3 text-gray-600 hover:text-[#6366F1] transition-colors group"
              >
                <div className="bg-gray-100 p-3 rounded-full group-hover:bg-[#6366F1]/10 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm">Phone</span>
              </a>
              <a
                href="https://github.com/aravinthakshan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-[#6366F1] transition-colors group"
              >
                <div className="bg-gray-100 p-3 rounded-full group-hover:bg-[#6366F1]/10 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/aravinthakshan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-[#6366F1] transition-colors group"
              >
                <div className="bg-gray-100 p-3 rounded-full group-hover:bg-[#6366F1]/10 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </section>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0A0B14] py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-sm"
          >
            <p>Website built by A S Aravinthakshan</p>
            <p className="mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
