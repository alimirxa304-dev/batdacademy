import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/shared/PageHero";
import { IconArrow, IconBadgeCheck, IconClock, IconGlobe } from "@/components/ui/Icons";

type Program = {
  title: { ar: string; en: string };
  intro: { ar: string; en: string };
  highlights: { title: { ar: string; en: string }; body: { ar: string; en: string } }[];
  tracks: { ar: string; en: string }[];
};

const highlightIcons = [IconClock, IconBadgeCheck, IconGlobe];

export function ProgramLanding({
  locale,
  dict,
  program,
  eyebrow,
  image,
}: {
  locale: Locale;
  dict: Dictionary;
  program: Program;
  eyebrow: string;
  image?: string;
}) {
  const l = locale;
  return (
    <>
      <PageHero eyebrow={eyebrow} title={program.title[l]} subtitle={program.intro[l]} image={image} />

      <Container className="py-16">
        <div className="grid gap-5 sm:grid-cols-3">
          {program.highlights.map((h, i) => {
            const Icon = highlightIcons[i % highlightIcons.length];
            return (
              <div key={i} className="rounded-2xl border border-line-navy bg-surface p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft/50 text-navy">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading mt-4 text-base text-navy">{h.title[l]}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{h.body[l]}</p>
              </div>
            );
          })}
        </div>
      </Container>

      <div className="border-t border-line-navy bg-paper-dim py-16">
        <Container>
          <h2 className="font-heading text-2xl text-navy">
            {l === "ar" ? "المسارات المتاحة" : "Available Tracks"}
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {program.tracks.map((t, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-3 rounded-xl border border-line-navy bg-surface px-5 py-4"
              >
                <span className="text-[14.5px] font-medium text-navy">{t[l]}</span>
                <IconArrow className="h-4 w-4 shrink-0 text-gold rtl:rotate-180" />
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl bg-navy p-8 text-white sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-[15px] leading-relaxed text-white/80">
              {l === "ar"
                ? "تحدث مع أحد مستشارينا لاختيار المسار الأنسب لطموحك المهني وموعد الانطلاق القادم."
                : "Speak with one of our advisors to choose the track that fits your career ambitions and the next intake date."}
            </p>
            <Button href={`/${l}/contact`} variant="primary" className="shrink-0">
              {dict.nav.getInTouch}
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
