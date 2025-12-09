"use client";

import { motion } from "framer-motion";
import { Bot, BarChart3, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";

export function FloatingConsole() {
  return (
    <motion.div
      className="relative w-full max-w-md mx-auto"
      animate={{
        y: [0, -10, 0],
        rotateX: [0, 2, 0],
        rotateY: [-2, 2, -2],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Main Glass Card */}
      <div className="relative backdrop-blur-xl bg-white/40 border border-white/60 rounded-3xl shadow-2xl shadow-slate-300/30 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E3A5F] to-[#2563EB] flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-800">AI Agent</div>
              <div className="text-xs text-slate-500">Processing...</div>
            </div>
          </div>
          <motion.div
            className="flex items-center gap-1"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs text-green-600 font-medium">Active</span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Chat Message - User */}
          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-[#1E3A5F] text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
              <p className="text-sm">名刺を整理して、フォローメールを作成して</p>
            </div>
          </motion.div>

          {/* Chat Message - AI */}
          <motion.div
            className="flex justify-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-white/80 border border-slate-200 px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#2563EB]" />
                <span className="text-xs font-medium text-[#2563EB]">AI分析完了</span>
              </div>
              <p className="text-sm text-slate-700">
                15件の名刺を処理しました。
                <br />
                業種別に分類し、メール下書きを生成中...
              </p>
            </div>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            className="bg-white/60 rounded-xl p-4 border border-slate-200/50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-slate-600">処理進捗</span>
              <span className="text-xs font-semibold text-[#2563EB]">87%</span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#1E3A5F] to-[#2563EB] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "87%" }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Mini Stats */}
          <motion.div
            className="grid grid-cols-3 gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="bg-white/60 rounded-lg p-3 text-center border border-slate-200/50">
              <MessageSquare className="w-4 h-4 mx-auto mb-1 text-[#1E3A5F]" />
              <div className="text-lg font-bold text-slate-800">15</div>
              <div className="text-[10px] text-slate-500">名刺処理</div>
            </div>
            <div className="bg-white/60 rounded-lg p-3 text-center border border-slate-200/50">
              <BarChart3 className="w-4 h-4 mx-auto mb-1 text-[#2563EB]" />
              <div className="text-lg font-bold text-slate-800">4</div>
              <div className="text-[10px] text-slate-500">業種分類</div>
            </div>
            <div className="bg-white/60 rounded-lg p-3 text-center border border-slate-200/50">
              <CheckCircle2 className="w-4 h-4 mx-auto mb-1 text-green-600" />
              <div className="text-lg font-bold text-slate-800">13</div>
              <div className="text-[10px] text-slate-500">メール生成</div>
            </div>
          </motion.div>
        </div>

        {/* Typing indicator */}
        <div className="px-6 py-3 border-t border-white/30 bg-white/20">
          <div className="flex items-center gap-2">
            <motion.div
              className="flex gap-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <div className="w-2 h-2 rounded-full bg-[#2563EB]" style={{ animationDelay: "0.2s" }} />
              <div className="w-2 h-2 rounded-full bg-[#2563EB]" style={{ animationDelay: "0.4s" }} />
            </motion.div>
            <span className="text-xs text-slate-500">AIが処理中...</span>
          </div>
        </div>
      </div>

      {/* Floating decoration elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#2563EB]/20 to-transparent rounded-full blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-[#1E3A5F]/20 to-transparent rounded-full blur-xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.4, 0.6] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  );
}
