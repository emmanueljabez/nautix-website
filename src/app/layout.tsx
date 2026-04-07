import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Outfit } from "next/font/google";
import { HomepageBodyClass } from "@/components/homepage/HomepageBodyClass";
import { RouteChrome } from "@/components/layout/RouteChrome";
import {
  type HeadNodeDescriptor,
  type ScriptDescriptor,
  getMarketingMirror,
} from "@/lib/marketingMirror";
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

const GOOGLE_ANALYTICS_ID = "G-S7RXCGKKP4";

const MARKETING_BODY_BOOTSTRAP = `
  document.body.classList.add(
    "home",
    "wp-singular",
    "page-template",
    "page-template-elementor_header_footer",
    "page",
    "page-id-3841",
    "wp-embed-responsive",
    "wp-theme-lexend",
    "theme-lexend",
    "woocommerce-js",
    "no-sidebar",
    "uni-body",
    "panel",
    "bg-white",
    "text-gray-900",
    "dark:bg-gray-900",
    "dark:text-gray-200",
    "overflow-x-hidden",
    "elementor-default",
    "elementor-template-full-width",
    "elementor-kit-8",
    "elementor-page",
    "elementor-page-3841"
  );
`;

function renderScriptNode(script: ScriptDescriptor, key: string | number) {
  if (script.src) {
    return (
      <script
        key={key}
        id={script.id}
        src={script.src}
        defer={script.defer}
        async={script.async}
        type={script.type}
      />
    );
  }

  if (!script.content) {
    return null;
  }

  return (
    <script
      key={key}
      id={script.id}
      type={script.type}
      dangerouslySetInnerHTML={{ __html: script.content }}
    />
  );
}

function renderHeadNode(node: HeadNodeDescriptor, index: number) {
  const key = `${node.kind}-${node.id ?? index}`;

  if (node.kind === "link") {
    return (
      <link
        key={key}
        id={node.id}
        rel={node.rel}
        href={node.href}
        media={node.media}
        sizes={node.sizes}
        type={node.type}
      />
    );
  }

  if (node.kind === "style") {
    return (
      <style
        key={key}
        id={node.id}
        type={node.type}
        dangerouslySetInnerHTML={{ __html: node.content }}
      />
    );
  }

  return renderScriptNode(node, key);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { headNodes, bodyScripts } = await getMarketingMirror();

  return (
    <html lang="en" className="scroll-smooth">
      <head>{headNodes.map(renderHeadNode)}</head>
      <body className={`${inter.variable} ${outfit.variable} min-h-screen`}>
        <Script
          id="google-tag-manager"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
        <script
          id="marketing-body-bootstrap"
          dangerouslySetInnerHTML={{ __html: MARKETING_BODY_BOOTSTRAP }}
        />
        <HomepageBodyClass />
        <RouteChrome>{children}</RouteChrome>
        {bodyScripts.map((script, index) =>
          renderScriptNode(script, `body-script-${script.id ?? index}`),
        )}
      </body>
    </html>
  );
}
