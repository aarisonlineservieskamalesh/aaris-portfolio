import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "../common/Card";
import { Badge } from "../common/Badge";
import { businesses } from "./content";

export function BusinessGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {businesses.map((item) => {
        const Icon = item.icon;
        return (
          <Link key={item.to} to={item.to} className="group block">
            <Card className="h-full">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[rgba(30,138,130,0.12)] text-[var(--teal)] transition group-hover:scale-105">
                  <Icon size={26} />
                </div>
                <Badge tone="amber">{item.tag}</Badge>
              </div>
              <h3 className="mt-5 text-xl font-extrabold">{item.title}</h3>
              <p className="mt-3 leading-7 text-[var(--slate)]">{item.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-bold text-[var(--amber-dark)] transition group-hover:gap-3">
                View details <ArrowRight size={18} />
              </span>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
