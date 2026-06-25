import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingSectionPage } from "@/components/seo/LandingSectionPage";
import { ProductOmnichannelInbox } from "@/components/product/ProductOmnichannelInbox";
import { ProductCommentMonitoring } from "@/components/product/ProductCommentMonitoring";
import { ProductAutonomousResolution } from "@/components/product/ProductAutonomousResolution";
import { ProductLeadQualificationEngine } from "@/components/product/ProductLeadQualificationEngine";
import { ProductInChatPaymentClose } from "@/components/product/ProductInChatPaymentClose";
import { ProductFullPaymentLoop } from "@/components/product/ProductFullPaymentLoop";
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

    const metadata = buildMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    keywords: [...page.keywords],
  });

if (slug === "omnichannel-inbox") {
    metadata.openGraph = {
      ...metadata.openGraph,
      title: "One Inbox for Every Customer Conversation \u2014 Nautix",
      description:
        "WhatsApp, Instagram, Facebook and webchat in a single shared inbox.",
    };
    metadata.twitter = {
      ...metadata.twitter,
      title: "One Inbox for Every Customer Conversation \u2014 Nautix",
      description:
        "WhatsApp, Instagram, Facebook and webchat in a single shared inbox.",
    };
}

  if (slug === "autonomous-resolution") {
    metadata.openGraph = {
      ...metadata.openGraph,
      title: "Resolves, Not Just Responds \u2014 Nautix",
      description:
        "AI that takes the real action to resolve a customer's problem end to end.",
    };
    metadata.twitter = {
      ...metadata.twitter,
      title: "Resolves, Not Just Responds \u2014 Nautix",
      description:
        "AI that takes the real action to resolve a customer's problem end to end.",
    };
  }

  if (slug === "comment-monitoring") {
    metadata.openGraph = {
      ...metadata.openGraph,
      title: "Never Miss a Comment Again \u2014 Nautix",
      description:
        "Monitor and respond to every comment on your posts and ads, automatically.",
    };
    metadata.twitter = {
      ...metadata.twitter,
      title: "Never Miss a Comment Again \u2014 Nautix",
      description:
        "Monitor and respond to every comment on your posts and ads, automatically.",
    };
  }

  if (slug === "lead-qualification-engine") {
    metadata.openGraph = {
      ...metadata.openGraph,
      title: "Qualified Leads, Not Just Inquiries — Nautix",
      description:
        "Automatically qualify, score, and route every inbound lead, around the clock.",
    };
    metadata.twitter = {
      ...metadata.twitter,
      title: "Qualified Leads, Not Just Inquiries — Nautix",
      description:
        "Automatically qualify, score, and route every inbound lead, around the clock.",
    };
  }

  if (slug === "in-chat-payment-close") {
    metadata.openGraph = {
      ...metadata.openGraph,
      title: "Close the Sale in the Chat — Nautix",
      description:
        "Request payment, get paid, and confirm — all inside the conversation.",
    };
    metadata.twitter = {
      ...metadata.twitter,
      title: "Close the Sale in the Chat — Nautix",
      description:
        "Request payment, get paid, and confirm — all inside the conversation.",
    };
  }

  if (slug === "full-payment-loop") {
    metadata.openGraph = {
      ...metadata.openGraph,
      title: "The Whole Payment Loop, Automated — Nautix",
      description:
        "Request, collect, verify, reconcile, and record — every payment, end to end.",
    };
    metadata.twitter = {
      ...metadata.twitter,
      title: "The Whole Payment Loop, Automated — Nautix",
      description:
        "Request, collect, verify, reconcile, and record — every payment, end to end.",
    };
  }

  return metadata;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getProductPage(slug);

  if (!page) {
    notFound();
  }

  if (slug === "omnichannel-inbox") {
    return <ProductOmnichannelInbox data={page} />;
  }

  if (slug === "comment-monitoring") {
    return <ProductCommentMonitoring data={page} />;
  }

  if (slug === "autonomous-resolution") {
    return <ProductAutonomousResolution data={page} />;
  }

  if (slug === "lead-qualification-engine") {
    return <ProductLeadQualificationEngine data={page} />;
  }

  if (slug === "in-chat-payment-close") {
    return <ProductInChatPaymentClose data={page} />;
  }

  if (slug === "full-payment-loop") {
    return <ProductFullPaymentLoop data={page} />;
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
