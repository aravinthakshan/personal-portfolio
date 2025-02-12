"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    title: "Federated Learning Recommendation System",
    description:
      "Designed a federated learning system allowing multiple clients to train recommendation models locally without centralizing sensitive information. Used Redis for caching and Flask backend.",
    image: "/FL.png",
    tags: ["Full Stack", "Software Development", "Machine Learning"],
    github: "https://github.com/username/project1",
    demo: "https://demo.com/project1",
  },
  {
    title: "Sentiment Analysis Model API",
    description:
      "Engineered a sentiment analysis classifier hosted on Firebase with Google Cloud API. Built with React, Tailwind, and achieved 92% accuracy using DistilBERT.",
    image: "/Sentiment.png",
    tags: ["Machine Learning", "NLP", "Backend Development"],
    github: "https://github.com/username/project2",
    demo: "https://demo.com/project2",
  },
  {
    title: "RAG Based Document Analyzer",
    description:
      "A document analysis application using FastAPI (backend) and React (frontend) to process and analyze text from documents, or just free form large corpus of text or user inputs, powered by Google Gemini AI and LangChain.",
    image: "/RAG.png",
    tags: ["RAG", "NLP", "Backend Development"],
    github: "https://github.com/username/project3",
    demo: "https://demo.com/project3",
  },
  {
    title: "Agentic Desktop Automation",
    description:
      "An intelligent agent that organizes your desktop, manages files, automates emails, interacts with your browser, and streamlines daily tasks seamlessly.",
    image: "/Agentics.jpg",
    tags: ["RAG", "Agentic AI", "Docker"],
    github: "https://github.com/username/project4",
    demo: "https://demo.com/project4",
  },
  {
    title: "OpenCV Hand and Face Tracker",
    description:
      "A computer vision application using OpenCV to track hand gestures and facial features while detecting background objects in real-time. Deployed seamlessly on Streamlit for interactive visualization.",
    image: "/Opencv.jpg",
    tags: ["Computer Vision", "AI", "Streamlit", "Object Detection"],
    github: "https://github.com/username/project5",
    demo: "https://demo.com/project5",
  },
  {
    title: "JavaTorch",
    description: "A deep learning framework built on Java, a basic level replica of pytorch's functionalities in java.",
    image: "/javatorch.png",
    tags: ["Deep Learning", "AI", "Java", "PyTorch"],
    github: "https://github.com/username/project6",
    demo: "https://demo.com/project6",
  },
]

export default function Projects({ id }: { id?: string }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 5000) // Change project every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <section id={id} className="py-20 bg-[#0A0B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-500 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400">Showcasing my best work in AI and software development</p>
        </motion.div>

        <div className="relative h-[600px] overflow-hidden" ref={containerRef}>
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <AnimatePresence initial={false}>
            <motion.div
              key={activeIndex}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="bg-[#1A1B23] rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <Image
                      src={projects[activeIndex].image || "/placeholder.svg"}
                      alt={projects[activeIndex].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-1/2">
                    <h3 className="text-2xl font-bold text-white mb-4">{projects[activeIndex].title}</h3>
                    <p className="text-gray-400 mb-6">{projects[activeIndex].description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[activeIndex].tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-indigo-600/10 text-indigo-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={projects[activeIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                      </a>
                      <a
                        href={projects[activeIndex].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-indigo-500" : "bg-gray-600"}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

