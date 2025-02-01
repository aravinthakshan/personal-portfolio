"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const research = [
  {
    title: "Research Apprenticeship at Arizona State University",
    image: "/ASU.png",
    description:
      "Working on prostate cancer stage classification using a random walk algorithm and Graph Neural Networks in collaboration with Wu-Lab.",
    tags: ["Graph Neural Networks", "Healthcare AI", "Classification"],
  },
  {
    title: "Undergraduate Researcher at MIT Manipal",
    image: "/manipal-logo.png",
    description:
      'Co-authored "AdaptPhishSysNet: Adaptive Phishing Detection System for Blockchains using Machine Learning" - accepted at ISBM Conference 2024.',
    tags: ["Blockchain", "Security", "Machine Learning"],
  },
  {
    title: "Research Apprenticeship at Indian Statistical Institute",
    image: "/Indian-Statistical-Institute-ISI.png",
    description:
      "Designing a custom clustering algorithm for small object detection in wildlife monitoring using UAVs.",
    tags: ["Computer Vision", "Clustering", "Wildlife Monitoring"],
  },
];

export default function Research({ id }: { id?: string }) {
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
          <h2 className="text-3xl font-bold gradient-text">Research</h2>
          <p className="text-gray-400 mt-2">
            Contributing to academic research in AI and Machine Learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {research.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#1A1B23] rounded-xl overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1B23] to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#6366F1] transition-colors">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-[#6366F1] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="mt-2 text-gray-400 text-sm line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-[#6366F1]/10 text-[#6366F1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
