import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { cities } from "@/lib/data/cities";
import { IconMail, IconPhone, IconPin } from "@/components/ui/Icons";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const withLocale = (href: string) => `/${locale}${href}`;
  const year = 2026;
  const footerCities = cities.filter((c) =>
    ["london", "dubai", "istanbul", "barcelona"].includes(c.slug)
  );

  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-11 w-11 overflow-hidden rounded-full bg-white/10 p-1.5">
              <Image
                src="/images/brand/logo-ba.webp"
                alt={dict.meta.siteName}
                fill
                sizes="44px"
                className="object-contain p-1"
              />
            </span>
            <span className="font-heading text-lg font-semibold">
              {dict.meta.siteName}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
            {dict.footer.about}
          </p>
          <div className="mt-5 flex flex-col gap-2.5 text-sm text-white/75">
            <a href={`tel:${dict.topbar.phone}`} className="flex items-center gap-2 hover:text-white">
              <IconPhone className="h-4 w-4 text-gold" /> {dict.topbar.phone}
            </a>
            <a href={`mailto:${dict.topbar.email}`} className="flex items-center gap-2 hover:text-white">
              <IconMail className="h-4 w-4 text-gold" /> {dict.topbar.email}
            </a>
            <span className="flex items-start gap-2">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              344-354 Gray&apos;s Inn Road, London, WC1X 8BP
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            {dict.footer.aboutTitle}
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
            <li><Link href={withLocale("/about/vision")} className="hover:text-white">{dict.nav.vision}</Link></li>
            <li><Link href={withLocale("/about/services")} className="hover:text-white">{dict.nav.services}</Link></li>
            <li><Link href={withLocale("/about/scope-of-work")} className="hover:text-white">{dict.nav.scopeOfWork}</Link></li>
            <li><Link href={withLocale("/about/staff")} className="hover:text-white">{dict.nav.staff}</Link></li>
            <li><Link href={withLocale("/about/advisory-board")} className="hover:text-white">{dict.nav.advisoryBoard}</Link></li>
            <li><Link href={withLocale("/consultations")} className="hover:text-white">{dict.nav.consultations}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            {dict.footer.citiesTitle}
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
            {footerCities.map((c) => (
              <li key={c.slug}>
                <Link href={withLocale(`/cities/${c.slug}`)} className="hover:text-white">
                  {locale === "ar" ? c.ar : c.en}
                </Link>
              </li>
            ))}
            <li><Link href={withLocale("/cities")} className="hover:text-white">{dict.cities.viewAll}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            {dict.footer.newsletterTitle}
          </h3>
          <p className="mt-4 text-sm text-white/65">{dict.footer.newsletterBody}</p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              required
              placeholder={dict.footer.newsletterPlaceholder}
              className="w-full rounded-sm border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-sm bg-gold px-4 py-2.5 text-sm font-semibold text-white hover:bg-gold/90"
            >
              {dict.footer.newsletterCta}
            </button>
          </form>
          <ul className="mt-6 flex flex-col gap-2.5 text-sm text-white/70">
            <li><Link href={withLocale("/faq")} className="hover:text-white">{dict.topbar.faq}</Link></li>
            <li><span className="hover:text-white">{dict.footer.privacy}</span></li>
            <li><span className="hover:text-white">{dict.footer.terms}</span></li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/55 sm:flex-row">
          <p>© {year} {dict.footer.rights}</p>
          <div className="flex items-center gap-4">
            <span>{dict.footer.customerService}</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>{dict.footer.corporateService}</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
