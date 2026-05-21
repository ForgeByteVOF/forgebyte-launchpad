import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "../Section";

type Project = {
  key: string;
  stack: string[];
  github: string;
  gradient: string;
};

const projects: Project[] = [
  {
    key: "p1",
    stack: ["TypeScript", "React", "Edge"],
    github: "https://github.com/ForgeByteVOF",
    gradient: "from-[oklch(0.55_0.2_255)] via-[oklch(0.45_0.16_270)] to-[oklch(0.35_0.12_290)]",
  },
  {
    key: "p2",
    stack: ["Node.js", "Discord.js", "Postgres"],
    github: "https://github.com/ForgeByteVOF",
    gradient: "from-[oklch(0.55_0.18_220)] via-[oklch(0.5_0.14_240)] to-[oklch(0.35_0.1_260)]",
  },
  {
    key: "p3",
    stack: ["Next.js", "tRPC", "Prisma"],
    github: "https://github.com/ForgeByteVOF",
    gradient: "from-[oklch(0.6_0.18_200)] via-[oklch(0.5_0.15_230)] to-[oklch(0.4_0.12_260)]",
  },
  {
    key: "p4",
    stack: ["TanStack", "Hono", "PG"],
    github: "https://github.com/ForgeByteVOF",
    gradient: "from-[oklch(0.55_0.2_260)] via-[oklch(0.45_0.18_275)] to-[oklch(0.3_0.1_290)]",
  },
];

function AbstractVisual({ gradient }: { gradient: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-44 w-full overflow-hidden rounded-xl bg-gradient-to-br ${gradient}`}
    >
      <div className="absolute inset-0 opacity-60 mix-blend-overlay [background-image:radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.2),transparent_55%)]" />
      <div className="absolute -bottom-10 -right-10 size-44 rounded-full border border-white/15" />
      <div className="absolute -bottom-20 -right-20 size-64 rounded-full border border-white/10" />
      <div className="absolute left-6 top-6 size-2 rounded-full bg-white/70 shadow-[0_0_18px_4px_rgba(255,255,255,0.6)]" />
    </div>
  );
}

export function Projects() {
  const { t } = useI18n();
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
      />
      <ul className="mt-14 grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.li
            key={p.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="card-hover group rounded-2xl border border-border bg-surface/40 p-5"
          >
            <AbstractVisual gradient={p.gradient} />
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{t(`projects.${p.key}.title`)}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t(`projects.${p.key}.desc`)}
                </p>
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${t("projects.viewGithub")} — ${t(`projects.${p.key}.title`)}`}
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-foreground/80 transition-colors hover:bg-surface-elevated hover:text-foreground"
              >
                <Github className="size-4" aria-hidden="true" />
              </a>
            </div>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-glow"
            >
              {t("projects.viewGithub")}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
