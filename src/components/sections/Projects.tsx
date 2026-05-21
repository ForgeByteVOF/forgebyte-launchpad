import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "../Section";

export function Projects() {
  const { t } = useI18n();
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-14 max-w-2xl"
      >
        <div className="card-hover flex flex-col items-center rounded-2xl border border-border bg-surface/40 p-10 text-center sm:p-14">
          <div
            aria-hidden="true"
            className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary-glow/10 text-primary ring-1 ring-inset ring-primary/20"
          >
            <span className="font-display text-3xl font-semibold">?</span>
          </div>
          <h3 className="text-xl font-semibold sm:text-2xl">{t("projects.title")}</h3>
          <p className="mt-3 max-w-md text-muted-foreground">{t("projects.subtitle")}</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary-glow"
          >
            {t("projects.cta")}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </motion.div>
    </Section>
  );
}
