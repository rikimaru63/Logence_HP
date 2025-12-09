import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { GlobalBackground } from "@/components/ui/global-background";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Automation Lab",
    template: "%s | AI Automation Lab",
  },
  description:
    "現場の「めんどくさい」をAIで解決。名刺管理、営業リスト作成、議事録の自動化ツール開発とDX研修。",
  metadataBase: new URL("https://your-domain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJP.variable} font-sans antialiased bg-slate-50`}
      >
        <GlobalBackground />
        <Header />
        <main className="pt-16 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
