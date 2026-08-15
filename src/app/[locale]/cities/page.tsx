import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { CityCard } from "@/components/shared/CityCard";
import { cities, featuredCities } from "@/lib/data/cities";

export default async function CitiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const l = locale as Locale;

  const rest = cities.filter((c) => !c.image);

  return (
    <>
      <PageHero eyebrow={dict.nav.cities} title={dict.cities.title} subtitle={dict.cities.subtitle} />

      <Container className="py-14">
        <div className="flex gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {featuredCities.map((city) => (
            <CityCard key={city.slug} city={city} locale={l} />
          ))}
        </div>
      </Container>

      <div className="border-t border-line-navy bg-paper-dim py-14">
        <Container>
          <h2 className="font-heading text-xl text-navy">
            {l === "ar" ? "جميع المدن" : "All Cities"}
          </h2>
          <div className="mt-6 grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {rest.map((city) => (
              <Link
                key={city.slug}
                href={`/${l}/cities/${city.slug}`}
                className="flex items-center justify-between rounded-xl border border-line-navy bg-surface px-4 py-3 text-sm text-navy transition-colors hover:border-gold/40 hover:bg-navy-tint"
              >
                <span className="font-medium">{l === "ar" ? city.ar : city.en}</span>
                <span className="text-xs text-ink-soft">{l === "ar" ? city.country.ar : city.country.en}</span>
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
