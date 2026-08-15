import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/shared/PageHero";
import { SubNav } from "@/components/shared/SubNav";
import { aboutContent } from "@/lib/data/about";
import { IconArrow } from "@/components/ui/Icons";
import { getAboutSubNav } from "@/lib/nav-helpers";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);
  const l = locale as Locale;

  const subItems = getAboutSubNav(l, dict);

  const cards = [
    { href: `/${l}/about/vision`, title: dict.nav.vision, body: aboutContent.vision.body[l] },
    { href: `/${l}/about/services`, title: dict.nav.services, body: aboutContent.services.intro[l] },
    { href: `/${l}/about/scope-of-work`, title: dict.nav.scopeOfWork, body: aboutContent.scopeOfWork.intro[l] },
    { href: `/${l}/about/staff`, title: dict.nav.staff, body: aboutContent.staff.body[l] },
  ];

  return (
    <>
      <PageHero eyebrow={dict.nav.about} title={dict.nav.aboutOverview} subtitle={aboutContent.overview[l]} />
      <SubNav items={subItems} />
      <Container className="py-16">
        <div className="grid gap-5 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col rounded-2xl border border-line-navy bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lg hover:shadow-navy/5"
            >
              <h3 className="font-heading text-xl text-navy">{card.title}</h3>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">{card.body}</p>
              <span className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-gold">
                {dict.common.learnMore}
                <IconArrow className="h-3.5 w-3.5 rtl:rotate-180" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
