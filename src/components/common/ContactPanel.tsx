import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "./Button";
import { Card } from "./Card";
import { useLanguage } from "../../i18n";

export function ContactPanel() {
  const { t } = useLanguage();

  return (
    <Card className="bg-[image:var(--dark-gradient)] text-[var(--sky-soft)]">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <h2 className="text-3xl font-extrabold">{t("home.contactTitle")}</h2>
          <p className="mt-3 max-w-2xl leading-8 text-sky-100/75">{t("home.contactDesc")}</p>
          <div className="mt-5 grid gap-3 text-sm text-sky-100/80 sm:grid-cols-2">
            <span className="flex gap-2">
              <MapPin size={18} className="shrink-0 text-[var(--amber)]" />
              {t("common.address")}
            </span>
            <span className="flex gap-2">
              <Clock size={18} className="shrink-0 text-[var(--amber)]" />
              {t("common.workingHours")}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Button href={`tel:${t("common.phone").replaceAll(" ", "")}`} variant="secondary">
            <Phone size={18} />
            {t("common.phone")}
          </Button>
          <Button href="https://wa.me/918825564290" target="_blank" rel="noreferrer" variant="whatsapp">
            <MessageCircle size={18} />
            {t("nav.whatsapp")}
          </Button>
        </div>
      </div>
    </Card>
  );
}
