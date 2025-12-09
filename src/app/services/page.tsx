import type { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Service",
  description:
    "AIツール、受託開発、研修・セミナーなど、AI業務自動化に関するサービスをご紹介します。",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
