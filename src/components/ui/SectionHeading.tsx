import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "start",
  tone = "ink",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  tone?: "ink" | "paper";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em]",
            tone === "paper" ? "text-gold-soft" : "text-gold"
          )}
        >
          <span className="h-[3px] w-8 bg-current" />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-heading mt-4 text-balance text-4xl leading-[1.05] sm:text-5xl",
          tone === "paper" ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "paper" ? "text-white/70" : "text-ink-soft"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
