import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { upcomingCourses } from "@/lib/data/courses";
import { CourseCard } from "@/components/shared/CourseCard";

export function FeaturedCourses({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="bg-paper-dim py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={dict.nav.courses}
            title={dict.featured.title}
            subtitle={dict.featured.subtitle}
          />
          <Button href={`/${locale}/courses`} variant="secondary">
            {dict.featured.viewMore}
          </Button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingCourses.map((course) => (
            <CourseCard key={course.id} course={course} locale={locale} dict={dict} />
          ))}
        </div>
      </Container>
    </section>
  );
}
