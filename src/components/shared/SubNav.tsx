"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function SubNav({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  const pathname = usePathname();
  return (
    <div className="sticky top-[64px] z-30 border-b border-line-navy bg-paper/95 backdrop-blur lg:top-[104px]">
      <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 py-3 sm:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "shrink-0 rounded-sm px-4 py-1.5 text-[13px] font-medium transition-colors",
                active ? "bg-navy text-white" : "text-ink-soft hover:bg-navy-tint hover:text-navy"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
