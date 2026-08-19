"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/ui/Icons";
import { specializations } from "@/lib/data/specializations";
import { cities } from "@/lib/data/cities";

const slides = [
  "/images/hero/slider-1.webp",
  "/images/photos/1786452583.webp",
  "/images/photos/1581409163.webp",
];

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [specialization, setSpecialization] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (specialization) {
      router.push(`/${locale}/courses/${specialization}${city ? `?city=${city}` : ""}`);
    } else {
      router.push(`/${locale}/courses${city ? `?city=${city}` : ""}`);
    }
  }

  const quickLinks = [
    { href: "/courses", label: dict.nav.courses },
    { href: "/diplomas", label: dict.nav.diplomas },
    { href: "/masters", label: dict.nav.masters },
    { href: "/cities", label: dict.nav.cities },
    { href: "/consultations", label: dict.nav.consultations },
  ];

  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={active}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            <Image
              src={slides[active]}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority={active === 0}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/55 rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-navy/25" />
      </div>

      <Container className="relative py-16 sm:py-24 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-gold">
            <span className="h-[3px] w-8 bg-gold" />
            {dict.hero.eyebrow}
          </span>

          <h1 className="font-heading mt-7 text-balance text-[2.75rem] leading-[1.08] text-white sm:text-[3.75rem] lg:text-[4.25rem]">
            {dict.hero.titleLine1}
            <br />
            <span className="text-gold">{dict.hero.titleLine2}</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
            {dict.hero.subtitle}
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-9 flex max-w-4xl flex-col gap-3 rounded-md border-2 border-navy bg-surface p-3 shadow-2xl sm:flex-row sm:items-center sm:p-2 lg:mx-0"
        >
          <label className="flex-1 px-3 py-2">
            <span className="block text-[10px] font-semibold uppercase tracking-wide text-ink-soft">
              {dict.search.specialization}
            </span>
            <select
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-navy focus:outline-none"
            >
              <option value="">{dict.search.allCategories}</option>
              {specializations.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {locale === "ar" ? s.ar : s.en}
                </option>
              ))}
            </select>
          </label>
          <span className="hidden h-8 w-px bg-line sm:block" />
          <label className="flex-1 px-3 py-2">
            <span className="block text-[10px] font-semibold uppercase tracking-wide text-ink-soft">
              {dict.search.city}
            </span>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-transparent text-sm font-medium text-navy focus:outline-none"
            >
              <option value="">{dict.common.selectCity}</option>
              {cities.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {locale === "ar" ? c.ar : c.en}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="rounded-sm bg-gold px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-gold/90"
          >
            {dict.search.submit}
          </button>
        </form>

        <div className="mx-auto -mx-5 mt-4 flex max-w-4xl items-center gap-1 overflow-x-auto px-5 sm:mx-auto sm:px-0 lg:mx-0 lg:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {quickLinks.map((link, i) => (
            <div key={link.href} className="flex shrink-0 items-center gap-1">
              {i > 0 ? <span className="mx-2 text-white/30">|</span> : null}
              <a
                href={`/${locale}${link.href}`}
                className="whitespace-nowrap text-[13px] font-medium text-white/70 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center gap-4 lg:mx-0">
          <Button href={`/${locale}/courses`} variant="accent" size="lg">
            {dict.hero.ctaPrimary}
            <IconArrow className="h-4 w-4 rtl:rotate-180" />
          </Button>
          <Button href={`/${locale}/consultations`} variant="outline-paper" size="lg">
            {dict.hero.ctaSecondary}
          </Button>
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl items-center gap-2 lg:mx-0">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-gold" : "w-4 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </Container>

      <svg
        className="relative block w-full text-paper"
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,72 C320,0 1120,0 1440,72 L1440,72 L0,72 Z" fill="currentColor" />
      </svg>
    </section>
  );
}
