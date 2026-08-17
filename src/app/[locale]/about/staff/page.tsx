import Image from "next/image";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SubNav } from "@/components/shared/SubNav";
import { Badge } from "@/components/ui/Badge";
import { aboutContent } from "@/lib/data/about";
import { getAboutSubNav } from "@/lib/nav-helpers";

export default async function StaffPage({
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
        title={dict.nav.staff}
        subtitle={aboutContent.staff.body[l]}
        image="/images/photos/1786452583.webp"
      />
      <SubNav items={getAboutSubNav(l, dict)} />
      <Container className="py-16">
        <div className="flex flex-wrap gap-2">
          {aboutContent.staff.departments.map((d, i) => (
            <Badge key={i} tone={i % 2 === 0 ? "navy" : "gold"}>
              {d[l]}
            </Badge>
          ))}
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border-2 border-navy">
            <Image src="/images/photos/1786450030.webp" alt="" fill sizes="(min-width: 1024px) 480px, 90vw" className="object-cover" />
          </div>
          <div className="rounded-md border-2 border-line-navy bg-surface p-8">
            <p className="text-[15px] leading-relaxed text-ink-soft">{aboutContent.staff.extra[l]}</p>
          </div>
        </div>
      </Container>
    </>
  );
}
