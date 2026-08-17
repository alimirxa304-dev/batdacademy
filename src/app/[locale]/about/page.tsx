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
      <PageHero
        eyebrow={dict.nav.about}
        title={dict.nav.aboutOverview}
        subtitle={aboutContent.overview[l]}
        image="/images/photos/1786454689.webp"
      />
      <SubNav items={subItems} />
      <Container className="py-16">
        <div className="flex flex-col border-t border-line-navy">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group grid grid-cols-1 items-center gap-2 border-b border-line-navy py-7 transition-colors hover:bg-navy-tint/40 sm:grid-cols-[1fr_2fr_auto] sm:gap-8 sm:py-8"
            >
              <h3 className="font-heading text-2xl text-navy">{card.title}</h3>
              <p className="line-clamp-2 max-w-xl text-sm leading-relaxed text-ink-soft">{card.body}</p>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-gold">
                {dict.common.learnMore}
                <IconArrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
