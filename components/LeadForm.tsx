"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/config/site";

const budgets = ["1万以内", "1-3万", "3-5万", "5-10万", "10万以上"];
const goals = ["品牌曝光", "门店引流", "招生获客", "招商加盟", "活动推广", "其他"];

export default function LeadForm() {
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    wechat: "",
    city: siteConfig.city,
    industry: "",
    budget: budgets[1],
    goal: goals[0],
    note: ""
  });

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      setMessage("请先填写姓名和手机号，广告顾问才能联系你。");
      return;
    }

    if (!/^1[3-9]\d{9}$/.test(form.phone.trim())) {
      setMessage("请填写正确的 11 位手机号。");
      return;
    }

    // 后续可在这里接入 Supabase、飞书机器人、企业微信机器人或邮件通知。
    // 当前阶段不请求不存在的接口，避免静态站部署后产生报错。
    console.info("Lead form submitted locally:", form);
    setMessage("需求已记录。建议立即扫码添加广告顾问微信，获取完整报价和点位资源表。");
  }

  return (
    <form
      id="lead-form"
      onSubmit={handleSubmit}
      className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft md:p-7"
    >
      <div className="mb-5">
        <p className="text-sm font-semibold text-cyan-700">免费获取报价</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">提交郑州电梯广告投放需求</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          填写基础信息后，广告顾问可根据行业、预算和目标推荐报价区间、点位资源表和投放建议。
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="form-label">姓名 *</span>
          <input
            className="form-input"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="请输入姓名"
          />
        </label>
        <label className="block">
          <span className="form-label">手机号 *</span>
          <input
            className="form-input"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="请输入手机号"
            inputMode="tel"
          />
        </label>
        <label className="block">
          <span className="form-label">微信号</span>
          <input
            className="form-input"
            value={form.wechat}
            onChange={(event) => updateField("wechat", event.target.value)}
            placeholder="方便发送资源表"
          />
        </label>
        <label className="block">
          <span className="form-label">投放城市</span>
          <input
            className="form-input"
            value={form.city}
            onChange={(event) => updateField("city", event.target.value)}
          />
        </label>
        <label className="block">
          <span className="form-label">行业</span>
          <input
            className="form-input"
            value={form.industry}
            onChange={(event) => updateField("industry", event.target.value)}
            placeholder="如教育培训、口腔、家装"
          />
        </label>
        <label className="block">
          <span className="form-label">预算区间</span>
          <select
            className="form-input"
            value={form.budget}
            onChange={(event) => updateField("budget", event.target.value)}
          >
            {budgets.map((budget) => (
              <option key={budget}>{budget}</option>
            ))}
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className="form-label">推广目标</span>
          <select
            className="form-input"
            value={form.goal}
            onChange={(event) => updateField("goal", event.target.value)}
          >
            {goals.map((goal) => (
              <option key={goal}>{goal}</option>
            ))}
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className="form-label">备注需求</span>
          <textarea
            className="form-input min-h-28 resize-y"
            value={form.note}
            onChange={(event) => updateField("note", event.target.value)}
            placeholder="例如计划投放区域、门店位置、希望覆盖的人群"
          />
        </label>
      </div>

      <button type="submit" className="btn-primary mt-5 w-full justify-center">
        <Send size={18} aria-hidden="true" />
        提交需求，获取报价建议
      </button>

      {message ? (
        <p className="mt-4 rounded-lg bg-greenSoft px-4 py-3 text-sm leading-6 text-emerald-800">
          {message}
        </p>
      ) : null}
    </form>
  );
}
