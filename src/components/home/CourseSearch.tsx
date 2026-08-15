"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { specializations } from "@/lib/data/specializations";
import { cities } from "@/lib/data/cities";

export function CourseSearch({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const router = useRouter();
  const [specialization, setSpecialization] = useState("");
  const [city, setCity] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (specialization) {
      router.push(`/${locale}/courses/${specialization}${city ? `?city=${city}` : ""}`);
    } else {
      router.push(`/${locale}/courses${city ? `?city=${city}` : ""}`);
    }
  }

  return (
    <div className="relative -mt-10 sm:-mt-14">
      <form
        onSubmit={onSubmit}
        className="mx-auto flex max-w-4xl flex-col gap-3 rounded-md border-2 border-navy bg-surface p-3 shadow-xl shadow-navy/10 sm:flex-row sm:items-center sm:p-2"
      >
        <label className="flex-1 px-3 py-2">
          <span className="block text-[10px] font-semibold uppercase tracking-wide text-ink-soft">
            {dict.search.specialization}
          </span>
          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-navy focus:outline-none"
          >
            <option value="">{dict.search.allCategories}</option>
            {specializations.map((s) => (
              <option key={s.slug} value={s.slug}>
                {locale === "ar" ? s.ar : s.en}
              </option>
            ))}
          </select>
        </label>
        <span className="hidden h-8 w-px bg-line sm:block" />
        <label className="flex-1 px-3 py-2">
          <span className="block text-[10px] font-semibold uppercase tracking-wide text-ink-soft">
            {dict.search.city}
          </span>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-navy focus:outline-none"
          >
            <option value="">{dict.common.selectCity}</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.slug}>
                {locale === "ar" ? c.ar : c.en}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="rounded-sm bg-gold px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-gold/90"
        >
          {dict.search.submit}
        </button>
      </form>
    </div>
  );
}
