import { useI18n, type Lang } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useI18n();

  const options: Lang[] = ["nl", "en"];

  return (
    <div
      role="group"
      aria-label={t("nav.lang")}
      className="inline-flex items-center gap-1 rounded-full border border-border bg-surface/60 p-1 backdrop-blur"
    >
      {!compact && (
        <Globe className="ml-2 size-3.5 text-muted-foreground" aria-hidden="true" />
      )}
      {options.map((opt) => {
        const active = lang === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => setLang(opt)}
            aria-pressed={active}
            aria-label={`${t("nav.lang")}: ${opt.toUpperCase()}`}
            className={`min-w-9 rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-wider transition-colors ${
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
