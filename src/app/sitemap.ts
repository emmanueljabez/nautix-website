import type { MetadataRoute } from "next";
import {
  COMPARE_SLUGS,
  INDUSTRY_SLUGS,
  PRODUCT_SLUGS,
  SOLUTION_SLUGS,
} from "@/lib/seo-pages";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const STATIC_ROUTES = [
  "",
  "/demo",
  "/features",
  "/isp",
  "/resources/blog",
  "/resources/blog/the-buyer-who-almost-wasnt",
  "/resources/blog/your-internet-is-down-11pm",
  "/resources/product-updates",
  "/pricing",
  "/privacy",
  "/terms",
  "/data-deletion",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const solutionRoutes = SOLUTION_SLUGS.map((slug) => `/solutions/${slug}` as const);
  const industryRoutes = INDUSTRY_SLUGS.map((slug) => `/industries/${slug}` as const);
  const productRoutes = PRODUCT_SLUGS.map((slug) => `/product/${slug}` as const);
  const compareRoutes = COMPARE_SLUGS.map((slug) => `/compare/${slug}` as const);

  const routes = [
    ...STATIC_ROUTES,
    ...solutionRoutes,
    ...industryRoutes,
    ...productRoutes,
    ...compareRoutes,
  ];

  return routes.map((path) => ({
    url: path === "" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/compare/") ? 0.6 : 0.7,
  }));
}
