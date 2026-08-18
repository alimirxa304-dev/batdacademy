import Image from "next/image";
import Link from "next/link";
import type { City } from "@/lib/data/cities";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { IconArrow } from "@/components/ui/Icons";

export function CityCard({
  city,
  locale,
  dict,
}: {
  city: City;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Link
      href={`/${locale}/cities/${city.slug}`}
      className="group flex h-64 w-52 shrink-0 flex-col overflow-hidden rounded-md border-2 border-navy/10 bg-surface transition-all hover:-translate-y-1 hover:border-navy hover:shadow-xl sm:w-60"
    >
      <div className="relative h-32 w-full shrink-0 overflow-hidden bg-navy-tint">
        {city.image ? (
          <Image
            src={city.image}
            alt=""
            fill
            sizes="240px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-navy-2" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">
          {locale === "ar" ? city.country.ar : city.country.en}
        </p>
        <p className="font-heading mt-1 text-lg text-navy">{locale === "ar" ? city.ar : city.en}</p>
        <span className="mt-auto flex items-center gap-1.5 pt-3 text-xs font-bold text-navy">
          {dict.cities.viewCourses}
          <IconArrow className="h-3.5 w-3.5 shrink-0 text-gold transition-transform rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
