import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "AI Automation Labへのお問い合わせ。デモ依頼、開発相談、研修のご依頼など、お気軽にご連絡ください。",
};

function ContactFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-muted-foreground">読み込み中...</div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactFallback />}>
      <ContactContent />
    </Suspense>
  );
}
