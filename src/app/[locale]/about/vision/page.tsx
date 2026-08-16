import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SubNav } from "@/components/shared/SubNav";
import { aboutContent } from "@/lib/data/about";
import { getAboutSubNav } from "@/lib/nav-helpers";
import { IconCompass, IconTarget } from "@/components/ui/Icons";

export default async function VisionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const l = locale as Locale;

  const subItems = getAboutSubNav(l, dict);

  return (
    <>
      <PageHero eyebrow={dict.nav.about} title={dict.nav.vision} image="/images/photos/1581409163.webp" />
      <SubNav items={subItems} />
      <Container className="grid gap-8 py-16 lg:grid-cols-2">
        <div className="rounded-2xl border border-line-navy bg-surface p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft/50 text-navy">
            <IconCompass className="h-6 w-6" />
          </span>
          <h2 className="font-heading mt-4 text-2xl text-navy">
            {aboutContent.vision.title[l]}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {aboutContent.vision.body[l]}
          </p>
        </div>
        <div className="rounded-2xl border border-line-navy bg-navy p-8 text-white">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-gold">
            <IconTarget className="h-6 w-6" />
          </span>
          <h2 className="font-heading mt-4 text-2xl">{aboutContent.mission.title[l]}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/70">
            {aboutContent.mission.body[l]}
          </p>
        </div>
      </Container>
    </>
  );
}
