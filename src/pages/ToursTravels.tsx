import { Bus, Plane, ShieldCheck, Train, Umbrella } from "lucide-react";
import { Card } from "../components/common/Card";
import { ContactPanel } from "../components/common/ContactPanel";
import { PageHeader } from "../components/common/PageHeader";
import { Section } from "../components/common/Section";
import { useLanguage } from "../i18n";

const items = [
  { icon: Bus, title: "Bus Booking", desc: "Local and long-distance bus booking support." },
  { icon: Train, title: "Train Tickets", desc: "Train ticket guidance and travel planning assistance." },
  { icon: Plane, title: "Flight Booking", desc: "Domestic flight booking support with clear details." },
  { icon: Umbrella, title: "Holiday Packages", desc: "Family and group travel planning support." },
];

const trust = ["Clear booking support", "Family travel guidance", "Phone and WhatsApp updates"];

const ToursTravels = () => {
  const { t } = useLanguage();

  return (
    <>
      <Section>
        <PageHeader eyebrow={t("nav.toursTravels")} title={t("pages.travelsTitle")} description={t("pages.travelsDesc")} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title}>
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[rgba(30,138,130,0.12)] text-[var(--teal)]">
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

export default ToursTravels;
