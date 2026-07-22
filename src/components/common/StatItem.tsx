import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type StatItemProps = {
  value: number;
  suffix?: string;
  label: string;
};

export function StatItem({ value, suffix = "", label }: StatItemProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 650;
    const start = performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.round(value * progress));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl border border-[rgba(37,99,235,0.18)] bg-[image:var(--card-gradient-strong)] p-5 shadow-[var(--shadow-soft)]"
    >
      <div className="font-data text-2xl font-bold text-[var(--ink)]">
        {count}
        {suffix}
      </div>
      <div className="font-data mt-2 text-xs uppercase tracking-[0.14em] text-[var(--slate)]">{label}</div>
    </motion.div>
  );
}
