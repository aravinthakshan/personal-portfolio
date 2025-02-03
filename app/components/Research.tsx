"use client";

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
    <section id={id} className="py-20 px-6 bg-[#0A0B14] overflow-x-auto">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-indigo-500">Experience</h2>
          <p className="text-gray-400 mt-2">
            My journey in AI and software development.
          </p>
        </motion.div>

        <div className="relative min-w-max">
          <div className="absolute top-24 left-0 w-full h-1 bg-indigo-600/20" />
          <div className="flex">
            {timelineData.map((item, index) => (
              <div key={item.title} className="relative px-4 w-96">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-20 left-1/2 -ml-2 w-4 h-4 bg-indigo-600 rounded-full">
                    <div className="w-4 h-4 bg-indigo-600 rounded-full animate-ping" />
                  </div>

                  <div className="relative mb-8">
                    <span className="block text-indigo-500 text-sm font-medium mb-2">
                      {item.date}
                    </span>
                  </div>

                  <div className="bg-[#1A1B23] rounded-xl p-6">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
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
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
