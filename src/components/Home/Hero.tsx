import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "../common/Badge";
import { Button } from "../common/Button";
import { Section } from "../common/Section";
import { StatItem } from "../common/StatItem";
import { useLanguage } from "../../i18n";
import { BusinessGrid } from "./BusinessGrid";
import { trustStats } from "./content";

export function Hero() {
  const { t } = useLanguage();

  return (
    <Section className="hero-gradient overflow-hidden border-b border-[rgba(56,189,248,0.24)]" innerClassName="relative z-10 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
          <Badge tone="teal">{t("home.eyebrow")}</Badge>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.08 }}
          className="mt-6 text-balance text-4xl font-extrabold leading-tight sm:text-5xl lg:text-[48px]"
        >
          {t("home.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.16 }}
          className="mt-5 max-w-xl text-base leading-8 text-[var(--slate)] sm:text-lg"
        >
          {t("home.desc")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.24 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <Button to="/businesses">{t("home.primary")}</Button>
          <Button href="https://wa.me/918825564290" target="_blank" rel="noreferrer" variant="whatsapp">
            <MessageCircle size={19} />
            {t("home.secondary")}
          </Button>
          <Button href={`tel:${t("common.phone").replaceAll(" ", "")}`} variant="secondary">
            <Phone size={19} />
            {t("common.phone")}
          </Button>
        </motion.div>
        <div className="mt-8 rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4">
          <p className="font-data text-xs uppercase tracking-[0.14em] text-[var(--slate)]">{t("common.serviceArea")}</p>
          <p className="mt-2 font-semibold text-[var(--ink)]">{t("common.address")}</p>
        </div>
      </div>

      <div>
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold">{t("home.businessTitle")}</h2>
            <p className="mt-2 text-[var(--slate)]">{t("home.businessDesc")}</p>
          </div>
        </div>
        <BusinessGrid />
      </div>

      <div className="lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </Section>
  );
}
