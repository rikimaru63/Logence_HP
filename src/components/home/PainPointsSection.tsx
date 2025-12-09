"use client";

import { motion } from "framer-motion";
import { Clock, FileStack, Users, AlertCircle } from "lucide-react";
import { EchoOrb } from "@/components/ui/mesh-gradient";

const painPoints = [
  {
    icon: FileStack,
    title: "名刺の山",
    stat: "87%",
    statLabel: "が活用されず放置",
    description:
      "展示会で集めた名刺が机の上に放置。顧客情報が活用されないまま眠っている。",
  },
  {
    icon: Clock,
    title: "リスト作成地獄",
    stat: "3時間",
    statLabel: "の無駄な作業/日",
    description:
      "営業リストを作るために、何時間もGoogleMapとにらめっこ。コピペ作業の繰り返し。",
  },
  {
    icon: Users,
    title: "議事録の押し付け合い",
    stat: "65%",
    statLabel: "が「言った言わない」で紛糾",
    description:
      "誰も議事録を取りたがらず、重要な決定事項が曖昧なまま。後で大問題に。",
  },
];

function PainCard({
  point,
  index,
}: {
  point: (typeof painPoints)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="h-full bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-xl p-6 shadow-sm hover:bg-white/80 transition-all duration-200">
        {/* Icon and stat */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center">
            <point.icon className="w-6 h-6 text-red-600" />
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-red-600">{point.stat}</div>
            <div className="text-xs text-slate-500">{point.statLabel}</div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">{point.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {point.description}
        </p>
      </div>
    </motion.div>
  );
}

export function PainPointsSection() {
  return (
    <section className="relative py-20 md:py-24 bg-slate-50 overflow-hidden">
      {/* Echo Orbs for subtle aura */}
      <EchoOrb position="top-left" size="lg" color="navy" />
      <EchoOrb position="center-right" size="md" color="blue" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 text-red-600 text-sm font-medium mb-6">
            <AlertCircle className="w-4 h-4" />
            Pain Points
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            こんな
            <span className="text-red-600">「めんどくさい」</span>
            <br className="md:hidden" />
            ありませんか？
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto">
            現場の生産性を奪う3大業務。
            あなたの会社でも、こんな状況になっていませんか？
          </p>
        </motion.div>

        {/* Cards - consistent 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <PainCard key={point.title} point={point} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
