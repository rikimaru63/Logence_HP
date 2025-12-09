"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Clock, Server, Wallet } from "lucide-react";

// Blob configurations with Logence brand colors
const blobs = [
  {
    // Logence Navy
    color: "rgba(30, 58, 95, 0.8)",
    size: 300,
    initialX: 20,
    initialY: 30,
    duration: 20,
    path: { x: [0, 80, -40, 60, 0], y: [0, -60, 40, -20, 0] },
    scale: [1, 1.2, 0.9, 1.1, 1],
  },
  {
    // Royal Blue
    color: "rgba(37, 99, 235, 0.7)",
    size: 250,
    initialX: 60,
    initialY: 50,
    duration: 18,
    path: { x: [0, -60, 40, -30, 0], y: [0, 50, -40, 30, 0] },
    scale: [1.1, 0.9, 1.2, 1, 1.1],
  },
  {
    // Cyan
    color: "rgba(6, 182, 212, 0.6)",
    size: 220,
    initialX: 40,
    initialY: 70,
    duration: 22,
    path: { x: [0, 50, -70, 20, 0], y: [0, -30, 60, -50, 0] },
    scale: [0.9, 1.1, 1, 1.2, 0.9],
  },
  {
    // Purple accent
    color: "rgba(139, 92, 246, 0.5)",
    size: 200,
    initialX: 70,
    initialY: 20,
    duration: 25,
    path: { x: [0, -40, 60, -50, 0], y: [0, 70, -30, 40, 0] },
    scale: [1, 1.15, 0.95, 1.05, 1],
  },
  {
    // Light blue highlight
    color: "rgba(96, 165, 250, 0.6)",
    size: 180,
    initialX: 30,
    initialY: 60,
    duration: 16,
    path: { x: [0, 30, -50, 40, 0], y: [0, -40, 20, -30, 0] },
    scale: [1.05, 0.95, 1.1, 1, 1.05],
  },
];

// Stats for the glass overlay
const stats = [
  { icon: Clock, value: "80%", label: "削減" },
  { icon: Server, value: "24/7", label: "稼働" },
  { icon: Wallet, value: "0円", label: "初期費用" },
];

export function GradientOrb() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[400px] md:min-h-[500px] overflow-hidden"
    >
      {/* Blob container with blur effect */}
      <div className="absolute inset-0 blur-[80px]">
        {blobs.map((blob, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: blob.size,
              height: blob.size,
              background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
              left: `${blob.initialX}%`,
              top: `${blob.initialY}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              x: blob.path.x,
              y: blob.path.y,
              scale: blob.scale,
            }}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Secondary layer for depth */}
      <div className="absolute inset-0 blur-[40px] opacity-60">
        {blobs.slice(0, 3).map((blob, index) => (
          <motion.div
            key={`secondary-${index}`}
            className="absolute rounded-full"
            style={{
              width: blob.size * 0.6,
              height: blob.size * 0.6,
              background: `radial-gradient(circle, ${blob.color} 0%, transparent 60%)`,
              left: `${100 - blob.initialX}%`,
              top: `${100 - blob.initialY}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              x: blob.path.x.map((v) => -v * 0.5),
              y: blob.path.y.map((v) => -v * 0.5),
              scale: blob.scale.map((v) => 2 - v),
            }}
            transition={{
              duration: blob.duration * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glass overlay with stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12"
      >
        <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl p-6 shadow-lg">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-white/50 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-[#1E3A5F]" />
                </div>
                <div className="text-2xl font-bold text-[#1E3A5F]">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
