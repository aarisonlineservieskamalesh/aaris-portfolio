import { ArrowRight } from "lucide-react";
import { Badge } from "../common/Badge";
import { Card } from "../common/Card";
import type { IconType } from "../../types/icons";

interface Props {
  title: string;
  description: string;
  icon: IconType;
  category: string;
}

const ServiceCard = ({ title, description, icon: Icon, category }: Props) => {
  return (
    <Card className="group h-full">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(226,129,46,0.12)] text-[var(--amber-dark)] transition group-hover:scale-105">
          <Icon className="h-7 w-7" />
        </div>
        <Badge>{category}</Badge>
      </div>
      <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
      <p className="mt-3 leading-7 text-[var(--slate)]">{description}</p>
      <div className="mt-6 inline-flex items-center gap-2 font-bold text-[var(--amber-dark)]">
        View Details
        <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
      </div>
    </Card>
  );
};

export default ServiceCard;
