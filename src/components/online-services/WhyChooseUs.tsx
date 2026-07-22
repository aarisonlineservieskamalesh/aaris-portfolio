import { BadgeCheck, Clock3, Headphones, ShieldCheck } from "lucide-react";
import { Badge } from "../common/Badge";
import { Card } from "../common/Card";
import { Section } from "../common/Section";
import { useLanguage } from "../../i18n";

const features = [
  { icon: ShieldCheck, title: "Trusted Service", description: "Reliable and secure government service assistance." },
  { icon: Clock3, title: "Fast Processing", description: "Quick application processing with timely updates." },
  { icon: BadgeCheck, title: "Experienced Team", description: "Professional guidance for every government service." },
  { icon: Headphones, title: "Customer Support", description: "Friendly support before, during and after your application." },
];

const WhyChooseUs = () => {
  const { t } = useLanguage();

  return (
    <Section className="bg-[var(--paper)]">
      <div className="text-center">
        <Badge tone="amber">{t("online.why")}</Badge>
        <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">{t("online.why")}</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-[var(--slate)]">{t("online.whyDesc")}</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(30,138,130,0.12)] text-[var(--teal)]">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold">{item.title}</h3>
              <p className="mt-3 leading-7 text-[var(--slate)]">{item.description}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default WhyChooseUs;
