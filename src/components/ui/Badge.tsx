import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "gold",
  className,
}: {
  children: React.ReactNode;
  tone?: "gold" | "navy" | "burgundy";
  className?: string;
}) {
  const tones = {
    gold: "bg-gold-soft/60 text-navy",
    navy: "bg-navy-tint text-navy",
    burgundy: "bg-burgundy/10 text-burgundy",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm px-3 py-1 text-xs font-semibold",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
