"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

/**
 * PageHeader - 下層ページ用の共通ヘッダーコンポーネント
 * コンパクトなサイズ (h-48 ~ h-64) で控えめなMesh Gradientを適用
 */
export function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <section className="relative h-56 md:h-64 flex items-center justify-center overflow-hidden">
      {/* Mesh Gradient Background - 控えめな透明度 */}
      <div className="absolute inset-0 blur-[80px] opacity-50">
        {/* Navy blob */}
        <div
          className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(30, 58, 95, 0.4) 0%, transparent 70%)",
          }}
        />
        {/* Blue blob */}
        <div
          className="absolute -top-20 right-1/4 w-[350px] h-[350px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, transparent 70%)",
          }}
        />
        {/* Cyan blob */}
        <div
          className="absolute bottom-0 left-1/2 w-[300px] h-[300px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 text-[#2563EB] text-sm font-medium mb-4"
          >
            {badge}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-3"
        >
          {title}
        </motion.h1>

        {/* Logence Blue underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto w-16 h-1 bg-[#2563EB] rounded-full mb-4"
        />

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
    </section>
  );
}
