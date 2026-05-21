import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Prefs = { essential: true; analytics: boolean; marketing: boolean };
const STORAGE_KEY = "fb_cookie_consent_v1";

export function CookieBanner() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const save = (p: Prefs) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...p, ts: Date.now() }));
    } catch {}
    setOpen(false);
  };

  const acceptAll = () =>
    save({ essential: true, analytics: true, marketing: true });
  const rejectAll = () =>
    save({ essential: true, analytics: false, marketing: false });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-desc"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl"
        >
          <div className="glass rounded-2xl p-5 shadow-[var(--shadow-elevated)]">
            <div className="flex items-start gap-4">
              <div className="hidden size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary sm:flex">
                <Cookie className="size-5" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h2 id="cookie-title" className="text-base font-semibold">
                  {t("cookie.title")}
                </h2>
                <p id="cookie-desc" className="mt-1 text-sm text-muted-foreground">
                  {t("cookie.desc")}
                </p>

                {showPrefs && (
                  <ul className="mt-4 space-y-2 text-sm">
                    {(
                      [
                        { key: "essential", disabled: true },
                        { key: "analytics", disabled: false },
                        { key: "marketing", disabled: false },
                      ] as const
                    ).map(({ key, disabled }) => {
                      const checked = prefs[key];
                      return (
                        <li
                          key={key}
                          className="flex items-start justify-between gap-3 rounded-lg border border-border bg-surface/50 p-3"
                        >
                          <div>
                            <p className="font-medium">{t(`cookie.${key}`)}</p>
                            <p className="text-xs text-muted-foreground">
                              {t(`cookie.${key}Desc`)}
                            </p>
                          </div>
                          <label className="inline-flex cursor-pointer items-center">
                            <input
                              type="checkbox"
                              checked={checked}
                              disabled={disabled}
                              onChange={(e) =>
                                setPrefs((p) => ({ ...p, [key]: e.target.checked }))
                              }
                              className="peer sr-only"
                              aria-label={t(`cookie.${key}`)}
                            />
                            <span className="relative h-5 w-9 rounded-full bg-muted transition-colors peer-checked:bg-primary peer-disabled:opacity-50">
                              <span className="absolute left-0.5 top-0.5 size-4 rounded-full bg-foreground transition-transform peer-checked:translate-x-4" />
                            </span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                )}

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {!showPrefs ? (
                    <>
                      <button
                        onClick={acceptAll}
                        className="rounded-full bg-primary-gradient px-4 py-2 text-sm font-medium text-primary-foreground"
                      >
                        {t("cookie.accept")}
                      </button>
                      <button
                        onClick={rejectAll}
                        className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-elevated"
                      >
                        {t("cookie.reject")}
                      </button>
                      <button
                        onClick={() => setShowPrefs(true)}
                        className="rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                      >
                        {t("cookie.prefs")}
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => save(prefs)}
                      className="rounded-full bg-primary-gradient px-4 py-2 text-sm font-medium text-primary-foreground"
                    >
                      {t("cookie.save")}
                    </button>
                  )}
                </div>
              </div>

              <button
                onClick={rejectAll}
                aria-label="Close"
                className="rounded-md p-1 text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
