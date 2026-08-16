"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { groupOrder, groups, getSlugsForGroup, type GroupKey } from "@/lib/data/category-groups";
import { specializations } from "@/lib/data/specializations";
import { cn } from "@/lib/utils";

export function CategorySidebar({
  locale,
  activeSlug,
  activeGroup,
  title,
}: {
  locale: Locale;
  activeSlug: string;
  activeGroup: GroupKey;
  title: string;
}) {
  const router = useRouter();
  const activeGroupSlugs = getSlugsForGroup(activeGroup);

  return (
    <>
      {/* Mobile / tablet: compact group jump + horizontally scrollable chips for the active group */}
      <div className="flex min-w-0 flex-col gap-3 lg:hidden">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-soft">{title}</span>
          <select
            defaultValue={activeGroup}
            onChange={(e) => {
              const firstSlug = getSlugsForGroup(e.target.value as GroupKey)[0];
              if (firstSlug) router.push(`/${locale}/courses/${firstSlug}`);
            }}
            className="w-full rounded-sm border-2 border-line-navy bg-surface px-3 py-2.5 text-sm text-navy focus:border-gold focus:outline-none"
          >
            {groupOrder.map((key) => (
              <option key={key} value={key}>
                {locale === "ar" ? groups[key].ar : groups[key].en}
              </option>
            ))}
          </select>
        </label>
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {activeGroupSlugs.map((slug) => {
            const spec = specializations.find((s) => s.slug === slug);
            if (!spec) return null;
            const isActive = slug === activeSlug;
            return (
              <Link
                key={slug}
                href={`/${locale}/courses/${slug}`}
                className={cn(
                  "shrink-0 rounded-sm border-2 px-3.5 py-2 text-[12.5px] font-medium whitespace-nowrap",
                  isActive
                    ? "border-gold bg-gold text-white"
                    : "border-line-navy text-ink-soft hover:border-navy hover:text-navy"
                )}
              >
                {locale === "ar" ? spec.ar : spec.en}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Desktop: full grouped sidebar */}
      <aside className="hidden flex-col gap-1 lg:flex">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-soft">{title}</h2>
        {groupOrder.map((key) => {
          const isActiveGroup = key === activeGroup;
          const slugs = getSlugsForGroup(key);
          return (
            <div key={key} className="border-b border-line py-1.5 last:border-0">
              <span
                className={cn(
                  "block rounded-sm px-2.5 py-2 text-[13.5px] font-medium",
                  isActiveGroup ? "bg-navy-tint text-navy" : "text-ink-soft"
                )}
              >
                {locale === "ar" ? groups[key].ar : groups[key].en}
              </span>
              {isActiveGroup ? (
                <div className="me-2 mt-1 flex flex-col gap-0.5 border-e-2 border-navy-tint pe-3">
                  {slugs.map((slug) => {
                    const spec = specializations.find((s) => s.slug === slug);
                    if (!spec) return null;
                    const isActive = slug === activeSlug;
                    return (
                      <Link
                        key={slug}
                        href={`/${locale}/courses/${slug}`}
                        className={cn(
                          "rounded-sm px-2.5 py-1.5 text-[12.5px] transition-colors",
                          isActive
                            ? "font-semibold text-gold"
                            : "text-ink-soft hover:bg-navy-tint hover:text-navy"
                        )}
                      >
                        {locale === "ar" ? spec.ar : spec.en}
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </aside>
    </>
  );
}
