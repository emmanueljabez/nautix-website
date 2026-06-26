"use client";

const showcaseImages = [
  { id: 1, src: "/images/dashboard-metric-delivery.png.png", alt: "Delivery Rate" },
  { id: 2, src: "/images/dashboard-metric-response.png.png", alt: "Response Times" },
  { id: 3, src: "/images/dashboard-metric-automation.png.png", alt: "Automation" },
  { id: 4, src: "/images/dashboard-hero-crop.png.png", alt: "Live Metrics" },
];

export function DashboardShowcase() {
  return (
    <div className="relative w-full max-w-[460px] mx-auto lg:mx-0">
      <div className="grid grid-cols-2 gap-2">
        {showcaseImages.map((img) => (
          <div
            key={img.id}
            className="rounded-lg overflow-hidden border border-neutral-200/60 shadow-sm"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
