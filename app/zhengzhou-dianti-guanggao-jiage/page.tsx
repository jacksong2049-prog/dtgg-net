import type { Metadata } from "next";
import ConsultantCard from "@/components/ConsultantCard";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import SectionTitle from "@/components/SectionTitle";
import { siteConfig } from "@/config/site";
import { priceFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "郑州电梯广告价格与报价咨询",
  description:
    "郑州电梯内电子屏广告报价会受到投放区域、点位数量、视频或图片素材形式、投放周期和资源档期等因素影响。",
  openGraph: {
    title: "郑州电梯广告价格与报价咨询 - DTGG",
    description: "了解影响郑州电梯内电子屏广告价格的因素，免费获取最新点位资源表和报价区间。",
    url: `${siteConfig.url}/zhengzhou-dianti-guanggao-jiage`
  }
};

const priceFactors = ["投放区域", "点位数量", "投放周期", "视频 / 图片形式", "社区 / 写字楼类型", "覆盖人群", "资源档期"];

export default function PricePage() {
  return (
    <main>
      <section className="bg-ink px-4 py-12 text-white md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-3 py-1 text-sm text-cyan-100">
            报价区间与资源表咨询
          </p>
          <h1 className="max-w-4xl text-4xl font-black tracking-normal md:text-6xl">
            郑州电梯广告价格与报价咨询
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            郑州电梯内电子屏广告报价会受到投放区域、点位数量、视频或图片素材形式、投放周期和资源档期等因素影响。具体报价建议添加广告顾问微信，获取最新点位资源表和报价区间。
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-inner">
          <SectionTitle title="影响郑州电梯广告价格的因素" description="不写死具体价格，先把影响报价的变量梳理清楚，再按你的需求匹配资源。" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {priceFactors.map((factor) => (
              <div key={factor} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
                <h2 className="text-base font-semibold text-slate-950">{factor}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  会影响资源选择、排期安排和报价区间，建议结合行业和推广目标一起评估。
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionTitle align="center" title="郑州电梯广告价格 FAQ" description="以下回答仅用于了解报价逻辑，具体以广告顾问提供的资源表和档期为准。" />
          <div className="mt-8">
            <FAQ items={priceFaqs} />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-inner grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <LeadForm />
          <ConsultantCard />
        </div>
      </section>
    </main>
  );
}
