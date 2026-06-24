import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-ink px-4 py-10 text-slate-300 md:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-lg font-bold text-white">{siteConfig.siteName}</p>
          <p className="mt-3 max-w-xl text-sm leading-7">{siteConfig.description}</p>
          <p className="mt-4 text-xs text-slate-500">
            本站为郑州电梯广告投放咨询获客页面，不冒充任何广告公司官方网站。
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">页面</p>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/zhengzhou-dianti-guanggao">郑州电梯广告</Link>
            <Link href="/zhengzhou-dianti-guanggao-jiage">郑州电梯广告价格</Link>
            <Link href="/dianti-guanggao-fangan">电梯广告投放方案</Link>
            <Link href="/contact">联系广告顾问</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">咨询方式</p>
          <div className="mt-3 grid gap-2 text-sm">
            <span>请在页面二维码区域扫码添加广告顾问微信。</span>
            <span>域名：{siteConfig.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
