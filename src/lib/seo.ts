import type { Metadata } from "next";
import type { FaqItem } from "@/lib/faq-data";

export const SITE_URL = "https://nautix.io";
export const SITE_NAME = "Nautix";
export const SITE_TITLE = "Nautix | AI Operations for WhatsApp, Instagram, and Facebook";
export const SITE_DESCRIPTION =
  "Nautix helps teams capture leads, resolve customer issues, and convert conversations across WhatsApp, Instagram, and Facebook.";
export const SITE_LOCALE = "en_KE";
export const DEFAULT_OG_IMAGE = "/icon.png";

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type OfferItem = {
  name: string;
  price: number;
  priceCurrency: string;
  url: string;
  description?: string;
};

function normalizePath(path: string) {
  if (!path || path === "/") {
    return "/";
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  const match = withLeadingSlash.match(/^([^?#]*)([?#].*)?$/);
  const pathname = match?.[1] ?? withLeadingSlash;
  const suffix = match?.[2] ?? "";

  if (pathname.endsWith("/")) {
    return `${pathname}${suffix}`;
  }

  const lastSegment = pathname.split("/").pop() ?? "";
  const needsTrailingSlash = lastSegment.length > 0 && !lastSegment.includes(".");
  return `${pathname}${needsTrailingSlash ? "/" : ""}${suffix}`;
}

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return new URL(normalizePath(path), SITE_URL).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noIndex = false,
}: MetadataOptions): Metadata {
  const canonicalPath = normalizePath(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
          },
        }
      : {
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
      type,
      url: absoluteUrl(path),
      title,
      description,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      images: [
        {
          url: imageUrl,
          width: 1024,
          height: 1024,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/icon.png"),
    email: "support@nautix.io",
    description: SITE_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      streetAddress: "The Piano, 8th Floor, Brookside Drive, Westlands",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "support@nautix.io",
      availableLanguage: ["English"],
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-KE",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function buildFaqSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildSoftwareApplicationSchema({
  name,
  description,
  path,
  offers = [],
}: {
  name: string;
  description: string;
  path: string;
  offers?: readonly OfferItem[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description,
    url: absoluteUrl(path),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    offers: offers.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      price: offer.price.toFixed(0),
      priceCurrency: offer.priceCurrency,
      url: absoluteUrl(offer.url),
      description: offer.description,
      availability: "https://schema.org/InStock",
    })),
  };
}
