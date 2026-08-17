"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Locale } from "@/lib/i18n/config";
import { IconClose, IconWhatsApp } from "@/components/ui/Icons";

const STORAGE_KEY = "batd-whatsapp-bubble-dismissed";

const copy = {
  ar: {
    label: "تواصل معنا عبر واتساب",
    greeting: "مرحباً بك في الأكاديمية البريطانية 👋",
    prompt: "هل تحتاج مساعدة في اختيار الدورة المناسبة؟ راسلنا الآن.",
    cta: "بدء المحادثة",
  },
  en: {
    label: "Chat with us on WhatsApp",
    greeting: "Hi, welcome to the British Academy 👋",
    prompt: "Need help choosing the right course? Message us now.",
    cta: "Start Chat",
  },
};

export function WhatsAppButton({ locale }: { locale: Locale }) {
  const number = locale === "ar" ? "447724022466" : "442035827999";
  const t = copy[locale];
  const [bubbleOpen, setBubbleOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const id = setTimeout(() => setBubbleOpen(true), 4500);
    return () => clearTimeout(id);
  }, []);

  function dismissBubble() {
    setBubbleOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {bubbleOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-64 rounded-sm border-2 border-line-navy bg-surface p-4 shadow-2xl shadow-navy/20"
          >
            <button
              type="button"
              onClick={dismissBubble}
              aria-label="Close"
              className="absolute end-2.5 top-2.5 text-ink-soft hover:text-navy"
            >
              <IconClose className="h-4 w-4" />
            </button>
            <p className="pe-5 text-sm font-bold text-navy">{t.greeting}</p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{t.prompt}</p>
            <a
              href={`https://wa.me/${number}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismissBubble}
              className="mt-3 flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white transition-opacity hover:opacity-90"
            >
              <IconWhatsApp className="h-4 w-4" />
              {t.cta}
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <a
        href={`https://wa.me/${number}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.label}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-navy/20 transition-transform hover:scale-105"
      >
        <IconWhatsApp className="h-7 w-7" />
      </a>
    </div>
  );
}
