"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-[#0A0B14] pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-indigo-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold gradient-text mb-8"
        >
          About Me
        </motion.h1>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6 text-gray-300"
        >
          <p>
            I am a Machine Learning Engineer and Full Stack Developer with a
            passion for building AI-powered applications that solve real-world
            problems. My journey in technology began with a deep curiosity about
            how artificial intelligence could transform the way we interact with
            computers and data.
          </p>

          <p>
            Currently pursuing my Bachelor's degree in Computer Science, I've
            had the opportunity to work on diverse projects ranging from
            federated learning systems to computer vision applications. My
            research work spans multiple prestigious institutions, where I've
            contributed to cutting-edge developments in AI and machine learning.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            Areas of Expertise
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-indigo-400 mb-2">
                Machine Learning & AI
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Deep Learning architecture design and implementation</li>
                <li>Natural Language Processing and Computer Vision</li>
                <li>Federated Learning and Distributed Systems</li>
                <li>MLOps and Model Deployment</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium text-indigo-400 mb-2">
                Full Stack Development
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  Modern web applications using React, Next.js, and Node.js
                </li>
                <li>RESTful API design and implementation</li>
                <li>Database design and optimization (SQL and NoSQL)</li>
                <li>Cloud infrastructure and deployment (AWS, GCP)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            Research Interests
          </h2>
          <p>
            My research interests lie at the intersection of machine learning
            and practical applications. I'm particularly focused on:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mt-2">
            <li>Graph Neural Networks and their applications in healthcare</li>
            <li>Efficient deep learning architectures for edge devices</li>
            <li>AI security and privacy-preserving machine learning</li>
            <li>Computer vision for wildlife monitoring and conservation</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            Professional Philosophy
          </h2>
          <p>
            I believe in building technology that not only pushes the boundaries
            of what's possible but also maintains a strong focus on ethical
            considerations and real-world impact. My approach combines rigorous
            theoretical understanding with practical implementation skills,
            always striving to create solutions that are both innovative and
            sustainable.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
            Current Focus
          </h2>
          <p>
            Currently, I'm focused on developing AI systems that are more
            efficient, interpretable, and accessible. This includes work on:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mt-2">
            <li>Optimizing deep learning models for production environments</li>
            <li>Developing novel architectures for specific domain problems</li>
            <li>Contributing to open-source AI projects</li>
            <li>Research in privacy-preserving machine learning techniques</li>
          </ul>

          <div className="mt-12 text-gray-400">
            <p>
              I'm always open to discussing new projects, research
              collaborations, or opportunities to contribute to innovative AI
              initiatives. Feel free to reach out if you'd like to connect or
              discuss potential collaborations.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
