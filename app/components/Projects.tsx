"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

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

export default function Projects({ id }: { id?: string }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    const scroll = () => {
      if (!isDragging) {
        if (container.scrollLeft >= scrollWidth - clientWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1;
        }
      }
    };

    const intervalId = setInterval(scroll, 50);

    return () => clearInterval(intervalId);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current!.offsetLeft);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id={id} className="py-10 px-6 bg-[#0A0B14] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
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
          className="flex overflow-x-hidden space-x-6 py-4 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="flex-shrink-0 w-[250px] relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={controls}
            >
              <AnimatedCard isHovered={hoveredIndex === index}>
                <div className="aspect-[3/4] relative mb-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-[#6366F1] transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-gray-400 text-sm transition-all duration-300 ease-in-out",
                    hoveredIndex === index ? "line-clamp-none" : "line-clamp-2"
                  )}
                >
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-[#6366F1]/10 text-[#6366F1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#6366F1] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#6366F1] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCard({
  children,
  isHovered,
}: {
  children: React.ReactNode;
  isHovered: boolean;
}) {
  return (
    <div className="relative h-full">
      <motion.div
        className={cn(
          "absolute inset-0 bg-[#1A1B23] rounded-xl border border-[#6366F1]/20",
          isHovered ? "opacity-100" : "opacity-100"
        )}
        layoutId="hoverBackground"
        initial={false}
        animate={{
          scale: isHovered ? 1.05 : 1,
          boxShadow: isHovered
            ? "0 10px 30px -15px rgba(99, 102, 241, 0.4)"
            : "0 0 0 0 rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.2 }}
      />
      <div className="relative z-10 p-4 h-full">{children}</div>
    </div>
  );
}
