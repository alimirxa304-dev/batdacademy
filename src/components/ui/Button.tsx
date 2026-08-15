import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline-paper" | "accent";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-2",
  accent: "bg-gold text-white hover:bg-gold/90",
  secondary: "border-2 border-navy text-navy hover:bg-navy hover:text-white",
  ghost: "bg-transparent text-navy hover:bg-navy-tint",
  "outline-paper": "border-2 border-white/40 text-white hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-[15px]",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
