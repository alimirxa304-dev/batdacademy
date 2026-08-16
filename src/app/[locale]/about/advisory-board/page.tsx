import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SubNav } from "@/components/shared/SubNav";
import { aboutContent } from "@/lib/data/about";
import { getAboutSubNav } from "@/lib/nav-helpers";
import { IconBadgeCheck, IconGlobe, IconShield } from "@/components/ui/Icons";

const pillarIcons = [IconShield, IconBadgeCheck, IconGlobe];

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
        <div className="grid gap-5 sm:grid-cols-3">
          {aboutContent.advisoryBoard.pillars.map((p, i) => {
            const Icon = pillarIcons[i % pillarIcons.length];
            return (
              <div key={i} className="rounded-2xl border border-line-navy bg-surface p-6 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft/50 text-navy">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading mt-4 text-base text-navy">{p[l]}</h3>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
