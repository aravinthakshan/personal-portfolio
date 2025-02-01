import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "About - A S Aravinthakshan",
  description:
    "Learn more about A S Aravinthakshan - Machine Learning Engineer and Full Stack Developer",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
