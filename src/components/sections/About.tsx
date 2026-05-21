import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "../Section";

export function About() {
  const { t } = useI18n();
  return (
    <Section id="about">
      <SectionHeader
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
      />
      <div className="mx-auto mt-10 max-w-3xl space-y-5 text-pretty text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
      </div>
    </Section>
  );
}
