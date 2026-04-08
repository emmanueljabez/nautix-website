import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Product Updates | Nautix",
  description:
    "Follow latest Nautix product releases, feature improvements, and platform updates.",
  path: "/resources/product-updates",
  type: "article",
  keywords: [
    "nautix product updates",
    "nautix release notes",
    "whatsapp automation updates",
    "ai operations platform updates",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Product Updates", path: "/resources/product-updates" },
]);

export default function ProductUpdatesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <main className="bg-[#fcfaf8] pt-24 pb-16">
        <section className="mx-auto max-w-4xl px-6">
          <div className="rounded-[28px] border border-[rgba(126,16,162,0.14)] bg-[linear-gradient(140deg,#fdfbff_0%,#f5eeff_52%,#fff8fd_100%)] p-8 shadow-[0_18px_44px_rgba(19,11,43,0.06)] sm:p-10">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7e10a2]">
              Resources
            </p>
            <h1 className="font-heading text-4xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-5xl">
              Product Updates
            </h1>
            <p className="mt-5 max-w-3xl text-[17px] leading-8 text-[#4c4c55]">
              This page will host release notes and feature updates across Nautix
              channels, AI resolution engine, payments, and analytics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/resources/blog"
                className="inline-flex items-center justify-center rounded-full bg-[#7e10a2] px-5 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-[#650d83]"
              >
                Browse Blog
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-full border border-[#171717]/12 px-5 py-2.5 text-sm font-semibold text-[#1f2430] no-underline transition hover:bg-black/5"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
