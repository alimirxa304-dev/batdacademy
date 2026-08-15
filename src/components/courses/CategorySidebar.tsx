import Link from "next/link";
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
  return (
    <aside className="flex flex-col gap-1">
      <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-soft">{title}</h2>
      {groupOrder.map((key) => {
        const isActiveGroup = key === activeGroup;
        const slugs = getSlugsForGroup(key);
        return (
          <div key={key} className="border-b border-line py-1.5 last:border-0">
            <span
              className={cn(
                "block rounded-lg px-2.5 py-2 text-[13.5px] font-medium",
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
                        "rounded-lg px-2.5 py-1.5 text-[12.5px] transition-colors",
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
  );
}
