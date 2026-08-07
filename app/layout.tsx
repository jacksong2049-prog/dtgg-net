import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { siteConfig } from "@/config/site";
import { seoKeywords } from "@/config/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "郑州电梯广告投放_电梯广告报价咨询 - DTGG",
    template: "%s - DTGG"
  },
  description:
    "DTGG 提供郑州电梯广告投放咨询，覆盖社区电梯广告、写字楼电梯广告、电梯电子屏广告和电梯视频广告，免费获取报价、点位资源表和投放建议。",
  keywords: seoKeywords,
  alternates: {
    canonical: "/"
  },
  other: {
    "baidu-site-verification": "codeva-qUgqMKXodX"
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: siteConfig.siteName,
    url: siteConfig.url,
    title: "郑州电梯广告投放咨询 - DTGG",
    description: "免费获取郑州电梯广告报价、社区和写字楼点位资源表、投放方案建议。",
    images: [{ url: "/hero-elevator-ads.png", width: 1200, height: 800 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "郑州电梯广告投放咨询 - DTGG",
    description: "了解郑州电梯广告、社区电梯广告、写字楼电梯广告报价和投放方案。",
    images: ["/hero-elevator-ads.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "郑州电梯广告投放",
              "url": "https://dtgg.net",
              "sameAs": [
                "https://diantimedia.com",
                "https://www.diantiguanggao.com"
              ]
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?087193d955d6fe12e7ce8dae2106dc3a";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
`
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
