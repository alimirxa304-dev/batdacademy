"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { faqGroups } from "@/lib/data/faq";
import { IconChevronDown } from "@/components/ui/Icons";

export function FaqAccordion({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState<string | null>("0-0");

  return (
    <div className="flex flex-col gap-10">
      {faqGroups.map((group, gi) => (
        <div key={gi}>
          <h2 className="font-heading text-xl text-navy">{group.title[locale]}</h2>
          <div className="mt-4 flex flex-col gap-2.5">
            {group.items.map((item, ii) => {
              const key = `${gi}-${ii}`;
              const isOpen = open === key;
              return (
                <div key={key} className="overflow-hidden rounded-xl border border-line-navy bg-surface">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : key)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
                  >
                    <span className="text-[14.5px] font-medium text-navy">{item.q[locale]}</span>
                    <IconChevronDown
                      className={`h-4 w-4 shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen ? (
                    <div className="border-t border-line px-5 pb-4 pt-3 text-[13.5px] leading-relaxed text-ink-soft">
                      {item.a[locale]}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
