"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { primaryNav } from "@/lib/data/nav";
import { featuredSpecializations } from "@/lib/data/specializations";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {
  IconChevronDown,
  IconClose,
  IconMail,
  IconMenu,
  IconPhone,
} from "@/components/ui/Icons";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);

  const withLocale = (href: string) => `/${locale}${href}`;
  const isActive = (href: string) => {
    const full = withLocale(href);
    return href === "" ? pathname === full : pathname.startsWith(full);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy text-white/80 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-xs">
          <div className="flex items-center gap-5">
            <a href={`tel:${dict.topbar.phone}`} className="flex items-center gap-1.5 hover:text-white">
              <IconPhone className="h-3.5 w-3.5" />
              {dict.topbar.phone}
            </a>
            <a href={`mailto:${dict.topbar.email}`} className="flex items-center gap-1.5 hover:text-white">
              <IconMail className="h-3.5 w-3.5" />
              {dict.topbar.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Link href={withLocale("/consultations")} className="hover:text-white">
              {dict.topbar.requestCourse}
            </Link>
            <Link href={withLocale("/faq")} className="hover:text-white">
              {dict.topbar.faq}
            </Link>
            <LanguageSwitcher locale={locale} variant="light" />
          </div>
        </div>
      </div>

      <div className="border-b border-line-navy bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link href={withLocale("")} className="flex items-center gap-3">
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-navy p-1.5">
              <Image
                src="/images/brand/logo-ba.webp"
                alt={dict.meta.siteName}
                fill
                sizes="44px"
                className="object-contain p-1"
              />
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-heading text-base font-semibold text-navy">
                {dict.meta.siteNameShort}
              </span>
              <span className="text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                {locale === "ar" ? "Training & Development" : "British Academy"}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((item) => {
              const active = isActive(item.href);
              if (item.key === "courses") {
                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => setOpenKey("courses")}
                    onMouseLeave={() => setOpenKey((k) => (k === "courses" ? null : k))}
                  >
                    <Link
                      href={withLocale(item.href)}
                      className={cn(
                        "flex items-center gap-1 rounded-sm px-3.5 py-2 text-[13.5px] font-medium transition-colors",
                        active ? "text-navy" : "text-ink-soft hover:text-navy"
                      )}
                    >
                      {dict.nav[item.key as keyof typeof dict.nav]}
                      <IconChevronDown className="h-3.5 w-3.5" />
                    </Link>
                    {openKey === "courses" ? (
                      <div className="absolute start-1/2 top-full w-[640px] -translate-x-1/2 rtl:translate-x-1/2 pt-3">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 rounded-2xl border border-line-navy bg-surface p-6 shadow-xl shadow-navy/10">
                          {featuredSpecializations.slice(0, 10).map((s) => (
                            <Link
                              key={s.slug}
                              href={withLocale(`/courses/${s.slug}`)}
                              className="rounded-lg px-2 py-1.5 text-[13.5px] text-ink-soft transition-colors hover:bg-navy-tint hover:text-navy"
                            >
                              {locale === "ar" ? s.ar : s.en}
                            </Link>
                          ))}
                          <Link
                            href={withLocale("/courses")}
                            className="col-span-2 mt-2 flex items-center justify-between rounded-lg bg-navy-tint px-3 py-2.5 text-[13.5px] font-semibold text-navy"
                          >
                            {dict.nav.coursesAll}
                          </Link>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              }
              if (item.children) {
                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => setOpenKey(item.key)}
                    onMouseLeave={() => setOpenKey((k) => (k === item.key ? null : k))}
                  >
                    <Link
                      href={withLocale(item.href)}
                      className={cn(
                        "flex items-center gap-1 rounded-sm px-3.5 py-2 text-[13.5px] font-medium transition-colors",
                        active ? "text-navy" : "text-ink-soft hover:text-navy"
                      )}
                    >
                      {dict.nav[item.key as keyof typeof dict.nav]}
                      <IconChevronDown className="h-3.5 w-3.5" />
                    </Link>
                    {openKey === item.key ? (
                      <div className="absolute start-0 top-full w-64 pt-3">
                        <div className="flex flex-col gap-1 rounded-2xl border border-line-navy bg-surface p-2.5 shadow-xl shadow-navy/10">
                          {item.children.map((child) => (
                            <Link
                              key={child.key}
                              href={withLocale(child.href)}
                              className="rounded-lg px-3 py-2 text-[13.5px] text-ink-soft transition-colors hover:bg-navy-tint hover:text-navy"
                            >
                              {dict.nav[child.key as keyof typeof dict.nav]}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              }
              return (
                <Link
                  key={item.key}
                  href={withLocale(item.href)}
                  className={cn(
                    "rounded-sm px-3.5 py-2 text-[13.5px] font-medium transition-colors",
                    active ? "text-navy" : "text-ink-soft hover:text-navy"
                  )}
                >
                  {dict.nav[item.key as keyof typeof dict.nav]}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={withLocale("/contact")}
              className="hidden rounded-sm bg-navy px-5 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-navy-2 lg:inline-flex"
            >
              {dict.nav.getInTouch}
            </Link>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
              className="rounded-sm border-2 border-navy p-2 text-navy lg:hidden"
            >
              <IconMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[60] bg-navy/40 lg:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="ms-auto h-full w-[85%] max-w-sm overflow-y-auto bg-paper p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-heading text-lg font-semibold text-navy">
                {dict.meta.siteNameShort}
              </span>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setMobileOpen(false)}
                className="rounded-sm border-2 border-navy p-2 text-navy"
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-1">
              {primaryNav.map((item) => (
                <div key={item.key} className="border-b border-line py-1.5">
                  <Link
                    href={withLocale(item.href)}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-[15px] font-medium text-navy"
                  >
                    {dict.nav[item.key as keyof typeof dict.nav]}
                  </Link>
                  {item.children ? (
                    <div className="ms-3 mb-2 flex flex-col gap-0.5 border-s border-line ps-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={withLocale(child.href)}
                          onClick={() => setMobileOpen(false)}
                          className="py-1.5 text-[13.5px] text-ink-soft"
                        >
                          {dict.nav[child.key as keyof typeof dict.nav]}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 text-sm text-ink-soft">
              <a href={`tel:${dict.topbar.phone}`} className="flex items-center gap-2">
                <IconPhone className="h-4 w-4" /> {dict.topbar.phone}
              </a>
              <a href={`mailto:${dict.topbar.email}`} className="flex items-center gap-2">
                <IconMail className="h-4 w-4" /> {dict.topbar.email}
              </a>
              <LanguageSwitcher locale={locale} variant="dark" />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
