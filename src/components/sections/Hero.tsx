import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Background layers */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-hero-gradient" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 grid-bg" />

      {/* Floating orbs */}
      <motion.div
        aria-hidden="true"
        className="absolute left-1/4 top-1/3 -z-10 size-72 rounded-full bg-primary/30 blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-1/4 top-1/2 -z-10 size-96 rounded-full bg-primary-glow/20 blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
            {t("hero.eyebrow")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {t("hero.title").split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-gradient">
            {t("hero.title").split(" ").slice(-1)}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-full bg-primary-gradient px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_12px_40px_-10px] shadow-primary/60 transition-transform hover:-translate-y-0.5"
          >
            {t("hero.cta.services")}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <a
            href="https://discord.gg/UZf7XP3usa"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-surface-elevated"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            {t("hero.cta.discord")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
