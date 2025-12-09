"use client";

import { motion } from "framer-motion";

interface MeshGradientProps {
  variant?: "hero" | "footer";
  className?: string;
}

// Blob configurations for different variants
const heroBlobs = [
  {
    color: "rgba(30, 58, 95, 0.6)", // Deep Navy
    size: 600,
    position: { top: "-10%", left: "-10%" },
    duration: 20,
    path: { x: [0, 100, 50, 0], y: [0, 50, 100, 0] },
    scale: [1, 1.2, 0.9, 1],
  },
  {
    color: "rgba(37, 99, 235, 0.5)", // Royal Blue
    size: 500,
    position: { top: "20%", right: "-5%" },
    duration: 18,
    path: { x: [0, -80, -40, 0], y: [0, 60, -30, 0] },
    scale: [1.1, 0.9, 1.15, 1.1],
  },
  {
    color: "rgba(6, 182, 212, 0.4)", // Cyan
    size: 450,
    position: { bottom: "10%", left: "20%" },
    duration: 22,
    path: { x: [0, 70, -50, 0], y: [0, -40, 60, 0] },
    scale: [0.95, 1.1, 1, 0.95],
  },
  {
    color: "rgba(255, 255, 255, 0.3)", // White highlight
    size: 400,
    position: { top: "40%", left: "40%" },
    duration: 25,
    path: { x: [0, -60, 40, 0], y: [0, 50, -60, 0] },
    scale: [1, 1.15, 0.95, 1],
  },
  {
    color: "rgba(139, 92, 246, 0.3)", // Purple accent
    size: 350,
    position: { bottom: "-5%", right: "20%" },
    duration: 16,
    path: { x: [0, 50, -30, 0], y: [0, -50, 30, 0] },
    scale: [1.05, 0.9, 1.1, 1.05],
  },
];

const footerBlobs = [
  {
    color: "rgba(37, 99, 235, 0.3)", // Royal Blue (dimmed)
    size: 500,
    position: { top: "-20%", left: "-10%" },
    duration: 20,
    path: { x: [0, 60, 30, 0], y: [0, 40, 80, 0] },
    scale: [1, 1.1, 0.95, 1],
  },
  {
    color: "rgba(6, 182, 212, 0.25)", // Cyan (dimmed)
    size: 400,
    position: { top: "30%", right: "-5%" },
    duration: 18,
    path: { x: [0, -50, -25, 0], y: [0, 30, -20, 0] },
    scale: [1.05, 0.95, 1.08, 1.05],
  },
  {
    color: "rgba(30, 58, 95, 0.4)", // Deep Navy
    size: 450,
    position: { bottom: "-10%", left: "30%" },
    duration: 22,
    path: { x: [0, 40, -30, 0], y: [0, -30, 40, 0] },
    scale: [0.95, 1.08, 1, 0.95],
  },
];

export function MeshGradient({ variant = "hero", className = "" }: MeshGradientProps) {
  const blobs = variant === "hero" ? heroBlobs : footerBlobs;
  const blurAmount = variant === "hero" ? "blur-[100px]" : "blur-[80px]";

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className={`absolute inset-0 ${blurAmount}`}>
        {blobs.map((blob, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: blob.size,
              height: blob.size,
              background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
              ...blob.position,
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
    </div>
  );
}

// Static echo orb for body sections
interface EchoOrbProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right";
  size?: "sm" | "md" | "lg";
  color?: "blue" | "cyan" | "navy";
  className?: string;
}

const positionClasses = {
  "top-left": "-top-20 -left-20",
  "top-right": "-top-20 -right-20",
  "bottom-left": "-bottom-20 -left-20",
  "bottom-right": "-bottom-20 -right-20",
  "center-left": "top-1/2 -translate-y-1/2 -left-32",
  "center-right": "top-1/2 -translate-y-1/2 -right-32",
};

const sizeClasses = {
  sm: "w-64 h-64",
  md: "w-96 h-96",
  lg: "w-[500px] h-[500px]",
};

const colorClasses = {
  blue: "from-blue-400/10 to-transparent",
  cyan: "from-cyan-400/10 to-transparent",
  navy: "from-[#1E3A5F]/10 to-transparent",
};

export function EchoOrb({
  position,
  size = "md",
  color = "blue",
  className = "",
}: EchoOrbProps) {
  return (
    <div
      className={`
        absolute rounded-full pointer-events-none
        bg-gradient-radial ${colorClasses[color]}
        ${positionClasses[position]}
        ${sizeClasses[size]}
        blur-3xl
        ${className}
      `}
      style={{
        background: `radial-gradient(circle, ${
          color === "blue"
            ? "rgba(96, 165, 250, 0.15)"
            : color === "cyan"
            ? "rgba(34, 211, 238, 0.12)"
            : "rgba(30, 58, 95, 0.12)"
        } 0%, transparent 70%)`,
      }}
    />
  );
}
