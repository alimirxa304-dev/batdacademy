"use client";

import { useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { upcomingCourses } from "@/lib/data/courses";
import { CourseCard } from "@/components/shared/CourseCard";
import { IconChevronLeft, IconChevronRight } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

type Tab = "all" | "discounted" | "top";

export function FeaturedCourses({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [tab, setTab] = useState<Tab>("all");
  const trackRef = useRef<HTMLDivElement>(null);

  const lists: Record<Tab, typeof upcomingCourses> = {
    all: upcomingCourses,
    top: [...upcomingCourses].sort((a, b) => b.price - a.price),
    discounted: upcomingCourses,
  };
  const courses = lists[tab];

  const tabs: { key: Tab; label: string }[] = [
    { key: "all", label: dict.featured.allCourses },
    { key: "discounted", label: dict.featured.discountedCourses },
    { key: "top", label: dict.featured.topCourses },
  ];

  function scroll(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = (card ? card.offsetWidth + 20 : el.clientWidth) * (locale === "ar" ? -1 : 1);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  function selectTab(key: Tab) {
    setTab(key);
    trackRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }

  return (
    <section className="bg-paper-dim py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow={dict.nav.courses} title={dict.featured.title} subtitle={dict.featured.subtitle} />
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-navy text-navy transition-colors hover:bg-navy hover:text-white"
            >
              <IconChevronLeft className="h-4 w-4 rtl:rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-sm bg-gold text-white transition-colors hover:bg-gold/90"
            >
              <IconChevronRight className="h-4 w-4 rtl:rotate-180" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => selectTab(t.key)}
              className={cn(
                "rounded-sm px-4 py-2 text-[13px] font-bold transition-colors",
                tab === t.key ? "bg-navy text-white" : "border-2 border-line-navy text-ink-soft hover:border-navy hover:text-navy"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </Container>

      <Container className="mt-8">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {courses.map((course) => (
            <div
              key={course.id}
              data-card
              className="w-[85%] shrink-0 snap-start sm:w-[47%] lg:w-[calc(33.333%-14px)]"
            >
              <CourseCard course={course} locale={locale} dict={dict} discounted={tab === "discounted"} />
            </div>
          ))}
        </div>
      </Container>

      <Container className="mt-8 flex justify-center">
        <Button href={`/${locale}/courses`} variant="secondary">
          {dict.featured.viewMore}
        </Button>
      </Container>
    </section>
  );
}
