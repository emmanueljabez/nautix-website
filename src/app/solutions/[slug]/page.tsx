import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingSectionPage } from "@/components/seo/LandingSectionPage";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  DEFAULT_PRIMARY_CTA,
  DEFAULT_SECONDARY_CTA,
  SOLUTION_PAGES,
  SOLUTION_SLUGS,
  type SolutionSlug,
} from "@/lib/seo-pages";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildSoftwareApplicationSchema,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getSolutionPage(slug: string) {
  return SOLUTION_PAGES[slug as SolutionSlug];
}

export function generateStaticParams() {
  return SOLUTION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSolutionPage(slug);

  if (!page) {
    return buildMetadata({
      title: "Solution | Nautix",
      description: "Nautix solution page.",
      path: "/solutions",
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

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSolutionPage(slug);

  if (!page) {
    notFound();
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/#solutions" },
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
        sectionLabel="Solution"
        page={page}
        primaryCta={DEFAULT_PRIMARY_CTA}
        secondaryCta={DEFAULT_SECONDARY_CTA}
      />
    </>
  );
}
