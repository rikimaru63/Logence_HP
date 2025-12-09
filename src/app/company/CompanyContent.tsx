"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Users, Mail, Phone, Clock } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { EchoOrb } from "@/components/ui/mesh-gradient";

const companyInfo = [
  { label: "会社名", value: "Logence Inc.（株式会社ロジェンス）" },
  { label: "代表者", value: "（お名前）" },
  { label: "設立", value: "2024年" },
  { label: "事業内容", value: "AI業務自動化ツール開発、DX研修、コンサルティング" },
  { label: "所在地", value: "〒000-0000 東京都渋谷区○○1-2-3" },
  { label: "メール", value: "info@logence.co.jp" },
];

export function CompanyContent() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <PageHeader
        title="COMPANY"
        subtitle="Logenceについて"
        badge="About Us"
      />

      {/* Message Section */}
      <section id="message" className="relative py-20 md:py-24 overflow-hidden">
        <EchoOrb position="top-left" size="lg" color="navy" />
        <EchoOrb position="center-right" size="md" color="blue" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="text-[#2563EB] font-medium text-sm mb-2 block">Message</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                代表挨拶
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl p-8 md:p-10 shadow-sm"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center">
                    <Users className="w-14 h-14 text-[#1E3A5F]/50" />
                  </div>
                </div>
                <div className="space-y-4 text-slate-600">
                  <p>
                    「めんどくさい」を解決することが、私たちの使命です。
                  </p>
                  <p>
                    現場で働く人たちが、本来の仕事に集中できる環境をつくりたい。
                    そんな想いから、Logenceを立ち上げました。
                  </p>
                  <p>
                    名刺の入力、営業リストの作成、議事録の作成——
                    これらは本来、人間がやるべき仕事ではありません。
                    AIとテクノロジーの力で、これらの「めんどくさい」を代行し、
                    人間は人間にしかできない仕事に集中できる世界を実現します。
                  </p>
                  <p>
                    大企業向けの大規模システムではなく、
                    中小企業の現場に寄り添ったツールを、適正な価格で提供することにこだわっています。
                  </p>
                  <p className="pt-4 font-semibold text-slate-900">
                    Logence Inc. 代表
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="relative py-20 md:py-24 bg-white overflow-hidden">
        <EchoOrb position="bottom-left" size="lg" color="cyan" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="text-[#2563EB] font-medium text-sm mb-2 block">Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                会社概要
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm">
                {companyInfo.map((item, index) => (
                  <div
                    key={item.label}
                    className={`flex flex-col md:flex-row p-5 md:p-6 ${
                      index < companyInfo.length - 1 ? "border-b border-slate-200/80" : ""
                    }`}
                  >
                    <div className="md:w-1/3 font-medium text-[#2563EB] mb-1 md:mb-0 text-sm">
                      {item.label}
                    </div>
                    <div className="md:w-2/3 text-slate-900">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="relative py-20 md:py-24 overflow-hidden">
        <EchoOrb position="top-right" size="md" color="blue" />
        <EchoOrb position="bottom-left" size="md" color="navy" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="text-[#2563EB] font-medium text-sm mb-2 block">Access</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                アクセス
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-xl p-5 hover:shadow-md hover:bg-white/80 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#1E3A5F]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 text-sm">
                      所在地
                    </h3>
                    <p className="text-slate-600 text-sm">
                      〒000-0000
                      <br />
                      東京都渋谷区○○1-2-3
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-xl p-5 hover:shadow-md hover:bg-white/80 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#1E3A5F]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 text-sm">
                      営業時間
                    </h3>
                    <p className="text-slate-600 text-sm">
                      平日 10:00 - 18:00
                      <br />
                      （土日祝休み）
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-xl p-5 hover:shadow-md hover:bg-white/80 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#1E3A5F]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1 text-sm">
                      お問い合わせ
                    </h3>
                    <p className="text-slate-600 text-sm">
                      info@logence.co.jp
                      <br />
                      03-0000-0000
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6"
            >
              <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-xl h-64 flex items-center justify-center">
                <p className="text-slate-500 text-sm">
                  Google Map（埋め込み予定）
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-20 md:py-24 bg-white overflow-hidden">
        <EchoOrb position="center-left" size="lg" color="cyan" />
        <EchoOrb position="center-right" size="lg" color="blue" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="text-[#2563EB] font-medium text-sm mb-2 block">Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                私たちの信念
              </h2>
              <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl p-8 md:p-12 shadow-sm">
                <p className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4">
                  Digital Workers, Human Results.
                </p>
                <p className="text-lg text-slate-600">
                  You bring the pain. We bring the automation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
