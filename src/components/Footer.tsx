import { Link } from "@tanstack/react-router";
import { Github, MessageCircle, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

// Replace these placeholders with the real values when they're available.
const COMPANY = {
  kvk: null as string | null, // e.g. "12345678"
  btw: null as string | null, // e.g. "NL000000000B01"
  email: "forgebytevof@gmail.com",
  github: "https://github.com/ForgeByteVOF",
  discord: "https://discord.gg/UZf7XP3usa",
};

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
            <div className="mt-6">
              <LanguageSwitcher />
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("footer.nav")}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-foreground/80 hover:text-foreground">{t("nav.home")}</Link></li>
              <li><Link to="/services" className="text-foreground/80 hover:text-foreground">{t("nav.services")}</Link></li>
              <li><Link to="/projects" className="text-foreground/80 hover:text-foreground">{t("nav.projects")}</Link></li>
              <li><Link to="/about" className="text-foreground/80 hover:text-foreground">{t("nav.about")}</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-foreground">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("footer.connect")}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground">
                  <Mail className="size-4" aria-hidden="true" /> {COMPANY.email}
                </a>
              </li>
              <li>
                <a href={COMPANY.github} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground">
                  <Github className="size-4" aria-hidden="true" /> GitHub
                </a>
              </li>
              <li>
                <a href={COMPANY.discord} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground">
                  <MessageCircle className="size-4" aria-hidden="true" /> Discord
                </a>
              </li>
            </ul>

            <h2 className="mt-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t("footer.legal")}
            </h2>
            <dl className="mt-4 space-y-1 text-sm text-muted-foreground">
              <div className="flex gap-2">
                <dt className="font-medium text-foreground/70">{t("footer.kvk")}:</dt>
                <dd>{COMPANY.kvk ?? t("footer.soon")}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-foreground/70">{t("footer.btw")}:</dt>
                <dd>{COMPANY.btw ?? t("footer.soon")}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} ForgeByte. {t("footer.rights")}</p>
          <p className="font-mono opacity-70">v1.0 · built with care</p>
        </div>
      </div>
    </footer>
  );
}
