"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { specializations } from "@/lib/data/specializations";
import { cities } from "@/lib/data/cities";
import { groupOrder, groups } from "@/lib/data/category-groups";
import { IconArrow } from "@/components/ui/Icons";

const months = [
  { ar: "يناير", en: "January" }, { ar: "فبراير", en: "February" }, { ar: "مارس", en: "March" },
  { ar: "أبريل", en: "April" }, { ar: "مايو", en: "May" }, { ar: "يونيو", en: "June" },
  { ar: "يوليو", en: "July" }, { ar: "أغسطس", en: "August" }, { ar: "سبتمبر", en: "September" },
  { ar: "أكتوبر", en: "October" }, { ar: "نوفمبر", en: "November" }, { ar: "ديسمبر", en: "December" },
];

export function CourseFilterBar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const router = useRouter();
  const [city, setCity] = useState("");
  const [group, setGroup] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [query, setQuery] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (specialization) {
      router.push(`/${locale}/courses/${specialization}${city ? `?city=${city}` : ""}`);
      return;
    }
    const params = new URLSearchParams();
    if (city) params.set("city", city);
    if (group) params.set("section", group);
    if (query) params.set("q", query);
    const qs = params.toString();
    router.push(`/${locale}/courses${qs ? `?${qs}` : ""}`);
  }

  const selectClass =
    "w-full rounded-xl border border-line-navy bg-paper px-4 py-2.5 text-sm text-navy focus:border-gold focus:outline-none";

  return (
    <div className="rounded-2xl border border-line-navy bg-surface p-6 shadow-sm sm:p-8">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-gold">
        {dict.search.title}
      </p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <select value={city} onChange={(e) => setCity(e.target.value)} className={selectClass}>
          <option value="">{dict.search.city}</option>
          {cities.map((c) => (
            <option key={c.slug} value={c.slug}>
              {locale === "ar" ? c.ar : c.en}
            </option>
          ))}
        </select>

        <select value={group} onChange={(e) => setGroup(e.target.value)} className={selectClass}>
          <option value="">{locale === "ar" ? "القسم" : "Section"}</option>
          {groupOrder.map((g) => (
            <option key={g} value={g}>
              {locale === "ar" ? groups[g].ar : groups[g].en}
            </option>
          ))}
        </select>

        <select
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className={selectClass}
        >
          <option value="">{dict.search.allCategories}</option>
          {specializations.map((s) => (
            <option key={s.slug} value={s.slug}>
              {locale === "ar" ? s.ar : s.en}
            </option>
          ))}
        </select>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={locale === "ar" ? "ابحث بالاسم..." : "Search by name..."}
          className={selectClass}
        />

        <select className={selectClass} defaultValue="">
          <option value="">{dict.search.month}</option>
          {months.map((m, i) => (
            <option key={i} value={i + 1}>
              {m[locale]}
            </option>
          ))}
        </select>

        <select className={selectClass} defaultValue="">
          <option value="">{dict.search.language}</option>
          <option value="ar">{locale === "ar" ? "العربية" : "Arabic"}</option>
          <option value="en">{locale === "ar" ? "الإنجليزية" : "English"}</option>
        </select>

        <div className="sm:col-span-2 lg:col-span-2">
          <button
            type="submit"
            className="flex h-full w-full items-center justify-center gap-2 rounded-xl bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-2"
          >
            {dict.search.submit}
            <IconArrow className="h-4 w-4 rtl:rotate-180" />
          </button>
        </div>
      </form>
    </div>
  );
}
