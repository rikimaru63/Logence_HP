"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { formatDate, getCategoryLabel } from "@/lib/mock-data";
import { EchoOrb } from "@/components/ui/mesh-gradient";

interface News {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: Date;
}

interface Props {
  news: News;
}

export function NewsDetailContent({ news }: Props) {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="relative h-56 md:h-64 flex items-center overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 blur-[80px] opacity-50">
          <div
            className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(30, 58, 95, 0.4) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -top-20 right-1/4 w-[350px] h-[350px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(37, 99, 235, 0.35) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/50 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="mb-6 text-slate-600 hover:text-slate-900 hover:bg-white/50"
              >
                <Link href="/news">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  一覧に戻る
                </Link>
              </Button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-slate-500">
                  {formatDate(news.createdAt)}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#2563EB] text-white font-medium">
                  {getCategoryLabel(news.category)}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
                {news.title}
              </h1>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
      </section>

      {/* Content */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <EchoOrb position="top-right" size="md" color="blue" />
        <EchoOrb position="bottom-left" size="lg" color="cyan" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 whitespace-pre-wrap leading-relaxed">
                  {news.content}
                </p>
              </div>
            </div>

            {/* Back button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-center"
            >
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-600 hover:bg-white hover:border-[#1E3A5F] hover:text-[#1E3A5F]"
              >
                <Link href="/news">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  お知らせ一覧に戻る
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
