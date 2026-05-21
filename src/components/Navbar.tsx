import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

const DISCORD_URL = "https://discord.gg/UZf7XP3usa";

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/services", label: t("nav.services") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8"
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full bg-primary-gradient px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_8px_30px_-10px] shadow-primary/60 transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            {t("nav.discord")}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={t("nav.menu")}
          aria-expanded={open}
          className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-surface/60 text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass-strong border-t border-border lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base text-muted-foreground hover:bg-surface hover:text-foreground"
                  activeProps={{ className: "text-foreground bg-surface" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex items-center justify-between gap-3 px-1">
              <LanguageSwitcher />
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-primary-gradient px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                {t("nav.discord")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
