import Image from "next/image";

const industries = [
  {
    image:
      "/analytics-and-reporting/Nautix_Product_analytics_reporting-Across-Every-Industry-ISPs.jpg",
    name: "ISPs",
    description:
      "Track service tickets, outage reports, resolution times, and payment collections across thousands of subscribers. Know which areas generate the most issues, which teams resolve fastest, and where revenue is at risk.",
  },
  {
    image:
      "/analytics-and-reporting/Nautix_Product_analytics_reporting-Across-Every-Industry-Real-Estate.jpg",
    name: "Real Estate",
    description:
      "See inquiry volume by project, lead qualification rates, site visit bookings, and post-visit follow-up performance. Understand which channels and agents are converting best.",
  },
  {
    image:
      "/analytics-and-reporting/Nautix_Product_analytics_reporting-Across-Every-Industry-E-commerce.jpg",
    name: "E-commerce",
    description:
      "Monitor order inquiries, delivery status requests, return processing, and payment confirmations. Track response times during peak campaigns and identify friction points before they hurt sales.",
  },
  {
    image:
      "/analytics-and-reporting/Nautix_Product_analytics_reporting-Across-Every-Industry-Finance.jpg",
    name: "Finance",
    description:
      "Measure loan inquiry volume, application completion rates, disbursement turnaround, and payment collection performance. Report compliance-ready metrics across branches and agents.",
  },
];

export function IndustrySection() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="text-center">
          <h2 className="nautix-section-title mb-0">
            <span className="nautix-section-title-line">
              Clear insight
            </span>
            <span className="nautix-section-title-focus">
              for every operation.
            </span>
          </h2>
          <p className="nautix-section-copy mb-0">
            Analytics that speak the language of your industry. Here is how
            teams across different sectors use Nautix reporting to run tighter
            operations.
          </p>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="rounded-2xl border border-black/5 bg-white shadow-sm overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <Image
                  src={industry.image}
                  alt={`Nautix analytics for ${industry.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex flex-col gap-1">
                <h3 className="text-lg font-heading font-bold text-gray-900">
                  {industry.name}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#5c6773]">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
