"use client";

import Button from "../ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-black text-white overflow-hidden">

      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-20 blur-3xl"></div>

      <div className="relative z-10">
        <h1 className="text-6xl font-bold mb-6">
          Build Faster with AI
        </h1>
        <p className="mb-8 text-lg opacity-80">
          Your AI-powered website system.
        </p>
        <Button>Start Now</Button>
      </div>
    </section>
  );
}