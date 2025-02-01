import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://aravinthakshan-git-main-aravinthakshans-projects.vercel.app/"
  ),
  title: "A S Aravinthakshan - Portfolio",
  description: "ML Engineer & Full Stack Developer Portfolio",

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
    shortcut: ["/favicon.ico"],
  },
  // Open Graph / Facebook / WhatsApp / Instagram / Discord
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
        alt: "A S Aravinthakshan Portfolio Preview",
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

  // Basic metadata
  keywords: [
    "ML Engineer",
    "Full Stack Developer",
    "Portfolio",
    "A S Aravinthakshan",
  ],
  authors: [{ name: "A S Aravinthakshan" }],
  robots: "index, follow",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
