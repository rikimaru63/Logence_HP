"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Server, Wallet, Building2 } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  {
    icon: Clock,
    value: 80,
    suffix: "%",
    label: "作業時間削減",
    description: "定型業務の自動化率",
  },
  {
    icon: Server,
    value: 24,
    suffix: "/7",
    label: "稼働可能",
    description: "AIによる常時対応",
  },
  {
    icon: Wallet,
    value: 0,
    suffix: "円",
    label: "初期費用",
    description: "導入リスクゼロ",
  },
  {
    icon: Building2,
    value: 50,
    suffix: "+",
    label: "導入企業",
    description: "中小企業を中心に",
  },
];

function StatCard({
  icon: Icon,
  value,
  suffix,
  label,
  description,
  delay,
  isInView,
}: {
  icon: typeof Clock;
  value: number;
  suffix: string;
  label: string;
  description: string;
  delay: number;
  isInView: boolean;
}) {
  const { formattedValue } = useCountUp({
    end: value,
    duration: 2000,
    delay,
    enabled: isInView,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="text-center"
    >
      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-1">
        {formattedValue}
        <span className="text-[#2563EB]">{suffix}</span>
      </div>
      <div className="text-white font-medium mb-1">{label}</div>
      <div className="text-slate-400 text-sm">{description}</div>
    </motion.div>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Top transition gradient from light to dark */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />

      {/* Bottom transition gradient from dark to light */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
            Trusted Numbers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            数字で見る<span className="text-[#2563EB]">Logence</span>の実績
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            中小企業のDX推進をサポートし、確かな成果を積み重ねてきました
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              delay={index * 150}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
