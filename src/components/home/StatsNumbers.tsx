import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";

export function StatsNumbers({ dict }: { locale: Locale; dict: Dictionary }) {
  const stats = [
    { value: "15+", label: dict.stats.years },
    { value: "30+", label: dict.stats.countries },
    { value: "50+", label: dict.stats.cities },
    { value: "58", label: dict.stats.specialisms },
    { value: "20+", label: dict.stats.partners },
    { value: "3", label: dict.stats.languages },
  ];

  return (
    <section className="bg-navy-tint py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="font-heading text-2xl text-navy sm:text-3xl">{dict.stats.title}</h2>
          <p className="mt-2 max-w-md text-sm text-ink-soft">{dict.stats.subtitle}</p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-line-navy bg-surface p-4">
                <p className="font-heading text-2xl text-navy">{s.value}</p>
                <p className="mt-1 text-[11.5px] leading-snug text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto hidden aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-line-navy shadow-lg shadow-navy/10 lg:block">
          <Image
            src="/images/photos/1728666238.jpeg"
            alt=""
            fill
            sizes="320px"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
