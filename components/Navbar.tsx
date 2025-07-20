"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(" ", "").replace("join", "cta"));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="p-4 shadow-md sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo with Link to Home */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/CoFoundr.ai.svg" alt="Logo" className="h-8 w-auto cursor-pointer" />
        </Link>

        {/* Desktop Nav */}
        <nav className="space-x-6 hidden sm:block text-sm font-medium">
          {["features", "How It Works", "pricing", "Join"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="hover:text-indigo-600 transition"
            >
              {id}
            </button>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden block text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden px-4 pt-4 pb-2 space-y-2 text-sm font-medium">
          {["features", "How It Works", "pricing", "Join"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block w-full text-left hover:text-indigo-600"
            >
              {id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ")}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
