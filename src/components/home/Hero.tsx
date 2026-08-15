import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/ui/Icons";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const stats = [
    { value: "30+", label: dict.hero.statCountries },
    { value: "50+", label: dict.hero.statCities },
    { value: "58", label: dict.hero.statCourses },
  ];

  return (
    <section className="relative overflow-hidden border-b border-line-navy bg-paper">
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-30" />

      <Container className="relative grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-gold">
            <span className="h-[3px] w-8 bg-gold" />
            {dict.hero.eyebrow}
          </span>

          <h1 className="font-heading mt-7 text-balance text-[3rem] leading-[1.05] text-navy sm:text-[4.5rem] lg:text-[5rem]">
            {dict.hero.titleLine1}
            <br />
            <span className="text-gold">{dict.hero.titleLine2}</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
            {dict.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={`/${locale}/courses`} variant="accent" size="lg">
              {dict.hero.ctaPrimary}
              <IconArrow className="h-4 w-4 rtl:rotate-180" />
            </Button>
            <Button href={`/${locale}/consultations`} variant="secondary" size="lg">
              {dict.hero.ctaSecondary}
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-12 gap-y-5 border-t-2 border-navy pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-4xl text-navy">{s.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md border-2 border-navy shadow-2xl shadow-navy/10">
            <Image
              src="/images/hero/slider-1.webp"
              alt={dict.meta.siteName}
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-navy/10" />
          </div>

          <div className="absolute -bottom-7 start-6 w-[78%] max-w-[300px] rounded-md border-2 border-navy bg-surface p-5 shadow-xl">
            <p className="font-heading text-3xl text-navy">15+</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-soft">{dict.hero.statYears}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
