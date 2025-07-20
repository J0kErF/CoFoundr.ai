"use client";
import { useState } from "react";

export default function CtaSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("success");
      setMessage("🎉 You're on the list!");
      setEmail("");
    } else {
      setStatus("error");
      setMessage(data.error || "Something went wrong");
    }
  };

  return (
    <section id="cta" className="bg-indigo-600 py-24 text-white text-center px-6">
      <h3 className="text-3xl font-bold mb-4">Join the Waitlist</h3>
      <p className="mb-8">
        Be the first to access your AI co-founder. Early users get lifetime discounts.
      </p>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-3 bg-white rounded text-gray-800 mb-4"
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-white text-indigo-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 w-full transition"
        >
          {status === "loading" ? "Joining..." : "Join Early Access"}
        </button>
        {message && (
          <p className={`mt-2 text-md font-medium ${status === "success" ? "text-white" : "text-red-500"}`}>
            {message}
          </p>
        )}
      </form>
    </section>
  );
}
