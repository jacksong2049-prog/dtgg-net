import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClipboardList, MessageCircle, Target, Users, Zap } from "lucide-react";
import CaseExamples from "@/components/CaseExamples";
import ConsultantCard from "@/components/ConsultantCard";
import FAQ from "@/components/FAQ";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { siteConfig } from "@/config/site";
import { homeFaqs } from "@/data/faqs";
import { elevatorServices, industries, processSteps } from "@/data/services";

export const metadata: Metadata = {
  title: "郑州电梯广告投放_郑州电梯广告报价咨询",
  description:
    "DTGG 提供郑州电梯广告投放咨询，免费获取社区电梯、写字楼电梯内部电子屏广告报价、点位资源表和投放建议。",
  keywords: [
    "郑州电梯广告",
    "郑州电梯广告价格",
    "郑州电梯广告投放",
    "郑州电梯电子屏广告",
    "郑州电梯视频广告",
    "郑州社区电梯广告",
    "郑州写字楼电梯广告"
  ],
  openGraph: {
    title: "郑州电梯广告投放咨询 - DTGG",
    description: "免费获取郑州电梯内电子屏广告报价、点位资源表和投放建议。",
    url: siteConfig.url
  }
};

const strengths = [
  {
    icon: Zap,
    title: "高频触达",
    text: "电梯是社区和写字楼的日常高频动线，适合做持续曝光和区域认知。"
  },
  {
    icon: Users,
    title: "离消费者近",
    text: "可围绕小区、写字楼和门店服务半径筛选点位，让广告更贴近本地客群。"
  },
  {
    icon: Target,
    title: "适合区域推广",
    text: "适合教育培训、口腔医美、家装房产、餐饮门店、招商加盟等业务做本地投放。"
  }
];

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.serviceName,
    url: siteConfig.url,
    areaServed: siteConfig.city,
    description: siteConfig.description,
    sameAs: [siteConfig.url],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "郑州电梯广告投放咨询",
        serviceType: "电梯广告投放咨询",
        areaServed: "郑州"
      }
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="relative overflow-hidden bg-ink px-4 py-10 text-white md:px-6 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.28),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.22),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-3 py-1 text-sm text-cyan-100">
              郑州电梯内电子屏广告获客咨询
            </p>
            <h1 className="max-w-3xl text-4xl font-black tracking-normal md:text-6xl">
              郑州电梯广告投放咨询
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              免费获取郑州电梯内电子屏广告报价、点位资源表和投放建议
            </p>
            <div className="mt-6 grid gap-3 sm:flex">
              <Link href="#consultant" className="btn-primary justify-center">
                <ClipboardList size={19} aria-hidden="true" />
                免费获取报价
              </Link>
              <Link href="#consultant" className="btn-secondary justify-center">
                <MessageCircle size={19} aria-hidden="true" />
                添加广告顾问微信
              </Link>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-cyan-50 sm:grid-cols-2">
              {[
                "覆盖郑州社区电梯、写字楼电梯内电子显示屏资源",
                "根据行业、预算、推广目标推荐投放方案",
                "适合教育培训、医美口腔、房产家装、本地生活、招商加盟、门店引流等行业",
                "免费获取报价区间、点位资源表、投放建议"
              ].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.08] p-3">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-3 shadow-2xl shadow-cyan-950/30">
            <Image
              src="/hero-elevator-ads.png"
              alt="郑州电梯内部电子显示屏广告投放咨询场景"
              width={1200}
              height={800}
              priority
              className="aspect-[4/3] w-full rounded-lg object-cover"
            />
            <div className="mt-3 rounded-lg bg-white p-4 text-slate-950">
              <p className="text-sm font-semibold text-cyan-700">微信咨询入口</p>
              <p className="mt-1 text-sm text-slate-600">
                手机端可直接点击右下角“微信咨询”或滑动到二维码区域。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-inner">
          <SectionTitle
            eyebrow="核心服务"
            title="围绕郑州电梯广告的一站式咨询"
            description="当前页面只聚焦郑州电梯内部电子屏广告投放，不做泛广告资讯站，方便你快速了解资源类型和适合的投放方向。"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {elevatorServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="适合投放的行业" description="电梯广告更适合有明确区域、人群和咨询入口的业务。" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-950">{industry}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  可结合郑州社区电梯内电子屏、写字楼电梯内电子屏和门店服务半径，规划区域曝光与咨询转化入口。
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseExamples />

      <section className="section-shell">
        <div className="section-inner">
          <SectionTitle title="为什么选择电梯广告" description="电梯广告的价值在于稳定场景、高频出现和本地触达，适合需要持续露出的区域业务。" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {strengths.map((item) => (
              <article key={item.title} className="rounded-lg bg-white p-6 shadow-soft">
                <item.icon className="text-cyan-700" size={28} aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="郑州电梯广告投放流程" description="先拿资源和报价，再判断是否适合投放，流程清楚、决策成本低。" />
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
                <span className="text-sm font-bold text-cyan-700">0{index + 1}</span>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-800">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-inner grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="直接扫码"
              title="获取郑州电梯广告报价和点位资源表"
              description="当前静态站不保留表单提交，避免线索无法进入后台。建议直接扫码添加广告顾问微信，沟通行业、预算、投放区域和素材形式。"
            />
            <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {["报价区间", "点位资源表", "投放区域建议", "视频或图片素材建议"].map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <ConsultantCard />
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionTitle align="center" title="常见问题" description="先了解郑州电梯广告的基础问题，再让广告顾问按你的预算和行业给建议。" />
          <div className="mt-8">
            <FAQ items={homeFaqs} />
          </div>
        </div>
      </section>
    </main>
  );
}
