import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/zhengzhou-dianti-guanggao", label: "郑州电梯广告" },
  { href: "/zhengzhou-dianti-guanggao-jiage", label: "价格咨询" },
  { href: "/dianti-guanggao-fangan", label: "投放方案" },
  { href: "/contact", label: "联系顾问" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-white" aria-label="DTGG 首页">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 font-black text-ink">
            D
          </span>
          <span className="font-semibold tracking-normal">{siteConfig.siteName}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-200 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-cyan-200">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn-nav">
          <MessageCircle size={17} aria-hidden="true" />
          联系顾问
        </Link>
      </div>
    </header>
  );
}
