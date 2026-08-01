import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Captures everything",
    description:
      "Every conversation, incoming lead, resolution, and payment that moves through your Nautix channels is captured automatically. No data entry. No manual logging. No missed interactions.",
  },
  {
    number: "2",
    title: "Organises into metrics",
    description:
      "Response times, resolution rates, lead volume, revenue collected, channel performance, and team productivity are calculated and structured into clear, comparable metrics.",
  },
  {
    number: "3",
    title: "Shows it on live dashboards",
    description:
      "Real-time dashboards display every metric as it happens. You can watch conversations getting resolved, leads getting qualified, and payments coming in throughout the day.",
  },
  {
    number: "4",
    title: "Delivers a daily report",
    description:
      "Every morning before 7am, a structured daily report lands in your inbox. It covers yesterday's numbers across every channel, team, and conversation type, so you know exactly where things stand before your day starts.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div className="flex flex-col gap-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-gray-900">
                Everything measured. Everything visible.
              </h2>
              <p className="mt-1 text-lg font-medium text-gray-700 max-w-lg">
                From conversation to dashboard, here is how Nautix turns raw
                activity into clear, actionable insight.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-700 text-white flex items-center justify-center text-xs font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-black/5 bg-white shadow-sm overflow-hidden">
              <Image
                src="/analytics-and-reporting/Nautix_Product_analytics_reporting-How-It-Works.jpg"
                alt="How Nautix analytics and reporting works"
                width={600}
                height={450}
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary-100 rounded-2xl -z-10 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
