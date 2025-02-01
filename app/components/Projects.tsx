"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

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
      "A document analysis application using FastAPI (backend) and React (frontend) to process and analyze text from documents, or just free form large corpus of texr or user inputs, powered by Google Gemini AI and LangChain.",
    image: "/RAG.png",
    tags: ["RAG", "NLP", "Backend Development"],
    github: "https://github.com/username/project2",
    demo: "https://demo.com/project2",
  },
  {
    title: "Agentic Desktop Automation",
    description:
      "An intelligent agent that organizes your desktop, manages files, automates emails, interacts with your browser, and streamlines daily tasks seamlessly.",
    image: "/Agentics.jpg",
    tags: ["RAG", "Agentic AI", "Docker"],
    github: "https://github.com/username/project2",
    demo: "https://demo.com/project2",
  },
  {
    title: "OpenCV Hand and Face Tracker",
    description:
      "A computer vision application using OpenCV to track hand gestures and facial features while detecting background objects in real-time. Deployed seamlessly on Streamlit for interactive visualization.",
    image: "/Opencv.jpg",
    tags: ["Computer Vision", "AI", "Streamlit", "Object Detection"],
    github: "https://github.com/username/project2",
    demo: "https://demo.com/project2",
  },
  {
    title: "JavaTorch",
    description:
      "A deep learning framework built on Java, a basic level replica of pytorch's functionalities in java.",
    image: "/javatorch.png",
    tags: ["Deep Learning", "AI", "Java", "PyTorch"],
    github: "https://github.com/username/project2",
    demo: "https://demo.com/project2",
  },
];

export default function Projects({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 px-6 bg-[#0A0B14]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-2">
            Showcasing my best work in AI and software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#1A1B23] rounded-xl overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#6366F1] transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-[#6366F1] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="mt-2 text-gray-400 text-sm line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-[#6366F1]/10 text-[#6366F1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#6366F1] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#6366F1] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
