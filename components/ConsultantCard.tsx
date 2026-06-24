import Image from "next/image";
import { MessageCircle, ScanLine } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ConsultantCard() {
  return (
    <aside
      id="consultant"
      className="rounded-lg border border-cyan-100 bg-white p-5 shadow-soft md:p-7"
    >
      <p className="text-sm font-semibold text-cyan-700">广告顾问</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">添加广告顾问微信</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        扫码添加广告顾问，直接沟通郑州电梯内电子屏广告报价、点位资源表和投放建议。
      </p>

      <div className="mt-5 rounded-lg border border-dashed border-cyan-300 bg-cyanSoft p-4 text-center">
        <Image
          src={siteConfig.wechatQrPath}
          alt="广告顾问微信二维码"
          width={240}
          height={240}
          className="mx-auto h-auto w-full max-w-56 rounded-lg bg-white p-3"
        />
        <p className="mt-3 text-xs font-semibold text-cyan-800">微信扫码咨询，获取报价和点位资源表</p>
      </div>

      <div className="mt-5 space-y-3 text-sm text-slate-700">
        <p className="flex items-center gap-2">
          <MessageCircle size={18} className="text-cyan-700" aria-hidden="true" />
          顾问名称：{siteConfig.consultantName}
        </p>
        <p className="flex items-center gap-2">
          <ScanLine size={18} className="text-cyan-700" aria-hidden="true" />
          当前仅保留微信扫码沟通，避免表单提交后无人接收。
        </p>
      </div>
    </aside>
  );
}
