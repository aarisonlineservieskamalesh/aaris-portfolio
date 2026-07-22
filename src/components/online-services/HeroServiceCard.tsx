import { ArrowRight } from "lucide-react";
import type { IconType } from "../../types/icons";

interface Props {
  icon: IconType;
  title: string;
  desc: string;
  highlight?: boolean;
}

const HeroServiceCard = ({ icon: Icon, title, desc, highlight }: Props) => {
  return (
    <div
      className={`group flex items-center justify-between rounded-2xl border bg-[image:var(--card-gradient-strong)] p-4 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-hover)] ${
        highlight ? "border-[rgba(226,129,46,0.48)]" : "border-[rgba(37,99,235,0.20)]"
      }`}
    >
      <div className="flex min-w-0 items-center gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
            highlight ? "bg-[rgba(226,129,46,0.14)] text-[var(--amber-dark)]" : "bg-[rgba(30,138,130,0.12)] text-[var(--teal)]"
          }`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <h3 className="truncate font-bold text-[var(--ink)]">{title}</h3>
          <p className="text-sm text-[var(--slate)]">{desc}</p>
        </div>
      </div>
      <ArrowRight className="shrink-0 text-[var(--amber-dark)] transition group-hover:translate-x-1" />
    </div>
  );
};

export default HeroServiceCard;
