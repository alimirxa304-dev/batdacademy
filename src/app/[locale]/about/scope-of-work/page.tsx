import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SubNav } from "@/components/shared/SubNav";
import { aboutContent } from "@/lib/data/about";
import { getAboutSubNav } from "@/lib/nav-helpers";

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
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aboutContent.scopeOfWork.fields.map((field, i) => (
            <div key={i} className="rounded-2xl border border-line-navy bg-surface p-6">
              <h3 className="font-heading text-lg text-navy">{field.title[l]}</h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-soft">{field.body[l]}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
