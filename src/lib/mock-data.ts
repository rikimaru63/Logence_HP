export const mockNews = [
  {
    id: "1",
    title: "AI業務自動化セミナーを開催します",
    content:
      "中小企業向けのAI業務自動化セミナーを開催します。実際のツールデモを交えながら、明日から使える自動化のヒントをお伝えします。",
    category: "event",
    published: true,
    createdAt: new Date("2025-01-15"),
    updatedAt: new Date("2025-01-15"),
  },
  {
    id: "2",
    title: "Map List Hunter バージョン2.0をリリース",
    content:
      "GoogleMapからの営業リスト作成ツール「Map List Hunter」のバージョン2.0をリリースしました。検索精度の向上と新しいエクスポート機能を追加しました。",
    category: "release",
    published: true,
    createdAt: new Date("2025-01-10"),
    updatedAt: new Date("2025-01-10"),
  },
  {
    id: "3",
    title: "年末年始の営業について",
    content:
      "誠に勝手ながら、12月29日から1月3日まで年末年始休業とさせていただきます。お問い合わせへの返信は1月4日以降となります。",
    category: "info",
    published: true,
    createdAt: new Date("2024-12-25"),
    updatedAt: new Date("2024-12-25"),
  },
];

export const mockSeminars = [
  {
    id: "1",
    title: "【無料】中小企業のためのAI活用入門セミナー",
    description:
      "AIって何から始めればいいの？という方向けの入門セミナー。ChatGPTの業務活用から、自動化ツールの選び方まで、90分で解説します。",
    heldAt: new Date("2025-02-15T14:00:00"),
    location: "Zoom",
    capacity: 30,
    link: "https://example.com/seminar/1",
    createdAt: new Date("2025-01-01"),
    updatedAt: new Date("2025-01-01"),
  },
  {
    id: "2",
    title: "営業リスト自動作成ハンズオン",
    description:
      "Map List Hunterを使った営業リスト自動作成のハンズオンセミナー。実際に手を動かしながら、ツールの使い方をマスターできます。",
    heldAt: new Date("2025-02-22T10:00:00"),
    location: "オンライン (Zoom)",
    capacity: 20,
    link: "https://example.com/seminar/2",
    createdAt: new Date("2025-01-05"),
    updatedAt: new Date("2025-01-05"),
  },
];

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    info: "お知らせ",
    release: "リリース",
    event: "イベント",
  };
  return labels[category] || category;
}
