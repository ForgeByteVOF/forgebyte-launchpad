import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, MessageCircle, Copy, Check, ArrowUpRight, type LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Section, SectionHeader } from "../Section";

type Card = {
  icon: LucideIcon;
  labelKey: string;
  value: string;
  href: string;
};

const cards: Card[] = [
  { icon: Mail, labelKey: "contact.email", value: "forgebytevof@gmail.com", href: "mailto:forgebytevof@gmail.com" },
  { icon: Github, labelKey: "contact.github", value: "github.com/ForgeByteVOF", href: "https://github.com/ForgeByteVOF" },
  { icon: MessageCircle, labelKey: "contact.discord", value: "discord.gg/UZf7XP3usa", href: "https://discord.gg/UZf7XP3usa" },
];

export function Contact() {
  const { t } = useI18n();
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const copy = async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1800);
    } catch {}
  };

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />
      <ul className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
        {cards.map((c, i) => {
          const Icon = c.icon;
          const copied = copiedIdx === i;
          return (
            <motion.li
              key={c.value}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card-hover group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6"
            >
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/20">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {t(c.labelKey)}
              </p>
              <p className="mt-1 truncate font-mono text-sm text-foreground">{c.value}</p>

              <div className="mt-5 flex items-center gap-2">
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary-gradient px-3.5 py-1.5 text-xs font-medium text-primary-foreground"
                >
                  {t("contact.open")}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => copy(c.value, i)}
                  aria-label={`${t("contact.copy")} ${c.value}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground hover:bg-surface-elevated"
                >
                  {copied ? <Check className="size-3.5 text-primary" /> : <Copy className="size-3.5" />}
                  <span>{copied ? t("contact.copied") : t("contact.copy")}</span>
                </button>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
}
