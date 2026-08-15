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
      <PageHero eyebrow={dict.nav.about} title={dict.nav.staff} subtitle={aboutContent.staff.body[l]} />
      <SubNav items={getAboutSubNav(l, dict)} />
      <Container className="py-16">
        <div className="flex flex-wrap gap-2">
          {aboutContent.staff.departments.map((d, i) => (
            <Badge key={i} tone={i % 2 === 0 ? "navy" : "gold"}>
              {d[l]}
            </Badge>
          ))}
        </div>
        <div className="mt-8 max-w-3xl rounded-2xl border border-line-navy bg-surface p-8">
          <p className="text-[15px] leading-relaxed text-ink-soft">{aboutContent.staff.extra[l]}</p>
        </div>
      </Container>
    </>
  );
}
