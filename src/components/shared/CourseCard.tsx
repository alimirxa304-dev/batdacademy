import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/data/courses";
import { getCity } from "@/lib/data/cities";
import { getSpecialization } from "@/lib/data/specializations";
import { getGroup } from "@/lib/data/category-groups";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import {
  IconArrow,
  IconBuilding,
  IconCalendar,
  IconGlobe,
  IconPin,
} from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const toneChip = {
  navy: "bg-navy-tint text-navy",
  gold: "bg-gold-soft/50 text-navy",
  burgundy: "bg-burgundy/10 text-burgundy",
};

export function CourseCard({
  course,
  locale,
  dict,
}: {
  course: Course;
  locale: Locale;
  dict: Dictionary;
}) {
  const city = getCity(course.citySlug);
  const spec = getSpecialization(course.specializationSlug);
  const group = getGroup(course.specializationSlug);
  const title = locale === "ar" ? course.ar : course.en;
  const cityName = city ? (locale === "ar" ? city.ar : city.en) : course.citySlug;
  const dateFormatted = new Intl.DateTimeFormat(locale === "ar" ? "ar-GB" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(course.date));

  const rows = [
    { icon: IconCalendar, label: `${dateFormatted} · ${course.durationDays} ${dict.featured.days}` },
    { icon: IconGlobe, label: dict.featured.languageValue },
    { icon: IconBuilding, label: dict.featured.formatValue },
    { icon: IconPin, label: `${dict.featured.venue} ${cityName}` },
  ];

  return (
    <Link
      href={`/${locale}/courses/${course.specializationSlug}/${course.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-md border-2 border-navy/10 bg-surface transition-all hover:-translate-y-1 hover:border-navy hover:shadow-xl"
    >
      <div className="relative h-48 w-full shrink-0 overflow-hidden bg-navy-tint sm:h-56">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="420px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/0 to-navy/0" />
        <span
          className={cn(
            "absolute start-4 top-4 rounded-sm px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide",
            toneChip[group.tone]
          )}
        >
          {spec ? (locale === "ar" ? spec.ar : spec.en) : (locale === "ar" ? group.ar : group.en)}
        </span>
        {course.confirmed ? (
          <span className="absolute end-4 top-4 flex items-center gap-1.5 rounded-sm bg-surface px-3 py-1.5 text-[11px] font-bold text-navy">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {dict.featured.status}
          </span>
        ) : null}
        <p className="font-heading absolute bottom-4 start-4 end-4 text-xl leading-snug text-white sm:text-2xl">
          {title}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <ul className="flex flex-col gap-2">
          {rows.map((r, i) => {
            const Icon = r.icon;
            return (
              <li key={i} className="flex items-center gap-2.5 text-[13px] text-ink-soft">
                <Icon className="h-4 w-4 shrink-0 text-gold" />
                <span className="truncate">{r.label}</span>
              </li>
            );
          })}
        </ul>

        <div className="mt-5 flex items-center justify-between border-t-2 border-navy/10 pt-5">
          <span className="font-heading text-2xl text-navy">£{course.price.toLocaleString()}</span>
          <span className="flex items-center gap-1.5 rounded-sm bg-navy px-4 py-2.5 text-xs font-bold text-white transition-colors group-hover:bg-gold">
            {dict.featured.register}
            <IconArrow className="h-3.5 w-3.5 rtl:rotate-180" />
          </span>
        </div>
      </div>
    </Link>
  );
}
