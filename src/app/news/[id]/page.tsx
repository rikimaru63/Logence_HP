import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsDetailContent } from "./NewsDetailContent";
import { mockNews } from "@/lib/mock-data";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const news = mockNews.find((n) => n.id === id);

  if (!news) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: news.title,
    description: news.content.substring(0, 160),
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const news = mockNews.find((n) => n.id === id);

  if (!news) {
    notFound();
  }

  return <NewsDetailContent news={news} />;
}

export async function generateStaticParams() {
  return mockNews.map((news) => ({
    id: news.id,
  }));
}
