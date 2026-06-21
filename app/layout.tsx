import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "郑州电梯广告投放_郑州电梯广告报价咨询 - DTGG",
    template: "%s - DTGG"
  },
  description:
    "DTGG 提供郑州电梯广告投放咨询，免费获取社区电梯、写字楼电梯内部电子屏广告报价、点位资源表和投放建议。",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: siteConfig.siteName,
    url: siteConfig.url,
    title: "郑州电梯广告投放咨询 - DTGG",
    description: "免费获取郑州电梯内电子屏广告报价、点位资源表和投放建议。",
    images: [{ url: "/hero-elevator-ads.png", width: 1200, height: 800 }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
