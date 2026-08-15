import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { CourseCard } from "@/components/shared/CourseCard";
import { CourseFilterBar } from "@/components/courses/CourseFilterBar";
import { upcomingCourses } from "@/lib/data/courses";
import { groupOrder, groups, getSlugsForGroup } from "@/lib/data/category-groups";

export default async function CoursesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const l = locale as Locale;

  return (
    <>
      <PageHero eyebrow={dict.nav.courses} title={dict.specializations.title} subtitle={dict.specializations.subtitle} />

      <Container className="py-10">
        <CourseFilterBar locale={l} dict={dict} />
      </Container>

      <Container className="grid gap-10 pb-16 lg:grid-cols-[260px_1fr]">
        <aside>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink-soft">
            {l === "ar" ? "الأقسام" : "Sections"}
          </h2>
          <div className="flex flex-col divide-y divide-line rounded-2xl border border-line-navy bg-surface">
            {groupOrder.map((g) => {
              const firstSlug = getSlugsForGroup(g)[0];
              return (
                <Link
                  key={g}
                  href={firstSlug ? `/${l}/courses/${firstSlug}` : `/${l}/courses`}
                  className="px-4 py-3 text-[13.5px] text-ink-soft transition-colors hover:bg-navy-tint hover:text-navy"
                >
                  {l === "ar" ? groups[g].ar : groups[g].en}
                </Link>
              );
            })}
          </div>
        </aside>

        <div>
          <h2 className="font-heading text-xl text-navy">{dict.featured.title}</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {upcomingCourses.map((course) => (
              <CourseCard key={course.id} course={course} locale={l} dict={dict} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
