import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A S Aravinthakshan - ML Engineer & Full Stack Developer",
  description:
    "Portfolio of A S Aravinthakshan - Machine Learning Engineer and Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-[#0A0A0B] text-white min-h-screen`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
