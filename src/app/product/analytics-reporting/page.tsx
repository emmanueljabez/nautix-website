import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_NAME,
  SITE_URL,
  SITE_LOCALE,
  DEFAULT_OG_IMAGE,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/seo";
import type { FaqItem } from "@/lib/faq-data";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { IndustrySection } from "./components/IndustrySection";
import { OutcomesSection } from "./components/OutcomesSection";
import { FaqSection } from "./components/FaqSection";
import { FinalCtaSection } from "./components/FinalCtaSection";

const PAGE_TITLE = "Customer Operations Analytics & Reporting | Nautix";
const PAGE_DESCRIPTION =
  "Turn every conversation, lead, and payment into clear dashboards and a daily report. See response times, resolution rates, and revenue at a glance. For African businesses.";
const PAGE_PATH = "/product/analytics-reporting";
const OG_TITLE = "See Your Whole Operation at a Glance — Nautix";
const OG_DESCRIPTION =
  "Dashboards and a daily report covering conversations, leads, resolutions, and payments.";
const PAGE_KEYWORDS = [
  "customer analytics",
  "operations reporting",
  "support analytics",
  "conversation analytics",
  "business dashboards",
];

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "What does the daily report include?",
    answer:
      "The daily report includes total conversations handled, response times, resolution rates, new leads captured, revenue collected, and a breakdown by channel and team. It arrives in your inbox before 7am, so you can start each day with a clear picture of how your operation performed yesterday.",
  },
  {
    question: "Can I see data broken down by channel, team, or type?",
    answer:
      "Yes. Live dashboards and the daily report break down every metric by channel (WhatsApp, Instagram, Facebook), team member, conversation type (support, sales, general), and time period. You can filter and drill down into any dimension.",
  },
  {
    question: "Is the data real-time?",
    answer:
      "Yes. Live dashboards update in real time as conversations happen, issues are resolved, and payments come in. You can watch your operation as it runs, not just review what happened yesterday.",
  },
  {
    question: "Can I export reports or share them?",
    answer:
      "Yes. Every report and dashboard view can be exported as a PDF or CSV. You can also schedule reports to be emailed automatically to specific team members or stakeholders on a daily, weekly, or monthly basis.",
  },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: PAGE_KEYWORDS,
  alternates: {
    canonical: PAGE_PATH,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}${PAGE_PATH}`,
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    images: [
      {
        url: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
        width: 1024,
        height: 1024,
        alt: PAGE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [`${SITE_URL}${DEFAULT_OG_IMAGE}`],
  },
};

export default function AnalyticsReportingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Product", path: "/#product" },
    { name: "Analytics & Reporting", path: PAGE_PATH },
  ]);

  const faqSchema = buildFaqSchema(FAQ_ITEMS);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <CapabilitiesSection />
        <IndustrySection />
        <OutcomesSection />
        <FaqSection items={FAQ_ITEMS} />
        <FinalCtaSection />
      </main>
    </>
  );
}
