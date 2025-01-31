"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

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
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-900/30 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/20 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto relative z-10">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-gradient rounded-xl overflow-hidden group"
            >
              <div className="relative h-64">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-indigo-600/90 px-3 py-1 rounded-full text-sm text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
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
