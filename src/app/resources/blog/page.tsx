import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildMetadata,
} from "@/lib/seo";

const BLOG_PATH = "/resources/blog";

export const metadata = buildMetadata({
  title: "Nautix Blog | Customer Operations Insights",
  description:
    "Insights, case breakdowns, and playbooks for teams using AI to run marketing, sales, and customer support operations.",
  path: BLOG_PATH,
  keywords: [
    "nautix blog",
    "customer operations insights",
    "whatsapp automation playbooks",
    "ai support workflows",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Blog", path: BLOG_PATH },
]);

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Nautix Blog",
  url: absoluteUrl(BLOG_PATH),
  blogPost: [
    {
      "@type": "BlogPosting",
      headline: "The Buyer Who Almost Wasn't",
      url: absoluteUrl("/resources/blog/the-buyer-who-almost-wasnt"),
      datePublished: "2026-04-08",
    },
    {
      "@type": "BlogPosting",
      headline: "Your Internet Is Down. It's 11pm. What Happens Next?",
      url: absoluteUrl("/resources/blog/your-internet-is-down-11pm"),
      datePublished: "2026-04-08",
    },
  ],
};

const posts = [
  {
    title: "The Buyer Who Almost Wasn't",
    excerpt:
      "How real estate teams convert late-night Instagram interest into qualified buyers, booked site visits, and faster reservation flows.",
    href: "/resources/blog/the-buyer-who-almost-wasnt",
    category: "Real Estate Sales",
    readTime: "12 min read",
    date: "April 8, 2026",
    image: "/nautix-industries/real-estate.jpg",
  },
  {
    title: "Your Internet Is Down. It's 11pm. What Happens Next?",
    excerpt:
      "A practical breakdown of how ISPs resolve outages, recover payments, and reduce churn after-hours with Splynx + SmartOLT workflows.",
    href: "/resources/blog/your-internet-is-down-11pm",
    category: "ISP Operations",
    readTime: "11 min read",
    date: "April 8, 2026",
    image: "/nautix-industries/isps.jpg",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={blogListSchema} />

      <main className="bg-[#f4f3f7] pb-20 pt-16 md:pt-20">
        <section className="mx-auto max-w-[1160px] px-4">
          <div className="nautix-blog-hero">
            <div className="nautix-blog-hero-pill rounded-pill border">
              <p className="title tg-element-title mb-0">Blog</p>
            </div>
            <h1 className="nautix-blog-hero-title title tg-element-title mb-0">
              Latest <span className="px-1">insights &amp; updates</span>
            </h1>
            <p className="nautix-blog-hero-copy title tg-element-title mb-0">
              Field-tested perspectives on AI-led customer operations across marketing, sales, and
              support.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-6 max-w-[1160px] px-4 md:mt-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.href}
                className="overflow-hidden rounded-2xl border border-[#dddfea] bg-white shadow-[0_16px_36px_rgba(17,24,39,0.07)]"
              >
                <Link href={post.href} className="block">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[220px] w-full object-cover"
                  />
                </Link>

                <div className="p-6">
                  <span className="inline-flex rounded-full bg-[#f1e5f8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7e10a2]">
                    {post.category}
                  </span>
                  <h2 className="mt-4 font-heading text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#20242d]">
                    <Link href={post.href} className="text-current no-underline hover:text-[#7e10a2]">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-[15px] leading-7 text-[#4f5668]">{post.excerpt}</p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] font-semibold text-[#697087]">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-[#98a0b8]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
