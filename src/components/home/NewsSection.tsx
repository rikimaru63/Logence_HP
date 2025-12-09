"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { mockNews, mockSeminars, formatDate, getCategoryLabel } from "@/lib/mock-data";
import { EchoOrb } from "@/components/ui/mesh-gradient";

export function NewsSection() {
  const latestNews = mockNews.slice(0, 3);
  const upcomingSeminars = mockSeminars.filter(
    (s) => new Date(s.heldAt) > new Date()
  ).slice(0, 2);

  return (
    <section className="relative py-20 md:py-24 bg-slate-50 overflow-hidden">
      {/* Echo Orbs for subtle aura */}
      <EchoOrb position="top-left" size="md" color="blue" />
      <EchoOrb position="bottom-right" size="md" color="cyan" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* News */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between mb-6"
            >
              <div>
                <span className="text-[#2563EB] text-sm font-medium">News</span>
                <h2 className="text-2xl font-bold text-slate-900">お知らせ</h2>
              </div>
              <Button asChild variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">
                <Link href="/news">
                  一覧を見る
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <div className="space-y-3">
              {latestNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/news/${news.id}`}>
                    <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-lg p-4 hover:border-slate-300 hover:shadow-sm hover:bg-white/80 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-slate-500">
                          {formatDate(news.createdAt)}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded bg-[#1E3A5F]/10 text-[#1E3A5F]">
                          {getCategoryLabel(news.category)}
                        </span>
                      </div>
                      <h3 className="text-slate-900 font-medium text-sm line-clamp-1">
                        {news.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Seminars */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between mb-6"
            >
              <div>
                <span className="text-[#2563EB] text-sm font-medium">Seminars</span>
                <h2 className="text-2xl font-bold text-slate-900">セミナー情報</h2>
              </div>
            </motion.div>

            <div className="space-y-3">
              {upcomingSeminars.length > 0 ? (
                upcomingSeminars.map((seminar, index) => (
                  <motion.div
                    key={seminar.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-lg p-4 hover:border-slate-300 hover:shadow-sm hover:bg-white/80 transition-all">
                      <div className="flex items-center gap-2 text-[#1E3A5F] mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          {formatDate(seminar.heldAt)}
                        </span>
                        <span className="text-xs text-slate-500">
                          {seminar.location}
                        </span>
                      </div>
                      <h3 className="text-slate-900 font-medium mb-1">
                        {seminar.title}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2">
                        {seminar.description}
                      </p>
                      {seminar.link && (
                        <a
                          href={seminar.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-[#2563EB] hover:underline mt-2"
                        >
                          申し込む
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-lg p-6 text-center">
                  <p className="text-slate-500 text-sm">
                    現在予定されているセミナーはありません
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
