import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "../Section";

type Founder = {
  key: "milan" | "tijn";
  name: string;
  initial: string;
  gradient: string;
};

const founders: Founder[] = [
  {
    key: "milan",
    name: "Milan",
    initial: "M",
    gradient: "from-[oklch(0.6_0.2_255)] to-[oklch(0.45_0.15_280)]",
  },
  {
    key: "tijn",
    name: "Tijn",
    initial: "T",
    gradient: "from-[oklch(0.6_0.18_220)] to-[oklch(0.45_0.16_250)]",
  },
];

function Avatar({ initial, gradient }: { initial: string; gradient: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative inline-flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} font-display text-2xl font-semibold text-white shadow-[0_8px_30px_-10px] shadow-primary/50`}
    >
      <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
      {initial}
    </div>
  );
}

export function Founders() {
  const { t } = useI18n();
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <Section className="bg-surface/30">
      <SectionHeader
        eyebrow={t("who.eyebrow")}
        title={t("who.title")}
        subtitle={t("who.subtitle")}
      />
      <ul className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
        {founders.map((f) => {
          const isOpen = openKey === f.key;
          const panelId = `founder-panel-${f.key}`;
          return (
            <li key={f.key}>
              <div className="card-hover rounded-2xl border border-border bg-surface/50 p-6">
                <div className="flex items-start gap-4">
                  <Avatar initial={f.initial} gradient={f.gradient} />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-semibold">{f.name}</h3>
                    <p className="text-sm text-primary">{t(`founder.${f.key}.role`)}</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {t(`founder.${f.key}.short`)}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenKey(isOpen ? null : f.key)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="mt-5 inline-flex w-full items-center justify-between rounded-lg border border-border bg-background/40 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-surface-elevated"
                >
                  <span>{isOpen ? t("who.collapse") : t("who.expand")}</span>
                  <ChevronDown
                    className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 pt-5 text-sm">
                        <p className="text-muted-foreground">{t(`founder.${f.key}.long`)}</p>
                        <dl className="grid gap-3 pt-2 sm:grid-cols-2">
                          {(["skills", "tech", "interests", "style", "personality"] as const).map(
                            (field) => (
                              <div key={field} className="rounded-lg border border-border bg-background/40 p-3">
                                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                  {t(`who.${field}`)}
                                </dt>
                                <dd className="mt-1 text-foreground">
                                  {t(`founder.${f.key}.${field}`)}
                                </dd>
                              </div>
                            ),
                          )}
                        </dl>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
