"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { NeuralBackground } from "@/components/ui/neural-background";
import { MeshGradient } from "@/components/ui/mesh-gradient";
import { FloatingConsole } from "./FloatingConsole";

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  // Split text for stagger animation
  const line1Words = ["現場の", "「めんどくさい」", "を、"];
  const line2Words = ["AI", "が代行します。"];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50"
    >
      {/* Layer 0: Mesh Gradient Aura - The Alive Background */}
      <MeshGradient variant="hero" className="z-0" />

      {/* Layer 1: Neural Network Background */}
      <div className="absolute inset-0 z-[1]">
        <NeuralBackground
          nodeCount={60}
          connectionDistance={150}
          nodeColor="rgba(30, 58, 95, 0.25)"
          lineColor="rgba(37, 99, 235, 0.1)"
          interactive={true}
        />
      </div>

      {/* Layer 2: Subtle grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30, 58, 95, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 58, 95, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Layer 3: Gradient overlay for depth and readability */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-br from-white/50 via-transparent to-slate-100/30 pointer-events-none" />

      {/* Main content container - z-10 */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-24 lg:py-0">
          {/* Left: Text Area */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-sm text-sm">
                <motion.span
                  className="w-2 h-2 rounded-full bg-[#2563EB]"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="font-semibold text-slate-900">Logence</span>
                <span className="mx-1 text-slate-300">|</span>
                <span className="text-slate-600 hidden sm:inline">AI-Powered Business Automation</span>
                <span className="text-slate-600 sm:hidden">AI Automation</span>
              </span>
            </motion.div>

            {/* Main heading with stagger effect */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1]"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Line 1 */}
              <span className="block">
                {line1Words.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className={`inline-block ${
                      word === "「めんどくさい」"
                        ? "text-[#2563EB]"
                        : "text-slate-900"
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>

              {/* Line 2 */}
              <span className="block mt-2">
                {line2Words.map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className={`inline-block ${
                      word === "AI" ? "text-[#1E3A5F]" : "text-slate-900"
                    }`}
                  >
                    {word}
                    {word === "AI" && " "}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              名刺入力、リスト作成、議事録。
              <br className="hidden sm:block" />
              あなたの時間を奪う3大業務を、
              <span className="font-semibold text-[#1E3A5F]">AIエージェント</span>
              に任せませんか。
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#1E3A5F] hover:bg-[#162d4a] text-white text-base px-8 py-6 rounded-lg shadow-lg shadow-[#1E3A5F]/25"
              >
                <Link href="/contact?type=demo">
                  <Play className="mr-2 h-5 w-5" />
                  デモを体験する
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 rounded-lg border-slate-300/80 bg-white/70 backdrop-blur-sm text-slate-700 hover:bg-white hover:border-[#1E3A5F] transition-all group"
              >
                <Link href="/contact">
                  開発・研修の相談
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                初期費用0円
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                最短2週間
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                継続サポート
              </div>
            </motion.div>
          </div>

          {/* Right: Floating Console - Desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <FloatingConsole />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade transition to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white z-[5] pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-slate-300/80 rounded-full flex justify-center bg-white/50 backdrop-blur-sm"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-[#1E3A5F] rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
