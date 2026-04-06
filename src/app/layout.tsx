import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { RouteChrome } from "@/components/layout/RouteChrome";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nautix | Omnichannel AI Messaging Platform",
  description: "Connect WhatsApp, Instagram, SMS & more to automate campaigns, leads and support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} min-h-screen`}>
        <RouteChrome>{children}</RouteChrome>
      </body>
    </html>
  );
}
