import { motion } from "framer-motion";
import { Sparkle, ShieldCheck, MessagesSquare, Wrench, Cpu, GitBranch } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "../Section";

const items = [
  { icon: Sparkle, key: "ui" },
  { icon: ShieldCheck, key: "reliable" },
  { icon: MessagesSquare, key: "comm" },
  { icon: Wrench, key: "custom" },
  { icon: Cpu, key: "modern" },
  { icon: GitBranch, key: "workflow" },
] as const;

export function WhyForgeByte() {
  const { t } = useI18n();
  return (
    <Section className="bg-surface/30">
      <SectionHeader
        eyebrow={t("why.eyebrow")}
        title={t("why.title")}
        subtitle={t("why.subtitle")}
      />
      <ul className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.li
              key={it.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="flex gap-4"
            >
              <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/20">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold">{t(`why.${it.key}`)}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t(`why.${it.key}Desc`)}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
}
