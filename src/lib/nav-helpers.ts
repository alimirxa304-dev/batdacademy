import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function getAboutSubNav(locale: Locale, dict: Dictionary) {
  return [
    { href: `/${locale}/about`, label: dict.nav.aboutOverview },
    { href: `/${locale}/about/vision`, label: dict.nav.vision },
    { href: `/${locale}/about/services`, label: dict.nav.services },
    { href: `/${locale}/about/scope-of-work`, label: dict.nav.scopeOfWork },
    { href: `/${locale}/about/staff`, label: dict.nav.staff },
    { href: `/${locale}/about/advisory-board`, label: dict.nav.advisoryBoard },
  ];
}
