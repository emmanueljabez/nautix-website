import type { ReactNode } from "react";

interface LegalPageShellProps {
  badge: string;
  title: string;
  lead: string;
  meta: string[];
  children: ReactNode;
}

interface LegalCardProps {
  title: string;
  children: ReactNode;
  tone?: "default" | "highlight" | "warning" | "important";
}

export function LegalPageShell({
  badge,
  title,
  lead,
  meta,
  children,
}: LegalPageShellProps) {
  return (
    <div className="bg-[#fcfaf8]">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fdfbff_0%,#f4ecff_40%,#fef5ff_100%)] px-6 pb-16 pt-28 sm:pb-20 sm:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[10%] top-[18%] h-64 w-64 rounded-full bg-[rgba(126,16,162,0.08)] blur-3xl" />
          <div className="absolute bottom-[8%] right-[8%] h-72 w-72 rounded-full bg-[rgba(168,198,95,0.10)] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-5xl">
          <span className="mb-6 inline-flex rounded-full bg-[rgba(126,16,162,0.12)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7e10a2]">
            {badge}
          </span>
          <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-[-0.04em] text-[#171717] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#555] sm:text-lg">
            {lead}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#666]">
            {meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-18">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">{children}</div>
      </section>
    </div>
  );
}

export function LegalCard({
  title,
  children,
  tone = "default",
}: LegalCardProps) {
  const toneClass =
    tone === "highlight"
      ? "border-[rgba(126,16,162,0.18)] bg-[rgba(126,16,162,0.04)]"
      : tone === "warning"
        ? "border-[rgba(220,38,38,0.15)] bg-[rgba(220,38,38,0.04)]"
        : tone === "important"
          ? "border-[rgba(168,198,95,0.28)] bg-[rgba(168,198,95,0.08)]"
          : "border-black/5 bg-white";

  return (
    <section
      className={`rounded-[24px] border p-6 shadow-[0_10px_30px_rgba(19,11,43,0.05)] sm:p-7 ${toneClass}`}
    >
      <h2 className="mb-4 font-heading text-xl font-semibold tracking-[-0.03em] text-[#171717]">
        {title}
      </h2>
      <div className="space-y-4 text-[15px] leading-7 text-[#444] [&_a]:font-semibold [&_a]:text-[#7e10a2] [&_a]:no-underline hover:[&_a]:underline [&_li]:leading-7 [&_ol]:space-y-3 [&_ol]:pl-5 [&_strong]:text-[#171717] [&_ul]:grid [&_ul]:gap-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
