import type { Metadata } from "next";
import { PrivacyContent } from "./PrivacyContent";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Logenceのプライバシーポリシーについてご説明します。",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
