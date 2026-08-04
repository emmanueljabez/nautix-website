import Image from "next/image";

const DEMO_URL =
  "https://app.nautix.io/book/skVGGbpLujeMxRTL2JgwnzUut4AC3N-X/xU-NHVEi4rMuY9DlQZdvrHqnJkY-YVAp";

export function HeroSection() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold tracking-wider text-primary-700 uppercase w-fit">
              ANALYTICS &amp; REPORTING
            </span>
            <h1 className="nautix-section-title mb-0">
              <span className="nautix-section-title-line">
                Run your operation on facts,
              </span>
              <span className="nautix-section-title-focus">
                not feelings.
              </span>
            </h1>
            <p className="nautix-section-copy mb-0">
              Turn every conversation, lead, and payment that moves through your
              channels into clear dashboards and a daily report. Know exactly
              what is happening across your operation without chasing anyone for
              an update.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <a href={DEMO_URL} className="nautix-hero-primary">
                Book a demo &rarr;
              </a>
              <a href="#how-it-works" className="nautix-hero-secondary">
                See it in action
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-black/5 bg-white shadow-sm overflow-hidden">
              <Image
                src="/analytics-and-reporting/Nautix_Product_analytics_reporting-Hero.jpg"
                alt="Nautix analytics and reporting dashboard"
                width={600}
                height={450}
                className="w-full h-auto"
                unoptimized
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-100 rounded-2xl -z-10 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
