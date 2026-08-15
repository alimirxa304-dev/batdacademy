import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Course } from "@/lib/data/courses";
import { getCity } from "@/lib/data/cities";
import { IconArrow } from "@/components/ui/Icons";

export function CourseTable({
  locale,
  dict,
  courses,
}: {
  locale: Locale;
  dict: Dictionary;
  courses: Course[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line-navy bg-surface">
      <table className="w-full min-w-[560px] border-collapse text-start">
        <thead>
          <tr className="border-b border-line-navy bg-navy-tint text-start text-xs font-semibold uppercase tracking-wide text-navy">
            <th className="px-5 py-3 text-start">{dict.common.course}</th>
            <th className="px-5 py-3 text-start">{dict.common.city}</th>
            <th className="px-5 py-3 text-start">{dict.featured.duration}</th>
            <th className="px-5 py-3 text-start">{dict.common.price}</th>
            <th className="px-5 py-3" />
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => {
            const city = getCity(c.citySlug);
            const dateFormatted = new Intl.DateTimeFormat(locale === "ar" ? "ar-GB" : "en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(new Date(c.date));
            return (
              <tr key={c.id} className="border-b border-line last:border-0 hover:bg-navy-tint/40">
                <td className="px-5 py-4">
                  <Link
                    href={`/${locale}/courses/${c.specializationSlug}/${c.id}`}
                    className="text-[14px] font-medium text-navy hover:text-gold"
                  >
                    {locale === "ar" ? c.ar : c.en}
                  </Link>
                  <p className="mt-0.5 text-xs text-ink-soft">{dateFormatted}</p>
                </td>
                <td className="px-5 py-4 text-[13.5px] text-ink-soft">
                  {city ? (locale === "ar" ? city.ar : city.en) : c.citySlug}
                </td>
                <td className="px-5 py-4 text-[13.5px] text-ink-soft">
                  {c.durationDays} {dict.featured.days}
                </td>
                <td className="px-5 py-4 text-[14px] font-semibold text-navy">
                  £{c.price.toLocaleString()}
                </td>
                <td className="px-5 py-4">
                  <Link
                    href={`/${locale}/courses/${c.specializationSlug}/${c.id}`}
                    aria-label={dict.featured.details}
                    className="flex h-8 w-8 items-center justify-center rounded-sm bg-navy text-white transition-colors hover:bg-gold"
                  >
                    <IconArrow className="h-3.5 w-3.5 rtl:rotate-180" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
