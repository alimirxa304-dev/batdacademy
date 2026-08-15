import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const partners = Array.from({ length: 23 }, (_, i) =>
  `/images/partners/partner-${String(i + 1).padStart(2, "0")}.webp`
);
const loop = [...partners, ...partners];

export function ClientsMarquee({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="bg-surface py-20">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={dict.nav.getInTouch}
          title={dict.clients.title}
          subtitle={dict.clients.subtitle}
          className="mx-auto"
        />
      </Container>

      <div
        className="relative mt-14 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-16 [animation-duration:38s]">
          {loop.map((src, i) => (
            <span
              key={i}
              className="relative h-11 w-32 shrink-0 grayscale transition-all duration-300 hover:scale-110 hover:grayscale-0"
            >
              <Image src={src} alt="" fill sizes="130px" className="object-contain" />
            </span>
          ))}
        </div>
      </div>

      <Container>
        <div className="mt-14 flex justify-center">
          <Button href={`/${locale}/contact`} variant="secondary">
            {dict.clients.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
