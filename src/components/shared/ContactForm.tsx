"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { cities } from "@/lib/data/cities";

export function ContactForm({
  locale,
  dict,
  showCity = true,
}: {
  locale: Locale;
  dict: Dictionary;
  showCity?: boolean;
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-gold-soft/20 p-8 text-center">
        <p className="font-heading text-lg text-navy">
          {locale === "ar" ? "شكراً لتواصلك معنا" : "Thank you for reaching out"}
        </p>
        <p className="mt-2 text-sm text-ink-soft">
          {locale === "ar"
            ? "سيقوم فريقنا بالرد عليك خلال يوم عمل واحد كحد أقصى."
            : "Our team will respond within one business day."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="flex flex-col gap-1.5 text-sm">
        <span className="font-medium text-navy">{dict.common.fullName}</span>
        <input
          required
          type="text"
          className="rounded-xl border border-line-navy bg-surface px-4 py-2.5 focus:border-gold focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1.5 text-sm">
        <span className="font-medium text-navy">{dict.common.phone}</span>
        <input
          required
          type="tel"
          className="rounded-xl border border-line-navy bg-surface px-4 py-2.5 focus:border-gold focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
        <span className="font-medium text-navy">{dict.topbar.email}</span>
        <input
          required
          type="email"
          className="rounded-xl border border-line-navy bg-surface px-4 py-2.5 focus:border-gold focus:outline-none"
        />
      </label>
      {showCity ? (
        <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-navy">{dict.common.city}</span>
          <select className="rounded-xl border border-line-navy bg-surface px-4 py-2.5 focus:border-gold focus:outline-none">
            <option value="">{dict.common.selectCity}</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.slug}>
                {locale === "ar" ? c.ar : c.en}
              </option>
            ))}
          </select>
        </label>
      ) : null}
      <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
        <span className="font-medium text-navy">{dict.common.message}</span>
        <textarea
          required
          rows={4}
          className="rounded-xl border border-line-navy bg-surface px-4 py-2.5 focus:border-gold focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="mt-1 rounded-sm bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold/90 sm:col-span-2 sm:w-fit"
      >
        {dict.common.send}
      </button>
    </form>
  );
}
