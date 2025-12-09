"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { MeshGradient } from "@/components/ui/mesh-gradient";

const footerLinks = {
  services: [
    { href: "/services#tools", label: "AIツール" },
    { href: "/services#development", label: "受託開発" },
    { href: "/services#training", label: "研修・セミナー" },
  ],
  company: [
    { href: "/company", label: "会社概要" },
    { href: "/company#message", label: "代表挨拶" },
    { href: "/company#access", label: "アクセス" },
  ],
  support: [
    { href: "/contact", label: "お問い合わせ" },
    { href: "/news", label: "お知らせ" },
    { href: "/privacy", label: "プライバシーポリシー" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Dark Mesh Gradient Background */}
      <MeshGradient variant="footer" className="z-0 opacity-60" />

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">Logence</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              現場の「めんどくさい」をAIで解決。
              <br />
              業務自動化ツール開発とDX研修で、
              <br />
              中小企業のデジタル変革を支援します。
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>〒000-0000 東京都渋谷区○○1-2-3</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>03-0000-0000</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@logence.co.jp</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Logence Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-slate-500 hover:text-white transition-colors"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/contact"
                className="text-slate-500 hover:text-white transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
