import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SubNav } from "@/components/shared/SubNav";
import { aboutContent } from "@/lib/data/about";
import { getAboutSubNav } from "@/lib/nav-helpers";

export default async function ServicesPage({
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
        title={dict.nav.services}
        subtitle={aboutContent.services.intro[l]}
        image="/images/photos/1786450030.webp"
      />
      <SubNav items={getAboutSubNav(l, dict)} />
      <Container className="py-16">
        <div className="flex max-w-3xl flex-col">
          {aboutContent.services.items.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-line py-7 first:pt-0 last:border-0 sm:grid-cols-[5rem_1fr] sm:gap-8"
            >
              <span className="font-heading text-3xl leading-none text-gold/50 sm:text-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[15px] leading-relaxed text-ink-soft">{item[l]}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
