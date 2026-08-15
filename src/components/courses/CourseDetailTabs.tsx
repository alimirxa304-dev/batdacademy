"use client";

import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Course } from "@/lib/data/courses";
import type { CourseDetail } from "@/lib/data/course-details";
import { getFeeTiers } from "@/lib/data/course-details";
import { cities } from "@/lib/data/cities";
import { IconArrow, IconBadgeCheck, IconBuilding, IconCalendar, IconClock, IconGlobe } from "@/components/ui/Icons";
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
  const sections = [
    { key: "overview", label: dict.featured.overview },
    { key: "objectives", label: dict.featured.objectives },
    { key: "program", label: dict.featured.program },
    { key: "dates-fees", label: `${dict.featured.datesTab} & ${dict.featured.feesTab}` },
  ] as const;
  const fees = getFeeTiers(course.price);
  const facts = [
    { icon: IconClock, label: `${course.durationDays} ${dict.featured.days}` },
    { icon: IconBuilding, label: dict.featured.formatValue },
    { icon: IconGlobe, label: dict.featured.languageValue },
    { icon: IconBadgeCheck, label: dict.featured.certificate },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-1 border-b-2 border-line-navy">
        {sections.map((s) => (
          <a
            key={s.key}
            href={`#${s.key}`}
            className="rounded-t-lg px-4 py-3 text-[13.5px] font-medium text-ink-soft transition-colors hover:text-navy"
          >
            {s.label}
          </a>
        ))}
      </div>

      <section id="overview" className="scroll-mt-24 border-b border-line py-8">
        <h2 className="font-heading text-2xl text-navy">{dict.featured.overview}</h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{detail.overview[locale]}</p>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {facts.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="flex items-center gap-2.5 rounded-md border-2 border-line-navy bg-surface px-3.5 py-3">
                <Icon className="h-4 w-4 shrink-0 text-gold" />
                <span className="text-xs font-medium text-navy">{f.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section id="objectives" className="scroll-mt-24 border-b border-line py-8">
        <h2 className="font-heading text-2xl text-navy">{dict.featured.objectives}</h2>
        <div className="mt-5 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-base font-bold text-navy">{dict.featured.targetGroup}</h3>
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
            <h3 className="text-base font-bold text-navy">{dict.featured.courseObjectives}</h3>
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
      </section>

      <section id="program" className="scroll-mt-24 border-b border-line py-8">
        <h2 className="font-heading text-2xl text-navy">{dict.featured.program}</h2>
        <ol className="mt-5 flex flex-col gap-2.5">
          {detail.modules.map((m, i) => (
            <li
              key={i}
              className="flex items-center gap-3 rounded-md border-2 border-line-navy bg-surface px-4 py-3"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-navy text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="text-sm text-navy">{m[locale]}</span>
            </li>
          ))}
        </ol>
      </section>

      <section id="dates-fees" className="scroll-mt-24 py-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-heading text-2xl text-navy">{dict.featured.datesTab}</h2>
            <div className="mt-5 flex flex-col divide-y-2 divide-line-navy rounded-md border-2 border-line-navy">
              {[course, ...otherDates].map((c) => {
                const dateFormatted = new Intl.DateTimeFormat(locale === "ar" ? "ar-GB" : "en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }).format(new Date(c.date));
                return (
                  <div
                    key={c.id}
                    className="flex flex-wrap items-center gap-3 px-4 py-3.5 sm:flex-nowrap"
                  >
                    <span className="flex shrink-0 items-center gap-2 text-sm font-medium text-navy">
                      <IconCalendar className="h-4 w-4 text-gold" />
                      {dateFormatted}
                    </span>
                    <select
                      defaultValue={c.citySlug}
                      className="min-w-[9rem] flex-1 rounded-sm border-2 border-line-navy bg-paper px-3 py-2 text-sm text-navy focus:border-gold focus:outline-none"
                    >
                      {cities.map((ct) => (
                        <option key={ct.slug} value={ct.slug}>
                          {locale === "ar" ? ct.ar : ct.en}
                        </option>
                      ))}
                    </select>
                    <Button href={`/${locale}/contact`} size="md" className="shrink-0">
                      {dict.featured.register}
                      <IconArrow className="h-3.5 w-3.5 rtl:rotate-180" />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-navy">{dict.featured.feesTab}</h2>
            <p className="mt-2 text-xs text-ink-soft">{dict.featured.feeNote}</p>
            <div className="mt-5 flex flex-col gap-3">
              {fees.map((tier, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-3 rounded-md border-2 border-navy px-4 py-3"
                >
                  <span className="text-sm font-medium text-navy">{tier.label[locale]}</span>
                  <span className="flex items-center gap-2 rounded-sm bg-navy px-3 py-1.5 text-sm font-bold text-white">
                    £{tier.price.toLocaleString()}
                    <span className="font-normal opacity-70">{dict.featured.perSubscriber}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
