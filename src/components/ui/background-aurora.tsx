"use client";

import { motion } from "framer-motion";

interface BackgroundAuroraProps {
  className?: string;
}

export function BackgroundAurora({ className = "" }: BackgroundAuroraProps) {
  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Base white/slate background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      {/* Aurora gradient - top right */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-60"
        style={{
          background: "radial-gradient(circle, rgba(147, 197, 253, 0.5) 0%, rgba(196, 181, 253, 0.3) 50%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Aurora gradient - bottom left */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-50"
        style={{
          background: "radial-gradient(circle, rgba(165, 243, 252, 0.4) 0%, rgba(147, 197, 253, 0.2) 50%, transparent 70%)",
        }}
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional subtle gradient - center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(186, 230, 253, 0.3) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30, 64, 175, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 64, 175, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
