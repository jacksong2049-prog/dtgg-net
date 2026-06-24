import type { Metadata } from "next";
import ConsultantCard from "@/components/ConsultantCard";
import SectionTitle from "@/components/SectionTitle";
import { siteConfig } from "@/config/site";
import { planItems } from "@/data/services";

export const metadata: Metadata = {
  title: "郑州电梯广告行业投放方案",
  description:
    "面向教育培训、医美口腔、房产家装、餐饮门店、招商加盟、本地生活服务，了解郑州电梯内电子屏广告投放建议。",
  openGraph: {
    title: "郑州电梯广告行业投放方案 - DTGG",
    description: "按行业了解适合人群、投放建议、推荐广告形式、预算表达方式和注意事项。",
    url: `${siteConfig.url}/dianti-guanggao-fangan`
  }
};

export default function PlanPage() {
  return (
    <main>
      <section className="bg-ink px-4 py-12 text-white md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-3 py-1 text-sm text-cyan-100">
            行业方案建议
          </p>
          <h1 className="max-w-4xl text-4xl font-black tracking-normal md:text-6xl">
            郑州电梯广告行业投放方案
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            按不同行业梳理适合人群、投放建议、推荐广告形式、预算表达方式和注意事项，方便你先判断方向，再获取郑州电梯内电子屏广告报价。
          </p>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-inner">
          <SectionTitle title="按行业规划郑州电梯内电子屏广告投放" description="以下建议不承诺投放效果，只用于帮助你和广告顾问更快沟通需求。" />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {planItems.map((item) => (
              <article key={item.industry} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
                <h2 className="text-xl font-bold text-slate-950">{item.industry}</h2>
                <div className="mt-5 grid gap-3 text-sm leading-7 text-slate-700">
                  <p><strong className="text-slate-950">适合人群：</strong>{item.audience}</p>
                  <p><strong className="text-slate-950">投放建议：</strong>{item.suggestion}</p>
                  <p><strong className="text-slate-950">推荐广告形式：</strong>{item.media}</p>
                  <p><strong className="text-slate-950">预算表达方式：</strong>{item.budget}</p>
                  <p><strong className="text-slate-950">注意事项：</strong>{item.notice}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionTitle
              title="把行业需求发给广告顾问"
              description="扫码后可直接说明行业、目标客群、预算区间和投放区域，由广告顾问按郑州电梯内电子屏资源给出方案建议。"
            />
          </div>
          <ConsultantCard />
        </div>
      </section>
    </main>
  );
}
