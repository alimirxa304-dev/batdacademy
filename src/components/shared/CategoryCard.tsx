import Image from "next/image";
import Link from "next/link";
import type { Specialization } from "@/lib/data/specializations";
import type { Locale } from "@/lib/i18n/config";
import { IconArrow } from "@/components/ui/Icons";
import { photoForIndex } from "@/lib/data/photo-pool";
import { getGroup } from "@/lib/data/category-groups";
import { cn } from "@/lib/utils";

const toneStyles = {
  navy: "bg-navy text-white",
  gold: "bg-gold text-white",
  burgundy: "bg-burgundy text-white",
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

  return (
    <Link
      href={`/${locale}/courses/${spec.slug}`}
      className="group flex flex-col overflow-hidden rounded-md border-2 border-navy/10 bg-surface transition-all hover:-translate-y-1 hover:border-navy hover:shadow-xl"
    >
      <div className="relative h-36 w-full shrink-0 overflow-hidden bg-navy-tint">
        <Image
          src={photoForIndex(spec.sourceId)}
          alt=""
          fill
          sizes="360px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-navy/0" />
        <span
          className={cn(
            "absolute start-4 top-4 rounded-sm px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide",
            toneStyles[group.tone]
          )}
        >
          {locale === "ar" ? group.ar : group.en}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 text-center">
        <span className="block text-base font-bold leading-snug text-navy">{name}</span>
        <span className="mt-2 line-clamp-2 block text-[13px] leading-relaxed text-ink-soft">{desc}</span>

        <span className="mt-5 flex items-center justify-center gap-1.5 border-t-2 border-navy/10 pt-4 text-xs font-bold text-navy">
          {locale === "ar" ? "تصفح الدورات" : "Browse courses"}
          <IconArrow className="h-3.5 w-3.5 shrink-0 text-gold transition-transform rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
