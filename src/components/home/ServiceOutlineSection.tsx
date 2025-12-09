"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Bot, Code2, GraduationCap, ArrowUpRight } from "lucide-react";
import { EchoOrb } from "@/components/ui/mesh-gradient";

const services = [
  {
    id: "ai-tools",
    icon: Bot,
    title: "AIツール",
    subtitle: "Ready-made Solutions",
    description:
      "名刺管理、リスト作成、議事録自動化。すぐに使える3つのAIツールで、現場の「めんどくさい」を解消します。",
    features: ["LINE連携", "自動化", "即導入"],
    href: "/services#tools",
  },
  {
    id: "development",
    icon: Code2,
    title: "受託開発",
    subtitle: "Custom Development",
    description:
      "御社の課題に合わせたカスタムAIソリューションを開発。既存システムとの連携も可能です。",
    features: ["要件定義", "アジャイル", "保守運用"],
    href: "/services#development",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "AI研修",
    subtitle: "Enterprise Training",
    description:
      "ChatGPTやAI活用の実践研修。御社の業務に合わせたカリキュラムで即戦力を育成。",
    features: ["オンサイト", "ハンズオン", "フォロー"],
    href: "/services#training",
  },
];

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={service.href} className="block h-full group">
        <div className="h-full bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 hover:bg-white/80 transition-all duration-200">
          {/* Icon */}
          <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
            <service.icon className="w-6 h-6 text-[#1E3A5F]" />
          </div>

          {/* Subtitle */}
          <span className="text-xs font-medium text-[#2563EB] uppercase tracking-wide">
            {service.subtitle}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-4">
            {service.features.map((feature) => (
              <span
                key={feature}
                className="px-2 py-1 rounded text-xs bg-slate-100 text-slate-600"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Arrow link */}
          <div className="flex items-center text-slate-500 group-hover:text-[#1E3A5F] transition-colors mt-auto">
            <span className="text-sm font-medium">詳しく見る</span>
            <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ServiceOutlineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative py-20 md:py-24 bg-white overflow-hidden">
      {/* Echo Orbs for subtle aura */}
      <EchoOrb position="top-right" size="lg" color="blue" />
      <EchoOrb position="bottom-left" size="md" color="cyan" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
            Service Outline
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            <span className="text-[#1E3A5F]">Logence</span>が提供する
            <br className="hidden md:block" />
            3つのソリューション
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto">
            あなたの「苦痛」を持ってきてください。自動化は私たちが担います。
          </p>
        </motion.div>

        {/* Cards Grid - consistent 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
