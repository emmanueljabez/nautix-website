import { FinalCtaSection } from "@/components/homepage/FinalCtaSection";
import type { LandingPageData } from "@/lib/seo-pages";

type LandingSectionPageProps = {
  sectionLabel: string;
  page: LandingPageData;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

export function LandingSectionPage({
  sectionLabel,
  page,
  primaryCta,
  secondaryCta,
}: LandingSectionPageProps) {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full border border-primary/25 bg-primary/5 text-primary text-sm font-semibold">
            {sectionLabel}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-4 mb-5 text-primary-950">
            {page.heading}
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            {page.subheading}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold bg-primary text-white hover:bg-primary-700 transition-colors"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold border border-primary/25 text-primary hover:bg-primary/5 transition-colors"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <article className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary-900">What Nautix handles</h2>
            <ul className="space-y-3">
              {page.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary-900">Expected outcomes</h2>
            <ul className="space-y-3">
              {page.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <FinalCtaSection />
    </main>
  );
}
