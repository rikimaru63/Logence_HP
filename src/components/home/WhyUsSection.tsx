"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users } from "lucide-react";
import { EchoOrb } from "@/components/ui/mesh-gradient";

const reasons = [
  {
    icon: Zap,
    title: "現場出身のエンジニア",
    description:
      "私たちは「使われないシステム」を作りません。現場の空気感を理解し、本当に使われるツールを開発します。",
  },
  {
    icon: Shield,
    title: "資産として残る開発",
    description:
      "作って終わりではなく、御社の業務資産として残る形で納品。内製化支援や研修もセットでご提供します。",
  },
  {
    icon: Users,
    title: "中小企業に特化",
    description:
      "大企業向けの大規模システムではなく、30〜100名規模の企業に最適化。必要十分な機能を適正価格で。",
  },
];

export function WhyUsSection() {
  return (
    <section className="relative py-20 md:py-24 bg-white overflow-hidden">
      {/* Echo Orbs for subtle aura */}
      <EchoOrb position="top-right" size="md" color="cyan" />
      <EchoOrb position="bottom-left" size="lg" color="navy" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              Why Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              なぜ私たちに
              <br />
              任せるべきなのか
            </h2>

            <p className="text-slate-600">
              You bring the pain.
              <br />
              We bring the automation.
            </p>
          </motion.div>

          {/* Right: Reasons */}
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-xl p-5 hover:border-slate-300 hover:bg-white/80 transition-all duration-200">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1E3A5F]/10 flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-5 h-5 text-[#1E3A5F]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
