import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Nautix — The AI teammate for conversational commerce",
  description:
    "An elegant, editorial take on the Nautix homepage. Inspired by fin.ai — light palette, editorial typography, real motion, and complex product UIs.",
  alternates: { canonical: "/alt-home" },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
};

export default function AltHomeLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
