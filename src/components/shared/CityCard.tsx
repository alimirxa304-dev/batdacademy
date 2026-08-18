import Image from "next/image";
import Link from "next/link";
import type { City } from "@/lib/data/cities";
import type { Locale } from "@/lib/i18n/config";

export function CityCard({ city, locale }: { city: City; locale: Locale }) {
  return (
    <Link
      href={`/${locale}/cities/${city.slug}`}
      className="group relative flex h-64 shrink-0 w-52 sm:w-60 overflow-hidden rounded-2xl"
    >
      {city.image ? (
        <Image
          src={city.image}
          alt={locale === "ar" ? city.ar : city.en}
          fill
          sizes="240px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="h-full w-full bg-navy-2" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
      <div className="relative mt-auto p-4 text-white">
        <p className="text-[10px] uppercase tracking-[0.14em] text-white/60">
          {locale === "ar" ? city.country.ar : city.country.en}
        </p>
        <p className="font-heading mt-1 text-lg">{locale === "ar" ? city.ar : city.en}</p>
      </div>
    </Link>
  );
}
