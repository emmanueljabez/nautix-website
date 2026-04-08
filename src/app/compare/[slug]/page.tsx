import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingSectionPage } from "@/components/seo/LandingSectionPage";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  COMPARE_PAGES,
  COMPARE_SLUGS,
  DEFAULT_PRIMARY_CTA,
  DEFAULT_SECONDARY_CTA,
  type CompareSlug,
} from "@/lib/seo-pages";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getComparePage(slug: string) {
  return COMPARE_PAGES[slug as CompareSlug];
}

export function generateStaticParams() {
  return COMPARE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getComparePage(slug);

  if (!page) {
    return buildMetadata({
      title: "Compare | Nautix",
      description: "Nautix comparison page.",
      path: "/compare",
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

export default async function ComparePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getComparePage(slug);

  if (!page) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Compare", path: "/compare/nautix-vs-wati" },
    { name: page.heading, path: page.path },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <LandingSectionPage
        sectionLabel="Comparison"
        page={page}
        primaryCta={DEFAULT_PRIMARY_CTA}
        secondaryCta={DEFAULT_SECONDARY_CTA}
      />
    </>
  );
}
