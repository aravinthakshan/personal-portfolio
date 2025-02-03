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
    image: "/Indian-Statistical-Institute-ISI.png",
    description: "Working on Federated Learning.",
    tags: ["Federated Learning", "Computer Vision", "Machine Learning"],
  },
];

export default function ResearchTimeline({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 px-6 bg-[#0A0B14]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text">
            Research Timeline
          </h2>
          <p className="text-gray-400 mt-2">
            My journey in AI and Machine Learning research
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 w-1 h-full bg-indigo-600/20 md:left-1/2 md:-ml-0.5" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              <div
                className={`flex items-center md:justify-between ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content container */}
                <div className="ml-24 md:ml-0 md:w-5/12">
                  <div className="bg-[#1A1B23] p-6 rounded-xl">
                    <span className="text-indigo-500 font-semibold">
                      {item.date}
                    </span>
                    <div className="relative w-full aspect-video mt-4 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white mt-4">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-400">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-indigo-600/10 text-indigo-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-8 w-4 h-4 bg-indigo-600 rounded-full md:left-1/2 md:-ml-2">
                  <div className="w-4 h-4 bg-indigo-600 rounded-full animate-ping" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
