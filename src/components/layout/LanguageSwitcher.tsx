"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  variant = "light",
}: {
  locale: Locale;
  variant?: "light" | "dark";
}) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-sm border p-0.5 text-xs font-semibold",
        variant === "light"
          ? "border-white/25 text-white/80"
          : "border-navy/15 text-ink-soft"
      )}
    >
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${rest ? `/${rest}` : ""}`}
          className={cn(
            "rounded-sm px-2.5 py-1 transition-colors",
            l === locale
              ? variant === "light"
                ? "bg-white text-navy"
                : "bg-navy text-white"
              : "hover:opacity-80"
          )}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
