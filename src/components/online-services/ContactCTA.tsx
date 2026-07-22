import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "../common/Button";
import { Section } from "../common/Section";
import { useLanguage } from "../../i18n";

export default function ContactCTA() {
  const { t } = useLanguage();

  return (
    <Section dark>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">{t("online.ctaTitle")}</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-sky-100/75">{t("online.ctaDesc")}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="https://wa.me/918825564290" target="_blank" rel="noreferrer" variant="whatsapp">
            <MessageCircle size={20} />
            {t("nav.whatsapp")}
          </Button>
          <Button href={`tel:${t("common.phone").replaceAll(" ", "")}`} variant="secondary">
            <Phone size={20} />
            {t("nav.call")}
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </Section>
  );
}
