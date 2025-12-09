"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { EchoOrb } from "@/components/ui/mesh-gradient";

export function CTASection() {
  return (
    <section className="relative py-20 md:py-24 bg-white overflow-hidden">
      {/* Echo Orbs for subtle aura */}
      <EchoOrb position="center-left" size="lg" color="blue" />
      <EchoOrb position="center-right" size="lg" color="cyan" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* CTA Card */}
          <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl p-8 md:p-12 text-center shadow-lg">
            <span className="inline-block px-4 py-2 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-sm font-medium mb-6">
              30分の無料相談
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              現場の
              <span className="text-[#2563EB]">「めんどくさい」</span>
              を
              <br />
              一緒に解決しませんか？
            </h2>

            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              まずは御社の課題をお聞かせください。
              最適な自動化の方法をご提案します。
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#1E3A5F] hover:bg-[#162d4a] text-white px-8 py-6 rounded-lg"
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
                className="px-8 py-6 rounded-lg border-slate-300 text-slate-700 hover:bg-white hover:border-[#1E3A5F] group"
              >
                <Link href="/contact">
                  お問い合わせ
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                初期費用0円
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                最短2週間で導入
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                継続サポート付き
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
