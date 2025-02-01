import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "A S Aravinthakshan - Portfolio",
  description: "ML Engineer & Full Stack Developer Portfolio",
  openGraph: {
    title: "A S Aravintakshan - Portfolio",
    description: "ML Engineer & Full Stack Developer Portfolio",
    url: "https://aravinthakshan-git-main-aravinthakshans-projects.vercel.app/",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "/preview,png", // Path to your OG image in public folder
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A S Aravinthakshan- Portfolio",
    description: "ML Engineer & Full Stack Developer Portfolio",
    images: ["/og-image.jpg"],
    creator: "@yourusername",
  },
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
