import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Globe2, Menu, MessageCircle, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../common/Button";
import { useLanguage } from "../../i18n";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/businesses", key: "nav.businesses" },
  { to: "/online-services", key: "nav.onlineServices" },
  { to: "/mobiles", key: "nav.mobiles" },
  { to: "/home-appliances", key: "nav.homeAppliances" },
  { to: "/tours-travels", key: "nav.toursTravels" },
  { to: "#contact", key: "nav.contact" },
];

function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--paper)] px-3 py-2 text-xs font-bold text-[var(--ink)] transition hover:border-[var(--amber)]"
      aria-label="Change language"
    >
      <Globe2 size={16} />
      {language === "en" ? "EN" : "தமிழ்"}
    </button>
  );
}

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition ${
      isActive ? "bg-[rgba(226,129,46,0.14)] text-[var(--amber-dark)]" : "text-[var(--slate)] hover:text-[var(--ink)]"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[rgba(56,189,248,0.22)] bg-[rgba(247,252,255,0.94)] py-2 shadow-[0_12px_32px_rgba(37,99,235,0.10)] backdrop-blur"
          : "border-transparent bg-[rgba(232,247,255,0.70)] py-4 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src="/favicon.svg" alt="AARIS Group" className="h-11 w-11 rounded-xl bg-[var(--paper)] p-1.5" />
          <div>
            <div className="font-display text-lg font-extrabold leading-tight text-[var(--ink)]">{t("common.brand")}</div>
            <div className="font-data text-[10px] uppercase tracking-[0.18em] text-[var(--slate)]">{t("common.portal")}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) =>
            link.to.startsWith("#") ? (
              <a key={link.key} href={link.to} className="rounded-full px-3 py-2 text-sm font-semibold text-[var(--slate)] transition hover:text-[var(--ink)]">
                {t(link.key)}
              </a>
            ) : (
              <NavLink key={link.key} to={link.to} className={navClass}>
                {t(link.key)}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch />
          <Button href={`tel:${t("common.phone").replaceAll(" ", "")}`} variant="secondary" className="px-4">
            <Phone size={17} />
            {t("nav.call")}
          </Button>
          <Button href="https://wa.me/918825564290" target="_blank" rel="noreferrer" variant="whatsapp" className="px-4">
            <MessageCircle size={17} />
            {t("nav.whatsapp")}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--paper)] lg:hidden"
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/35 lg:hidden"
              aria-label="Close menu"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="fixed bottom-0 right-0 top-0 z-50 w-[86vw] max-w-sm bg-[image:var(--page-gradient)] p-5 shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Link to="/" onClick={() => setOpen(false)} className="font-extrabold text-[var(--ink)]">
                  {t("common.brand")}
                </Link>
                <button type="button" onClick={() => setOpen(false)} className="rounded-xl border border-[var(--line)] p-2" aria-label="Close menu">
                  <X />
                </button>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                {links.map((link) =>
                  link.to.startsWith("#") ? (
                    <a key={link.key} href={link.to} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-[var(--slate)]">
                      {t(link.key)}
                    </a>
                  ) : (
                    <NavLink key={link.key} to={link.to} onClick={() => setOpen(false)} className={navClass}>
                      {t(link.key)}
                    </NavLink>
                  ),
                )}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <LanguageSwitch />
                <Button href="https://wa.me/918825564290" target="_blank" rel="noreferrer" variant="whatsapp" className="w-full">
                  <MessageCircle size={18} />
                  {t("nav.whatsapp")}
                </Button>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
