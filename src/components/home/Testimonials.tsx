import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconQuote } from "@/components/ui/Icons";
import { reviews } from "@/lib/data/reviews";

const loop = [...reviews, ...reviews];

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
      </Container>

      <div
        dir="ltr"
        className="group relative mt-12 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 6%, #000 94%, transparent 100%)",
        }}
      >
        <div
          dir="ltr"
          className="flex w-max animate-marquee items-stretch gap-5 [animation-duration:55s] group-hover:[animation-play-state:paused]"
        >
          {loop.map((review, i) => (
            <div
              key={i}
              dir={locale === "ar" ? "rtl" : "ltr"}
              className="flex w-[340px] shrink-0 flex-col rounded-sm border-2 border-line-navy bg-surface p-7"
            >
              <IconQuote className="h-7 w-7 shrink-0 text-gold" />
              <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-ink-soft">
                {review.quote[locale]}
              </p>
              <p className="mt-5 border-t-2 border-navy/10 pt-4 text-xs font-bold uppercase tracking-wide text-navy">
                {review.context[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
