import type { Metadata } from "next";
import { IspLandingPage } from "@/components/isp/IspLandingPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, buildSoftwareApplicationSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title:
    "Nautix for ISPs | AI Customer Operations for East African Internet Providers",
  description:
    "Stop losing subscribers to 11pm WhatsApp messages. Nautix automates billing, outage alerts, and support for ISPs running Splynx and SmartOLT.",
  path: "/isp",
  keywords: [
    "isp automation software",
    "whatsapp support for isp",
    "splynx whatsapp integration",
    "smartolt automation",
    "isp billing automation",
    "east african isp software",
    "wisp customer support",
  ],
});

export default function IspPage() {
  const softwareSchema = buildSoftwareApplicationSchema({
    name: "Nautix for ISPs — WhatsApp AI Operations Layer",
    description:
      "Resolve ISP support issues in under 2 minutes. Nautix automates Tier 1 support, billing, and outage alerts for ISPs running Splynx and SmartOLT.",
    path: "/isp",
  });

  return (
    <>
      <JsonLd data={softwareSchema} />
      <IspLandingPage />
    </>
  );
}
