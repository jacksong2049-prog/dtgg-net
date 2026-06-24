import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Building2 } from "lucide-react";
import ConsultantCard from "@/components/ConsultantCard";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { siteConfig } from "@/config/site";
import { elevatorServices } from "@/data/services";

export const metadata: Metadata = {
  title: "郑州电梯广告投放咨询",
  description:
    "了解郑州社区电梯、写字楼电梯内部电子显示屏广告，可播放视频或展示图片，免费获取报价区间、点位资源表和投放建议。",
  openGraph: {
    title: "郑州电梯广告投放咨询 - DTGG",
    description: "免费获取郑州社区电梯、写字楼电梯内部电子屏广告点位资源表和投放建议。",
    url: `${siteConfig.url}/zhengzhou-dianti-guanggao`
  }
};

export default function ZhengzhouElevatorAdsPage() {
  return (
    <main>
      <section className="bg-ink px-4 py-12 text-white md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-3 py-1 text-sm text-cyan-100">
            郑州电梯内电子屏资源咨询
          </p>
          <h1 className="max-w-4xl text-4xl font-black tracking-normal md:text-6xl">
            郑州电梯广告投放咨询
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            围绕郑州社区电梯、写字楼电梯、小区电梯和商务楼宇电梯内部电子显示屏广告，提供报价区间、点位资源表和投放建议。广告可在电梯轿厢内屏幕播放视频或展示图片。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="#consultant" className="btn-primary">
              扫码获取报价
            </Link>
            <Link href="#consultant" className="btn-secondary">
              添加广告顾问微信
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-inner">
          <SectionTitle
            title="郑州电梯内电子屏广告可以覆盖哪些场景"
            description="电梯内部电子屏广告适合本地品牌、门店、教育培训、医美口腔、房产家装、餐饮、招商加盟等业务做区域曝光和稳定触达。"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {elevatorServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            "本地品牌可围绕郑州核心商圈、成熟社区和写字楼楼宇做区域曝光。",
            "门店业务可结合服务半径筛选点位，让广告更靠近潜在到店人群。",
            "招商加盟类业务可重点评估办公人群、社区人群和预算周期。"
          ].map((item) => (
            <article key={item} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Building2 className="text-cyan-700" size={28} aria-hidden="true" />
              <p className="mt-4 text-sm leading-7 text-slate-700">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="section-inner grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionTitle
              title="扫码获取郑州电梯内电子屏资源建议"
              description="直接添加广告顾问微信，说明投放区域、行业、预算和想展示的视频或图片素材，获取更贴近需求的报价和点位资源表。"
            />
          </div>
          <div className="grid gap-4">
            <ConsultantCard />
            <Link href="/" className="btn-secondary justify-center">
              <ArrowLeft size={18} aria-hidden="true" />
              返回首页
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
