import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingSectionPage } from "@/components/seo/LandingSectionPage";
import { LiveSystemDiagnosisPage } from "@/components/product/LiveSystemDiagnosisPage";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  DEFAULT_PRIMARY_CTA,
  DEFAULT_SECONDARY_CTA,
  PRODUCT_PAGES,
  PRODUCT_SLUGS,
  type ProductSlug,
} from "@/lib/seo-pages";
import {
  buildBreadcrumbSchema,
  buildMetadata,
  buildSoftwareApplicationSchema,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getProductPage(slug: string) {
  return PRODUCT_PAGES[slug as ProductSlug];
}

export function generateStaticParams() {
  return PRODUCT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getProductPage(slug);

  if (!page) {
    return buildMetadata({
      title: "Product | Nautix",
      description: "Nautix product page.",
      path: "/product",
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

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getProductPage(slug);

  if (!page) {
    notFound();
  }

  if (slug === "live-system-diagnosis") {
    return <LiveSystemDiagnosisPage />;
  }

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Product", path: "/#product" },
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
        sectionLabel="Product"
        page={page}
        primaryCta={DEFAULT_PRIMARY_CTA}
        secondaryCta={DEFAULT_SECONDARY_CTA}
      />
    </>
  );
}
