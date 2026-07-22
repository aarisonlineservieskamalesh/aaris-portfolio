import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "amber" | "teal" | "ink";
  className?: string;
};

const tones = {
  amber: "border-[rgba(226,129,46,0.35)] bg-[rgba(226,129,46,0.10)] text-[var(--amber-dark)]",
  teal: "border-[rgba(30,138,130,0.30)] bg-[rgba(30,138,130,0.10)] text-[var(--teal)]",
  ink: "border-sky-100/20 bg-sky-100/10 text-[var(--sky-soft)]",
};

export function Badge({ children, tone = "teal", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
