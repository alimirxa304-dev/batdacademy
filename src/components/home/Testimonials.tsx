import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconGraduationCap, IconQuote } from "@/components/ui/Icons";
import { reviews } from "@/lib/data/reviews";

export function Testimonials({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="bg-paper-dim py-20">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={dict.testimonials.eyebrow}
          title={dict.testimonials.title}
          subtitle={dict.testimonials.subtitle}
          className="mx-auto"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="flex min-w-0 flex-col rounded-sm border-2 border-line-navy bg-surface p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-tint text-navy">
                  <IconGraduationCap className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-navy">{review.context[locale]}</p>
                  <p className="text-xs text-ink-soft">
                    {locale === "ar" ? "مشارك في البرنامج" : "Programme Participant"}
                  </p>
                </div>
              </div>
              <IconQuote className="mt-4 h-5 w-5 shrink-0 text-gold" />
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-soft">
                {review.quote[locale]}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
