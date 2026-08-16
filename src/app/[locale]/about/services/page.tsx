import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SubNav } from "@/components/shared/SubNav";
import { aboutContent } from "@/lib/data/about";
import { getAboutSubNav } from "@/lib/nav-helpers";
import { IconBadgeCheck } from "@/components/ui/Icons";

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
        <div className="grid gap-4 sm:grid-cols-2">
          {aboutContent.services.items.map((item, i) => (
            <div key={i} className="flex gap-4 rounded-2xl border border-line-navy bg-surface p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-tint text-navy">
                <IconBadgeCheck className="h-5 w-5" />
              </span>
              <p className="text-[14.5px] leading-relaxed text-ink-soft">{item[l]}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
