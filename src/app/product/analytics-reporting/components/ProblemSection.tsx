import Image from "next/image";

const painPoints = [
  {
    title: "Performance is invisible",
    description:
      "You cannot see how fast your team responds, how many issues get resolved, or where conversations stall. Without visibility, you cannot set targets or hold anyone accountable.",
  },
  {
    title: "Data is scattered or missing",
    description:
      "Conversation data lives in WhatsApp, payments in separate tools, and lead status in someone's memory. There is no single place where everything comes together to tell you how the operation is really performing.",
  },
  {
    title: "Decisions are guesswork",
    description:
      "Without reliable data, you make staffing, pricing, and growth decisions based on intuition. You might be overstaffed on quiet days, under-resourced during spikes, and unaware of where revenue is actually coming from.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-primary-50/50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div className="flex flex-col gap-3">
            <h2 className="nautix-section-title mb-0">
              <span className="nautix-section-title-line">
                You can&apos;t improve
              </span>
              <span className="nautix-section-title-focus">
                what you can&apos;t see.
              </span>
            </h2>
            <p className="nautix-section-copy mb-0">
              Most teams running customer operations across WhatsApp, Instagram,
              and Facebook have no single view of what is happening. Data sits in
              scattered spreadsheets, agent recollections, and platform inboxes
              that were never built for reporting.
            </p>
            <div className="flex flex-col gap-2 mt-1">
              {painPoints.map((point) => (
                <div key={point.title}>
                  <h3 className="text-lg font-heading font-bold text-gray-900">
                    {point.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#5c6773]">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-black/5 bg-white shadow-sm overflow-hidden">
              <Image
                src="/analytics-and-reporting/Nautix_Product_analytics_reporting-The-Problem-It-Solves.jpg"
                alt="The problem Nautix analytics solves"
                width={600}
                height={450}
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-100 rounded-2xl -z-10 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
