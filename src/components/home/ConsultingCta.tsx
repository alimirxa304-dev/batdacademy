import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ConsultingCta({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden bg-navy py-20">
      <div className="absolute inset-0">
        <Image src="/images/photos/1786452583.webp" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/75 rtl:bg-gradient-to-l" />
      </div>
      <Container className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
            {dict.consulting.eyebrow}
          </span>
          <h2 className="font-heading mt-3 text-balance text-3xl leading-tight text-white sm:text-5xl">
            {dict.consulting.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            {dict.consulting.body}
          </p>
        </div>
        <Button href={`/${locale}/consultations`} variant="accent" size="lg" className="shrink-0">
          {dict.consulting.cta}
        </Button>
      </Container>
    </section>
  );
}
