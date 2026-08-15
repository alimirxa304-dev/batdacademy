import Image from "next/image";
import Link from "next/link";
import type { Specialization } from "@/lib/data/specializations";
import type { Locale } from "@/lib/i18n/config";
import { IconArrow } from "@/components/ui/Icons";
import { categoryIconSrc } from "@/lib/data/icon-map";
import { getGroup } from "@/lib/data/category-groups";
import { cn } from "@/lib/utils";

const toneStyles = {
  navy: { chip: "bg-navy-tint", bar: "bg-navy", label: "text-navy" },
  gold: { chip: "bg-gold-soft/40", bar: "bg-gold", label: "text-gold" },
  burgundy: { chip: "bg-burgundy/10", bar: "bg-burgundy", label: "text-burgundy" },
};

export function CategoryCard({
  spec,
  locale,
}: {
  spec: Specialization;
  locale: Locale;
  index?: number;
}) {
  const name = locale === "ar" ? spec.ar : spec.en;
  const desc = locale === "ar" ? spec.arDescription : spec.enDescription;
  const group = getGroup(spec.slug);
  const tone = toneStyles[group.tone];

  return (
    <Link
      href={`/${locale}/courses/${spec.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-md border-2 border-navy/10 bg-surface p-6 text-center transition-all hover:-translate-y-1 hover:border-navy hover:shadow-xl"
    >
      <span className={cn("absolute inset-x-0 top-0 h-1", tone.bar)} />

      <span className={cn("mx-auto flex h-24 w-24 shrink-0 items-center justify-center rounded-md", tone.chip)}>
        {spec.icon && categoryIconSrc[spec.icon] ? (
          <Image
            src={categoryIconSrc[spec.icon]}
            alt=""
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
          />
        ) : (
          <span className="font-heading text-3xl text-navy">{name.charAt(0)}</span>
        )}
      </span>

      <span className={cn("mt-4 text-[11px] font-bold uppercase tracking-wide", tone.label)}>
        {locale === "ar" ? group.ar : group.en}
      </span>

      <span className="mt-2 block text-base font-bold leading-snug text-navy">
        {name}
      </span>
      <span className="mt-2 line-clamp-2 block text-[13px] leading-relaxed text-ink-soft">
        {desc}
      </span>

      <span className="mt-5 flex items-center justify-center gap-1.5 border-t-2 border-navy/10 pt-4 text-xs font-bold text-navy">
        {locale === "ar" ? "تصفح الدورات" : "Browse courses"}
        <IconArrow className="h-3.5 w-3.5 shrink-0 text-gold transition-transform rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
      </span>
    </Link>
  );
}
