import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Outfit } from "next/font/google";
import { RouteChrome } from "@/components/layout/RouteChrome";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  absoluteUrl,
  buildOrganizationSchema,
  buildWebsiteSchema,
} from "@/lib/seo";
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
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "whatsapp automation",
    "instagram dm automation",
    "facebook messenger automation",
    "ai customer support software",
    "lead qualification software",
    "omnichannel messaging platform",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
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
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    images: [
      {
        url: absoluteUrl("/icon.png"),
        width: 1024,
        height: 1024,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [absoluteUrl("/icon.png")],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/icon.png" }],
  },
};

const GOOGLE_ANALYTICS_ID = "G-S7RXCGKKP4";
const GLOBAL_BODY_CLASSES = [
  "wp-theme-lexend",
  "theme-lexend",
  "uni-body",
  "panel",
  "bg-white",
  "text-gray-900",
  "overflow-x-hidden",
  "elementor-default",
  "elementor-template-full-width",
  "elementor-kit-8",
  "elementor-page",
  "min-h-screen",
].join(" ");

const GLOBAL_STYLE_SHEETS = [
  "/wp-content/uploads/elementor/css/custom-frontend.min.css",
  "/wp-content/plugins/lexend-core/lib/templates/css/template-frontend.min.css",
  "/wp-content/plugins/lexend-core/assets/css/unicons.min.css",
  "/wp-content/plugins/lexend-core/include/menu/css/style.css",
  "/wp-content/themes/lexend/assets/css/lexend-custom.css",
  "/wp-content/themes/lexend/assets/css/lexend-fonts.css",
  "/wp-content/themes/lexend/assets/css/uni-core.min.css",
  "/wp-content/themes/lexend/assets/css/unicons.min.css",
  "/wp-content/themes/lexend/assets/css/fontawesome-all.min.css",
  "/wp-content/themes/lexend/assets/css/swiper-bundle.min.css",
  "/wp-content/themes/lexend/assets/css/prettify.min.css",
  "/wp-content/themes/lexend/assets/css/lexend-core.min.css",
  "/wp-content/themes/lexend/assets/css/lexend-unit.css",
  "/wp-content/themes/lexend/assets/css/lexend-woo.css",
  "/wp-content/themes/lexend/style.css",
  "/wp-content/uploads/elementor/css/post-8.css",
  "/wp-content/plugins/elementor/assets/css/widget-image.min.css",
  "/wp-content/uploads/elementor/css/post-3841.css",
  "/wp-content/themes/lexend/assets/css/nautix-brand.css",
];

const GLOBAL_FOOTER_SCRIPTS = [
  { id: "jquery-core-js", src: "/wp-includes/js/jquery/jquery.min.js" },
  { id: "jquery-migrate-js", src: "/wp-includes/js/jquery/jquery-migrate.min.js" },
  { id: "lexend-uni-core-js", src: "/wp-content/themes/lexend/assets/js/uni-core-bundle.min.js" },
  { id: "bootstrap-js", src: "/wp-content/themes/lexend/assets/js/bootstrap.min.js" },
  { id: "swiper-bundle-js", src: "/wp-content/themes/lexend/assets/js/swiper-bundle.min.js" },
  { id: "typed-js", src: "/wp-content/themes/lexend/assets/js/typed.min.js" },
  { id: "data-attr-helper-js", src: "/wp-content/themes/lexend/assets/js/data-attr-helper.js" },
  { id: "swiper-helper-js", src: "/wp-content/themes/lexend/assets/js/swiper-helper.js" },
  { id: "typed-helper-js", src: "/wp-content/themes/lexend/assets/js/typed-helper.js" },
  { id: "uikit-components-bs-js", src: "/wp-content/themes/lexend/assets/js/uikit-components-bs.js" },
  { id: "lexend-app-js", src: "/wp-content/themes/lexend/assets/js/app.js" },
  { id: "lexend-main-js", src: "/wp-content/themes/lexend/assets/js/main.js" },
  { id: "animejs-main-js", src: "/wp-content/plugins/lexend-core/include/animejs/js/animejs.min.js" },
  {
    id: "animejs-scrollmagic-js",
    src: "/wp-content/plugins/lexend-core/include/animejs/js/animejs-scrollmagic.min.js",
  },
  {
    id: "animejs-data-attr-helper-js",
    src: "/wp-content/plugins/lexend-core/include/animejs/js/animejs-data-attr-helper.js",
  },
  {
    id: "animejs-helper-js",
    src: "/wp-content/plugins/lexend-core/include/animejs/js/animejs-helper.js",
  },
] as const;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {GLOBAL_STYLE_SHEETS.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <script
          id="preloader-controller"
          dangerouslySetInnerHTML={{
            __html:
              'var PRELOADER_CONTROLLER = {"ENABLE_PAGE_PRELOADER":"1","DEFAULT_DARK_MODE":"0","USE_SYSTEM_PREFERENCES":"0"};',
          }}
        />
        <script id="app-head-bs-js" src="/wp-content/themes/lexend/assets/js/app-head-bs.js" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${GLOBAL_BODY_CLASSES}`}>
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
        <JsonLd data={buildOrganizationSchema()} />
        <JsonLd data={buildWebsiteSchema()} />
        <RouteChrome>{children}</RouteChrome>
        {GLOBAL_FOOTER_SCRIPTS.map((script) => (
          <script key={script.id} id={script.id} src={script.src} />
        ))}
      </body>
    </html>
  );
}
