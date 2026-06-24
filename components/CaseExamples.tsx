import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

const cases = [
  {
    title: "本地食品品牌电梯屏展示示例",
    tag: "食品 / 老字号 / 团购活动",
    description:
      "适合用电梯内电子屏展示产品包装、活动信息和咨询入口。图中邦杰牛肉画面用于说明电梯屏广告形态，不代表本站客户合作或投放承诺。",
    image: "/case-bangjie-elevator-screen.png"
  },
  {
    title: "口腔医美门店推广思路",
    tag: "门店引流 / 到店咨询",
    description:
      "可在门店服务半径内选择社区电梯和写字楼电梯内电子屏，突出项目咨询、门店位置和扫码沟通入口。"
  },
  {
    title: "教育培训招生推广思路",
    tag: "招生咨询 / 区域曝光",
    description:
      "可围绕校区附近社区选择点位，用短视频或图片展示课程特色、校区位置和咨询方式，便于家长快速了解。"
  }
];

export default function CaseExamples() {
  return (
    <section className="bg-white px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="电梯内电子屏广告示例"
          description="以下内容用于说明常见投放画面和行业思路，具体点位、档期和素材规范建议扫码咨询广告顾问。"
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft"
            >
              {item.image ? (
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={900}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/95 to-transparent px-4 pb-4 pt-14">
                    <p className="text-xs font-semibold text-slate-500">已裁切敏感联系方式，仅作广告形态参考</p>
                  </div>
                </div>
              ) : null}
              <div className="p-5">
                <p className="text-xs font-semibold text-cyan-700">{item.tag}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
