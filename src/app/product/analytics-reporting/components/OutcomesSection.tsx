import Image from "next/image";

const stats = [
  {
    value: "7am",
    label: "Daily report, before your day even starts",
    description:
      "No logging in, no pulling data from five places, no chasing people for updates. A complete operations report arrives in your inbox every morning.",
  },
  {
    value: "Real-time",
    label: "Dashboards covering your whole operation",
    description:
      "Conversations, resolutions, leads, and payments visible on live dashboards as they happen. Filter by channel, team, or any dimension that matters to you.",
  },
  {
    value: "100%",
    label: "Of activity captured and measurable",
    description:
      "Every interaction across every channel is captured. No gaps. No missing data. No relying on what someone remembers at the end of the week.",
  },
];

export function OutcomesSection() {
  return (
    <section
      className="border-b border-gray-200 text-white"
      style={{
        background: "linear-gradient(145deg, #7e10a2 0%, #651082 54%, #2b1539 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-center max-w-2xl mx-auto">
          What full visibility delivers
        </h2>
        <div className="mt-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col gap-8">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col gap-1">
                <span className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
                  {stat.value}
                </span>
                <span className="text-lg font-heading font-bold text-white/90">
                  {stat.label}
                </span>
                <p className="text-sm font-medium text-white/70 leading-relaxed max-w-md">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 shadow-sm overflow-hidden">
              <Image
                src="/analytics-and-reporting/Nautix_Product_analytics_reporting-The-Outcomes.jpg"
                alt="Nautix analytics outcomes and results"
                width={600}
                height={450}
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 rounded-2xl -z-10 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
