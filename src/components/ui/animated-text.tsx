"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function GradientText({ children, className = "" }: AnimatedTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent",
        "bg-gradient-to-r from-white via-white to-slate-400",
        className
      )}
    >
      {children}
    </span>
  );
}

export function AnimatedGradientText({
  children,
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "bg-clip-text text-transparent",
        "bg-gradient-to-r from-white via-primary/90 to-purple-400",
        "bg-[length:200%_auto]",
        "animate-gradient",
        className
      )}
    >
      {children}
    </motion.span>
  );
}

export function FadeInText({
  children,
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: AnimatedTextProps & { staggerDelay?: number }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: AnimatedTextProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TypewriterText({
  children,
  className = "",
  delay = 0,
}: AnimatedTextProps) {
  const text = typeof children === "string" ? children : "";

  return (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay }}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05, delay: delay + index * 0.03 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
