import { CheckCircle2, FolderOpen, MessageCircle, Monitor, SearchCheck } from "lucide-react";
import { Badge } from "../common/Badge";
import { Card } from "../common/Card";
import { Section } from "../common/Section";
import { useLanguage } from "../../i18n";

const steps = [
  { icon: MessageCircle, title: "Contact Us", description: "Call or WhatsApp us with the service you need." },
  { icon: FolderOpen, title: "Submit Documents", description: "We verify documents and share a complete checklist." },
  { icon: Monitor, title: "We Apply Online", description: "Our team submits your application through the right portal." },
  { icon: SearchCheck, title: "Track Application", description: "We monitor status and share updates until completion." },
  { icon: CheckCircle2, title: "Receive Output", description: "Collect your certificate, acknowledgement or final update." },
];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <Section>
      <div className="text-center">
        <Badge tone="teal">{t("online.how")}</Badge>
        <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">{t("online.how")}</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-[var(--slate)]">{t("online.howDesc")}</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Card key={step.title}>
              <div className="font-data text-xs uppercase tracking-[0.16em] text-[var(--amber-dark)]">Step {index + 1}</div>
              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(30,138,130,0.12)] text-[var(--teal)]">
                <Icon />
              </div>
              <h3 className="mt-5 text-lg font-extrabold">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--slate)]">{step.description}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
