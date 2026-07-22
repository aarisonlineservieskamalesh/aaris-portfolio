import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { categories, services } from "./ServiceData";
import ServiceCard from "./ServiceCard";
import { Badge } from "../common/Badge";
import { Section } from "../common/Section";
import { useLanguage } from "../../i18n";

const Services = () => {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchCategory = activeCategory === "All" || service.category === activeCategory;
      const matchSearch = service.title.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <Section id="services" className="bg-[var(--paper)]">
      <div className="text-center">
        <Badge tone="amber">{t("online.services")}</Badge>
        <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">{t("online.title")}</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-[var(--slate)]">{t("online.servicesDesc")}</p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <div className="flex items-center rounded-2xl border border-[var(--line)] bg-[var(--cream)] px-5 py-4">
          <Search className="text-[var(--slate)]" />
          <input
            type="text"
            placeholder={t("common.search")}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="ml-3 w-full bg-transparent outline-none"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
              activeCategory === category
                ? "border-[var(--blue)] bg-[var(--blue)] text-[#f0fbff]"
                : "border-[var(--line)] bg-[var(--paper)] text-[var(--slate)] hover:border-[var(--teal)]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </Section>
  );
};

export default Services;
