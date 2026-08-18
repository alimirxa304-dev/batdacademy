import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { featuredCities } from "@/lib/data/cities";
import { CityCard } from "@/components/shared/CityCard";

export function CityShowcase({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="py-20">
      <Container className="!px-0 sm:!px-8">
        <div className="flex flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-end sm:px-0">
          <SectionHeading
            eyebrow={dict.nav.cities}
            title={dict.cities.title}
            subtitle={dict.cities.subtitle}
          />
          <div className="px-5 sm:px-0">
            <Button href={`/${locale}/cities`} variant="ghost">
              {dict.cities.viewAll}
            </Button>
          </div>
        </div>

        <div className="mt-10 flex gap-4 overflow-x-auto px-5 pb-4 sm:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {featuredCities.map((city) => (
            <CityCard key={city.slug} city={city} locale={locale} />
          ))}
        </div>
      </Container>
    </section>
  );
}
