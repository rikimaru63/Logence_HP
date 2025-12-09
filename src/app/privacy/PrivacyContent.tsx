"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/ui/page-header";
import { EchoOrb } from "@/components/ui/mesh-gradient";

const sections = [
  {
    title: "1. 個人情報の取り扱いについて",
    content:
      "Logence Inc.（以下「当社」）は、お客様の個人情報を適切に保護することが重要な責務であると認識し、以下のとおりプライバシーポリシーを定め、個人情報の保護に努めます。",
  },
  {
    title: "2. 収集する個人情報",
    content: "当社は、以下の個人情報を収集することがあります。",
    list: ["氏名", "会社名・組織名", "メールアドレス", "電話番号", "お問い合わせ内容"],
  },
  {
    title: "3. 個人情報の利用目的",
    content: "収集した個人情報は、以下の目的で利用します。",
    list: [
      "お問い合わせへの回答",
      "サービスの提供・改善",
      "セミナー・イベントのご案内",
      "新サービスや機能のお知らせ",
    ],
  },
  {
    title: "4. 個人情報の第三者提供",
    content:
      "当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。",
  },
  {
    title: "5. 個人情報の管理",
    content:
      "当社は、個人情報の漏洩、滅失、毀損を防ぐため、適切なセキュリティ対策を講じます。また、個人情報を取り扱う従業員に対して、適切な監督・教育を行います。",
  },
  {
    title: "6. Cookieの使用について",
    content:
      "当社のウェブサイトでは、サービス向上のためCookieを使用することがあります。Cookieの使用を希望されない場合は、ブラウザの設定により無効化することができます。",
  },
  {
    title: "7. プライバシーポリシーの変更",
    content:
      "当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点から効力を生じます。",
  },
];

export function PrivacyContent() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <PageHeader
        title="PRIVACY POLICY"
        subtitle="プライバシーポリシー"
        badge="Legal"
      />

      {/* Content */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <EchoOrb position="top-right" size="lg" color="blue" />
        <EchoOrb position="bottom-left" size="md" color="navy" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl p-8 md:p-12 shadow-sm"
            >
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <h2 className="text-lg font-bold text-slate-900 mb-3">
                      {section.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                      {section.content}
                    </p>
                    {section.list && (
                      <ul className="list-disc list-inside text-slate-600 space-y-1 mt-3 ml-2">
                        {section.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}

                {/* Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-lg font-bold text-slate-900 mb-3">
                    8. お問い合わせ
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    個人情報の取り扱いに関するお問い合わせは、
                    <a href="/contact" className="text-[#2563EB] hover:underline mx-1">
                      お問い合わせフォーム
                    </a>
                    よりご連絡ください。
                  </p>
                </motion.div>

                {/* Date */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="pt-8 border-t border-slate-200"
                >
                  <p className="text-sm text-slate-500">
                    制定日: 2024年1月1日
                    <br />
                    最終更新日: 2025年1月1日
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
