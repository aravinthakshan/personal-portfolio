"use client";

import React from "react";
import { motion } from "framer-motion";
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
  return (
    <section
      id={id}
      className="py-12 px-6 bg-[#0A0B14] relative overflow-hidden"
    >
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

        <div className="flex flex-col gap-12 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-600/20 transform -translate-x-1/2" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } relative`}
            >
              <div className="w-1/2 flex justify-end">
                {index % 2 === 0 && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="max-w-md bg-[#1A1B23] p-4 rounded-lg shadow-lg"
                  >
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-indigo-400 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-3">
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
                  </motion.div>
                )}
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-2">
                  {item.date}
                </span>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-4 h-4 bg-indigo-600 rounded-full relative"
                >
                  <div className="absolute inset-0 w-4 h-4 rounded-full border-4 border-[#0A0B14]" />
                  <div className="absolute inset-0 bg-indigo-600 rounded-full animate-ping opacity-75" />
                </motion.div>
              </div>

              <div className="w-1/2">
                {index % 2 === 1 && (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="max-w-md bg-[#1A1B23] p-4 rounded-lg shadow-lg"
                  >
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-indigo-400 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs mb-3">
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
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
