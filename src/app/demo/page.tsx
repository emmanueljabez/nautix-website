import type { Metadata } from "next";
import { LandingSectionPage } from "@/components/seo/LandingSectionPage";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  DEFAULT_PRIMARY_CTA,
  DEFAULT_SECONDARY_CTA,
  DEMO_PAGE,
} from "@/lib/seo-pages";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildSoftwareApplicationSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: DEMO_PAGE.title,
  description: DEMO_PAGE.description,
  path: DEMO_PAGE.path,
  keywords: [...DEMO_PAGE.keywords],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Demo", path: "/demo" },
]);

const demoSoftwareSchema = buildSoftwareApplicationSchema({
  name: "Nautix Demo",
  description: DEMO_PAGE.description,
  path: DEMO_PAGE.path,
});

export default function DemoPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={demoSoftwareSchema} />
      <LandingSectionPage
        sectionLabel="Live Demo"
        page={DEMO_PAGE}
        primaryCta={DEFAULT_PRIMARY_CTA}
        secondaryCta={DEFAULT_SECONDARY_CTA}
      />
    </>
  );
}
