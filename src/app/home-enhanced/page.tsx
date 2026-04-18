import type { Metadata } from "next";
import { HomepageEnhanced } from "@/components/homepage/HomepageEnhanced";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOMEPAGE_FAQS } from "@/lib/faq-data";
import { buildFaqSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Nautix | AI Operations for WhatsApp, Instagram, and Facebook",
  description:
    "Nautix helps teams capture leads, resolve customer issues, and convert conversations across WhatsApp, Instagram, and Facebook.",
  path: "/home-enhanced",
  keywords: [
    "whatsapp automation software",
    "instagram dm automation",
    "facebook messenger automation",
    "ai customer support software",
    "lead qualification ai",
  ],
});

export default function HomeEnhancedPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(HOMEPAGE_FAQS)} />
      <HomepageEnhanced />
    </>
  );
}
