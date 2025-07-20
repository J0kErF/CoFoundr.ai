// app/layout.tsx
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "CoFoundr – Your AI Co-Founder",
  description:
    "Launch your startup in minutes with CoFoundr. Get branding, website, strategy, and investor-ready pitch deck — all powered by AI.",
  keywords: [
    "AI startup",
    "startup builder",
    "AI startup builder",
    "AI startup launch",
    "AI business model",
    "AI branding",
    "AI website",
    "AI pitch deck",
    "AI business tools",
    "AI startup tools",  
    "AI co-founder",
    "pitch deck generator",
    "business model canvas",
    "branding AI",
    "startup automation",
    "AI startup accelerator",
    "AI startup growth",
    "AI startup marketing",
    "lean canvas AI",
    "MVP generator",
    "AI startup ideas",
    "AI startup validation",
    "AI startup strategy",
    "AI startup funding",
    "website generator",
    "AI business tools",
    "startup toolkit",
    "founder tools",
    "AI branding",
    "AI website builder",
    "AI pitch deck",
    "AI business model",
    "AI startup tools",
    "AI co-founder tools",
    "AI startup accelerator",
    "AI business accelerator",
    "AI startup launch",
    "AI startup ideas",
    "AI startup strategy",
    "AI startup validation",
    "AI startup growth",
    "AI startup marketing",
    "AI startup funding",
    "AI startup success",
    "AI startup innovation",
    "AI startup ecosystem",
    "AI startup community",
    "AI startup resources",
    "AI startup mentorship",
    "AI startup networking",
    "AI startup support",
    "AI startup development",
    "AI startup tools for founders",
    "AI startup tools for entrepreneurs",
    "AI startup tools for startups",
    "AI startup tools for business",
    "AI startup tools for innovation",
    "AI startup tools for growth",
    "AI startup tools for success",
    "AI startup tools for marketing",
    "AI startup tools for funding",
    "AI startup tools for validation",
    "AI startup tools for strategy",
    "AI startup tools for branding",
    "AI startup tools for website",
    "AI startup tools for pitch deck",
    "AI startup tools for business model",
    "AI startup tools for MVP",
    "AI startup tools for automation",
    "AI startup tools for collaboration",
    "AI startup tools for team",
    "AI startup tools for productivity",
    "AI startup tools for efficiency",
    "AI startup tools for innovation",
    "AI startup tools for creativity",
    "AI startup tools for problem-solving",
    "AI startup tools for decision-making",
    "AI startup tools for analysis",
    "AI startup tools for insights",
    "AI startup tools for research",
    "AI startup tools for data",
    "AI startup tools for intelligence",
    "AI startup tools for learning",
    "AI startup tools for knowledge",
    "AI startup tools for expertise",
    "AI startup tools for skills",
    "AI startup tools for training",
    "AI startup tools for education",
    "AI startup tools for development",
    "AI startup tools for growth hacking",
    "AI startup tools for scaling",
    "AI startup tools for optimization",
    "AI startup tools for performance",
    "AI startup tools for analytics",
    "AI startup tools for metrics",
    "AI startup tools for KPIs",
  ],
  metadataBase: new URL("https://cofoundr.mryosef.com"),
  authors: [
    {
      name: "CoFoundr Team",
      url: "https://cofoundr.mryosef.com",
    },
  ],
  openGraph: {
    title: "CoFoundr – Your AI Co-Founder",
    description:
      "Cofoundr helps you launch your startup faster using AI. Branding, website, deck & more in minutes.",
    url: "https://cofoundr.mryosef.com",
    siteName: "CoFoundr",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CoFoundr AI Startup Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoFoundr – Your AI Co-Founder",
    description:
      "Cofoundr helps you launch your startup faster using AI. Branding, website, deck & more in minutes.",
    site: "@cofoundr",
    creator: "@mryosef",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/CoFoundr.ai.svg",
        color: "#4F46E5", // Tailwind indigo-600
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large", // Changed from number to string
      "max-video-preview": "large", // Changed from number to string
      "max-snippet": -1, // Changed from string to number
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
