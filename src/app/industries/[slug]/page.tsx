import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingSectionPage } from "@/components/seo/LandingSectionPage";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  DEFAULT_PRIMARY_CTA,
  DEFAULT_SECONDARY_CTA,
  INDUSTRY_PAGES,
  INDUSTRY_SLUGS,
  type IndustrySlug,
} from "@/lib/seo-pages";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildSoftwareApplicationSchema,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getIndustryPage(slug: string) {
  return INDUSTRY_PAGES[slug as IndustrySlug];
}

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustryPage(slug);

  if (!page) {
    return buildMetadata({
      title: "Industries | Nautix",
      description: "Nautix industry page.",
      path: "/industries",
      noIndex: true,
    });
  }

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    keywords: [...page.keywords],
  });
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getIndustryPage(slug);

  if (!page) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/#industries" },
    { name: page.heading, path: page.path },
  ]);

  const softwareSchema = buildSoftwareApplicationSchema({
    name: page.title,
    description: page.description,
    path: page.path,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={softwareSchema} />
      <LandingSectionPage
        sectionLabel="Industry"
        page={page}
        primaryCta={DEFAULT_PRIMARY_CTA}
        secondaryCta={DEFAULT_SECONDARY_CTA}
      />
    </>
  );
}
