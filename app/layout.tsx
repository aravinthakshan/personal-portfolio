import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://aravinthakshan-git-main-aravinthakshans-projects.vercel.app/"
  ),
  title: "A S Aravinthakshan - ML Engineer & Full Stack Developer",
  description:
    "Portfolio of A S Aravinthakshan - Machine Learning Engineer and Full Stack Developer",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    title: "A S Aravinthakshan - Portfolio",
    description: "ML Engineer & Full Stack Developer Portfolio",
    siteName: "A S Aravinthakshan",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "A S Aravinthakshan Portfolio preview.png",
      },
    ],
    locale: "en_US",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "A S Aravinthakshan - Portfolio",
    description: "ML Engineer & Full Stack Developer Portfolio",
    images: ["/preview.png"],
    creator: "@yourusername",
  },

  // Additional metadata for other platforms
  other: {
    "discord:image": "/preview.png",
    "discord:title": "A S Aravinthakshan - Portfolio",
    "discord:description": "ML Engineer & Full Stack Developer Portfolio",

    "linkedin:image": "/preview.png",
    "linkedin:title": "A S Aravinthakshan - Portfolio",
    "linkedin:description": "ML Engineer & Full Stack Developer Portfolio",

    "whatsapp:image": "/preview.png",
    "whatsapp:title": "A S Aravinthakshan - Portfolio",
    "whatsapp:description": "ML Engineer & Full Stack Developer Portfolio",
  },
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
