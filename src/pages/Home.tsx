import { MessageCircle, Phone } from "lucide-react";
import { Hero } from "../components/Home/Hero";
import { BusinessGrid } from "../components/Home/BusinessGrid";
import { Button } from "../components/common/Button";
import { Section } from "../components/common/Section";
import { useLanguage } from "../i18n";

const Home = () => {
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold">{t("home.trustTitle")}</h2>
          <p className="mt-4 leading-8 text-[var(--slate)]">{t("home.businessDesc")}</p>
        </div>
        <div className="mt-10">
          <BusinessGrid />
        </div>
      </Section>
      <Section dark>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-3xl font-extrabold">{t("home.contactTitle")}</h2>
            <p className="mt-4 max-w-2xl leading-8 text-sky-100/75">{t("home.contactDesc")}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
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
      </Section>
    </>
  );
};

export default Home;
