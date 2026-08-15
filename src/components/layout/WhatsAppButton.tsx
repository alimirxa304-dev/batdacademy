import type { Locale } from "@/lib/i18n/config";
import { IconWhatsApp } from "@/components/ui/Icons";

export function WhatsAppButton({ locale }: { locale: Locale }) {
  const number = locale === "ar" ? "447724022466" : "442035827999";
  const label = locale === "ar" ? "تواصل معنا عبر واتساب" : "Chat with us on WhatsApp";

  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-navy/20 transition-transform hover:scale-105"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
