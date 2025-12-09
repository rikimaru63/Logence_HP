"use client";

import { motion } from "framer-motion";
import { MessageSquare, Map, Video, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { EchoOrb } from "@/components/ui/mesh-gradient";

const tools = [
  {
    id: "line-biz-agent",
    icon: MessageSquare,
    name: "Line Biz Agent",
    tagline: "名刺LINE秘書",
    subtitle: "営業メール作成時間をゼロに",
    description:
      "スマホで撮って送るだけ。AIが挨拶メールを下書きし、組織図をマインドマップ化します。",
    features: ["LINE連携", "自動OCR", "メール生成"],
  },
  {
    id: "map-list-hunter",
    icon: Map,
    name: "Map List Hunter",
    tagline: "Mapハンター",
    subtitle: "リスト購入費0円。鮮度100%",
    description:
      "GoogleMapから「今ある店」だけを抽出。業種×地域指定で、無駄なテレアポを根絶。",
    features: ["自動抽出", "CSV出力", "重複排除"],
  },
  {
    id: "zoom-struct-db",
    icon: Video,
    name: "Zoom Struct DB",
    tagline: "Zoom構造化DB",
    subtitle: "「言った言わない」を根絶",
    description:
      "決定事項やTo-Doを構造化し、スプレッドシートへ自動格納します。",
    features: ["文字起こし", "To-Do抽出", "自動連携"],
  },
];

function ToolCard({
  tool,
  index,
}: {
  tool: (typeof tools)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full group"
    >
      <div className="h-full bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 hover:bg-white/80 transition-all duration-200">
        {/* Icon */}
        <div className="w-12 h-12 rounded-lg bg-[#1E3A5F]/10 flex items-center justify-center mb-4">
          <tool.icon className="w-6 h-6 text-[#1E3A5F]" />
        </div>

        {/* Tagline */}
        <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-[#2563EB] text-white mb-2">
          {tool.tagline}
        </span>

        {/* Name */}
        <h3 className="text-xl font-bold text-slate-900 mb-1">{tool.name}</h3>

        {/* Subtitle */}
        <p className="text-sm font-medium text-slate-700 mb-2">{tool.subtitle}</p>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {tool.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tool.features.map((feature) => (
            <span
              key={feature}
              className="px-2 py-1 rounded text-xs bg-slate-100 text-slate-600"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Arrow link */}
        <div className="flex items-center text-slate-500 group-hover:text-[#1E3A5F] transition-colors">
          <span className="text-sm font-medium">詳しく見る</span>
          <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

export function SolutionsSection() {
  return (
    <section className="relative py-20 md:py-24 bg-white overflow-hidden">
      {/* Echo Orbs for subtle aura */}
      <EchoOrb position="bottom-right" size="lg" color="cyan" />
      <EchoOrb position="top-left" size="md" color="blue" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
            Solutions
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            <span className="text-[#2563EB]">3つのAIツール</span>で、
            <br className="hidden md:block" />
            現場を解放する
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto">
            <span className="text-slate-900 font-medium">
              Digital Workers, Human Results.
            </span>
            <br />
            あなたの「苦痛」を持ってきてください。自動化は私たちが担います。
          </p>
        </motion.div>

        {/* Tools Grid - consistent 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-sm font-medium"
          >
            すべてのサービスを見る
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
