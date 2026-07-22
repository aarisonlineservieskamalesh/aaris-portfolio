import { MapPin, MessageCircle, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { badges, services } from "./HeroData";
import ServiceCard from "./HeroServiceCard";
import { Badge } from "../common/Badge";
import { Button } from "../common/Button";
import { Section } from "../common/Section";
import { useLanguage } from "../../i18n";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <Section className="hero-gradient overflow-hidden border-b border-[rgba(56,189,248,0.24)]" innerClassName="relative z-10 grid min-h-[calc(100vh-84px)] items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
      <div>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
          <Badge tone="amber">
            <Sparkles size={14} />
            {t("online.badge")}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.08 }}
          className="mt-6 text-balance text-4xl font-extrabold leading-tight sm:text-5xl"
        >
          {t("online.heroTitle")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.16 }}
          className="mt-5 max-w-xl text-base leading-8 text-[var(--slate)] sm:text-lg"
        >
          {t("online.heroDesc")}
        </motion.p>

        <div className="mt-7 flex flex-wrap gap-3">
          {badges.map((item) => (
            <span key={item.text} className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--paper)] px-3 py-2 text-sm font-semibold text-[var(--slate)]">
              <item.icon size={16} className="text-[var(--teal)]" />
              {item.text}
            </span>
          ))}
        </div>

        <div className="mt-7 rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4">
          <div className="flex gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(30,138,130,0.12)] text-[var(--teal)]">
              <MapPin />
            </div>
            <div>
              <p className="font-bold">{t("common.brand")}</p>
              <p className="mt-1 text-sm leading-6 text-[var(--slate)]">{t("common.address")}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="https://wa.me/918825564290" target="_blank" rel="noreferrer" variant="whatsapp">
            <MessageCircle size={18} />
            {t("nav.whatsapp")}
          </Button>
          <Button href="#services" variant="secondary">
            <Search size={18} />
            {t("common.explore")}
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((item) => (
          <ServiceCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default Hero;
