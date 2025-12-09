"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { mockNews, formatDate, getCategoryLabel } from "@/lib/mock-data";
import { PageHeader } from "@/components/ui/page-header";
import { EchoOrb } from "@/components/ui/mesh-gradient";
import { ArrowRight } from "lucide-react";

const categories = [
  { id: "all", label: "すべて" },
  { id: "info", label: "お知らせ" },
  { id: "release", label: "リリース" },
  { id: "event", label: "イベント" },
];

export function NewsContent() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredNews =
    selectedCategory === "all"
      ? mockNews
      : mockNews.filter((news) => news.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <PageHeader
        title="NEWS"
        subtitle="お知らせ・プレスリリース"
        badge="Latest Updates"
      />

      {/* News List */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <EchoOrb position="top-right" size="lg" color="blue" />
        <EchoOrb position="bottom-left" size="md" color="cyan" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    selectedCategory === category.id
                      ? "bg-[#1E3A5F] hover:bg-[#162d4a] text-white"
                      : "border-slate-300 text-slate-600 hover:bg-white hover:border-[#1E3A5F] hover:text-[#1E3A5F]"
                  }
                >
                  {category.label}
                </Button>
              ))}
            </motion.div>

            {/* News Items */}
            <div className="space-y-4">
              {filteredNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link href={`/news/${news.id}`} className="block group">
                    <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-xl p-5 md:p-6 hover:shadow-md hover:bg-white/80 hover:scale-[1.01] transition-all duration-200">
                      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                        <div className="flex items-center gap-3 md:w-52 flex-shrink-0">
                          <span className="text-sm text-slate-500">
                            {formatDate(news.createdAt)}
                          </span>
                          <span className="text-xs px-2.5 py-1 rounded-full bg-[#2563EB] text-white font-medium">
                            {getCategoryLabel(news.category)}
                          </span>
                        </div>
                        <div className="flex-1 flex items-center justify-between gap-4">
                          <h2 className="text-slate-900 font-medium group-hover:text-[#1E3A5F] transition-colors">
                            {news.title}
                          </h2>
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1E3A5F] group-hover:translate-x-1 transition-all flex-shrink-0 hidden md:block" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredNews.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-xl p-10">
                  <p className="text-slate-500">
                    該当するお知らせはありません
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
