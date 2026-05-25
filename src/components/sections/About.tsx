import { motion } from "framer-motion";
import { Code2, Sparkles, Layers, Rocket, Compass, ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "../Section";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export function About() {
  const { t } = useI18n();

  const values = [
    { icon: ShieldCheck, key: "quality" },
    { icon: Sparkles, key: "craft" },
    { icon: Compass, key: "clarity" },
  ] as const;

  const doing = [
    { icon: Code2, key: "build" },
    { icon: Layers, key: "design" },
    { icon: Rocket, key: "ship" },
  ] as const;

  return (
    <Section id="about">
      {/* Wie zijn wij */}
      <SectionHeader eyebrow={t("about.eyebrow")} title={t("about.title")} />
      <div className="mx-auto mt-10 max-w-3xl space-y-5 text-pretty text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
      </div>

      {/* Values */}
      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-3"
      >
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <motion.li
              key={v.key}
              custom={i}
              variants={fadeUp}
              className="card-hover rounded-2xl border border-border bg-surface/50 p-6"
            >
              <div className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{t(`about.value.${v.key}.title`)}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {t(`about.value.${v.key}.desc`)}
              </p>
            </motion.li>
          );
        })}
      </motion.ul>

      {/* Wat doen wij */}
      <div className="mx-auto mt-28 max-w-7xl">
        <SectionHeader
          eyebrow={t("doing.eyebrow")}
          title={t("doing.title")}
          subtitle={t("doing.subtitle")}
        />
        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-3"
        >
          {doing.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.li
                key={d.key}
                custom={i}
                variants={fadeUp}
                className="card-hover relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-6"
              >
                <span className="absolute right-5 top-5 font-display text-sm font-medium text-muted-foreground/60">
                  0{i + 1}
                </span>
                <div className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{t(`doing.${d.key}.title`)}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {t(`doing.${d.key}.desc`)}
                </p>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </Section>
  );
}
