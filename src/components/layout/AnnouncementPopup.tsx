"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Button } from "@/components/ui/Button";
import { IconClose, IconPin } from "@/components/ui/Icons";

const STORAGE_KEY = "batd-announcement-dismissed";

export function AnnouncementPopup({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const id = setTimeout(() => setOpen(true), 1800);
    return () => clearTimeout(id);
  }, []);

  function dismiss() {
    setOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 left-5 z-50 w-[calc(100%-2.5rem)] max-w-sm rounded-sm border-2 border-navy bg-surface shadow-2xl shadow-navy/20"
          role="dialog"
          aria-live="polite"
        >
          <div className="flex items-start gap-3 bg-navy p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-gold text-white">
              <IconPin className="h-4.5 w-4.5" />
            </span>
            <div className="min-w-0 flex-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold">
                {dict.announcement.eyebrow}
              </span>
              <h3 className="font-heading mt-1 text-lg leading-snug text-white">{dict.announcement.title}</h3>
            </div>
            <button
              type="button"
              onClick={dismiss}
              aria-label={dict.announcement.dismiss}
              className="shrink-0 text-white/60 hover:text-white"
            >
              <IconClose className="h-4.5 w-4.5" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-[13.5px] leading-relaxed text-ink-soft">{dict.announcement.body}</p>
            <div className="mt-4 flex items-center gap-3">
              <Button href={`/${locale}/cities/muscat`} size="md" onClick={dismiss}>
                {dict.announcement.cta}
              </Button>
              <button
                type="button"
                onClick={dismiss}
                className="text-xs font-semibold text-ink-soft hover:text-navy"
              >
                {dict.announcement.dismiss}
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
