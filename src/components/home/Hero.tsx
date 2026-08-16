"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/ui/Icons";

const slides = [
  "/images/hero/slider-1.webp",
  "/images/photos/1786452583.webp",
  "/images/photos/1581409163.webp",
];

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const stats = [
    { value: "15+", label: dict.hero.statYears },
    { value: "30+", label: dict.hero.statCountries },
    { value: "50+", label: dict.hero.statCities },
    { value: "58", label: dict.hero.statCourses },
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

      <Container className="relative py-24 sm:py-32 lg:py-40">
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

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={`/${locale}/courses`} variant="accent" size="lg">
              {dict.hero.ctaPrimary}
              <IconArrow className="h-4 w-4 rtl:rotate-180" />
            </Button>
            <Button href={`/${locale}/consultations`} variant="outline-paper" size="lg">
              {dict.hero.ctaSecondary}
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/15 pt-7">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl text-white">{s.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center gap-2">
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
