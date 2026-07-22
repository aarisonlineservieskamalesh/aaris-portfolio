import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  dark?: boolean;
  id?: string;
};

export function Section({ children, className = "", innerClassName = "", dark = false, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${
        dark ? "bg-[image:var(--dark-gradient)] text-[var(--sky-soft)]" : "bg-[image:var(--section-gradient)] text-[var(--ink)]"
      } ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.32, ease: "easeOut" }}
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${innerClassName}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
