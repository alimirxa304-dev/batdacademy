import Link from "next/link";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/shared/PageHero";
import { CategoryCard } from "@/components/shared/CategoryCard";
import { CategorySidebar } from "@/components/courses/CategorySidebar";
import { CourseTable } from "@/components/courses/CourseTable";
import { getSpecialization, specializations } from "@/lib/data/specializations";
import { getGroup } from "@/lib/data/category-groups";
import { upcomingCourses } from "@/lib/data/courses";
import { photoForIndex } from "@/lib/data/photo-pool";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    specializations.map((s) => ({ locale, category: s.slug }))
  );
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  if (!isLocale(locale)) notFound();
  const spec = getSpecialization(category);
  if (!spec) notFound();

  const dict = await getDictionary(locale as Locale);
  const l = locale as Locale;
  const courses = upcomingCourses.filter((c) => c.specializationSlug === category);
  const group = getGroup(category);
  const related = specializations.filter((s) => s.slug !== category).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={dict.nav.courses}
        title={l === "ar" ? spec.ar : spec.en}
        subtitle={l === "ar" ? spec.arDescription : spec.enDescription}
        image={photoForIndex(specializations.findIndex((s) => s.slug === category))}
      />

      <Container className="grid gap-10 py-14 lg:grid-cols-[240px_1fr]">
        <CategorySidebar locale={l} activeSlug={category} activeGroup={group.key} title={dict.specializations.title} />

        <div>
          {courses.length > 0 ? (
            <>
              <h2 className="font-heading text-xl text-navy">{dict.featured.title}</h2>
              <div className="mt-5">
                <CourseTable locale={l} dict={dict} courses={courses} />
              </div>
            </>
          ) : (
            <div className="rounded-2xl border border-dashed border-line-navy bg-paper-dim p-10 text-center">
              <p className="text-sm text-ink-soft">
                {l === "ar"
                  ? "لا توجد مواعيد مؤكدة حالياً لهذا التخصص. تواصل معنا لمعرفة أقرب موعد متاح أو لطلب برنامج مخصص."
                  : "No confirmed dates for this specialisation right now. Contact us for the next available date or a bespoke programme."}
              </p>
              <Button href={`/${l}/contact`} className="mt-5">
                {dict.nav.getInTouch}
              </Button>
            </div>
          )}

          <div className="mt-14 border-t border-line-navy pt-10">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-lg text-navy">{dict.specializations.title}</h2>
              <Link href={`/${l}/courses`} className="text-xs font-semibold text-gold hover:underline">
                {dict.specializations.viewAll}
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((s) => (
                <CategoryCard key={s.slug} spec={s} locale={l} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
