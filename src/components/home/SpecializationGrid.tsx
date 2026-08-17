import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { specializations } from "@/lib/data/specializations";
import { photoForIndex } from "@/lib/data/photo-pool";
import { getGroup } from "@/lib/data/category-groups";
import { IconArrow } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const toneBar = {
  navy: "bg-navy",
  gold: "bg-gold",
  burgundy: "bg-burgundy",
};

export function SpecializationGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const list = specializations.slice(0, 12);

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={dict.nav.courses}
            title={dict.specializations.title}
            subtitle={dict.specializations.subtitle}
          />
          <Button href={`/${locale}/courses`} variant="ghost">
            {dict.specializations.viewAll}
          </Button>
        </div>

        <div className="mt-10 grid divide-y divide-line border-y border-line-navy sm:grid-cols-2 sm:divide-x sm:divide-y-0 rtl:sm:divide-x-reverse">
          {list.map((spec, i) => {
            const name = locale === "ar" ? spec.ar : spec.en;
            const desc = locale === "ar" ? spec.arDescription : spec.enDescription;
            const group = getGroup(spec.slug);
            const isRightCol = i % 2 === 1;
            return (
              <Link
                key={spec.slug}
                href={`/${locale}/courses/${spec.slug}`}
                className={cn(
                  "group relative flex items-center gap-4 py-5 transition-colors hover:bg-navy-tint/50",
                  isRightCol ? "sm:ps-8" : "sm:pe-8"
                )}
              >
                <span className={cn("absolute inset-y-0 start-0 w-[3px]", toneBar[group.tone])} />
                <span className="relative ms-3 h-14 w-14 shrink-0 overflow-hidden rounded-sm">
                  <Image src={photoForIndex(i)} alt="" fill sizes="56px" className="object-cover" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-bold leading-snug text-navy">{name}</span>
                  <span className="mt-0.5 line-clamp-1 block text-[12.5px] text-ink-soft">{desc}</span>
                </span>
                <IconArrow className="me-3 h-4 w-4 shrink-0 text-gold opacity-0 transition-opacity rtl:rotate-180 group-hover:opacity-100" />
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
