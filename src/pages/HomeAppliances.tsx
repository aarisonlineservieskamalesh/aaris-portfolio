import { AirVent, Refrigerator, ShieldCheck, Tv, WashingMachine } from "lucide-react";
import { Card } from "../components/common/Card";
import { ContactPanel } from "../components/common/ContactPanel";
import { PageHeader } from "../components/common/PageHeader";
import { Section } from "../components/common/Section";
import { useLanguage } from "../i18n";

const items = [
  { icon: Tv, title: "TV & Entertainment", desc: "Television and daily home entertainment appliance support." },
  { icon: AirVent, title: "AC Support", desc: "Air conditioner product guidance and service coordination." },
  { icon: Refrigerator, title: "Refrigerators", desc: "Fridge selection, availability and household support." },
  { icon: WashingMachine, title: "Washing Machines", desc: "Washing machine model and service guidance." },
];

const trust = ["Home-first recommendations", "Simple purchase guidance", "Trusted local coordination"];

const HomeAppliances = () => {
  const { t } = useLanguage();

  return (
    <>
      <Section>
        <PageHeader eyebrow={t("nav.homeAppliances")} title={t("pages.appliancesTitle")} description={t("pages.appliancesDesc")} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title}>
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[rgba(226,129,46,0.12)] text-[var(--amber-dark)]">
                  <Icon size={26} />
                </div>
                <h3 className="mt-5 text-xl font-extrabold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[var(--slate)]">{item.desc}</p>
              </Card>
            );
          })}
        </div>
      </Section>
      <Section dark>
        <div className="grid gap-5 md:grid-cols-3">
          {trust.map((point) => (
            <div key={point} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <ShieldCheck className="text-[var(--amber)]" />
              <h3 className="mt-4 font-bold">{point}</h3>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <ContactPanel />
      </Section>
    </>
  );
};

export default HomeAppliances;
