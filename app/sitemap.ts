import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

const routes = [
  "",
  "/zhengzhou-dianti-guanggao",
  "/zhengzhou-dianti-guanggao-jiage",
  "/dianti-guanggao-fangan",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-06-21"),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8
  }));
}
