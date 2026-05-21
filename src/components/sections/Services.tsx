import { motion } from "framer-motion";
import {
  Code2,
  Bot,
  Boxes,
  Workflow,
  Server,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "../Section";

type Service = { icon: LucideIcon; key: string };

const services: Service[] = [
  { icon: Code2, key: "web" },
  { icon: Bot, key: "bot" },
  { icon: Boxes, key: "custom" },
  { icon: Workflow, key: "auto" },
  { icon: Server, key: "backend" },
  { icon: Palette, key: "uiux" },
];

export function Services() {
  const { t } = useI18n();
  return (
    <Section id="services">
      <SectionHeader
        eyebrow={t("services.eyebrow")}
        title={t("services.title")}
        subtitle={t("services.subtitle")}
      />

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.li
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative card-hover overflow-hidden rounded-2xl border border-border bg-surface/40 p-6"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">
                {t(`services.${s.key}.title`)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(`services.${s.key}.desc`)}
              </p>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
}
