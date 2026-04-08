import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_NAME,
  absoluteUrl,
  buildBreadcrumbSchema,
  buildMetadata,
} from "@/lib/seo";

const BLOG_PATH = "/resources/blog";
const ARTICLE_PATH = "/resources/blog/the-buyer-who-almost-wasnt";
const ARTICLE_TITLE = "The Buyer Who Almost Wasn't";

export const metadata = buildMetadata({
  title: `${ARTICLE_TITLE} | Nautix`,
  description:
    "A real estate sales playbook for turning late-night Instagram intent into qualified buyers, booked site visits, and faster deposits with autonomous workflows.",
  path: ARTICLE_PATH,
  type: "article",
  keywords: [
    "real estate lead automation",
    "instagram lead qualification",
    "property sales follow up automation",
    "real estate whatsapp workflow",
    "book more site visits",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Blog", path: BLOG_PATH },
  { name: ARTICLE_TITLE, path: ARTICLE_PATH },
]);

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: ARTICLE_TITLE,
  description:
    "How developers and agencies can capture social leads instantly, qualify buyers in minutes, and run 14-day post-visit follow-up automatically.",
  mainEntityOfPage: absoluteUrl(ARTICLE_PATH),
  datePublished: "2026-04-08",
  dateModified: "2026-04-08",
  author: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon.png"),
    },
  },
  wordCount: 2240,
  inLanguage: "en-KE",
  articleSection: [
    "Real Estate Sales",
    "Lead Qualification",
    "Instagram Conversion",
    "AI Operations",
  ],
};

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

function ArticleSection({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-32">
      <h2 className="font-heading text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#20242d] sm:text-[42px]">
        {title}
      </h2>
      <div className="mt-6 space-y-5 text-[17px] leading-8 text-[#3f4658]">{children}</div>
    </section>
  );
}

