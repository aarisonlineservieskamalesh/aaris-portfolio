import { BusinessGrid } from "../components/Home/BusinessGrid";
import { ContactPanel } from "../components/common/ContactPanel";
import { PageHeader } from "../components/common/PageHeader";
import { Section } from "../components/common/Section";
import { useLanguage } from "../i18n";

const Businesses = () => {
  const { t } = useLanguage();

  return (
    <>
      <Section>
        <PageHeader
          breadcrumb={t("businesses.breadcrumb")}
          eyebrow={t("common.portal")}
          title={t("businesses.title")}
          description={t("businesses.desc")}
        />
        <div className="mt-12">
          <BusinessGrid />
        </div>
      </Section>
      <Section>
        <ContactPanel />
      </Section>
    </>
  );
};

export default Businesses;
