"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Course } from "@/lib/data/courses";
import type { CourseDetail } from "@/lib/data/course-details";
import { getFeeTiers } from "@/lib/data/course-details";
import { getCity } from "@/lib/data/cities";
import { IconArrow, IconCalendar } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

export function CourseDetailTabs({
  locale,
  dict,
  course,
  detail,
  otherDates,
}: {
  locale: Locale;
  dict: Dictionary;
  course: Course;
  detail: CourseDetail;
  otherDates: Course[];
}) {
  const tabs = [
    { key: "overview", label: dict.featured.overview },
    { key: "objectives", label: dict.featured.objectives },
    { key: "program", label: dict.featured.program },
    { key: "dates", label: dict.featured.datesTab },
    { key: "fees", label: dict.featured.feesTab },
  ] as const;
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("overview");
  const fees = getFeeTiers(course.price);

  return (
    <div>
      <div className="flex flex-wrap gap-1 border-b border-line-navy">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setActive(t.key)}
            className={`rounded-t-lg px-4 py-3 text-[13.5px] font-medium transition-colors ${
              active === t.key
                ? "border-b-2 border-gold text-navy"
                : "text-ink-soft hover:text-navy"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="py-8">
        {active === "overview" ? (
          <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft">{detail.overview[locale]}</p>
        ) : null}

        {active === "objectives" ? (
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-heading text-lg text-navy">{dict.featured.targetGroup}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {detail.targetAudience.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {t[locale]}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg text-navy">{dict.featured.courseObjectives}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {detail.objectives.map((o, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {o[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}

        {active === "program" ? (
          <ol className="flex flex-col gap-2.5">
            {detail.modules.map((m, i) => (
              <li
                key={i}
                className="flex items-center gap-3 rounded-xl border border-line-navy bg-surface px-4 py-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-navy text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm text-navy">{m[locale]}</span>
              </li>
            ))}
          </ol>
        ) : null}

        {active === "dates" ? (
          <div className="flex flex-col gap-3">
            {[course, ...otherDates].map((c) => {
              const city = getCity(c.citySlug);
              const dateFormatted = new Intl.DateTimeFormat(locale === "ar" ? "ar-GB" : "en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              }).format(new Date(c.date));
              return (
                <div
                  key={c.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line-navy bg-surface px-5 py-3.5"
                >
                  <span className="flex items-center gap-2 text-sm text-navy">
                    <IconCalendar className="h-4 w-4 text-gold" />
                    {dateFormatted}
                  </span>
                  <span className="text-sm text-ink-soft">
                    {city ? (locale === "ar" ? city.ar : city.en) : c.citySlug}
                  </span>
                  <Button href={`/${locale}/contact`} size="md">
                    {dict.featured.register}
                    <IconArrow className="h-3.5 w-3.5 rtl:rotate-180" />
                  </Button>
                </div>
              );
            })}
          </div>
        ) : null}

        {active === "fees" ? (
          <div>
            <p className="text-xs text-ink-soft">{dict.featured.feeNote}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {fees.map((tier, i) => (
                <div key={i} className="rounded-xl border border-line-navy bg-surface p-5">
                  <p className="text-xs text-ink-soft">{tier.label[locale]}</p>
                  <p className="font-heading mt-2 text-2xl text-navy">
                    £{tier.price.toLocaleString()}
                    <span className="text-xs font-normal text-ink-soft">{dict.featured.perSubscriber}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
