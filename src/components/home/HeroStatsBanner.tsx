import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { IconBadgeCheck, IconGlobe, IconGraduationCap } from "@/components/ui/Icons";

export function HeroStatsBanner({ dict }: { locale: Locale; dict: Dictionary }) {
  const items = [
    {
      icon: IconGraduationCap,
      value: "58",
      label: dict.hero.statCourses,
      body: dict.specializations.subtitle,
    },
    {
      icon: IconGlobe,
      value: "30+",
      label: dict.hero.statCountries,
      body: dict.trust.items[2].body,
    },
    {
      icon: IconBadgeCheck,
      value: "15+",
      label: dict.hero.statYears,
      body: dict.trust.items[1].body,
    },
  ];

  return (
    <section className="border-b border-line-navy bg-gold-soft/40 py-8">
      <Container className="grid gap-6 sm:grid-cols-3">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy text-gold">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-navy">
                  {item.value} {item.label}
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
