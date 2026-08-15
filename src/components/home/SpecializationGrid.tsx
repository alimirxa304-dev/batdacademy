import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { specializations } from "@/lib/data/specializations";
import { CategoryCard } from "@/components/shared/CategoryCard";

export function SpecializationGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const list = specializations.slice(0, 12);
  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={dict.nav.courses}
            title={dict.specializations.title}
            subtitle={dict.specializations.subtitle}
          />
          <Button href={`/${locale}/courses`} variant="ghost">
            {dict.specializations.viewAll}
          </Button>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((spec, i) => (
            <CategoryCard key={spec.slug} spec={spec} locale={locale} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
