"use client";

import { motion } from "framer-motion";
import { MessageCircle, Lightbulb, Code, Rocket } from "lucide-react";
import { EchoOrb } from "@/components/ui/mesh-gradient";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "ヒアリング",
    description:
      "現場の課題を詳しくお聞きします。何に時間がかかっているのか、何がストレスなのかを明確にします。",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "提案",
    description:
      "既存ツールで解決できるか、カスタム開発が必要かをご提案。費用対効果を明確にします。",
  },
  {
    icon: Code,
    step: "03",
    title: "開発・導入",
    description:
      "アジャイル開発で素早くプロトタイプを作成。現場のフィードバックを反映しながら完成度を高めます。",
  },
  {
    icon: Rocket,
    step: "04",
    title: "運用・改善",
    description:
      "導入後も継続的にサポート。使い方の研修や、追加機能の開発にも対応します。",
  },
];

export function ProcessSection() {
  return (
    <section className="relative py-20 md:py-24 bg-slate-50 overflow-hidden">
      {/* Echo Orbs for subtle aura */}
      <EchoOrb position="center-left" size="md" color="navy" />
      <EchoOrb position="bottom-right" size="lg" color="blue" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium mb-6">
            Process
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            導入までの
            <span className="text-[#2563EB]">4ステップ</span>
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto">
            シンプルなプロセスで、最短2週間で導入可能
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-xl p-6 shadow-sm h-full hover:bg-white/80 transition-all duration-200">
                {/* Step number */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1E3A5F] flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-bold text-[#2563EB]">
                    STEP {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-slate-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
