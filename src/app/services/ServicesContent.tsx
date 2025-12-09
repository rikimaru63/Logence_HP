"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  MessageSquare,
  Map,
  Video,
  Code,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Wrench,
  Users,
} from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
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
    features: [
      "LINE連携で簡単操作",
      "名刺情報の自動OCR",
      "挨拶メールの自動生成",
      "組織図のマインドマップ化",
    ],
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600",
    tagBg: "bg-green-500",
  },
  {
    id: "map-list-hunter",
    icon: Map,
    name: "Map List Hunter",
    tagline: "Mapハンター",
    subtitle: "リスト購入費0円。鮮度100%",
    description:
      "GoogleMapから「今ある店」だけを抽出。業種×地域指定で、無駄なテレアポを根絶します。",
    features: [
      "GoogleMapからの自動抽出",
      "業種・地域の詳細指定",
      "CSV/Excel出力対応",
      "重複自動排除",
    ],
    iconBg: "bg-[#2563EB]/10",
    iconColor: "text-[#2563EB]",
    tagBg: "bg-[#2563EB]",
  },
  {
    id: "zoom-struct-db",
    icon: Video,
    name: "Zoom Struct DB",
    tagline: "Zoom構造化DB",
    subtitle: "「言った言わない」を根絶",
    description:
      "ただの文字起こしではありません。決定事項やTo-Doを構造化し、スプレッドシートへ自動格納します。",
    features: [
      "Zoom録画の自動文字起こし",
      "決定事項・To-Do抽出",
      "スプレッドシート連携",
      "発言者ごとの整理",
    ],
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
    tagBg: "bg-purple-500",
  },
];

const developmentSteps = [
  { step: "01", title: "ヒアリング", desc: "業務フローの把握" },
  { step: "02", title: "要件定義", desc: "課題と解決策の明確化" },
  { step: "03", title: "プロトタイプ", desc: "素早く動くものを作成" },
  { step: "04", title: "テスト", desc: "現場でのフィードバック" },
  { step: "05", title: "導入", desc: "本番環境への展開" },
  { step: "06", title: "サポート", desc: "継続的な改善" },
];

const trainingTopics = [
  {
    icon: Sparkles,
    title: "AI活用入門",
    description: "ChatGPTをはじめとするAIツールの業務活用方法を学びます。",
    iconBg: "bg-[#2563EB]/10",
    iconColor: "text-[#2563EB]",
  },
  {
    icon: Wrench,
    title: "業務自動化ハンズオン",
    description: "実際にツールを使いながら、自動化の基礎を体験します。",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
  },
  {
    icon: Code,
    title: "プロンプトエンジニアリング",
    description: "AIに的確な指示を出すためのプロンプト設計を学びます。",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
  },
  {
    icon: Users,
    title: "カスタム研修",
    description: "御社の業務内容に合わせたオーダーメイド研修を実施します。",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600",
  },
];

function ToolCard({ tool, index }: { tool: (typeof tools)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:bg-white/80 transition-all duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div>
          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl ${tool.iconBg} flex items-center justify-center mb-4`}>
            <tool.icon className={`w-7 h-7 ${tool.iconColor}`} />
          </div>

          {/* Tagline Badge */}
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${tool.tagBg} text-white mb-3`}>
            {tool.tagline}
          </span>

          {/* Name & Subtitle */}
          <h3 className="text-2xl font-bold text-slate-900 mb-1">{tool.name}</h3>
          <p className="text-slate-700 font-medium mb-3">{tool.subtitle}</p>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">{tool.description}</p>

          <Button
            asChild
            className="bg-[#1E3A5F] hover:bg-[#162d4a] text-white rounded-lg"
          >
            <Link href="/contact?type=demo">
              デモを依頼する
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Features */}
        <div className="space-y-3">
          {tool.features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-lg bg-slate-50/80 border border-slate-100"
            >
              <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-500" />
              <span className="text-slate-700 text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesContent() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <PageHeader
        title="SERVICE"
        subtitle="AIツール、受託開発、研修・セミナー"
        badge="Our Services"
      />

      {/* Tools Section */}
      <section id="tools" className="relative py-20 md:py-24 overflow-hidden">
        <EchoOrb position="top-right" size="lg" color="blue" />
        <EchoOrb position="bottom-left" size="md" color="cyan" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 text-sm font-medium mb-6">
              AI Tools
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              <span className="text-[#2563EB]">AIツール</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              すぐに導入可能な業務自動化ツール
            </p>
          </motion.div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section
        id="development"
        className="relative py-20 md:py-24 bg-white overflow-hidden"
      >
        <EchoOrb position="center-left" size="lg" color="navy" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
                Development
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                <span className="text-[#1E3A5F]">受託開発</span>
              </h2>

              <p className="text-slate-600 mb-8 leading-relaxed">
                既製品では解決できない御社固有の課題を、オーダーメイドの自動化ツールで解決します。
                現場のフローを理解したエンジニアが、本当に使われるシステムを開発します。
              </p>

              <div className="w-16 h-16 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center mb-8">
                <Code className="w-8 h-8 text-[#1E3A5F]" />
              </div>

              <Button
                asChild
                className="bg-[#1E3A5F] hover:bg-[#162d4a] text-white rounded-lg px-8 py-6 text-base"
              >
                <Link href="/contact?type=dev">
                  開発の相談をする
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {developmentSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-xl p-4 text-center hover:shadow-md hover:bg-white/80 transition-all"
                >
                  <div className="text-2xl font-bold text-[#2563EB] mb-1">
                    {item.step}
                  </div>
                  <div className="text-slate-900 font-medium text-sm mb-1">
                    {item.title}
                  </div>
                  <div className="text-slate-500 text-xs">{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="relative py-20 md:py-24 overflow-hidden">
        <EchoOrb position="top-left" size="md" color="blue" />
        <EchoOrb position="bottom-right" size="lg" color="cyan" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 text-sm font-medium mb-6">
              Training
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              <span className="text-[#2563EB]">研修・セミナー</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              AIを使いこなせる人材を育成。ツール導入だけでなく、社内のAIリテラシー向上をサポートします。
            </p>
          </motion.div>

          <div className="flex justify-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 rounded-2xl bg-[#1E3A5F]/10 flex items-center justify-center"
            >
              <GraduationCap className="w-10 h-10 text-[#1E3A5F]" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {trainingTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-xl p-6 hover:shadow-md hover:bg-white/80 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl ${topic.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <topic.icon className={`w-6 h-6 ${topic.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {topic.title}
                </h3>
                <p className="text-slate-600 text-sm">{topic.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10"
          >
            <Button
              asChild
              className="bg-[#1E3A5F] hover:bg-[#162d4a] text-white rounded-lg px-8 py-6 text-base"
            >
              <Link href="/contact?type=seminar">
                研修の相談をする
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
