import type { Metadata } from "next";
import { PricingPage } from "@/components/pricing/PricingPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { PRICING_FAQS } from "@/lib/faq-data";
import { PLATFORM_PLANS } from "@/lib/pricing-data";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildMetadata,
  buildSoftwareApplicationSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Nautix Pricing | AI Operations Across WhatsApp, Instagram, and Facebook",
  description:
    "Choose a Nautix platform plan, compare features, and add AI automation based on your team size, channels, and customer conversation volume.",
  path: "/pricing",
  keywords: [
    "nautix pricing",
    "whatsapp automation pricing",
    "ai customer support pricing",
    "instagram automation pricing",
    "omnichannel messaging pricing",
  ],
});

const pricingSchema = buildSoftwareApplicationSchema({
  name: "Nautix Pricing Plans",
  description:
    "Pricing for Nautix AI operations across WhatsApp, Instagram, and Facebook for customer support, lead qualification, and conversion workflows.",
  path: "/pricing",
  offers: PLATFORM_PLANS.monthly
    .filter((plan) => plan.price.startsWith("$"))
    .map((plan) => ({
      name: plan.name,
      price: Number(plan.price.replace("$", "")),
      priceCurrency: "USD",
      url: "/pricing",
      description: plan.note,
    })),
});

const pricingBreadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
]);

export default function PricingRoute() {
  return (
    <>
      <JsonLd data={pricingBreadcrumbSchema} />
      <JsonLd data={buildFaqSchema(PRICING_FAQS)} />
      <JsonLd data={pricingSchema} />
      <PricingPage />
    </>
  );
}
