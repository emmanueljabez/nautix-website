import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "Nautix — When your customers reach out, we handle it | Enhanced preview",
  description:
    "An enhanced take on the Nautix homepage. Same real customers and stories — rebuilt with proper motion, cleaner UIs, and richer product visualizations.",
  alternates: { canonical: "/home-enhanced" },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
};

export default function HomeEnhancedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
