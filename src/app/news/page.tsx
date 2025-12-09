import type { Metadata } from "next";
import { NewsContent } from "./NewsContent";

export const metadata: Metadata = {
  title: "News",
  description: "AI Automation Labのお知らせ、プレスリリース、イベント情報をお届けします。",
};

export default function NewsPage() {
  return <NewsContent />;
}
