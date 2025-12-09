"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function MotionCard({
  children,
  className = "",
  glowColor = "rgba(99, 102, 241, 0.5)",
}: MotionCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative rounded-2xl overflow-hidden",
        "bg-black/40 backdrop-blur-xl",
        "border border-white/10",
        "transition-all duration-300",
        className
      )}
      style={{
        boxShadow: isHovered
          ? `0 0 40px ${glowColor}, 0 0 80px ${glowColor.replace("0.5", "0.2")}`
          : "none",
      }}
    >
      {/* Border glow effect on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${glowColor.replace("0.5", "0.15")}, transparent 40%)`,
        }}
      />

      {/* Gradient border */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl"
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          padding: "1px",
          background: `linear-gradient(135deg, ${glowColor.replace("0.5", "0.6")}, transparent 50%, ${glowColor.replace("0.5", "0.3")})`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
        }}
      />

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
}

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2 | 3;
  rowSpan?: 1 | 2;
  glowColor?: string;
}

export function BentoCard({
  children,
  className = "",
  colSpan = 1,
  rowSpan = 1,
  glowColor,
}: BentoCardProps) {
  const colSpanClass = {
    1: "",
    2: "md:col-span-2",
    3: "md:col-span-2 lg:col-span-3",
  };

  const rowSpanClass = {
    1: "",
    2: "md:row-span-2",
  };

  return (
    <MotionCard
      className={cn(colSpanClass[colSpan], rowSpanClass[rowSpan], className)}
      glowColor={glowColor}
    >
      {children}
    </MotionCard>
  );
}