function StrategyCard({
  title,
  copy,
}: {
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-2xl border border-[#e2e5ef] bg-[#fbfbff] p-5">
      <h3 className="font-heading text-[24px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#20242d]">
        {title}
      </h3>
      <p className="mt-3 text-[16px] leading-7 text-[#4a5162]">{copy}</p>
    </div>
  );
}

export default function RealEstateBuyerArticlePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={blogPostingSchema} />

      <main className="bg-[#f7f6fb] pb-24 pt-20">
        <article className="mx-auto max-w-[1240px] px-4">
          <header className="overflow-hidden rounded-[28px] border border-[#e5e6ef] bg-white shadow-[0_24px_58px_rgba(17,24,39,0.08)]">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-7 sm:p-10 lg:p-12">
                <span className="inline-flex rounded-full border border-[#d9d8e8] bg-[#f1effa] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#6c1a8e]">
                  Real Estate Sales
                </span>
                <h1 className="mt-5 font-heading text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#20242d] sm:text-[58px]">
                  {ARTICLE_TITLE}
                </h1>
                <p className="mt-5 max-w-[56ch] text-[18px] leading-8 text-[#474e5f]">
                  It is 9:47pm on a Tuesday. A buyer comments on your Instagram property video,
                  asks price and location, then keeps scrolling. By morning, the lead is mostly gone
                  because no one acted when intent was highest.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-semibold text-[#60687a]">
                  <span>Nautix Team</span>
                  <span className="h-1 w-1 rounded-full bg-[#9ea5b7]" />
                  <span>April 8, 2026</span>
                  <span className="h-1 w-1 rounded-full bg-[#9ea5b7]" />
                  <span>12 min read</span>
                </div>
              </div>

              <div className="relative min-h-[320px] border-t border-[#ececf3] lg:min-h-full lg:border-l lg:border-t-0">
                <img
                  src="/nautix-industries/real-estate.jpg"
                  alt="Real estate towers at dusk"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </header>

          <div className="mt-10 grid gap-8 lg:grid-cols-[270px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-[100px] lg:self-start">
              <div className="rounded-2xl border border-[#e1e4ef] bg-white p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7e10a2]">
                  In this article
                </p>
                <nav className="mt-3 flex flex-col gap-2 text-[14px] font-semibold text-[#424a5d]">
                  <a href="#behavior" className="rounded-lg px-2 py-1 text-current no-underline hover:bg-[#f5f2fb] hover:text-[#7e10a2]">
                    How leads behave now
                  </a>
                  <a href="#approaches" className="rounded-lg px-2 py-1 text-current no-underline hover:bg-[#f5f2fb] hover:text-[#7e10a2]">
                    Why standard approaches fail
                  </a>
                  <a href="#eight-minutes" className="rounded-lg px-2 py-1 text-current no-underline hover:bg-[#f5f2fb] hover:text-[#7e10a2]">
                    What eight minutes can do
                  </a>
                  <a href="#qualification" className="rounded-lg px-2 py-1 text-current no-underline hover:bg-[#f5f2fb] hover:text-[#7e10a2]">
                    Qualification gap
                  </a>
                  <a href="#follow-up" className="rounded-lg px-2 py-1 text-current no-underline hover:bg-[#f5f2fb] hover:text-[#7e10a2]">
                    14-day follow-up
                  </a>
                  <a href="#deposit" className="rounded-lg px-2 py-1 text-current no-underline hover:bg-[#f5f2fb] hover:text-[#7e10a2]">
                    Deposit conversation
                  </a>
                  <a href="#business-impact" className="rounded-lg px-2 py-1 text-current no-underline hover:bg-[#f5f2fb] hover:text-[#7e10a2]">
                    Business impact
                  </a>
                </nav>
              </div>

              <div className="mt-4 rounded-2xl border border-[#dbdef0] bg-[#f3f0fb] p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#6f1d92]">
                  Key signal
                </p>
                <p className="mt-2 text-[15px] leading-7 text-[#3d4560]">
                  Property leads are usually lost in the quiet gap between expressed interest and first meaningful action.
                </p>
              </div>
            </aside>

            <div className="rounded-[24px] border border-[#e2e4ef] bg-white px-6 py-8 sm:px-10 sm:py-10">
              <ArticleSection id="behavior" title="How Property Leads Actually Behave">
                <p>
                  The property industry was built around walk-ins, brochures, and daytime site
                  visits. That buyer still exists. But most inquiry volume now starts on social
                  channels when prospects are on their phones, often at night, often distracted,
                  and rarely willing to wait.
                </p>
                <p>
                  A serious buyer may first discover your development through an Instagram story, a
                  Facebook reel, or a forwarded WhatsApp post. They are not in a show house. They
                  are deciding in short attention windows while comparing multiple options.
                </p>
                <p>
                  The conversion window is measured in minutes. A lead answered within five minutes
                  performs very differently from one answered an hour later. Unanswered leads are
                  usually gone, even if they look "warm" in the CRM the next day.
                </p>
                <p>
                  Teams understand this in theory. The gap is operational: most sales teams work
                  8am to 5pm, while many high-intent moments happen around 9pm to 11pm.
                </p>
              </ArticleSection>

              <div className="my-12 h-px bg-[#eceef5]" />

              <ArticleSection id="approaches" title="Why the Standard Approaches Fall Short">
                <p>
                  Most teams try to fix the problem with staffing, scripted auto-replies, or CRM
                  follow-up discipline. Those interventions improve acknowledgment, but they do not
                  reliably convert intent into progress.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <StrategyCard
                    title="Dedicated social manager"
                    copy="Useful for coverage, but still shift-bound. A next-morning response to a 9:47pm inquiry is already late."
                  />
                  <StrategyCard
                    title="Generic auto-reply"
                    copy="Confirms receipt, but does not qualify budget, send floor plans, or secure a site visit slot."
                  />
                  <StrategyCard
                    title="CRM-first follow-up"
                    copy="Depends on manual capture from comments and DMs. Under workload, too many leads never enter correctly."
                  />
                </div>
                <blockquote className="rounded-2xl border-l-4 border-[#7e10a2] bg-[#fbf9ff] px-5 py-4 text-[17px] leading-8 text-[#3f4658]">
                  Responding acknowledges intent. Resolving converts intent.
                </blockquote>
              </ArticleSection>

              <div className="my-12 h-px bg-[#eceef5]" />

              <ArticleSection id="eight-minutes" title="What Eight Minutes Can Do">
                <p>
                  One developer implemented autonomous lead capture and qualification. This was the
                  exact sequence from comment to confirmed site visit.
                </p>
                <div className="rounded-2xl border border-[#dde1ef] bg-[#f9f9fd] p-5">
                  <ol className="space-y-3">
                    <li className="rounded-xl border border-[#e6e8f2] bg-white px-4 py-3 text-[15px] leading-7 text-[#3f4658]">
                      <strong className="text-[#7e10a2]">9:47pm</strong>: Buyer comments on Instagram: "Interested, how much and where exactly?"
                    </li>
                    <li className="rounded-xl border border-[#e6e8f2] bg-white px-4 py-3 text-[15px] leading-7 text-[#3f4658]">
                      <strong className="text-[#7e10a2]">9:48pm</strong>: Nautix detects intent and sends DM with location and starting price.
                    </li>
                    <li className="rounded-xl border border-[#e6e8f2] bg-white px-4 py-3 text-[15px] leading-7 text-[#3f4658]">
                      <strong className="text-[#7e10a2]">9:50pm</strong>: Buyer shares family-use intent and budget range.
                    </li>
                    <li className="rounded-xl border border-[#e6e8f2] bg-white px-4 py-3 text-[15px] leading-7 text-[#3f4658]">
                      <strong className="text-[#7e10a2]">9:53pm</strong>: Floor plan and payment plan are sent on WhatsApp with two viewing slots.
                    </li>
                    <li className="rounded-xl border border-[#e6e8f2] bg-white px-4 py-3 text-[15px] leading-7 text-[#3f4658]">
                      <strong className="text-[#7e10a2]">9:55pm</strong>: Site visit confirmed; assigned agent receives a full buyer brief.
                    </li>
                  </ol>
                </div>
              </ArticleSection>

              <div className="my-12 h-px bg-[#eceef5]" />

              <ArticleSection id="qualification" title="The Qualification Gap">
                <p>
                  A social inquiry saying "interested, how much?" can represent almost any buyer type.
                  Without fast qualification, teams spend time on poor-fit leads while high-fit leads
                  leave the funnel before human contact.
                </p>
                <p>
                  Nautix qualifies inquiries in the first minutes through a conversational flow that
                  captures the core fit variables before handoff:
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Budget range and financing mode</li>
                  <li>Location and property type preference</li>
                  <li>Bedroom/bathroom and size requirements</li>
                  <li>Amenity priorities (parking, DSQ, gym, backup, garden, balcony)</li>
                  <li>Use case (owner-occupier vs investment) and timeline to buy</li>
                </ul>
                <p>
                  By the time a human agent steps in, they are not introducing themselves to a
                  stranger. They are meeting a qualified buyer who already has context and next steps.
                </p>
              </ArticleSection>

              <div className="my-12 h-px bg-[#eceef5]" />

              <ArticleSection id="follow-up" title="The Post-Visit Problem">
                <p>
                  Visits do not close deals on their own. The 14 days after a visit drive most outcomes.
                  In many teams, follow-up quality depends on memory, workload, and individual style.
                </p>
                <p>
                  A structured 14-day sequence performs better because it runs for every visitor:
                </p>
                <div className="rounded-2xl border border-[#dde1ef] bg-[#fafafe] p-5">
                  <ul className="space-y-2">
                    <li className="text-[15px] leading-7 text-[#3f4658]"><strong>+2 hours:</strong> Confirm visit experience, answer open questions.</li>
                    <li className="text-[15px] leading-7 text-[#3f4658]"><strong>Day 2:</strong> Send title support docs and full payment plan options.</li>
                    <li className="text-[15px] leading-7 text-[#3f4658]"><strong>Day 5:</strong> Check active interest with relevant demand context.</li>
                    <li className="text-[15px] leading-7 text-[#3f4658]"><strong>Day 10:</strong> Share concrete urgency signal on availability or pricing timeline.</li>
                    <li className="text-[15px] leading-7 text-[#3f4658]"><strong>Day 14:</strong> Escalate to human agent with full history and close recommendation.</li>
                  </ul>
                </div>
              </ArticleSection>

              <div className="my-12 h-px bg-[#eceef5]" />

              <ArticleSection id="deposit" title="The Deposit Conversation">
                <p>
                  Buyers should not wait for office hours to reserve a unit once they have decided.
                  Momentum is highest at commitment time, often evenings or weekends.
                </p>
                <div className="rounded-2xl border border-[#dfe2ee] bg-[#fbfbff] p-5">
                  <p className="text-[15px] leading-7 text-[#3f4658]">
                    <strong>Buyer:</strong> "We have decided. We want Unit 5C."
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-[#3f4658]">
                    <strong>Nautix:</strong> "To reserve Unit 5C, we require a holding deposit of KES 100,000. I can send an M-Pesa request now."
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-[#3f4658]">
                    The payment request is completed in-thread, unit status updates to reserved, a receipt is sent, and the agent receives handoff details.
                  </p>
                </div>
              </ArticleSection>

              <div className="my-12 h-px bg-[#eceef5]" />

              <ArticleSection id="business-impact" title="What Changes at the Business Level">
                <p>
                  When lead capture, qualification, booking, follow-up, and deposit workflows run
                  consistently, teams stop managing chaos and start managing output.
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Agents focus on negotiations and site visits, not repetitive triage.</li>
                  <li>Instagram and Facebook become predictable conversion channels.</li>
                  <li>No serious inquiry disappears in an unmonitored inbox.</li>
                  <li>Reservation speed improves because commitment can be captured in real time.</li>
                </ul>
                <p>
                  In competitive markets, the developer who qualifies and schedules first usually
                  controls the next decision.
                </p>
              </ArticleSection>

              <section className="mt-12 rounded-2xl border border-[#d9ddef] bg-[#f5f3fb] p-6">
                <h2 className="font-heading text-[30px] font-semibold leading-[1.04] tracking-[-0.03em] text-[#20242d] sm:text-[38px]">
                  Ready to see this on your listings?
                </h2>
                <p className="mt-4 max-w-[62ch] text-[16px] leading-7 text-[#4a5162]">
                  We built the Nautix Real Estate Sales Engine for developers and agencies that need
                  faster qualification, consistent follow-up, and better conversion from Instagram,
                  Facebook, and WhatsApp.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center rounded-full bg-[#7e10a2] px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-[#670d87]"
                  >
                    Book the Real Estate Demo
                  </Link>
                  <Link
                    href="/industries/real-estate"
                    className="inline-flex items-center justify-center rounded-full border border-[#c8cde0] bg-white px-6 py-3 text-sm font-semibold text-[#2f384d] no-underline transition hover:bg-[#f8f9fc]"
                  >
                    Explore Real Estate Use Cases
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center rounded-full border border-[#c8cde0] bg-white px-6 py-3 text-sm font-semibold text-[#2f384d] no-underline transition hover:bg-[#f8f9fc]"
                  >
                    Review Pricing
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
