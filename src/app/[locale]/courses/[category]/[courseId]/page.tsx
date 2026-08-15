import Image from "next/image";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PrintButton } from "@/components/courses/PrintButton";
import { CourseDetailTabs } from "@/components/courses/CourseDetailTabs";
import { getSpecialization } from "@/lib/data/specializations";
import { getCity } from "@/lib/data/cities";
import { upcomingCourses } from "@/lib/data/courses";
import { courseDetails } from "@/lib/data/course-details";
import { IconArrow, IconPin } from "@/components/ui/Icons";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    upcomingCourses.map((c) => ({ locale, category: c.specializationSlug, courseId: String(c.id) }))
  );
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; category: string; courseId: string }>;
}) {
  const { locale, category, courseId } = await params;
  if (!isLocale(locale)) notFound();
  const course = upcomingCourses.find((c) => c.id === Number(courseId) && c.specializationSlug === category);
  if (!course) notFound();
  const detail = courseDetails[course.id];
  if (!detail) notFound();

  const dict = await getDictionary(locale as Locale);
  const l = locale as Locale;
  const spec = getSpecialization(course.specializationSlug);
  const city = getCity(course.citySlug);
  const otherDates = upcomingCourses.filter(
    (c) => c.specializationSlug === course.specializationSlug && c.id !== course.id
  );

  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-25">
          <Image src={course.image} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/70" />
        <Container className="relative py-14 sm:py-20">
          {spec ? (
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              {l === "ar" ? spec.ar : spec.en}
            </span>
          ) : null}
          <h1 className="font-heading mt-3 max-w-3xl text-balance text-3xl leading-tight text-white sm:text-4xl">
            {l === "ar" ? course.ar : course.en}
          </h1>
          <span className="mt-4 flex items-center gap-1.5 text-sm text-white/70">
            <IconPin className="h-4 w-4 text-gold" />
            {city ? (l === "ar" ? city.ar : city.en) : course.citySlug}
          </span>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button href={`/${l}/contact`} variant="accent" size="lg">
              {dict.featured.register}
              <IconArrow className="h-4 w-4 rtl:rotate-180" />
            </Button>
            <PrintButton label={dict.featured.print} />
            <a
              href={`/${l}/contact`}
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {dict.featured.quickInquiry}
            </a>
            <a
              href={`/${l}/consultations`}
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {dict.featured.requestQuote}
            </a>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <CourseDetailTabs locale={l} dict={dict} course={course} detail={detail} otherDates={otherDates} />
      </Container>
    </>
  );
}
