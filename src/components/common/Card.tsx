import { motion } from "framer-motion";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
};

export function Card({ children, className = "", as = "article" }: CardProps) {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={`rounded-2xl border border-[rgba(37,99,235,0.18)] bg-[image:var(--card-gradient)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-[rgba(37,99,235,0.48)] hover:shadow-[var(--shadow-hover)] ${className}`}
    >
      {children}
    </Component>
  );
}
