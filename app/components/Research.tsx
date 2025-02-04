"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const timelineData = [
  {
    date: "February 2024",
    title: "Research Apprenticeship at Arizona State University",
    image: "/ASU.png",
    description:
      "Working on prostate cancer stage classification using a random walk algorithm and Graph Neural Networks in collaboration with Wu-Lab.",
    tags: ["Graph Neural Networks", "Healthcare AI", "Classification"],
  },
  {
    date: "March 2024",
    title: "Undergraduate Researcher at MIT Manipal",
    image: "/manipal-logo.png",
    description:
      'Co-authored "AdaptPhishSysNet: Adaptive Phishing Detection System for Blockchains using Machine Learning" - accepted at ISBM Conference 2024.',
    tags: ["Blockchain", "Security", "Machine Learning"],
  },
  {
    date: "June 2024",
    title: "Research Apprenticeship at Indian Statistical Institute",
    image: "/Indian-Statistical-Institute-ISI.png",
    description:
      "Designing a custom clustering algorithm for small object detection in wildlife monitoring using UAVs.",
    tags: ["Computer Vision", "Clustering", "Wildlife Monitoring"],
  },
  {
    date: "August 2024",
    title: "Research Internship at KLIV",
    image: "/IIT_Kharagpur_Logo.png",
    description: "Working on Federated Learning.",
    tags: ["Federated Learning", "Computer Vision", "Machine Learning"],
  },
];

export default function ResearchTimeline({ id }: { id?: string }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]); // Moved useTransform outside the map

  return (
    <section
      id={id}
      className="py-12 px-6 bg-[#0A0B14] relative overflow-hidden"
      ref={containerRef}
    >
      {/* Starry background */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-left"
        >
          <h2 className="text-4xl font-bold text-indigo-500 mb-2">
            Research Timeline
          </h2>
          <p className="text-gray-400 text-lg">
            My journey in AI and Machine Learning research
          </p>
        </motion.div>

        <div className="relative w-full h-[600px] overflow-hidden">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            const xPos = 200 + index * 400; // Increased spacing between items
            const yPos = isEven ? 150 : 450;
            const prevX = index > 0 ? 200 + (index - 1) * 400 : null;
            const prevY = index > 0 ? (isEven ? 450 : 150) : null;

            return (
              <React.Fragment key={item.title}>
                {index > 0 && (
                  <motion.svg
                    className="absolute left-0 top-0 w-full h-full"
                    style={{
                      zIndex: 0,
                      pathLength: pathLength, // Use the pathLength variable here
                    }}
                  >
                    <motion.path
                      d={`M ${prevX} ${prevY} H ${
                        (xPos + prevX!) / 2
                      } V ${yPos} H ${xPos}`}
                      stroke="rgba(99, 102, 241, 0.2)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: index * 0.5 }}
                    />
                  </motion.svg>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="absolute z-10"
                  style={{
                    left: xPos,
                    top: yPos,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="relative">
                    {/* Date label */}
                    <motion.div
                      className={`absolute ${
                        isEven ? "-top-8" : "-bottom-8"
                      } left-1/2 transform -translate-x-1/2 whitespace-nowrap`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                        {item.date}
                      </span>
                    </motion.div>

                    {/* Timeline dot */}
                    <motion.div
                      className="w-4 h-4 bg-indigo-600 rounded-full relative"
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="absolute inset-0 w-4 h-4 rounded-full border-4 border-[#0A0B14]" />
                      <div className="absolute inset-0 bg-indigo-600 rounded-full animate-ping opacity-75" />
                    </motion.div>

                    {/* Content card */}
                    <motion.div
                      className={`absolute ${
                        isEven ? "top-8" : "bottom-8"
                      } left-1/2 -translate-x-1/2 w-72`}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="bg-[#1A1B23] rounded-lg p-4 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-sm font-semibold text-indigo-400 mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-xs mb-3 line-clamp-3">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-600/10 text-indigo-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
