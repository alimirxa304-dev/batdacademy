"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { groupOrder, groups, getSlugsForGroup, type GroupKey } from "@/lib/data/category-groups";
import { specializations } from "@/lib/data/specializations";
import { IconArrow } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function SpecializationBrowser({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [active, setActive] = useState<GroupKey>("management");
  const slugs = getSlugsForGroup(active);
  const items = slugs
    .map((slug) => specializations.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <section className="bg-navy py-20">
      <Container>
        <SectionHeading
          align="center"
          tone="paper"
          eyebrow={dict.nav.courses}
          title={dict.specializations.title}
          subtitle={dict.specializations.subtitle}
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className="flex max-h-[420px] flex-col gap-1 overflow-y-auto rounded-sm border-2 border-white/15 bg-white/5 p-2 lg:max-h-[520px]">
            {groupOrder.map((key) => {
              const isActive = key === active;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActive(key)}
                  className={cn(
                    "rounded-sm px-4 py-3 text-start text-[13.5px] font-semibold transition-colors",
                    isActive ? "bg-gold text-white" : "text-white/70 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {locale === "ar" ? groups[key].ar : groups[key].en}
                </button>
              );
            })}
          </div>

          <div className="grid content-start gap-3 sm:grid-cols-2">
            {items.map((spec) => (
              <Link
                key={spec.slug}
                href={`/${locale}/courses/${spec.slug}`}
                className="group flex items-center justify-between gap-3 rounded-sm border-2 border-white/15 bg-white/5 px-5 py-4 transition-colors hover:border-gold hover:bg-white/10"
              >
                <span className="text-[14.5px] font-medium text-white">
                  {locale === "ar" ? spec.ar : spec.en}
                </span>
                <IconArrow className="h-4 w-4 shrink-0 text-gold transition-transform rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
