import Image from "next/image";

const capabilities = [
  {
    icon: "\u{1F4CA}",
    title: "Live dashboards",
    description:
      "Real-time views of conversations, response times, resolution rates, lead volume, and revenue. Filter by channel, team member, or time period.",
  },
  {
    icon: "\u{1F4E7}",
    title: "Daily report",
    description:
      "A complete operations report delivered to your inbox every morning before 7am, covering every metric that matters from the previous day.",
  },
  {
    icon: "\u{23F1}",
    title: "Response & resolution metrics",
    description:
      "Average first response time, resolution time, and resolution rate tracked across every channel, team member, and conversation type.",
  },
  {
    icon: "\u{1F4B0}",
    title: "Revenue & payment tracking",
    description:
      "Every payment initiated, completed, and pending across card and mobile money. Revenue tracked by channel, team, and time period.",
  },
  {
    icon: "\u{1F3AF}",
    title: "Lead & conversion insight",
    description:
      "New leads captured, qualification rates, and conversion through the pipeline. See which channels and campaigns are driving the most value.",
  },
  {
    icon: "\u{1F4C8}",
    title: "Trends over time",
    description:
      "Week-over-week and month-over-month comparisons across every metric. Spot patterns, catch issues early, and track improvement over time.",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="bg-primary-50/50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div className="flex flex-col gap-3">
            <h2 className="nautix-section-title mb-0">
              <span className="nautix-section-title-line">
                What analytics &amp;
              </span>
              <span className="nautix-section-title-focus">
                reporting does
              </span>
            </h2>
            <p className="nautix-section-copy mb-0">
              Six core capabilities that turn raw conversation data into clear,
              actionable insight for your entire operation.
            </p>
            <div className="grid sm:grid-cols-2 gap-2 mt-1">
              {capabilities.map((capability) => (
                <div key={capability.title}>
                  <div className="text-xl">{capability.icon}</div>
                  <h3 className="text-[17px] font-heading font-semibold text-gray-900">
                    {capability.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#5c6773]">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-black/5 bg-white shadow-sm overflow-hidden">
              <Image
                src="/analytics-and-reporting/Nautix_Product_analytics_reporting-Key-Capabilities.jpg"
                alt="Nautix key analytics capabilities"
                width={600}
                height={450}
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-100 rounded-2xl -z-10 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
