interface WordmarkProps {
  className?: string;
}

export function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <span
      className={`font-[var(--font-heading)] text-[20px] font-semibold tracking-[-0.02em] ${className}`}
    >
      nautix
      <span className="ml-[2px] inline-block h-[6px] w-[6px] translate-y-[-10px] rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] align-top" />
    </span>
  );
}
