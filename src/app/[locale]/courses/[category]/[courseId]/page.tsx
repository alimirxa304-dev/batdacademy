import Image from "next/image";
import Link from "next/link";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PrintButton } from "@/components/courses/PrintButton";
import { CourseDetailTabs } from "@/components/courses/CourseDetailTabs";
import { CategorySidebar } from "@/components/courses/CategorySidebar";
import { CourseCard } from "@/components/shared/CourseCard";
import { getSpecialization } from "@/lib/data/specializations";
import { getCity } from "@/lib/data/cities";
import { upcomingCourses } from "@/lib/data/courses";
import { courseDetails } from "@/lib/data/course-details";
import { getGroup } from "@/lib/data/category-groups";
import { IconArrow, IconCalendar, IconPin } from "@/components/ui/Icons";

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
  const group = getGroup(course.specializationSlug);
  const otherDates = upcomingCourses.filter(
    (c) => c.specializationSlug === course.specializationSlug && c.id !== course.id
  );
  const relatedCourses = upcomingCourses.filter((c) => c.id !== course.id).slice(0, 3);
  const dateFormatted = new Intl.DateTimeFormat(l === "ar" ? "ar-GB" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(course.date));

  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-40">
          <Image src={course.image} alt="" fill sizes="100vw" className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/60" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />
        <Container className="relative py-16 sm:py-24">
          {spec ? (
            <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-gold">
              <span className="h-[3px] w-8 bg-gold" />
              {l === "ar" ? spec.ar : spec.en}
            </span>
          ) : null}
          <h1 className="font-heading mt-4 max-w-3xl text-balance text-4xl leading-[1.05] text-white sm:text-5xl">
            {l === "ar" ? course.ar : course.en}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/75">
            <span className="flex items-center gap-1.5">
              <IconPin className="h-4 w-4 text-gold" />
              {city ? (l === "ar" ? city.ar : city.en) : course.citySlug}
            </span>
            <span className="flex items-center gap-1.5">
              <IconCalendar className="h-4 w-4 text-gold" />
              {dateFormatted}
            </span>
            <span className="font-heading text-xl text-white">£{course.price.toLocaleString()}</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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

      <Container className="grid gap-10 py-10 lg:grid-cols-[1fr_260px]">
        <div className="min-w-0">
          <CourseDetailTabs locale={l} dict={dict} course={course} detail={detail} otherDates={otherDates} />
        </div>
        <CategorySidebar
          locale={l}
          activeSlug={course.specializationSlug}
          activeGroup={group.key}
          title={dict.specializations.title}
        />
      </Container>

      <section className="border-t border-line-navy bg-navy py-14">
        <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-start">
          <div>
            <h2 className="font-heading text-2xl text-white sm:text-3xl">
              {l === "ar" ? "جاهز للتسجيل في هذه الدورة؟" : "Ready to register for this course?"}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/70">
              {l === "ar"
                ? "تواصل مع فريقنا للتسجيل أو للاستفسار عن مواعيد وأماكن إضافية."
                : "Contact our team to enrol, or ask about additional dates and locations."}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href={`/${l}/contact`} variant="accent" size="lg">
              {dict.featured.register}
              <IconArrow className="h-4 w-4 rtl:rotate-180" />
            </Button>
            <Button href={`/${l}/consultations`} variant="outline-paper" size="lg">
              {dict.featured.requestQuote}
            </Button>
          </div>
        </Container>
      </section>

      <div className="border-t border-line-navy bg-paper-dim py-16">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-gold">
                <span className="h-[3px] w-8 bg-gold" />
                {dict.nav.courses}
              </span>
              <h2 className="font-heading mt-2 text-3xl text-navy">{dict.featured.relatedCourses}</h2>
            </div>
            <Link href={`/${l}/courses`} className="text-xs font-semibold text-gold hover:underline">
              {dict.specializations.viewAll}
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCourses.map((c) => (
              <CourseCard key={c.id} course={c} locale={l} dict={dict} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
