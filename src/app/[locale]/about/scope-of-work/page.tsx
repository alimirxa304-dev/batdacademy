import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SubNav } from "@/components/shared/SubNav";
import { aboutContent } from "@/lib/data/about";
import { getAboutSubNav } from "@/lib/nav-helpers";
import { IconPin } from "@/components/ui/Icons";

export default async function ScopeOfWorkPage({
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
      <PageHero
        eyebrow={dict.nav.about}
        title={dict.nav.scopeOfWork}
        subtitle={aboutContent.scopeOfWork.intro[l]}
        image="/images/photos/1728908989.png"
      />
      <SubNav items={getAboutSubNav(l, dict)} />
      <Container className="py-16">
        <div className="flex flex-col">
          {aboutContent.scopeOfWork.fields.map((field, i) => (
            <div
              key={i}
              className="grid gap-4 border-b border-line py-8 first:pt-0 last:border-0 sm:grid-cols-[1fr_2fr] sm:gap-10 lg:grid-cols-[280px_1fr]"
            >
              <div className="flex items-baseline gap-4 sm:flex-col sm:items-start sm:gap-2">
                <span className="font-heading text-2xl text-gold/60">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-heading text-xl text-navy">{field.title[l]}</h3>
              </div>
              <div>
                <p className="max-w-2xl text-[14.5px] leading-relaxed text-ink-soft">{field.body[l]}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {field.cities[l].map((city, ci) => (
                    <span
                      key={ci}
                      className="inline-flex items-center gap-1.5 rounded-sm bg-navy-tint px-3 py-1.5 text-xs font-semibold text-navy"
                    >
                      <IconPin className="h-3.5 w-3.5 text-gold" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
