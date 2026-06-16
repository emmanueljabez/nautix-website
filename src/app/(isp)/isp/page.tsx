import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

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
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <h1 className="text-4xl font-bold p-20">ISP Page Placeholder</h1>
    </main>
  );
}
