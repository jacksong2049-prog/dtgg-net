"use client";

import { ClipboardList, MessageCircle } from "lucide-react";

function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 md:bottom-6 md:right-6">
      <button
        type="button"
        onClick={() => scrollToId("consultant")}
        className="floating-btn bg-slate-950 text-white"
        aria-label="微信咨询"
        title="微信咨询"
      >
        <MessageCircle size={20} aria-hidden="true" />
        <span>微信咨询</span>
      </button>
      <button
        type="button"
        onClick={() => scrollToId("consultant")}
        className="floating-btn bg-gradient-to-r from-cyan-500 to-emerald-500 text-white"
        aria-label="获取报价"
        title="获取报价"
      >
        <ClipboardList size={20} aria-hidden="true" />
        <span>获取报价</span>
      </button>
    </div>
  );
}
