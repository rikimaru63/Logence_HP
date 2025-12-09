"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Mail, Building2, User } from "lucide-react";
import {
  contactSchema,
  ContactFormData,
  contactTypes,
} from "@/lib/validations/contact";
import { PageHeader } from "@/components/ui/page-header";
import { EchoOrb } from "@/components/ui/mesh-gradient";

export function ContactContent() {
  const searchParams = useSearchParams();
  const defaultType = searchParams.get("type") || "other";
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      type: (defaultType as ContactFormData["type"]) || "other",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            お問い合わせありがとうございます
          </h1>
          <p className="text-slate-600 mb-8">
            内容を確認の上、2営業日以内にご連絡いたします。
          </p>
          <Button asChild className="bg-[#1E3A5F] hover:bg-[#162d4a]">
            <a href="/">トップに戻る</a>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <PageHeader
        title="CONTACT"
        subtitle="お問い合わせ・ご相談"
        badge="Get in Touch"
      />

      {/* Form Section */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <EchoOrb position="top-right" size="lg" color="blue" />
        <EchoOrb position="bottom-left" size="md" color="cyan" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl p-8 shadow-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-slate-700">
                      <User className="w-4 h-4" />
                      お名前 <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="山田 太郎"
                      {...register("name")}
                      className="bg-white/50 border-slate-200 focus:border-[#2563EB] focus:ring-[#2563EB]/20"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <Label htmlFor="company" className="flex items-center gap-2 text-slate-700">
                      <Building2 className="w-4 h-4" />
                      会社名
                    </Label>
                    <Input
                      id="company"
                      placeholder="株式会社サンプル"
                      {...register("company")}
                      className="bg-white/50 border-slate-200 focus:border-[#2563EB] focus:ring-[#2563EB]/20"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-slate-700">
                      <Mail className="w-4 h-4" />
                      メールアドレス <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@company.com"
                      {...register("email")}
                      className="bg-white/50 border-slate-200 focus:border-[#2563EB] focus:ring-[#2563EB]/20"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Type */}
                  <div className="space-y-2">
                    <Label className="text-slate-700">
                      お問い合わせ種別 <span className="text-red-500">*</span>
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      {contactTypes.map((type) => (
                        <label
                          key={type.value}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            value={type.value}
                            {...register("type")}
                            className="w-4 h-4 text-[#2563EB] bg-white border-slate-300 focus:ring-[#2563EB]"
                          />
                          <span className="text-slate-700">{type.label}</span>
                        </label>
                      ))}
                    </div>
                    {errors.type && (
                      <p className="text-sm text-red-500">
                        {errors.type.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="お問い合わせ内容をご記入ください"
                      rows={6}
                      {...register("message")}
                      className="bg-white/50 border-slate-200 focus:border-[#2563EB] focus:ring-[#2563EB]/20"
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Privacy Policy */}
                  <p className="text-sm text-slate-500">
                    送信することで、
                    <a href="/privacy" className="text-[#2563EB] hover:underline">
                      プライバシーポリシー
                    </a>
                    に同意したものとみなします。
                  </p>

                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full bg-[#1E3A5F] hover:bg-[#162d4a] text-white py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "送信中..." : "送信する"}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
