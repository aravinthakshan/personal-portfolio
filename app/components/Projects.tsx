"use client";

// the spider back doesnt appear here

import { useState, useRef, useEffect } from "react";
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
    description:
      "A deep learning framework built on Java, a basic level replica of pytorch's functionalities in java.",
    image: "/javatorch.png",
    tags: ["Deep Learning", "AI", "Java", "PyTorch"],
    github: "https://github.com/username/project6",
    demo: "https://demo.com/project6",
  },
];

const extendedProjects = [...projects, ...projects, ...projects];

export default function Projects({ id }: { id?: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || isPaused) return;

    let animationFrameId: number;
    let lastTimestamp = 0;
    const speed = 0.3; // Reduced speed (pixels per millisecond)

    const animate = (timestamp: number) => {
      if (lastTimestamp === 0) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (container) {
        container.scrollLeft += speed * delta;
        if (container.scrollLeft >= container.scrollWidth / 3) {
          container.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section id={id} className="py-20 px-6 bg-[#091717] overflow-hidden">
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

        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-scroll overflow-y-visible h-[400px] scrollbar-hide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {extendedProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              className="flex-shrink-0 w-[300px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className={`bg-[#5c724a] rounded-xl border transition-all duration-300 ${
                  hoveredIndex === index
                    ? "border-[#a3b68a] shadow-lg shadow-[#a3b68a]/10"
                    : "border-[#a3b68a]/20"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-4">
                  <div className="relative w-full aspect-video mb-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-[#6366F1]/10 text-[#6366F1]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
