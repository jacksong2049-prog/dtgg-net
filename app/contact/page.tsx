import type { Metadata } from "next";
import ConsultantCard from "@/components/ConsultantCard";
import SectionTitle from "@/components/SectionTitle";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "联系郑州电梯广告顾问",
  description:
    "如果你正在了解郑州电梯内部电子屏广告投放，可以添加广告顾问微信，获取最新报价、点位资源表和投放建议。",
  openGraph: {
    title: "联系郑州电梯广告顾问 - DTGG",
    description: "添加广告顾问微信，获取郑州电梯内电子屏广告最新报价、点位资源表和投放建议。",
    url: `${siteConfig.url}/contact`
  }
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-ink px-4 py-12 text-white md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-3 py-1 text-sm text-cyan-100">
            微信与电话咨询
          </p>
          <h1 className="max-w-4xl text-4xl font-black tracking-normal md:text-6xl">
            联系郑州电梯广告顾问
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            如果你正在了解郑州电梯内部电子屏广告投放，可以添加广告顾问微信，获取最新报价、点位资源表和投放建议。
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-inner">
          <SectionTitle
            title="扫码联系郑州电梯广告顾问"
            description="行业、计划投放区域、预算区间、推广目标和时间安排越清楚，广告顾问越容易给出适合的资源建议。当前仅保留微信二维码沟通。"
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <ConsultantCard />
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-bold text-slate-950">咨询时建议发送</h2>
              <div className="mt-5 grid gap-3 text-sm leading-7 text-slate-700 sm:grid-cols-2">
                {["投放区域", "行业类型", "预算区间", "推广目标", "投放周期", "视频或图片素材情况"].map((item) => (
                  <div key={item} className="rounded-lg bg-slate-50 p-4">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
