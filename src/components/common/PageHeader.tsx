import { Badge } from "./Badge";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumb?: string;
};

export function PageHeader({ eyebrow, title, description, breadcrumb }: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {breadcrumb ? <p className="font-data mb-5 text-xs uppercase tracking-[0.16em] text-[var(--slate)]">{breadcrumb}</p> : null}
      {eyebrow ? <Badge tone="amber">{eyebrow}</Badge> : null}
      <h1 className="mt-5 text-balance text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--slate)] sm:text-lg">{description}</p>
    </div>
  );
}
