"use client";

const showcaseImage = {
  src: "/images/dash1.png",
  alt: "Live System Diagnosis dashboard",
};

export function DashboardShowcase() {
  return (
    <div className="relative w-full h-full mx-auto lg:mx-0">
      <img
        src={showcaseImage.src}
        alt={showcaseImage.alt}
        className="w-full h-full object-contain rounded-2xl"
      />
    </div>
  );
}
