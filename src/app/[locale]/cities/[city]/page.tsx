import Image from "next/image";
import Link from "next/link";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CourseCard } from "@/components/shared/CourseCard";
import { getCity, cities } from "@/lib/data/cities";
import { upcomingCourses } from "@/lib/data/courses";

export function generateStaticParams() {
  return locales.flatMap((locale) => cities.map((c) => ({ locale, city: c.slug })));
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ locale: string; city: string }>;
}) {
  const { locale, city } = await params;
  if (!isLocale(locale)) notFound();
  const cityData = getCity(city);
  if (!cityData) notFound();

  const dict = await getDictionary(locale as Locale);
  const l = locale as Locale;
  const courses = upcomingCourses.filter((c) => c.citySlug === city);

  return (
    <>
      <section className="relative overflow-hidden bg-navy py-16 sm:py-24">
        {cityData.image ? (
          <>
            <Image src={cityData.image} alt="" fill sizes="100vw" className="object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/60" />
          </>
        ) : null}
        <Container className="relative">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            {l === "ar" ? cityData.country.ar : cityData.country.en}
          </span>
          <h1 className="font-heading mt-3 text-4xl text-white sm:text-6xl">
            {l === "ar" ? cityData.ar : cityData.en}
          </h1>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/70">
            {dict.cities.coursesIn} {l === "ar" ? cityData.ar : cityData.en}
          </p>
        </Container>
      </section>

      <Container className="py-14">
        {courses.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} locale={l} dict={dict} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-line-navy bg-paper-dim p-10 text-center">
            <p className="text-sm text-ink-soft">
              {l === "ar"
                ? "لا توجد دورات مؤكدة حالياً في هذه المدينة. تواصل معنا لمعرفة أقرب موعد متاح."
                : "No confirmed courses in this city right now. Contact us for the next available date."}
            </p>
            <Button href={`/${l}/contact`} className="mt-5">
              {dict.nav.getInTouch}
            </Button>
          </div>
        )}

        <div className="mt-10">
          <Link href={`/${l}/cities`} className="text-xs font-semibold text-gold hover:underline">
            {dict.cities.viewAll}
          </Link>
        </div>
      </Container>
    </>
  );
}
