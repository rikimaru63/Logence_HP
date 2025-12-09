import type { Metadata } from "next";
import { CompanyContent } from "./CompanyContent";

export const metadata: Metadata = {
  title: "Company",
  description: "AI Automation Labの会社概要、代表挨拶、アクセス情報をご紹介します。",
};

export default function CompanyPage() {
  return <CompanyContent />;
}
