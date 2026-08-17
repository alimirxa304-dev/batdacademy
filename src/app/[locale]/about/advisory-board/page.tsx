import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SubNav } from "@/components/shared/SubNav";
import { aboutContent } from "@/lib/data/about";
import { getAboutSubNav } from "@/lib/nav-helpers";

export default async function AdvisoryBoardPage({
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
        title={dict.nav.advisoryBoard}
        subtitle={aboutContent.advisoryBoard.body[l]}
        image="/images/photos/1581324752.jpg"
      />
      <SubNav items={getAboutSubNav(l, dict)} />
      <Container className="py-16">
        <div className="grid divide-y divide-line lg:grid-cols-3 lg:divide-x lg:divide-y-0 rtl:lg:divide-x-reverse">
          {aboutContent.advisoryBoard.pillars.map((p, i) => (
            <div key={i} className="flex flex-col gap-3 py-8 first:pt-0 last:pb-0 lg:px-8 lg:py-0 lg:first:ps-0 lg:last:pe-0">
              <span className="font-heading text-5xl text-gold/40">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-heading text-2xl leading-snug text-navy">{p[l]}</h3>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
