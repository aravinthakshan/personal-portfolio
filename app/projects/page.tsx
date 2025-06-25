"use client";

import { useEffect, useState } from "react";

const placeholderImages = [
  "https://via.placeholder.com/800x600?text=Project+Image+1",
  "https://via.placeholder.com/800x600?text=Project+Image+2",
  "https://via.placeholder.com/800x600?text=Project+Image+3",
  "https://via.placeholder.com/800x600?text=Project+Image+4",
];

const projectDescription = `
  This is a dedicated project page with a unique, modern layout. The left side features a large, dynamic placeholder image that changes every few seconds. On the right, you'll find a clean and elegant description area for your project details. This layout is designed to be visually striking and easy to read, making your project stand out.
`;

export default function ProjectPage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % placeholderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#091717] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl border border-[#5c724a]/30 bg-[#1A1B23]/60">
        {/* Image Section */}
        <div className="md:w-2/3 w-full h-[350px] md:h-[500px] flex items-center justify-center bg-[#5c724a]/10 transition-all duration-700">
          <img
            src={placeholderImages[currentImage]}
            alt="Project Placeholder"
            className="object-cover w-full h-full transition-all duration-700 rounded-none md:rounded-l-3xl"
            style={{ boxShadow: "0 8px 32px 0 rgba(44,62,80,0.25)" }}
          />
        </div>
        {/* Description Section */}
        <div className="md:w-1/3 w-full flex flex-col justify-center p-10 bg-[#091717] text-[#A1A16A]">
          <h1 className="text-3xl font-bold mb-6 text-[#5c724a]">Project Title</h1>
          <p className="text-lg leading-relaxed mb-8">{projectDescription}</p>
          <div className="flex flex-col gap-4 mt-auto">
            <button className="px-6 py-3 rounded-lg bg-[#a3b68a] text-[#091717] font-semibold hover:bg-[#5c724a] hover:text-[#A1A16A] transition-colors">View Live Demo</button>
            <button className="px-6 py-3 rounded-lg border-2 border-[#5c724a] text-[#5c724a] font-semibold hover:bg-[#5c724a] hover:text-[#A1A16A] transition-colors">View Source Code</button>
          </div>
        </div>
      </div>
    </main>
  );
} 