import { Link, type LinkProps } from "react-router-dom";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "whatsapp" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonProps = BaseProps &
  (
    | ({ to: string } & Omit<LinkProps, "to" | "className">)
    | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
    | React.ButtonHTMLAttributes<HTMLButtonElement>
  );

const variants: Record<ButtonVariant, string> = {
  primary: "bg-gradient-to-r from-[var(--blue)] to-[var(--sky)] text-[#f0fbff] shadow-[var(--shadow-soft)] hover:brightness-95",
  secondary:
    "border border-[rgba(56,189,248,0.35)] bg-[rgba(255,253,248,0.86)] text-[var(--ink)] hover:border-[var(--blue)] hover:text-[var(--blue)]",
  whatsapp: "bg-[var(--whatsapp)] text-[#f0fbff] shadow-[var(--shadow-soft)] hover:brightness-95",
  ghost: "text-[var(--ink)] hover:bg-[rgba(56,189,248,0.14)]",
};

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-[var(--amber)] focus:ring-offset-2";

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("to" in props) {
    return (
      <motion.span whileTap={{ scale: 0.97 }}>
        <Link {...props} to={props.to} className={classes}>
          {children}
        </Link>
      </motion.span>
    );
  }

  if ("href" in props) {
    return (
      <motion.span whileTap={{ scale: 0.97 }} className="inline-flex">
        <a {...props} className={classes}>
          {children}
        </a>
      </motion.span>
    );
  }

  return (
    <motion.span whileTap={{ scale: 0.97 }} className="inline-flex">
      <button {...props} className={classes}>
        {children}
      </button>
    </motion.span>
  );
}
